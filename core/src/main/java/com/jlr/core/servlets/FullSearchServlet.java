package com.jlr.core.servlets;

import com.jlr.core.constants.ErrorUtilsConstants;
import com.jlr.core.services.SearchService;
import com.jlr.core.utils.ErrorUtils;
import org.apache.commons.lang.CharEncoding;
import org.apache.http.HttpStatus;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.SlingHttpServletResponse;
import org.apache.sling.api.servlets.HttpConstants;
import org.apache.sling.api.servlets.SlingSafeMethodsServlet;
import org.osgi.framework.Constants;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.Reference;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.servlet.Servlet;
import java.io.IOException;
import java.io.PrintWriter;

@Component(service = Servlet.class,
property = { Constants.SERVICE_DESCRIPTION + "= JLR Fulltext Search",
        "sling.servlet.methods=" + HttpConstants.METHOD_GET,
        "sling.servlet.extensions="+ FullSearchServlet.EXTENSION_HTML,
        "sling.servlet.resourceTypes=" + FullSearchServlet.RESOURCE_TYPES })
public class FullSearchServlet extends SlingSafeMethodsServlet {

    private static final long serialVersionUID = 1L;
    private static final Logger LOGGER = LoggerFactory.getLogger(FullSearchServlet.class);
    protected static final String RESOURCE_TYPES = "jlr/components/request/fullsearch";
    protected static final String EXTENSION_HTML = "html";
    private static final String APPLICATION_JSON = "application/json";

    @Reference
    private transient SearchService searchService;

    @Override
    protected void doGet(final SlingHttpServletRequest request, final SlingHttpServletResponse response) {

        String searchTerm = request.getParameter("query");
        String locale = request.getParameter("locale");
        String resultJson = searchService.getFullJson(searchTerm, locale, request);

        response.setContentType(APPLICATION_JSON);
        response.setCharacterEncoding(CharEncoding.UTF_8);
        response.setStatus(HttpStatus.SC_OK);
        try {
            PrintWriter printOut = response.getWriter();
            printOut.print(resultJson);
            printOut.flush();
        } catch (IOException e) {
            LOGGER.error(ErrorUtils.createErrorMessage(ErrorUtilsConstants.AEM_IO_EXCEPTION, ErrorUtilsConstants.TECHNICAL, ErrorUtilsConstants.AEM_SITE,
                    ErrorUtilsConstants.MODULE_SERVLET, this.getClass().getSimpleName(), e));
        }
    }
}
