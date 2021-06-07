package com.jlr.core.servlets;

import com.day.cq.wcm.api.Page;
import com.jlr.core.constants.ErrorUtilsConstants;
import com.jlr.core.utils.CommonUtils;
import com.jlr.core.utils.ErrorUtils;
import com.jlr.core.utils.WorkflowUtils;
import org.apache.commons.lang.CharEncoding;
import org.apache.http.HttpStatus;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.SlingHttpServletResponse;
import org.apache.sling.api.resource.*;
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

@Component(service = Servlet.class, property = { Constants.SERVICE_DESCRIPTION + "= JLR Content Approval Servlet",
        "sling.servlet.methods=" + HttpConstants.METHOD_GET, "sling.servlet.extensions=json",
        "sling.servlet.resourceTypes=" + ContentApprovalServlet.RESOURCE_TYPES })
public class ContentApprovalServlet extends SlingSafeMethodsServlet {
    protected static final String RESOURCE_TYPES = "jlr/components/workflow/approval";

    /** LOGGER */
    private static final Logger LOGGER = LoggerFactory.getLogger(ContentApprovalServlet.class);

    @Reference
    private ResourceResolverFactory resolverFactory;

    @Override
    protected void doGet(SlingHttpServletRequest request, SlingHttpServletResponse response) {
        String approvalStatus = request.getParameter("approvalStatus");
        String activateNowLater = request.getParameter("activateNowLater");
        String contentPublishingDate = request.getParameter("contentPublishingDate");
        String embargoLiftDate = request.getParameter("embargoLiftDate");
        String path = request.getParameter("path");

        try (ResourceResolver resourceResolver = CommonUtils.getServiceResolver(resolverFactory, "jlrworkflow")) {
            Resource resource = resourceResolver.getResource(path);
            if (resource != null) {
                Page page = resource.adaptTo(Page.class);
                if (page != null) {
                    WorkflowUtils.lockUnlockPage(page, "unlock");
                    saveChanges(resourceResolver);
                    WorkflowUtils.processMetadata(approvalStatus, activateNowLater, contentPublishingDate, embargoLiftDate, page, null, resourceResolver);
                    saveChanges(resourceResolver);
                    WorkflowUtils.lockUnlockPage(page, "lock");
                    saveChanges(resourceResolver);
                }
            }
            sendResponseStatus(response, HttpStatus.SC_OK, "Success");
        } catch (LoginException e) {
            LOGGER.error(ErrorUtils.createErrorMessage(ErrorUtilsConstants.AEM_LOGIN_EXCEPTION, ErrorUtilsConstants.TECHNICAL, ErrorUtilsConstants.AEM_SITE,
                    ErrorUtilsConstants.MODULE_SERVLET, "ContentApprovalServlet", e));
        } catch (PersistenceException e) {
            LOGGER.error(ErrorUtils.createErrorMessage(ErrorUtilsConstants.AEM_PERSISTENCE_EXCEPTION, ErrorUtilsConstants.TECHNICAL, ErrorUtilsConstants.AEM_SITE,
                    ErrorUtilsConstants.MODULE_SERVLET, "ContentApprovalServlet", e));
        }

    }

    private void saveChanges(ResourceResolver resourceResolver) throws PersistenceException {
        if (resourceResolver.hasChanges()) {
            resourceResolver.commit();
        }
    }

    private void sendResponseStatus(SlingHttpServletResponse response, int statusCode, String message) {
        try {
            response.setContentType("application/json");
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
