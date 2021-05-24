package com.jlr.core.servlets;

import static com.jlr.core.constants.CommonConstants.JLR_LOCALE_PRICING;
import static com.jlr.core.servlets.NavigationServlet.RESOURCE_TYPES;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.Servlet;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.apache.commons.lang.CharEncoding;
import org.apache.commons.lang.StringUtils;
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
import com.day.cq.commons.Externalizer;
import com.day.cq.contentsync.handler.util.RequestResponseFactory;
import com.day.cq.wcm.api.WCMMode;
import com.jlr.core.config.NavigationServletConfig;
import com.jlr.core.constants.ErrorUtilsConstants;
import com.jlr.core.constants.PricingConstants;
import com.jlr.core.utils.ErrorUtils;
import com.jlr.core.utils.NavigationUtils;

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
    protected void doGet(final SlingHttpServletRequest request, final SlingHttpServletResponse response) throws ServletException, IOException {

        String locale = request.getParameter("locale"); // en_AU, de_DE
        Boolean cache = Boolean.valueOf(request.getParameter("cache"));
        Boolean fullyQualifyDxLinks = Boolean.valueOf(request.getParameter("fullyQualifyDxLinks"));
        String retailerName = request.getParameter("retailerName");
        String retailerUrl = request.getParameter("retailerUrl");
        Boolean search = request.getParameter("search") == null ? Boolean.TRUE : Boolean.valueOf(request.getParameter("search"));
        Boolean yourRetailer = request.getParameter("yourRetailer") == null ? Boolean.TRUE : Boolean.valueOf(request.getParameter("yourRetailer"));
        Boolean retailerLocatorLink =
                        request.getParameter("retailerLocatorLink") == null ? Boolean.TRUE : Boolean.valueOf(request.getParameter("retailerLocatorLink"));



        Boolean myLandRover = Boolean.valueOf(request.getParameter("myLandRover"));
        Boolean mrp = Boolean.valueOf(request.getParameter("mrp"));

        /* TODO: give proper header nav page path - Remove this after testing */
        String requestPath = config.headerPath();
        if (locale.equalsIgnoreCase("en_AU")) {
            requestPath = "/content/landrover/global/row/published-sites/en_au/config/navigation/header.html";
        } else {
            requestPath = "/content/landrover/global/europe/published-sites/de_de/config/navigation/header.html";
        }


        HttpServletRequest req = requestResponseFactory.createRequest("GET", requestPath);
        req.setAttribute(JLR_LOCALE_PRICING, request.getCookie(JLR_LOCALE_PRICING));
        if (Boolean.FALSE.equals(mrp)) {
            req.setAttribute(PricingConstants.PRICING_SUPPRESSION, false);
        }
        WCMMode.DISABLED.toRequest(req);

        /* Setup response */
        ByteArrayOutputStream out = new ByteArrayOutputStream();
        HttpServletResponse resp = requestResponseFactory.createResponse(out);

        ResourceResolver resourceResolver = request.getResourceResolver();
        Externalizer externalizer = resourceResolver.adaptTo(Externalizer.class);
        String baseUrl = externalizer.publishLink(resourceResolver, StringUtils.EMPTY);

        /* Process request through Sling */
        requestProcessor.processRequest(req, resp, resourceResolver);
        String html = out.toString();
        Document document = null;
        if (fullyQualifyDxLinks) {
            document = Jsoup.parse(html, baseUrl);
            NavigationUtils.processUrls(document);
        } else {
            document = Jsoup.parse(html);
        }
        Elements header = document.select("header");
        NavigationUtils.setCacheHeaderResponse(response, cache, header);
        NavigationUtils.changeAttributeValue("data-retailer-name", retailerName, header);
        NavigationUtils.changeAttributeValue("data-retailer-url", retailerUrl, header);
        NavigationUtils.changeAttributeValue("data-locale", locale, header);

        /* Get the retailer and search divs */
        if (!search) {
            NavigationUtils.removeAttribute(document, "li#dxnav-search");
        }
        if (!retailerLocatorLink) {
            NavigationUtils.removeAttribute(document, "a.dxnav__item-retailer--link");
        }
        if (!yourRetailer) {
            NavigationUtils.removeAttribute(document, "li.dxnav__item.dxnav__item-retailer");
        }
        if (myLandRover) {
            document.select("a.dxnav-profile").removeAttr("style");
        } else {
            NavigationUtils.removeAttribute(document, "a.dxnav-profile");
        }


        sendResponse(response, cache, document);
    }

    private void sendResponse(SlingHttpServletResponse response, Boolean cache, Document document) throws IOException {
        /*
         * cache maxAge=750 or 15 min, retailer Url and retailer name substitute with request param value
         */
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
        PrintWriter printOut = response.getWriter();
        printOut.print(responseObject);
        printOut.flush();
    }

}
