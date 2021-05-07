package com.jlr.core.servlets;

import com.day.cq.contentsync.handler.util.RequestResponseFactory;
import com.day.cq.wcm.api.WCMMode;
import com.jlr.core.constants.ErrorUtilsConstants;
import com.jlr.core.utils.ErrorUtils;
import com.jlr.core.utils.NavigationUtils;
import org.apache.commons.lang.CharEncoding;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.SlingHttpServletResponse;
import org.apache.sling.api.servlets.SlingSafeMethodsServlet;
import org.apache.sling.engine.SlingRequestProcessor;
import org.json.JSONException;
import org.json.JSONObject;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.select.Elements;
import org.osgi.framework.Constants;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.Reference;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.servlet.Servlet;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.PrintWriter;

/**
 * Navigation Servlet is used to fetch the header nav based on request parameters,
 * and also to return the json.
 */
@Component(service = Servlet.class, property = { Constants.SERVICE_DESCRIPTION + "=Navigation Servlet",
        "sling.servlet.resourceTypes=" + NavigationServlet.RESOURCE_TYPES,
        "sling.servlet.selectors=" + NavigationServlet.SELECTOR_JSON})
public class NavigationServlet extends SlingSafeMethodsServlet {

    private static final long serialVersionUID = 1L;
    private static final Logger LOGGER = LoggerFactory.getLogger(
            NavigationServlet.class);
    protected static final String RESOURCE_TYPES = "jlr/components/request/navigation";
    protected static final String SELECTOR_JSON = "json";
    private static final String APPLICATION_JSON = "application/json";

    @Reference
    private RequestResponseFactory requestResponseFactory;

    @Reference
    private SlingRequestProcessor requestProcessor;

    @Override
    protected void doGet(final SlingHttpServletRequest request,
                         final SlingHttpServletResponse response)
            throws ServletException, IOException {

        Boolean cache = Boolean.valueOf(request.getParameter("cache"));
        Boolean fullyQualifyDxLinks = Boolean.valueOf(request.getParameter("fullyQualifyDxLinks"));
        String locale = request.getParameter("locale"); // en_AU, de_DE
        Boolean mrp = Boolean.valueOf(request.getParameter("mrp"));
        Boolean retailerLocatorLink = Boolean.valueOf(request.getParameter("retailerLocatorLink"));
        String retailerName = request.getParameter("retailerName");
        String retailerUrl = request.getParameter("retailerUrl");
        Boolean search = Boolean.valueOf(request.getParameter("search"));
        Boolean yourRetailer = Boolean.valueOf(request.getParameter("yourRetailer"));
        Boolean myLandRover = Boolean.valueOf(request.getParameter("myLandRover"));

        /* TODO: give proper header nav page path */
        String requestPath = "/content/landrover/global/global-master/en/test123/jcr:content/root/container/vehiclecardcontainer/vehiclecards/vehiclecard.html";

        HttpServletRequest req = requestResponseFactory.createRequest("GET", requestPath);
        WCMMode.DISABLED.toRequest(req);

        /* Setup response */
        ByteArrayOutputStream out = new ByteArrayOutputStream();
        HttpServletResponse resp = requestResponseFactory.createResponse(out);

        /* Process request through Sling */
        requestProcessor.processRequest(req, resp, request.getResourceResolver());
        String html = out.toString();
        Document document =  Jsoup.parse(html);
        Elements header = document.select("header");
        NavigationUtils.setCacheHeaderResponse(response, cache, header);
        NavigationUtils.changeAttributeValue("data-retailer-name", retailerName, header);
        NavigationUtils.changeAttributeValue("data-retailer-url", retailerUrl, header);
        NavigationUtils.changeAttributeValue("data-locale", locale, header);

        /* cache maxAge=750 or 15 min, retailer Url and retailer name substitute with request param value*/
        JSONObject responseObject = new JSONObject();
        try {
            responseObject.put("cacheIdentifier", cache);
            responseObject.put("cssFontImportsLink", "https://dxnav.landrover.com/current/fontImports-landrover-385e43ef7ee2dd6fe7b21f42089c6929.css");
            responseObject.put("cssLink", "https://dxnav.landrover.com/current/landrover-4d9fac083e07ef876c84b1aeafc88492.css");
            responseObject.put("html",document.html());
            responseObject.put("javascriptLink", "https://dxnav.landrover.com/current/main-2f17544b886e637183bcfd0cfa6021c2.js");
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
