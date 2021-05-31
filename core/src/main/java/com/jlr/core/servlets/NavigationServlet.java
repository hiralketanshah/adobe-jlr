package com.jlr.core.servlets;

import com.day.cq.contentsync.handler.util.RequestResponseFactory;
import com.day.cq.wcm.api.WCMMode;
import com.jlr.core.config.NavigationServletConfig;
import com.jlr.core.constants.ErrorUtilsConstants;
import com.jlr.core.constants.PricingConstants;
import com.jlr.core.utils.ErrorUtils;
import com.jlr.core.utils.NavigationUtils;
import org.apache.commons.lang.CharEncoding;
import org.apache.commons.lang.StringUtils;
import org.apache.http.HttpStatus;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.SlingHttpServletResponse;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.api.servlets.SlingSafeMethodsServlet;
import org.apache.sling.engine.SlingRequestProcessor;
import org.json.JSONException;
import org.json.JSONObject;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.select.Elements;
import org.osgi.framework.Constants;
import org.osgi.service.component.annotations.Activate;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.Reference;
import org.osgi.service.metatype.annotations.Designate;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.servlet.Servlet;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.PrintWriter;

import static com.jlr.core.constants.CommonConstants.JLR_LOCALE_PRICING;
import static com.jlr.core.servlets.NavigationServlet.RESOURCE_TYPES;
import static com.jlr.core.utils.NavigationUtils.getBaseUrl;

/**
 * Navigation Servlet is used to fetch the header nav based on request parameters, and also to return the json.
 */
@Component(service = Servlet.class, property = {Constants.SERVICE_DESCRIPTION + "=Navigation Servlet", "sling.servlet.resourceTypes=" + RESOURCE_TYPES,
                "sling.servlet.selectors=" + NavigationServlet.SELECTOR_JSON})
@Designate(ocd = NavigationServletConfig.class, factory = true)
public class NavigationServlet extends SlingSafeMethodsServlet {

    private static final long serialVersionUID = 1L;
    private static final Logger LOGGER = LoggerFactory.getLogger(NavigationServlet.class);
    protected static final String RESOURCE_TYPES = "jlr/components/request/navigation";
    protected static final String SELECTOR_JSON = "json";
    private static final String APPLICATION_JSON = "application/json";

    @Reference
    private RequestResponseFactory requestResponseFactory;

    @Reference
    private SlingRequestProcessor requestProcessor;
    private NavigationServletConfig config;

    @Activate
    protected void activate(NavigationServletConfig config) {
        this.config = config;
    }

    @Override
    protected void doGet(final SlingHttpServletRequest request, final SlingHttpServletResponse response) {

        String locale = request.getParameter("locale"); // en_AU, de_DE
        Boolean cache = Boolean.valueOf(request.getParameter("cache"));
        Boolean fullyQualifyDxLinks = Boolean.valueOf(request.getParameter("fullyQualifyDxLinks"));
        String retailerName = request.getParameter("retailerName");
        String retailerUrl = request.getParameter("retailerUrl");
        Boolean search = request.getParameter("search") == null ? Boolean.TRUE : Boolean.valueOf(request.getParameter("search"));
        Boolean yourRetailer = request.getParameter("yourRetailer") == null ? Boolean.TRUE : Boolean.valueOf(request.getParameter("yourRetailer"));
        Boolean retailerLocatorLink =
                        request.getParameter("retailerLocatorLink") == null ? Boolean.TRUE : Boolean.valueOf(request.getParameter("retailerLocatorLink"));
        Boolean myJLRProfile = Boolean.valueOf(request.getParameter("myJLRProfile"));
        Boolean mrp = Boolean.valueOf(request.getParameter("mrp"));

        if(StringUtils.isEmpty(locale)) {
            sendResponseStatus(response, HttpStatus.SC_NOT_FOUND, "Request parameter is not found");
            return;
        }

        String requestPath = config.deHeaderPath();
        if (locale.equalsIgnoreCase("en_AU")) {
            requestPath = config.auHeaderPath();
        }
        ResourceResolver resourceResolver = request.getResourceResolver();
        ByteArrayOutputStream out = processRequest(request, response, mrp, requestPath, resourceResolver);
        String html = out.toString();
        Document document = null;
        if (fullyQualifyDxLinks) {
            document = Jsoup.parse(html, getBaseUrl(resourceResolver));
            NavigationUtils.processUrls(document);
        } else {
            document = Jsoup.parse(html);
        }
        Elements header = document.select("header");
        NavigationUtils.setCacheHeaderResponse(response, cache, header);
        NavigationUtils.changeAttributeValue("data-retailer-name", retailerName, header);
        NavigationUtils.changeAttributeValue("data-retailer-url", retailerUrl, header);
        NavigationUtils.changeAttributeValue("data-locale", locale, header);
        NavigationUtils.changeAttributeValue("data-yourretailer-allowed", Boolean.toString(yourRetailer), header);

        /* Get the retailer and search divs */
        if(!mrp) {
            NavigationUtils.removeAttribute(document, "li.dxnav__item.dxnav__item-showprices");
            NavigationUtils.removeAttribute(document, "a.dxnav__mobile-icons-prices.MarketRegionalPricing-triggerer");
            NavigationUtils.removeAttribute(document, "div.dxnav-NaasMarketRegionalPricing-cta");
            NavigationUtils.removeAttribute(document, "span.dxnav__item-prices-label");
        }
        if (!search) {
            NavigationUtils.removeAttribute(document, "li#dxnav-search");
            NavigationUtils.removeAttribute(document, "a.dxnav__mobile-icons-search");
        }
        if (!retailerLocatorLink) {
            NavigationUtils.removeAttribute(document, "li.dxnav__item.dxnav__item-retailer");
            NavigationUtils.removeAttribute(document, "a.dxnav__mobile-icons-retailer");
        }
        if (myJLRProfile) {
            document.select("a.dxnav-profile").removeAttr("style");
        } else {
            NavigationUtils.removeAttribute(document, "a.dxnav-profile");
        }

        sendResponse(response, cache, document);
    }

    private ByteArrayOutputStream processRequest(SlingHttpServletRequest request, SlingHttpServletResponse response, Boolean mrp, String requestPath, ResourceResolver resourceResolver) {
        HttpServletRequest req = requestResponseFactory.createRequest("GET", requestPath);
        req.setAttribute(JLR_LOCALE_PRICING, request.getCookie(JLR_LOCALE_PRICING));
        if (Boolean.FALSE.equals(mrp)) {
            req.setAttribute(PricingConstants.PRICING_SUPPRESSION, false);
        }
        WCMMode.DISABLED.toRequest(req);

        /* Setup response */
        ByteArrayOutputStream out = new ByteArrayOutputStream();
        HttpServletResponse resp = requestResponseFactory.createResponse(out);


        /* Process request through Sling */
        try {
            requestProcessor.processRequest(req, resp, resourceResolver);
        } catch (ServletException | IOException e) {
            LOGGER.error(ErrorUtils.createErrorMessage(ErrorUtilsConstants.AEM_GENERIC_EXCEPTION,
                    ErrorUtilsConstants.TECHNICAL, ErrorUtilsConstants.AEM_SITE, ErrorUtilsConstants.MODULE_SERVLET, this.getClass().getSimpleName(), e));
            sendResponseStatus(response, HttpStatus.SC_INTERNAL_SERVER_ERROR, "Unable to fetch the header");
        }
        return out;
    }

    private void sendResponse(SlingHttpServletResponse response, Boolean cache, Document document) {
        JSONObject responseObject = new JSONObject();
        try {
            responseObject.put("cacheIdentifier", cache);
            responseObject.put("cssFontImportsLink", config.cssFontImportsLink());
            responseObject.put("cssLink", config.cssLink());
            responseObject.put("html", document.getElementsByTag("header").outerHtml());
            responseObject.put("javascriptLink", config.javascriptLink());
        } catch (JSONException e) {
            LOGGER.error(ErrorUtils.createErrorMessage(ErrorUtilsConstants.AEM_JSON_EXCEPTION, ErrorUtilsConstants.TECHNICAL, ErrorUtilsConstants.AEM_SITE,
                            ErrorUtilsConstants.MODULE_SERVLET, this.getClass().getSimpleName(), e));
        }

        response.setContentType(APPLICATION_JSON);
        response.setCharacterEncoding(CharEncoding.UTF_8);
        response.setStatus(HttpStatus.SC_OK);
        try {
            PrintWriter printOut = response.getWriter();
            printOut.print(responseObject);
            printOut.flush();
        } catch (IOException e) {
            LOGGER.error(ErrorUtils.createErrorMessage(ErrorUtilsConstants.AEM_IO_EXCEPTION, ErrorUtilsConstants.TECHNICAL, ErrorUtilsConstants.AEM_SITE,
                    ErrorUtilsConstants.MODULE_SERVLET, this.getClass().getSimpleName(), e));
        }
    }

    private void sendResponseStatus(SlingHttpServletResponse response, int statusCode, String message) {
        try {
            response.setContentType(APPLICATION_JSON);
            response.setCharacterEncoding(CharEncoding.UTF_8);
            response.setStatus(statusCode);
            response.sendError(statusCode, message);
            PrintWriter printOut = response.getWriter();
            printOut.flush();
        } catch (IOException e) {
            LOGGER.error(ErrorUtils.createErrorMessage(ErrorUtilsConstants.AEM_IO_EXCEPTION,
                    ErrorUtilsConstants.TECHNICAL, ErrorUtilsConstants.AEM_SITE, ErrorUtilsConstants.MODULE_SERVLET, this.getClass().getSimpleName(), e));
        }
    }
}
