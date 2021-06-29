package com.jlr.wf.core.workflows;

import com.adobe.granite.workflow.WorkflowException;
import com.adobe.granite.workflow.WorkflowSession;
import com.adobe.granite.workflow.exec.WorkItem;
import com.adobe.granite.workflow.exec.WorkflowProcess;
import com.adobe.granite.workflow.metadata.MetaDataMap;
import com.day.cq.wcm.api.Page;
import com.jlr.wf.core.constants.ErrorUtilsConstants;
import com.jlr.wf.core.constants.WorkflowConstants;
import com.jlr.wf.core.services.LockUnlockService;
import com.jlr.wf.core.utils.ErrorUtils;
import org.apache.sling.api.resource.LoginException;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.api.resource.ResourceResolverFactory;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.Reference;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import static com.jlr.wf.core.constants.WorkflowConstants.JLR_WORKFLOW_SUBSERVICE;
import static com.jlr.wf.core.utils.WorkflowUtils.getServiceResolver;

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

    @Reference
    private LockUnlockService lockUnlockService;

    @Override
    public void execute(final WorkItem workItem, final WorkflowSession workflowSession,
                        final MetaDataMap metaDataMap) throws WorkflowException {
        LOGGER.debug("Content Lock Process Started");
        try (ResourceResolver resourceResolver = getServiceResolver(resolverFactory, JLR_WORKFLOW_SUBSERVICE)){
            String contentPath = workItem.getContentPath();
            Resource resource = resourceResolver.getResource(contentPath);
            if (resource != null) {
                Page page = resource.adaptTo(Page.class);
                if(page != null) {
                    lockUnlockService.lockUnlockPage(page.getPath(), WorkflowConstants.LOCK);
                }
            }
        } catch (LoginException e) {
            LOGGER.error(ErrorUtils.createErrorMessage(ErrorUtilsConstants.AEM_LOGIN_EXCEPTION, ErrorUtilsConstants.TECHNICAL, ErrorUtilsConstants.AEM_SITE,
                    ErrorUtilsConstants.MODULE_WORKFLOW, WorkflowConstants.CONTENT_LOCK_PROCESS, e));
        }

    }

}