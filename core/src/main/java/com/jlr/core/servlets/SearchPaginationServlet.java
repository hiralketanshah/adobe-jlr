package com.jlr.core.servlets;

import com.day.cq.contentsync.handler.util.RequestResponseFactory;
import com.day.cq.wcm.api.WCMMode;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.jlr.core.constants.ErrorUtilsConstants;
import com.jlr.core.pojos.SearchPojo;
import com.jlr.core.services.SearchService;
import com.jlr.core.utils.ErrorUtils;
import org.apache.commons.lang.CharEncoding;
import org.apache.commons.lang.StringUtils;
import org.apache.http.HttpStatus;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.SlingHttpServletResponse;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.api.servlets.HttpConstants;
import org.apache.sling.api.servlets.SlingSafeMethodsServlet;
import org.apache.sling.engine.SlingRequestProcessor;
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

import static com.jlr.core.utils.CommonUtils.sendResponseStatus;

@Component(service = Servlet.class,
property = { Constants.SERVICE_DESCRIPTION + "= JLR Fulltext Search",
        "sling.servlet.methods=" + HttpConstants.METHOD_GET,
        "sling.servlet.extensions="+ SearchPaginationServlet.EXTENSION_HTML,
        "sling.servlet.resourceTypes=" + SearchPaginationServlet.RESOURCE_TYPES })
public class SearchPaginationServlet extends SlingSafeMethodsServlet {

    private static final long serialVersionUID = 1L;
    private static final Logger LOGGER = LoggerFactory.getLogger(NavigationServlet.class);
    protected static final String RESOURCE_TYPES = "jlr/components/request/pagination/search";
    protected static final String EXTENSION_HTML = "html";
    private static final String APPLICATION_JSON = "application/json";

    @Reference
    private RequestResponseFactory requestResponseFactory;

    @Reference
    private SlingRequestProcessor requestProcessor;

    @Reference
    private SearchService searchService;

    @Override
    protected void doGet(final SlingHttpServletRequest request, final SlingHttpServletResponse response) {

        String searchTerm = request.getParameter("query");
        String locale = request.getParameter("locale");
        String pageNumber = request.getParameter("page");

        if(StringUtils.isEmpty(locale)) {
            sendResponseStatus(response, HttpStatus.SC_NOT_FOUND, "Request parameter is not found");
            return;
        }

        ByteArrayOutputStream out = getFullJson(request, "/content/misc/fullsearch.html", request.getResourceResolver());
        String resultJson = out.toString();

        GsonBuilder gsonBuilder = new GsonBuilder();
        Gson gson = gsonBuilder.create();
        SearchPojo searchPojo = gson.fromJson(resultJson, SearchPojo.class);
        searchPojo.setLocale(locale);
        searchPojo.setPage(Long.parseLong(pageNumber));

        String finalJson = searchService.processResultsByRules(searchPojo, request.getResourceResolver());

        sendResponse(response, gson, finalJson);
    }

    private ByteArrayOutputStream getFullJson(SlingHttpServletRequest request, String requestPath, ResourceResolver resourceResolver) {

        HttpServletRequest req = requestResponseFactory.createRequest("GET", requestPath);
        ParameterHttpRequest parameterHttpRequest = new ParameterHttpRequest(req);
        parameterHttpRequest.addParameter("query",request.getParameter("query"));
        parameterHttpRequest.addParameter("locale",request.getParameter("locale"));
        WCMMode.DISABLED.toRequest(req);

        /* Setup response */
        ByteArrayOutputStream out = new ByteArrayOutputStream();
        HttpServletResponse resp = requestResponseFactory.createResponse(out);

        /* Process request through Sling */
        try {
            requestProcessor.processRequest(parameterHttpRequest, resp, resourceResolver);
        } catch (ServletException | IOException e) {
            LOGGER.error(ErrorUtils.createErrorMessage(ErrorUtilsConstants.AEM_GENERIC_EXCEPTION, ErrorUtilsConstants.TECHNICAL, ErrorUtilsConstants.AEM_SITE,
                    ErrorUtilsConstants.MODULE_SERVLET, this.getClass().getSimpleName(), e));
        }
        return out;
    }

    private void sendResponse(SlingHttpServletResponse response, Gson gson, String finalJson) {
        response.setContentType(APPLICATION_JSON);
        response.setCharacterEncoding(CharEncoding.UTF_8);
        response.setStatus(HttpStatus.SC_OK);
        try {
            PrintWriter printOut = response.getWriter();
            printOut.print(finalJson);
            printOut.flush();
        } catch (IOException e) {
            LOGGER.error(ErrorUtils.createErrorMessage(ErrorUtilsConstants.AEM_IO_EXCEPTION, ErrorUtilsConstants.TECHNICAL, ErrorUtilsConstants.AEM_SITE,
                    ErrorUtilsConstants.MODULE_SERVLET, this.getClass().getSimpleName(), e));
        }
    }
}
