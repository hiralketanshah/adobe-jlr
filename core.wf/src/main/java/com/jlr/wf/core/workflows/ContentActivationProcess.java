package com.jlr.wf.core.workflows;

import com.adobe.acs.commons.notifications.InboxNotificationSender;
import com.adobe.granite.workflow.WorkflowException;
import com.adobe.granite.workflow.WorkflowSession;
import com.adobe.granite.workflow.exec.WorkItem;
import com.adobe.granite.workflow.exec.WorkflowData;
import com.adobe.granite.workflow.exec.WorkflowProcess;
import com.adobe.granite.workflow.metadata.MetaDataMap;
import com.adobe.granite.workflow.model.WorkflowModel;
import com.day.cq.dam.api.Asset;
import com.day.cq.replication.ReplicationActionType;
import com.day.cq.replication.ReplicationException;
import com.day.cq.replication.Replicator;
import com.day.cq.wcm.api.Page;
import com.jlr.wf.core.constants.ErrorUtilsConstants;
import com.jlr.wf.core.constants.WorkflowConstants;
import com.jlr.wf.core.services.LockUnlockService;
import com.jlr.wf.core.utils.ErrorUtils;
import org.apache.commons.collections.MapUtils;
import org.apache.sling.api.resource.*;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.Reference;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.jcr.Session;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Calendar;
import java.util.Date;
import java.util.Map;

import static com.day.cq.commons.jcr.JcrConstants.JCR_CONTENT;
import static com.jlr.wf.core.constants.WorkflowConstants.*;
import static com.jlr.wf.core.utils.WorkflowUtils.*;

/**
 * The component that activates the selected content now or a later date.
 */
@Component(property = {"process.label = Content Activation Process",
        "process.description = Process step to approve the selected content."})
public class ContentActivationProcess implements WorkflowProcess {

    /**
     * The constant LOGGER.
     */
    private static final Logger LOGGER =
            LoggerFactory.getLogger(ContentActivationProcess.class);

    @Reference
    private Replicator replicator;
    @Reference
    private ResourceResolverFactory resolverFactory;
    @Reference
    private InboxNotificationSender inboxNotificationSender;
    @Reference
    private LockUnlockService lockUnlockService;

    @Override
    public void execute(final WorkItem workItem, final WorkflowSession workflowSession,
                        final MetaDataMap metaDataMap) throws WorkflowException {
        LOGGER.debug("Content Activation Process Started");

        try (ResourceResolver resourceResolver = getServiceResolver(resolverFactory, JLR_WORKFLOW_SUBSERVICE)) {

            String contentPath = workItem.getContentPath();
            Resource resource = resourceResolver.getResource(contentPath);
            if(resource != null) {
                Page page = resource.adaptTo(Page.class);
                ValueMap valueMap = resource.getChild(JCR_CONTENT).getValueMap();
                String approvalStatus = valueMap.get(WorkflowConstants.APPROVAL_STATUS, String.class);
                if(WorkflowConstants.APPROVE.equalsIgnoreCase(approvalStatus)) {
                    String activateNowLater = valueMap.get(WorkflowConstants.ACTIVATE_NOW_LATER, String.class);
                    if(page != null) {
                        replicateRelatedAssets(workflowSession, resourceResolver, page);
                    }
                    if (ACTIVATE_NOW.equalsIgnoreCase(activateNowLater)) {
                        if(page != null) {
                            lockUnlockService.lockUnlockPage(page.getPath(), UNLOCK);
                        }
                        replicator.replicate(resourceResolver.adaptTo(Session.class), ReplicationActionType.ACTIVATE, contentPath);
                    } else if (ACTIVATE_LATER.equalsIgnoreCase(activateNowLater)) {
                        scheduleActivationLater(workflowSession, contentPath, valueMap);
                    } else {
                        if(page != null) {
                            lockUnlockService.lockUnlockPage(page.getPath(), UNLOCK);
                        }
                    }
                } else {
                    notifyInitiatorOfRejection(workItem, resourceResolver, inboxNotificationSender);
                    if(page != null) {
                        lockUnlockService.lockUnlockPage(page.getPath(), UNLOCK);
                    }
                }
            }

        } catch (LoginException e) {
            LOGGER.error(ErrorUtils.createErrorMessage(ErrorUtilsConstants.AEM_LOGIN_EXCEPTION, ErrorUtilsConstants.TECHNICAL, ErrorUtilsConstants.AEM_SITE,
                    ErrorUtilsConstants.MODULE_WORKFLOW, CONTENT_ACTIVATION_PROCESS, e));
        } catch (ReplicationException e) {
            LOGGER.error(ErrorUtils.createErrorMessage(ErrorUtilsConstants.AEM_REPLICATION_EXCEPTION, ErrorUtilsConstants.TECHNICAL, ErrorUtilsConstants.AEM_SITE,
                    ErrorUtilsConstants.MODULE_WORKFLOW, CONTENT_ACTIVATION_PROCESS, e));
        } catch (ParseException e) {
            LOGGER.error(ErrorUtils.createErrorMessage(ErrorUtilsConstants.AEM_PARSE_EXCEPTION, ErrorUtilsConstants.TECHNICAL, ErrorUtilsConstants.AEM_SITE,
                    ErrorUtilsConstants.MODULE_WORKFLOW, CONTENT_ACTIVATION_PROCESS, e));
        }

    }

    private void scheduleActivationLater(WorkflowSession workflowSession, String contentPath, ValueMap valueMap) throws
            ParseException {
        String contentPublishingDate = valueMap.get(CONTENT_PUBLISHING_DATE, String.class);
        SimpleDateFormat dateFormat = new SimpleDateFormat(YYYY_MM_DD_T_HH_MM_SS);
        Date date = dateFormat.parse(contentPublishingDate);
        ZonedDateTime zDateTime = ZonedDateTime.parse(contentPublishingDate, DateTimeFormatter.ISO_ZONED_DATE_TIME);
        ZoneId toTimeZone = Calendar.getInstance().getTimeZone().toZoneId();
        ZonedDateTime currentETime = zDateTime.withZoneSameInstant(toTimeZone);
        long convertedTime = currentETime.toInstant().toEpochMilli();
        LOGGER.debug("Date :: "+ date + " -- To TimeZone :: "+toTimeZone + " ConvertedTime :: "+convertedTime);
        try {
            final String model = VAR_WORKFLOW_MODELS_SCHEDULED_ACTIVATION;
            final WorkflowModel workflowModel = workflowSession.getModel(model);
            final WorkflowData workflowData = workflowSession.newWorkflowData(TYPE_JCR_PATH, contentPath);
            workflowData.getMetaDataMap().put(ABSOLUTE_TIME, convertedTime);
            workflowData.getMetaDataMap().put(WORKFLOW_TITLE, CONTENT_ACTIVATION_SCHEDULED_ON + dateFormat.format(date));
            workflowSession.startWorkflow(workflowModel, workflowData);
        } catch (WorkflowException e) {
            LOGGER.error(ErrorUtils.createErrorMessage(ErrorUtilsConstants.AEM_WORKFLOW_EXCEPTION, ErrorUtilsConstants.TECHNICAL, ErrorUtilsConstants.AEM_SITE,
                    ErrorUtilsConstants.MODULE_WORKFLOW, CONTENT_ACTIVATION_PROCESS, e));
        }
    }

    private void replicateRelatedAssets(WorkflowSession workflowSession, ResourceResolver resourceResolver, Page page) {
        Map<String, Asset> assetMap = getAssetMapOfPage(page, resourceResolver);
        if(MapUtils.isNotEmpty(assetMap)) {
            assetMap.entrySet().stream().forEach(entry -> {
                String path = entry.getKey();
                Asset asset = entry.getValue();
                Resource resource = resourceResolver.getResource(asset.getPath());
                ModifiableValueMap properties = resource.getChild(JCR_CONTENT).adaptTo(ModifiableValueMap.class);
                String activateNowLater = properties.get(ACTIVATE_NOW_LATER, String.class);
                try {
                    if(ACTIVATE_NOW.equalsIgnoreCase(activateNowLater)) {
                        replicator.replicate(resourceResolver.adaptTo(Session.class), ReplicationActionType.ACTIVATE, path);
                    } else if (ACTIVATE_LATER.equalsIgnoreCase(activateNowLater)) {
                        scheduleActivationLater(workflowSession, path, properties);
                    }
                } catch (ReplicationException e) {
                    LOGGER.error(ErrorUtils.createErrorMessage(ErrorUtilsConstants.AEM_REPLICATION_EXCEPTION, ErrorUtilsConstants.TECHNICAL, ErrorUtilsConstants.AEM_SITE,
                            ErrorUtilsConstants.MODULE_WORKFLOW, CONTENT_ACTIVATION_PROCESS, e));
                } catch (ParseException e) {
                    LOGGER.error(ErrorUtils.createErrorMessage(ErrorUtilsConstants.AEM_PARSE_EXCEPTION, ErrorUtilsConstants.TECHNICAL, ErrorUtilsConstants.AEM_SITE,
                            ErrorUtilsConstants.MODULE_WORKFLOW, CONTENT_ACTIVATION_PROCESS, e));
                }
            });
        }
    }

}