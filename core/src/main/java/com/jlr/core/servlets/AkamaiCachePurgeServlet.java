package com.jlr.core.servlets;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.Servlet;
import javax.servlet.ServletException;
import org.apache.commons.lang3.StringUtils;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.SlingHttpServletResponse;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.api.servlets.HttpConstants;
import org.apache.sling.api.servlets.SlingAllMethodsServlet;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.Reference;
import org.osgi.service.component.propertytypes.ServiceDescription;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import com.jlr.core.services.AkamaiPurge;


/**
 * @author Adobe
 *
 */
@Component(service = Servlet.class,
                property = {"sling.servlet.resourceTypes=jlr/components/akamai/cachepurge", "sling.servlet.methods=" + HttpConstants.METHOD_GET})
@ServiceDescription("Servlet which is used to purge akamai cache on page activation.")
public class AkamaiCachePurgeServlet extends SlingAllMethodsServlet {

    private static final Logger LOGGER = LoggerFactory.getLogger(AkamaiCachePurgeServlet.class);

    private static final long serialVersionUID = -8522119331825045745L;
    private static final String[] validPath = {"/europe/published-sites/de_de/", "/row/published-sites/en_au", "/content/dam/landrover"};


    @Reference
    private transient AkamaiPurge akamaiPurgeService;



    @Override
    protected void doGet(SlingHttpServletRequest request, SlingHttpServletResponse response) throws ServletException, IOException {
        LOGGER.trace("Processing GET Method");
        doThis(request, response);
    }



    @Override
    protected void doPost(SlingHttpServletRequest request, SlingHttpServletResponse response) throws ServletException, IOException {
        LOGGER.trace("Processing POST Method => Page path: {}", request.getHeader("CQ-Path"));
        doThis(request, response);

    }

    private void doThis(SlingHttpServletRequest request, SlingHttpServletResponse response) throws ServletException, IOException {
        final ResourceResolver resourceResolver = request.getResourceResolver();

        String pathToPurge = request.getHeader("CQ-Path");
        if (StringUtils.isBlank(pathToPurge)) {
            pathToPurge = request.getParameter("pagePath");
        }
        boolean servlet = false;

        if (StringUtils.isNotBlank(pathToPurge) && isValidPathsForPurging(pathToPurge)) {
            if (LOGGER.isDebugEnabled()) {
                LOGGER.debug("Not valid path for CDN cache clear! Exiting...");
            }
            return;
        }

        String domain = request.getParameter("domain");

        // From Akamai Replication Agent
        if (StringUtils.isNotBlank(pathToPurge) && StringUtils.isBlank(domain)) {
            LOGGER.trace("Processing Replication Agent condition");

            pathToPurge = akamaiPurgeService.buildPurgeObjectsFromReplicationAgent(resourceResolver, pathToPurge);
        } else if (StringUtils.isNotBlank(pathToPurge) && StringUtils.isNotBlank(domain)) {
            LOGGER.trace("Processing Servlet Agent condition with domain: {} and path: {}", domain, pathToPurge);
            pathToPurge = akamaiPurgeService.buildPurgeObjectsFromServlet(pathToPurge, domain);
            servlet = true;
        } else {
            pathToPurge = StringUtils.EMPTY;
        }
        if (StringUtils.isNotBlank(pathToPurge)) {

            String akamaiResponse = akamaiPurgeService.purgeAkamaiCache(pathToPurge, servlet);
            if (servlet) {
                PrintWriter out = response.getWriter();
                response.setContentType("application/json");
                response.setCharacterEncoding("UTF-8");
                out.print(akamaiResponse);
                out.flush();
            }
        }
    }

    private Boolean isValidPathsForPurging(String purgePath) {
        Boolean validityStatus = false;
        for (String path : validPath) {
            if (path.contains(purgePath)) {
                validityStatus = true;
                break;
            }
        }
        return validityStatus;

    }
}
