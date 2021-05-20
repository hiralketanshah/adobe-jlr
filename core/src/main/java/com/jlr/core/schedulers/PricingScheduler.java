package com.jlr.core.schedulers;

import org.apache.sling.commons.scheduler.ScheduleOptions;
import org.apache.sling.commons.scheduler.Scheduler;
import org.apache.sling.settings.SlingSettingsService;
import org.osgi.service.component.annotations.Activate;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.Deactivate;
import org.osgi.service.component.annotations.Modified;
import org.osgi.service.component.annotations.Reference;
import org.osgi.service.metatype.annotations.AttributeDefinition;
import org.osgi.service.metatype.annotations.AttributeType;
import org.osgi.service.metatype.annotations.Designate;
import org.osgi.service.metatype.annotations.ObjectClassDefinition;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.jlr.core.constants.CommonConstants;
import com.jlr.core.constants.PricingConstants;
import com.jlr.core.services.FetchPrice;

@Component(immediate = true, service = Runnable.class)
@Designate(ocd = PricingScheduler.SchedulerConfig.class)
public class PricingScheduler implements Runnable {

    @Reference
    FetchPrice fetchPrice;

    @Reference
    private SlingSettingsService slingSettingsService;

    String cronExpression;
    private int schedulerId;
    private String schedulerName;
    private boolean isEnabled;

    /** LOGGER */
    private static final Logger LOGGER = LoggerFactory.getLogger(PricingScheduler.class);

    @Reference
    private Scheduler scheduler;

    @Activate
    public void activate(PricingScheduler.SchedulerConfig config) {
        addScheduler(config);
    }

    @Modified
    protected void modified(SchedulerConfig config) {
        removeScheduler();
        if (null != schedulerName) {
            schedulerId = schedulerName.hashCode();
        }
        addScheduler(config);
    }

    @Deactivate
    protected void deactivate(SchedulerConfig config) {
        removeScheduler();
    }

    private void removeScheduler() {
        scheduler.unschedule(String.valueOf(schedulerId));
    }

    private void addScheduler(SchedulerConfig config) {
        isEnabled = config.serviceEnabled();
        if (isEnabled) {
            schedulerName = config.schedulerName();
            cronExpression = config.cronExpression();
            ScheduleOptions scheduleOptions = scheduler.EXPR(cronExpression);
            scheduleOptions.canRunConcurrently(false);
            scheduleOptions.name(schedulerName);
            // Scheduling the job
            scheduler.schedule(this, scheduleOptions);
            LOGGER.debug("JLR pricing scheduler is added");
        }

    }

    @Override
    public void run() {

        if (isEnabled && this.slingSettingsService.getRunModes().contains(CommonConstants.RUNMODE_AUTHOR)) {
            LOGGER.debug("JLR pricing scheduler : In Run method");
            StringBuilder responseBuilder = new StringBuilder();
            responseBuilder.append(fetchPrice.fetchAndStorePrice(PricingConstants.JLR_PRICING_MARKET_ALL));
            LOGGER.debug(responseBuilder.toString());
        }
    }

    @ObjectClassDefinition(name = "Pricing Scheduler Configuration", description = "Pricing Scheduler Configuration")
    public @interface SchedulerConfig {

        @AttributeDefinition(name = "Enabled", description = "Enable Scheduler", type = AttributeType.BOOLEAN)
        boolean serviceEnabled() default true;

        @AttributeDefinition(name = "Cron Job Expression", description = "Cron Job Expression", type = AttributeType.STRING)
        public String cronExpression() default "0 0 0/6 1/1 * ? *";

        @AttributeDefinition(name = "Scheduler name", description = "Scheduler name", type = AttributeType.STRING)
        public String schedulerName() default "JLR Pricing Scheduler";

    }

}
