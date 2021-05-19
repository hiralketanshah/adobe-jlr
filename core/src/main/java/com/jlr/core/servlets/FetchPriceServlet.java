package com.jlr.core.servlets;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.Servlet;

import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.SlingHttpServletResponse;
import org.apache.sling.api.servlets.HttpConstants;
import org.apache.sling.api.servlets.SlingSafeMethodsServlet;
import org.apache.sling.settings.SlingSettingsService;
import org.osgi.framework.Constants;
import org.osgi.service.component.annotations.Activate;
import org.osgi.service.component.annotations.Component;
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

@Component(service = Servlet.class, property = { Constants.SERVICE_DESCRIPTION + "= JLR Fetch Prices",
        "sling.servlet.methods=" + HttpConstants.METHOD_GET, "sling.servlet.extensions=json",
        "sling.servlet.paths=/bin/fetchPrice" })
@Designate(ocd = PricingConfig.class)
public class FetchPriceServlet extends SlingSafeMethodsServlet {

    /** LOGGER */
    private static final Logger LOGGER = LoggerFactory.getLogger(FetchPriceServlet.class);

    @Reference
    private transient FetchPrice fetchPrice;

    @Reference
    private transient SlingSettingsService slingSettingsService;

    private transient Map<String, String> endpoints;
    private transient Map<String, String> stageEndpoints;
    private transient Map<String, String> staticUrl;
    private transient Map<String, String> configPages;
    private transient Map<String, String> destinationPaths;
    private transient Map<String, String> header = new HashMap<>();
    private transient String[] listOfStates;

    @Modified
    @Activate
    public void activate(PricingConfig config) {
        destinationPaths = PricingUtils.getMapOfConfigFields(config.listOfDestinationPaths());
        endpoints = PricingUtils.getMapOfConfigFields(config.listOfProdEndpoints());
        if (!isProd()) {
            stageEndpoints = PricingUtils.getMapOfConfigFields(config.listOfStageEndpoints());
            header.put("x-api-key", config.stageApiKey());
        }
        staticUrl = PricingUtils.getMapOfConfigFields(config.listOfStaticUrl());
        configPages = PricingUtils.getMapOfConfigFields(config.listOfConfigPages());
        listOfStates = config.listOfStates();
    }

    @Override
    protected void doGet(SlingHttpServletRequest request, SlingHttpServletResponse response) {
        try {
            LOGGER.debug("Inside FetchPriceServlet - {}", new java.util.Date());
            String market = (null == request.getParameter(PricingConstants.JLR_PRICING_MARKET))
                    ? PricingConstants.JLR_PRICING_MARKET_ALL
                    : request.getParameter(PricingConstants.JLR_PRICING_MARKET);
            if (this.slingSettingsService.getRunModes().contains(CommonConstants.RUNMODE_AUTHOR)
                    && destinationPaths.containsKey(CommonConstants.RUNMODE_PROD)) {
                StringBuilder responseBuilder = new StringBuilder();
                responseBuilder.append(fetchPrice.getPrices(endpoints, staticUrl, configPages, header,
                        destinationPaths.get(CommonConstants.RUNMODE_PROD), market, listOfStates));
                if (null != stageEndpoints && destinationPaths.containsKey(CommonConstants.RUNMODE_STAGE)) {
                    responseBuilder.append(fetchPrice.getPrices(stageEndpoints, staticUrl, configPages, header,
                            destinationPaths.get(CommonConstants.RUNMODE_STAGE), market, listOfStates));
                }
                // replication
                fetchPrice.replicate(PricingConstants.PRICING_DESTINATION_PATH);
                response.getWriter().print(responseBuilder.toString());
            }
            LOGGER.debug("Completed FetchPriceServlet - {}", new java.util.Date());
        } catch (IOException e) {
            LOGGER.error("Unable to write a response back from FetchPriceServlet. ", e);
        }
    }

    private boolean isProd() {
        return this.slingSettingsService.getRunModes().contains(CommonConstants.RUNMODE_PROD);
    }

}
