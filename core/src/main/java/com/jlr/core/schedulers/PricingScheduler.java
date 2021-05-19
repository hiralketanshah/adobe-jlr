package com.jlr.core.schedulers;

import java.util.HashMap;
import java.util.Map;

import org.apache.sling.commons.scheduler.ScheduleOptions;
import org.apache.sling.commons.scheduler.Scheduler;
import org.apache.sling.settings.SlingSettingsService;
import org.osgi.service.component.annotations.Activate;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.Deactivate;
import org.osgi.service.component.annotations.Modified;
import org.osgi.service.component.annotations.Reference;
import org.osgi.service.metatype.annotations.Designate;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.jlr.core.config.PricingConfig;
import com.jlr.core.constants.CommonConstants;
import com.jlr.core.constants.PricingConstants;
import com.jlr.core.services.FetchPrice;
import com.jlr.core.utils.PricingUtils;

@Component(immediate = true, service = Runnable.class)
@Designate(ocd = PricingConfig.class)
public class PricingScheduler implements Runnable {

    @Reference
    FetchPrice fetchPrice;

    @Reference
    private SlingSettingsService slingSettingsService;

    private transient Map<String, String> endpoints;
    private transient Map<String, String> stageEndpoints;
    private transient Map<String, String> staticUrl;
    private transient Map<String, String> configPages;
    private transient Map<String, String> destinationPaths;
    private transient Map<String, String> header = new HashMap<>();
    private transient String[] listOfStates;
    String cronExpression;
    private int schedulerId;
    private String schedulerName;

    /** LOGGER */
    private static final Logger LOGGER = LoggerFactory.getLogger(PricingScheduler.class);

    @Reference
    private Scheduler scheduler;

    @Activate
    public void activate(PricingConfig config) {
        addScheduler(config);

    }

    @Modified
    protected void modified(PricingConfig config) {
        removeScheduler();
        schedulerId = schedulerName.hashCode();
        addScheduler(config);
    }

    @Deactivate
    protected void deactivate(PricingConfig config) {
        removeScheduler();
    }

    private void removeScheduler() {
        scheduler.unschedule(String.valueOf(schedulerId));
    }

    private void addScheduler(PricingConfig config) {
        if (config.serviceEnabled()) {
            schedulerName = config.schedulerName();
            destinationPaths = PricingUtils.getMapOfConfigFields(config.listOfDestinationPaths());
            endpoints = PricingUtils.getMapOfConfigFields(config.listOfProdEndpoints());
            if (!isProd()) {
                stageEndpoints = PricingUtils.getMapOfConfigFields(config.listOfStageEndpoints());
                header.put("x-api-key", config.stageApiKey());
            }
            staticUrl = PricingUtils.getMapOfConfigFields(config.listOfStaticUrl());
            configPages = PricingUtils.getMapOfConfigFields(config.listOfConfigPages());
            listOfStates = config.listOfStates();
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

        if (this.slingSettingsService.getRunModes().contains(CommonConstants.RUNMODE_AUTHOR)
                && destinationPaths.containsKey(CommonConstants.RUNMODE_PROD)) {
            LOGGER.debug("JLR pricing scheduler : In Run method");
            StringBuilder responseBuilder = new StringBuilder();
            responseBuilder.append(fetchPrice.getPrices(endpoints, staticUrl, configPages, header,
                    destinationPaths.get(CommonConstants.RUNMODE_PROD), PricingConstants.JLR_PRICING_MARKET_ALL,
                    listOfStates));
            if (null != stageEndpoints && destinationPaths.containsKey(CommonConstants.RUNMODE_STAGE)) {
                responseBuilder.append(fetchPrice.getPrices(stageEndpoints, staticUrl, configPages, header,
                        destinationPaths.get(CommonConstants.RUNMODE_STAGE), PricingConstants.JLR_PRICING_MARKET_ALL,
                        listOfStates));
            }
            // replication
            fetchPrice.replicate(PricingConstants.PRICING_DESTINATION_PATH);
        }
    }

    private boolean isProd() {
        return this.slingSettingsService.getRunModes().contains(CommonConstants.RUNMODE_PROD);
    }

}
