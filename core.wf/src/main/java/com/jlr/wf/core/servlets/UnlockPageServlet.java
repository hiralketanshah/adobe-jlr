package com.jlr.wf.core.servlets;

import com.jlr.wf.core.config.UnlockPageAccessConfig;
import com.jlr.wf.core.constants.ErrorUtilsConstants;
import com.jlr.wf.core.replication.impl.JLRReplicationPreProcessor;
import com.jlr.wf.core.services.LockUnlockService;
import com.jlr.wf.core.utils.ErrorUtils;
import org.apache.jackrabbit.api.security.principal.PrincipalManager;
import org.apache.jackrabbit.api.security.user.UserManager;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.SlingHttpServletResponse;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.api.servlets.HttpConstants;
import org.apache.sling.api.servlets.SlingSafeMethodsServlet;
import org.apache.sling.jcr.base.util.AccessControlUtil;
import org.osgi.framework.Constants;
import org.osgi.service.component.annotations.Activate;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.Reference;
import org.osgi.service.metatype.annotations.Designate;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.jcr.RepositoryException;
import javax.jcr.Session;
import javax.servlet.Servlet;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.security.Principal;

import static com.jlr.wf.core.utils.WorkflowUtils.isUserPartOfGroup;

@Component(service = Servlet.class,
        property = {Constants.SERVICE_DESCRIPTION + "= JLR Unlock Page",
                "sling.servlet.methods=" + HttpConstants.METHOD_GET,
                "sling.servlet.extensions=" + UnlockPageServlet.EXTENSION_HTML,
                "sling.servlet.resourceTypes=" + UnlockPageServlet.RESOURCE_TYPES})
@Designate(ocd = UnlockPageAccessConfig.class)
public class UnlockPageServlet extends SlingSafeMethodsServlet {

    private static final long serialVersionUID = 1L;
    private static final Logger LOGGER = LoggerFactory.getLogger(UnlockPageServlet.class);
    protected static final String RESOURCE_TYPES = "jlr/components/request/unlockpage";
    protected static final String EXTENSION_HTML = "html";

    @Reference
    private transient LockUnlockService lockUnlockService;

    private transient UnlockPageAccessConfig config;

    @Activate
    protected void activate(UnlockPageAccessConfig config) {
        this.config = config;
    }

    @Override
    protected void doGet(final SlingHttpServletRequest request, final SlingHttpServletResponse response) throws
            IOException {

        String pagePath = request.getParameter("page");
        if (isValidUser(request.getResourceResolver())) {
            PrintWriter printOut = response.getWriter();
            boolean isPageLocked = lockUnlockService.lockUnlockPage(pagePath, "unlock");
            if (!isPageLocked) {
                printOut.print("Unlock Page Completed");
            } else {
                printOut.print("Unable to Unlock Page");
                response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
            }
            printOut.flush();
        }
        response.setStatus(HttpServletResponse.SC_OK);
    }

    private boolean isValidUser(ResourceResolver resourceResolver) {
        try {
            final UserManager userManager = AccessControlUtil.getUserManager(resourceResolver.adaptTo(Session.class));
            final PrincipalManager principalManager = AccessControlUtil.getPrincipalManager(resourceResolver.adaptTo(Session.class));
            Principal principal = principalManager.getPrincipal(resourceResolver.getUserID());
            return isUserPartOfGroup(principal, userManager, config.getGroupName());
        } catch (RepositoryException e) {
            LOGGER.error(ErrorUtils.createErrorMessage(ErrorUtilsConstants.AEM_REPOSITORY_EXCEPTION, ErrorUtilsConstants.TECHNICAL, ErrorUtilsConstants.AEM_SITE,
                    ErrorUtilsConstants.MODULE_SERVICE, JLRReplicationPreProcessor.class.getName(), e));
        }
        return Boolean.FALSE;
    }
}
