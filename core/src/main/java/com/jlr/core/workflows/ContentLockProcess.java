package com.jlr.core.workflows;

import com.adobe.granite.workflow.WorkflowException;
import com.adobe.granite.workflow.WorkflowSession;
import com.adobe.granite.workflow.exec.WorkItem;
import com.adobe.granite.workflow.exec.WorkflowProcess;
import com.adobe.granite.workflow.metadata.MetaDataMap;
import com.day.cq.wcm.api.Page;
import com.jlr.core.constants.ErrorUtilsConstants;
import com.jlr.core.constants.WorkflowConstants;
import com.jlr.core.utils.CommonUtils;
import com.jlr.core.utils.ErrorUtils;
import com.jlr.core.utils.WorkflowUtils;
import org.apache.sling.api.resource.LoginException;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.api.resource.ResourceResolverFactory;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.Reference;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import static com.jlr.core.constants.CommonConstants.JLR_WORKFLOW_SUBSERVICE;
import static com.jlr.core.utils.LockUnlockUtil.lockUnlockPage;

/**
 * The component that approves/rejects the selected content.
 */
@Component(property = {"process.label = Content Lock Process",
        "process.description = Process step to approve the selected content."})
public class ContentLockProcess implements WorkflowProcess {

    /**
     * The constant LOGGER.
     */
    private static final Logger LOGGER =
            LoggerFactory.getLogger(ContentLockProcess.class);

    @Reference
    private ResourceResolverFactory resolverFactory;

    @Override
    public void execute(final WorkItem workItem, final WorkflowSession workflowSession,
                        final MetaDataMap metaDataMap) throws WorkflowException {
        LOGGER.debug("Content Lock Process Started");
        try (ResourceResolver resourceResolver = CommonUtils.getServiceResolver(resolverFactory, JLR_WORKFLOW_SUBSERVICE)){
            String contentPath = workItem.getContentPath();
            Resource resource = resourceResolver.getResource(contentPath);
            if (resource != null) {
                Page page = resource.adaptTo(Page.class);
                lockUnlockPage(page, WorkflowConstants.LOCK, resolverFactory);
            }
        } catch (LoginException e) {
            LOGGER.error(ErrorUtils.createErrorMessage(ErrorUtilsConstants.AEM_LOGIN_EXCEPTION, ErrorUtilsConstants.TECHNICAL, ErrorUtilsConstants.AEM_SITE,
                    ErrorUtilsConstants.MODULE_WORKFLOW, WorkflowConstants.CONTENT_LOCK_PROCESS, e));
        }

    }

}