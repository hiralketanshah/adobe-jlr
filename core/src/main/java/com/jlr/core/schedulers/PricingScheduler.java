package com.jlr.core.schedulers;

import org.apache.sling.commons.scheduler.ScheduleOptions;
import org.apache.sling.commons.scheduler.Scheduler;
import org.apache.sling.models.annotations.injectorspecific.OSGiService;
import org.osgi.service.component.annotations.Activate;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.Reference;
import org.osgi.service.metatype.annotations.AttributeDefinition;
import org.osgi.service.metatype.annotations.AttributeType;
import org.osgi.service.metatype.annotations.Designate;
import org.osgi.service.metatype.annotations.ObjectClassDefinition;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.jlr.core.services.FetchPrice;

@Component(immediate = true, service = Runnable.class)
@Designate(ocd = PricingScheduler.Configuration.class)
public class PricingScheduler implements Runnable {

    private PricingScheduler.Configuration config;

    @OSGiService
    FetchPrice fetchPrice;

    String[] endpoints;
    String[] configPages;
    String cronExpression;

    /** LOGGER */
    private static final Logger LOGGER = LoggerFactory.getLogger(PricingScheduler.class);

    @Reference
    private Scheduler scheduler;

    @Activate
    public void activate(PricingScheduler.Configuration config) {
        this.config = config;
        cronExpression = config.cronExpression();
        ScheduleOptions scheduleOptions = scheduler.EXPR(cronExpression);
        scheduleOptions.canRunConcurrently(false);
        // Scheduling the job
        scheduler.schedule(this, scheduleOptions);
        LOGGER.debug("JLR pricing scheduler is added");

    }

    @Override
    public void run() {
        LOGGER.debug("JLR pricing scheduler : In Run method");
        fetchPrice.getPrices();

    }

    @ObjectClassDefinition(name = "JLR Pricing Scheduler")
    public @interface Configuration {

        @AttributeDefinition(name = "Cron Job Expression", description = "Cron Job Expression", type = AttributeType.STRING)
        public String cronExpression() default "0 0 1 1 * ? *";

    }

}
