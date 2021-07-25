package com.jlr.core.servlets;

import java.io.IOException;
import java.io.PrintWriter;
import java.security.Principal;
import javax.jcr.RepositoryException;
import javax.jcr.Session;
import javax.servlet.Servlet;
import javax.servlet.ServletException;
import org.apache.commons.lang3.StringUtils;
import org.apache.jackrabbit.api.security.user.UserManager;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.SlingHttpServletResponse;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.api.servlets.HttpConstants;
import org.apache.sling.api.servlets.SlingAllMethodsServlet;
import org.apache.sling.jcr.base.util.AccessControlUtil;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.Reference;
import org.osgi.service.component.propertytypes.ServiceDescription;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import com.jlr.core.constants.ErrorUtilsConstants;
import com.jlr.core.services.AkamaiPurge;
import com.jlr.core.services.AkamaiPurgeConfig;
import com.jlr.core.utils.CommonUtils;
import com.jlr.core.utils.ErrorUtils;


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
    private static final String[] validPath = {"/europe/published-sites/de_de/", "/row/published-sites/en_au"};

    @Reference
    private transient AkamaiPurgeConfig akamaiPurgeConfig;

    @Reference
    private transient AkamaiPurge akamaiPurgeService;



    @Override
    protected void doGet(SlingHttpServletRequest request, SlingHttpServletResponse response) throws ServletException, IOException {
        doThis(request, response);
    }



    @Override
    protected void doPost(SlingHttpServletRequest request, SlingHttpServletResponse response) throws ServletException, IOException {
        doThis(request, response);

    }

    private void doThis(SlingHttpServletRequest request, SlingHttpServletResponse response) throws IOException {

        if (akamaiPurgeConfig.getEnableAkamaiAgent().equalsIgnoreCase("false")) {
            if (LOGGER.isTraceEnabled()) {
                LOGGER.trace("Osgi :: Enable Akamai Replication Agent is off, exiting!!!");
            }
            return;
        }
        final ResourceResolver resourceResolver = request.getResourceResolver();

        UserManager userManager;
        try {
            userManager = AccessControlUtil.getUserManager(resourceResolver.adaptTo(Session.class));
            Principal userPrincipal = request.getUserPrincipal();
            LOGGER.info("Request User: {}", userPrincipal.getName());
            if (!(CommonUtils.isUserPartOfGroup(userPrincipal, userManager, akamaiPurgeConfig.getAkamaiCacheClearGroup())
                            || userPrincipal.getName().equalsIgnoreCase("replication-receiver"))) {
                if (LOGGER.isTraceEnabled()) {
                    LOGGER.trace("Preparing to exit, user not part of {} group or replication-receiver", akamaiPurgeConfig.getAkamaiCacheClearGroup());
                }
                return;
            }
        } catch (RepositoryException e) {
            LOGGER.error(ErrorUtils.createErrorMessage(ErrorUtilsConstants.AEM_REPOSITORY_EXCEPTION, ErrorUtilsConstants.TECHNICAL,
                            ErrorUtilsConstants.AEM_SITE, ErrorUtilsConstants.MODULE_SERVICE, AkamaiCachePurgeServlet.class.getName(), e));
        }



        String pathToPurge = request.getHeader("CQ-Path");
        if (StringUtils.isBlank(pathToPurge)) {
            pathToPurge = request.getParameter("pagePath");
        }
        boolean servlet = false;

        if (StringUtils.isNotBlank(pathToPurge) && !isValidPathsForPurging(pathToPurge)) {
            if (LOGGER.isDebugEnabled()) {
                LOGGER.debug("Not valid path {} for CDN cache clear! Exiting...", pathToPurge);
            }
            return;
        }

        String domain = request.getParameter("domain");

        // From Akamai Replication Agent
        if (StringUtils.isNotBlank(pathToPurge) && StringUtils.isBlank(domain)) {
            if (LOGGER.isTraceEnabled()) {
                LOGGER.trace("Processing Replication Agent condition: {}", pathToPurge);
            }
            pathToPurge = akamaiPurgeService.buildPurgeObjectsFromReplicationAgent(resourceResolver, pathToPurge);
        } else if (StringUtils.isNotBlank(pathToPurge) && StringUtils.isNotBlank(domain)) {
            if (LOGGER.isTraceEnabled()) {
                LOGGER.trace("Processing Servlet Agent condition with domain: {} and path: {}", domain, pathToPurge);
            }
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
            if (purgePath.contains(path)) {
                validityStatus = true;

            }
        }
        return validityStatus;

    }
}
