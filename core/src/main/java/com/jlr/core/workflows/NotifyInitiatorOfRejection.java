package com.jlr.core.workflows;

import com.adobe.acs.commons.notifications.InboxNotification;
import com.adobe.acs.commons.notifications.InboxNotificationSender;
import com.adobe.granite.taskmanagement.TaskManagerException;
import com.adobe.granite.workflow.WorkflowSession;
import com.adobe.granite.workflow.exec.WorkItem;
import com.adobe.granite.workflow.exec.WorkflowProcess;
import com.adobe.granite.workflow.metadata.MetaDataMap;
import com.jlr.core.constants.ErrorUtilsConstants;
import com.jlr.core.utils.CommonUtils;
import com.jlr.core.utils.ErrorUtils;
import com.jlr.core.utils.WorkflowUtils;
import org.apache.sling.api.resource.LoginException;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.api.resource.ResourceResolverFactory;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.Reference;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import static com.jlr.core.constants.CommonConstants.JLR_WORKFLOW_SUBSERVICE;

/**
 * The type Notify workflow initiator.
 */
@Component(property = {"process.label = Notify Initiator Of Rejection",
        "process.description = Process step to notify initiator "
                + "of submission rejection"})
public class NotifyInitiatorOfRejection implements WorkflowProcess {

    /**
     * The constant LOGGER.
     */
    private static final Logger LOGGER =
            LoggerFactory.getLogger(NotifyInitiatorOfRejection.class);

    /**
     * The Resolver factory.
     */
    @Reference
    private ResourceResolverFactory resolverFactory;

    /**
     * The Inbox notification sender.
     */
    @Reference
    private InboxNotificationSender inboxNotificationSender;

    /**
     * Execute.
     *
     * @param workItem        the work item
     * @param workflowSession the workflow session
     * @param metaDataMap     the meta data map
     */
    @Override
    public void execute(final WorkItem workItem,
                        final WorkflowSession workflowSession,
                        final MetaDataMap metaDataMap) {

        try (ResourceResolver resourceResolver = CommonUtils.getServiceResolver(resolverFactory, JLR_WORKFLOW_SUBSERVICE)) {
            InboxNotification notification = WorkflowUtils.buildInboxNotification(inboxNotificationSender,
                            "The workflow submission has been Rejected",
                            workItem.getWorkflowData().getPayload().toString(),
                            "Complete the workflow.",
                            workItem.getWorkflow().getInitiator(),
                            "Your workflow submission for '"
                                    + workItem.getWorkflow().getWorkflowModel()
                                    .getTitle()
                                    + "' has been rejected." ,
                            "Complete");
            inboxNotificationSender
                    .sendInboxNotification(resourceResolver, notification);
        } catch (LoginException e) {
            LOGGER.error(ErrorUtils.createErrorMessage(ErrorUtilsConstants.AEM_LOGIN_EXCEPTION, ErrorUtilsConstants.TECHNICAL, ErrorUtilsConstants.AEM_SITE,
                    ErrorUtilsConstants.MODULE_WORKFLOW, "ContentUnlockProcess", e));
        } catch (TaskManagerException e) {
            LOGGER.error(ErrorUtils.createErrorMessage(ErrorUtilsConstants.AEM_TASK_MANAGER_EXCEPTION, ErrorUtilsConstants.TECHNICAL, ErrorUtilsConstants.AEM_SITE,
                    ErrorUtilsConstants.MODULE_WORKFLOW, "ContentUnlockProcess", e));
        }
    }

}

