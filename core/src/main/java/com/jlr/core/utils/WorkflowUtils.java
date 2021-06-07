package com.jlr.core.utils;

import com.adobe.acs.commons.notifications.InboxNotification;
import com.adobe.acs.commons.notifications.InboxNotificationSender;
import com.adobe.granite.taskmanagement.TaskManagerException;
import com.adobe.granite.workflow.exec.WorkItem;
import com.day.cq.dam.api.Asset;
import com.day.cq.dam.api.DamConstants;
import com.day.cq.dam.commons.util.AssetReferenceSearch;
import com.day.cq.wcm.api.Page;
import com.jlr.core.constants.ErrorUtilsConstants;
import com.jlr.core.constants.WorkflowConstants;
import org.apache.commons.collections.MapUtils;
import org.apache.commons.lang.StringUtils;
import org.apache.sling.api.resource.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.jcr.Node;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Map;

import static com.jlr.core.constants.CommonConstants.JLR_WORKFLOW_SUBSERVICE;
import static com.jlr.core.constants.WorkflowConstants.*;

/**
 * The type Workflow utils.
 */
public class WorkflowUtils {

    private static final Logger LOGGER = LoggerFactory.getLogger(WorkflowUtils.class);

    /**
     * Build inbox notification inbox notification.
     *
     * @param inboxNotificationSender the inbox notification sender
     * @param title                   the title
     * @param contentPath             the content path
     * @param instructions            the instructions
     * @param assignee                the assignee
     * @param message                 the message
     * @param actions                 the actions
     * @return the inbox notification
     */
    public static InboxNotification buildInboxNotification(
            final InboxNotificationSender inboxNotificationSender,
            final String title,
            final String contentPath, final String instructions,
            final String assignee, final String message,
            final String... actions) {
        InboxNotification result =
                inboxNotificationSender.buildInboxNotification();
        result.setTitle(title);
        result.setContentPath(contentPath);
        result.setInstructions(instructions);
        result.setAssignee(assignee);
        result.setMessage(message);
        result.setNotificationActions(actions);
        return result;
    }

    public static void notifyInitiatorOfRejection(WorkItem workItem, ResourceResolver resourceResolver, InboxNotificationSender inboxNotificationSender) {
           try{
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
        }  catch (TaskManagerException e) {
            LOGGER.error(ErrorUtils.createErrorMessage(ErrorUtilsConstants.AEM_TASK_MANAGER_EXCEPTION, ErrorUtilsConstants.TECHNICAL, ErrorUtilsConstants.AEM_SITE,
                    ErrorUtilsConstants.MODULE_WORKFLOW, WORKFLOW_UTILS, e));
        }
    }

    public static ResourceResolver getJlrWorkflowResolver(ResourceResolverFactory resolverFactory, String path) {
        try (ResourceResolver resourceResolver = CommonUtils.getServiceResolver(resolverFactory, JLR_WORKFLOW_SUBSERVICE)) {
           return resourceResolver;
        } catch (LoginException e) {
            LOGGER.error(ErrorUtils.createErrorMessage(ErrorUtilsConstants.AEM_LOGIN_EXCEPTION, ErrorUtilsConstants.TECHNICAL, ErrorUtilsConstants.AEM_SITE,
                    ErrorUtilsConstants.MODULE_WORKFLOW, WORKFLOW_UTILS, e));
        }
        return null;
    }

    public static void lockUnlockPage(Page page, String lockUnlockState) {
        /*if(page != null) {
            try{
                if("lock".equals(lockUnlockState) && !page.isLocked()) {
                    page.lock();
                } else if("unlock".equals(lockUnlockState) && page.isLocked() && page.canUnlock()){
                    page.unlock();
                }
            } catch (WCMException e) {
                LOGGER.error(ErrorUtils.createErrorMessage(ErrorUtilsConstants.AEM_WCM_EXCEPTION, ErrorUtilsConstants.TECHNICAL, ErrorUtilsConstants.AEM_SITE,
                        ErrorUtilsConstants.MODULE_WORKFLOW, "WorkflowUtils", e));
            }
        } */
    }

    /**
     * Is initially approved boolean.
     *
     * @param valueMap the value map
     * @return the boolean
     */
    public static boolean isInitiallyApproved(ValueMap valueMap) {
            String approvalStatus =  valueMap.get(APPROVAL_STATUS, String.class);
            String date = valueMap.get(WorkflowConstants.APPROVED_DATE, String.class);
            Date lastModifiedDate = valueMap.get(WorkflowConstants.CQ_LAST_MODIFIED, Date.class);
            if(lastModifiedDate == null) {
                lastModifiedDate = valueMap.get(WorkflowConstants.JCR_LAST_MODIFIED, Date.class);
            }
            SimpleDateFormat dateFormat = new SimpleDateFormat(YYYY_MM_DD_T_HH_MM);
        try {
            Date approvedDate = dateFormat.parse(date);
            if((lastModifiedDate != null && lastModifiedDate.before(approvedDate))) {
                return  APPROVE.equalsIgnoreCase(approvalStatus) && approvedDate != null && (approvedDate.equals(new Date()) || approvedDate.before(new Date()));
            }
        } catch (ParseException e) {
            LOGGER.error(ErrorUtils.createErrorMessage(ErrorUtilsConstants.AEM_PARSE_EXCEPTION, ErrorUtilsConstants.TECHNICAL, ErrorUtilsConstants.AEM_SITE,
                    ErrorUtilsConstants.MODULE_WORKFLOW, WORKFLOW_UTILS, e));
        }
        return false;
    }

    /**
     * Is valid resource for replication boolean.
     *
     * @param resource the resource
     * @return the boolean
     */
    public static boolean isValidResourceForReplication(Resource resource) {
        ValueMap valueMap = resource.getChild(JCR_CONTENT).getValueMap();
        if(valueMap!= null) {
            Date contentPublishingDate = valueMap.get(CONTENT_PUBLISHING_DATE, Date.class);
            Date embargoLiftDate = valueMap.get(EMBARGO_LIFT_DATE, Date.class);
            if(isInitiallyApproved(valueMap)) {
                if(contentPublishingDate != null && (contentPublishingDate.equals(new Date()) || contentPublishingDate.before(new Date()))) {
                    return true;
                } else if(embargoLiftDate != null && (embargoLiftDate.equals(new Date()) || embargoLiftDate.before(new Date()))) {
                    return true;
                }
            }
        }
        return false;
    }

    /**
     * Remove metadata.
     *
     * @param page             the page
     * @param resourceResolver the resource resolver
     */
    public static void removeMetadata(Page page, ResourceResolver resourceResolver){
        removeMetadataFromPage(page);
        removeMetadataOfAssets(page, resourceResolver);
    }

    public static void saveChanges(ResourceResolver resourceResolver) {
        if(resourceResolver.hasChanges()) {
            try{
                resourceResolver.commit();
            } catch (PersistenceException e) {
                LOGGER.error(ErrorUtils.createErrorMessage(ErrorUtilsConstants.AEM_PERSISTENCE_EXCEPTION, ErrorUtilsConstants.TECHNICAL, ErrorUtilsConstants.AEM_SITE,
                        ErrorUtilsConstants.MODULE_WORKFLOW, WORKFLOW_UTILS, e));
            }
        }
    }

    private static void removeMetadataFromPage(Page page) {
        if(page.getContentResource() != null) {
            ModifiableValueMap properties = page.getContentResource().adaptTo(ModifiableValueMap.class);
            removeProperties(properties);
        }
    }

    private static void removeMetadataOfAssets(Page page, ResourceResolver resourceResolver) {
        Map<String, Asset> assetMap = getAssetMapOfPage(page, resourceResolver);
        if(MapUtils.isNotEmpty(assetMap)) {
            assetMap.entrySet().stream().forEach(entry -> {
                Asset asset = entry.getValue();
                Resource resource = resourceResolver.getResource(asset.getPath());
                ModifiableValueMap properties = resource.getChild(JCR_CONTENT).adaptTo(ModifiableValueMap.class);
                removeProperties(properties);
            });
        }

    }

    public static void removeProperties(Map<String, Object> properties) {
        if(MapUtils.isNotEmpty(properties)) {
            properties.remove(APPROVAL_STATUS);
            properties.remove(ACTIVATE_NOW_LATER);
            properties.remove(CONTENT_PUBLISHING_DATE);
            properties.remove(EMBARGO_LIFT_DATE);
            properties.remove(WorkflowConstants.APPROVED_DATE);
            properties.remove(APPROVED_BY);
        }
    }

    /**
     * Gets asset map of page.
     *
     * @param page             the page
     * @param resourceResolver the resource resolver
     * @return the asset map of page
     */
    public static Map<String, Asset> getAssetMapOfPage(Page page, ResourceResolver resourceResolver) {
        Resource resource = page.getContentResource();
        AssetReferenceSearch assetReferenceSearch = new AssetReferenceSearch(resource.adaptTo(Node.class),
                DamConstants.MOUNTPOINT_ASSETS, resourceResolver);
        return assetReferenceSearch.search();
    }

    /**
     * Process metadata.
     *
     * @param approvalStatus           the approval status
     * @param activateNowLater         the activate now later
     * @param contentPublishingDate the content publishing date
     * @param embargoLiftDate          the embargo lift date
     * @param page                     the page
     * @param resourceResolver         the resource resolver
     */
    public static void processMetadata(String approvalStatus, String activateNowLater, String contentPublishingDate, String embargoLiftDate, Page page, Resource asset, ResourceResolver resourceResolver) {
        if(page != null) {
            addMetadataToPage(approvalStatus, activateNowLater, contentPublishingDate, embargoLiftDate, page);
            fetchAssetsOfPage(approvalStatus, activateNowLater, contentPublishingDate, embargoLiftDate, page, resourceResolver);
        }
        if(asset != null) {
            ModifiableValueMap properties = asset.adaptTo(ModifiableValueMap.class);
            addProperties(approvalStatus, activateNowLater, contentPublishingDate, embargoLiftDate, properties);
        }
    }


    private static void fetchAssetsOfPage(String approvalStatus, String activateNowLater, String contentPublishingDate, String embargoLiftDate, Page page, ResourceResolver resourceResolver) {
        Map<String, Asset> assetMap = getAssetMapOfPage(page, resourceResolver);
        if(MapUtils.isNotEmpty(assetMap)) {
            assetMap.entrySet().stream().forEach(entry -> {
                Asset asset = entry.getValue();
                Resource resource = resourceResolver.getResource(asset.getPath());
                ModifiableValueMap properties = resource.getChild(JCR_CONTENT).adaptTo(ModifiableValueMap.class);
                addProperties(approvalStatus, activateNowLater, contentPublishingDate, embargoLiftDate, properties);
            });
        }
    }

    private static void addMetadataToPage(String approvalStatus, String activateNowLater, String contentPublishingDate, String embargoLiftDate, Page page) {
        ModifiableValueMap properties = page.getContentResource().adaptTo(ModifiableValueMap.class);
        addProperties(approvalStatus, activateNowLater, contentPublishingDate, embargoLiftDate, properties);
    }

    private static void addProperties(String approvalStatus, String activateNowLater, String contentPublishingDate, String embargoLiftDate, Map<String, Object> properties) {
        if(StringUtils.isNotEmpty(approvalStatus)) {
            properties.put(APPROVAL_STATUS, approvalStatus);
        }
        if(StringUtils.isNotEmpty(activateNowLater)) {
            properties.put(ACTIVATE_NOW_LATER, activateNowLater);
        }
        if(StringUtils.isNotEmpty(contentPublishingDate)) {
            properties.put(CONTENT_PUBLISHING_DATE, contentPublishingDate);
        }
        if(StringUtils.isNotEmpty(embargoLiftDate)) {
            properties.put(EMBARGO_LIFT_DATE, embargoLiftDate);
        }
        SimpleDateFormat dateFormat = new SimpleDateFormat(YYYY_MM_DD_T_HH_MM);
        properties.put(WorkflowConstants.APPROVED_DATE, dateFormat.format(new Date()));
        if(properties.get(CQ_LAST_MODIFIED) != null){
            properties.put(APPROVED_BY, properties.get(CQ_LAST_MODIFIED));
        } else {
            properties.put(APPROVED_BY, properties.get(JCR_LAST_MODIFIED));
        }
    }

}