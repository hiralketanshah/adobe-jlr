package com.jlr.wf.core.workflows;

import com.adobe.granite.workflow.WorkflowException;
import com.adobe.granite.workflow.WorkflowSession;
import com.adobe.granite.workflow.exec.HistoryItem;
import com.adobe.granite.workflow.exec.WorkItem;
import com.adobe.granite.workflow.exec.WorkflowProcess;
import com.adobe.granite.workflow.metadata.MetaDataMap;
import com.day.cq.wcm.api.Page;
import com.jlr.wf.core.constants.ErrorUtilsConstants;
import com.jlr.wf.core.services.LockUnlockService;
import com.jlr.wf.core.utils.ErrorUtils;
import com.jlr.wf.core.utils.WorkflowUtils;
import org.apache.commons.collections.CollectionUtils;
import org.apache.sling.api.resource.LoginException;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.api.resource.ResourceResolverFactory;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.Reference;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.List;
import java.util.Optional;

import static com.day.cq.commons.jcr.JcrConstants.JCR_CONTENT;
import static com.jlr.wf.core.constants.WorkflowConstants.*;
import static com.jlr.wf.core.utils.WorkflowUtils.getServiceResolver;
import static com.jlr.wf.core.utils.WorkflowUtils.saveChanges;

/**
 * The component that approves/rejects the selected content.
 */
@Component(property = {"process.label = Content Metadata Process",
        "process.description = Process step to add metadata to the selected content."})
public class ContentMetaDataProcess implements WorkflowProcess {

    /**
     * The constant LOGGER.
     */
    private static final Logger LOGGER =
            LoggerFactory.getLogger(ContentMetaDataProcess.class);

    @Reference
    private ResourceResolverFactory resolverFactory;

    @Reference
    private LockUnlockService lockUnlockService;

    @Override
    public void execute(final WorkItem workItem, final WorkflowSession workflowSession,
                        final MetaDataMap metaDataMap) throws WorkflowException {
        LOGGER.debug("Content Metadata Process Started");
        try (ResourceResolver resourceResolver = getServiceResolver(resolverFactory, JLR_WORKFLOW_SUBSERVICE)) {
            Resource resource = resourceResolver.getResource(workItem.getContentPath());
            if (resource != null) {
                Page page = resource.adaptTo(Page.class);
                final List<HistoryItem> histories = workflowSession.getHistory(workItem.getWorkflow());
                Optional<HistoryItem> historyItem = null;
                if(CollectionUtils.isNotEmpty(histories)) {
                    historyItem = histories.stream().filter(history -> (history.getWorkItem().getNode().getId().equals(NODE_2))).findFirst();
                }
                if(historyItem != null && historyItem.isPresent()) {
                    MetaDataMap dataMap = historyItem.get().getWorkItem().getMetaDataMap();
                    if (page != null) {
                        lockUnlockService.lockUnlockPage(page.getPath(), UNLOCK);
                        WorkflowUtils.processMetadata(dataMap.get(APPROVAL_STATUS, String.class), dataMap.get(ACTIVATE_NOW_LATER, String.class), dataMap.get(CONTENT_PUBLISHING_DATE, String.class), dataMap.get(EMBARGO_LIFT_DATE, String.class), page, null, resourceResolver);
                        saveChanges(resourceResolver);
                        lockUnlockService.lockUnlockPage(page.getPath(), LOCK);
                    } else {
                        Resource asset = resource.getChild(JCR_CONTENT);
                        WorkflowUtils.processMetadata(dataMap.get(APPROVAL_STATUS, String.class), dataMap.get(ACTIVATE_NOW_LATER, String.class), dataMap.get(CONTENT_PUBLISHING_DATE, String.class), dataMap.get(EMBARGO_LIFT_DATE, String.class), null, asset, resourceResolver);
                        saveChanges(resourceResolver);
                    }
                }
            }
        } catch (LoginException e) {
            LOGGER.error(ErrorUtils.createErrorMessage(ErrorUtilsConstants.AEM_LOGIN_EXCEPTION, ErrorUtilsConstants.TECHNICAL, ErrorUtilsConstants.AEM_SITE,
                    ErrorUtilsConstants.MODULE_WORKFLOW, CONTENT_META_DATA_PROCESS, e));
        }

    }

}