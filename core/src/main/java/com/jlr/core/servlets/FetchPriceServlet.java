package com.jlr.core.servlets;

import java.io.IOException;

import javax.servlet.Servlet;

import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.SlingHttpServletResponse;
import org.apache.sling.api.servlets.HttpConstants;
import org.apache.sling.api.servlets.SlingSafeMethodsServlet;
import org.osgi.framework.Constants;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.Reference;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.jlr.core.constants.ErrorUtilsConstants;
import com.jlr.core.constants.PricingConstants;
import com.jlr.core.services.FetchPrice;
import com.jlr.core.utils.ErrorUtils;

@Component(service = Servlet.class, property = { Constants.SERVICE_DESCRIPTION + "= JLR Fetch Prices",
        "sling.servlet.methods=" + HttpConstants.METHOD_GET, "sling.servlet.extensions=json",
        "sling.servlet.resourceTypes=" + FetchPriceServlet.RESOURCE_TYPES })
public class FetchPriceServlet extends SlingSafeMethodsServlet {

    protected static final String RESOURCE_TYPES = "jlr/components/request/fetch-prices";

    /** LOGGER */
    private static final Logger LOGGER = LoggerFactory.getLogger(FetchPriceServlet.class);

    @Reference
    private transient FetchPrice fetchPrice;

    @Override
    protected void doGet(SlingHttpServletRequest request, SlingHttpServletResponse response) {
        try {

            String market = (null == request.getParameter(PricingConstants.JLR_PRICING_MARKET))
                    ? PricingConstants.JLR_PRICING_MARKET_ALL
                    : request.getParameter(PricingConstants.JLR_PRICING_MARKET);

            response.getWriter().print(fetchPrice.fetchAndStorePrice(market));

            LOGGER.debug("Completed FetchPriceServlet - {}", new java.util.Date());
        } catch (IOException e) {
            LOGGER.error(ErrorUtils.createErrorMessage(ErrorUtilsConstants.AEM_IO_EXCEPTION,
                    ErrorUtilsConstants.TECHNICAL, ErrorUtilsConstants.AEM_SITE, ErrorUtilsConstants.MODULE_SERVICE,
                    this.getClass().getSimpleName(), e));
        }
    }
}
