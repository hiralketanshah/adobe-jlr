package com.jlr.core.utils;

import com.adobe.acs.commons.notifications.InboxNotification;
import com.adobe.acs.commons.notifications.InboxNotificationSender;
import com.day.cq.dam.api.Asset;
import com.day.cq.dam.api.DamConstants;
import com.day.cq.dam.commons.util.AssetReferenceSearch;
import com.day.cq.wcm.api.Page;
import com.day.cq.wcm.api.WCMException;
import com.jlr.core.constants.ErrorUtilsConstants;
import org.apache.commons.collections.MapUtils;
import org.apache.sling.api.resource.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.jcr.Node;
import java.util.Date;
import java.util.Map;

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

    /**
     * Lock child resource.
     *
     * @param page            the page
     * @param lockUnlockState the lock unlock state
     * @throws WCMException the wcm exception
     */
    public static void lockUnlockResources(Page page, String lockUnlockState) {
        if (page != null) {
            if(page.listChildren() != null && page.listChildren().hasNext()) {
                while (page.listChildren().hasNext()) {
                    Page childPage = page.listChildren().next();
                    if (childPage != null) {
                        if (childPage != null && childPage.listChildren() != null && childPage.listChildren().hasNext()) {
                            lockUnlockResources(childPage, lockUnlockState);
                        }
                    }
                }
            }
            lockUnlockPage(page, lockUnlockState);
        }
    }

    private static void lockUnlockPage(Page page, String lockUnlockState) {
        try{
            if("lock".equals(lockUnlockState) && !page.isLocked()) {
                page.lock();
            } else if("unlock".equals(lockUnlockState) && page.isLocked()){
                page.unlock();
            }
        } catch (WCMException e) {
            LOGGER.error(ErrorUtils.createErrorMessage(ErrorUtilsConstants.AEM_WCM_EXCEPTION, ErrorUtilsConstants.TECHNICAL, ErrorUtilsConstants.AEM_SITE,
                    ErrorUtilsConstants.MODULE_WORKFLOW, "WorkflowUtils", e));
        }
    }

    /**
     * Is initially approved boolean.
     *
     * @param valueMap the value map
     * @return the boolean
     */
    public static boolean isInitiallyApproved(ValueMap valueMap) {
            String approvalStatus =  valueMap.get("approvalStatus", String.class);
            Date date = valueMap.get("approvedDate", Date.class);
            return  "approve".equalsIgnoreCase(approvalStatus) && date != null && (date.equals(new Date()) || date.before(new Date()));
    }

    /**
     * Is valid resource for replication boolean.
     *
     * @param resource the resource
     * @return the boolean
     */
    public static boolean isValidResourceForReplication(Resource resource) {
        ValueMap valueMap = resource.getChild("jcr:content").getValueMap();
        if(valueMap!= null) {
            Date activationDate = valueMap.get("activationDate", Date.class);
            Date embargoLiftDate = valueMap.get("embargoLiftDate", Date.class);
            Date contentPublishingDate = valueMap.get("contentPublishingDate", Date.class);
            if(isInitiallyApproved(valueMap)) {
                if(activationDate != null && (activationDate.equals(new Date()) || activationDate.before(new Date()))) {
                    return true;
                } else if(activationDate == null && contentPublishingDate != null && (contentPublishingDate.equals(new Date()) || contentPublishingDate.before(new Date()))) {
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
        if(page.listChildren() != null) {
            while(page.listChildren().hasNext()) {
                Page child = page.listChildren().next();
                if(child != null) {
                    removeMetadata(child, resourceResolver);
                }
            }
        }
        removeMetadataFromPage(page);
        removeMetadataOfAssets(page, resourceResolver);
        if(resourceResolver.hasChanges()) {
            try{
                resourceResolver.commit();
            } catch (PersistenceException e) {
                LOGGER.error(ErrorUtils.createErrorMessage(ErrorUtilsConstants.AEM_PERSISTENCE_EXCEPTION, ErrorUtilsConstants.TECHNICAL, ErrorUtilsConstants.AEM_SITE,
                        ErrorUtilsConstants.MODULE_WORKFLOW, "WorkflowUtils", e));
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
                Map<String, Object> properties = asset.getMetadata();
                removeProperties(properties);
            });
        }

    }

    private static void removeProperties(Map<String, Object> properties) {
        properties.remove("approvalStatus");
        properties.remove("activateNowLater");
        properties.remove("scheduledReplicationDate");
        properties.remove("embargoLiftDate");
        properties.remove("approvedDate");
        properties.remove("approvedBy");
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
     * @param scheduledReplicationDate the scheduled replication date
     * @param embargoLiftDate          the embargo lift date
     * @param page                     the page
     * @param resourceResolver         the resource resolver
     */
    public static void processMetadata(String approvalStatus, String activateNowLater, String scheduledReplicationDate, String embargoLiftDate, Page page, ResourceResolver resourceResolver) {
        if(page.listChildren() != null) {
            while(page.listChildren().hasNext()) {
                Page child = page.listChildren().next();
                if(child != null) {
                    processMetadata(approvalStatus, activateNowLater, scheduledReplicationDate, embargoLiftDate, child, resourceResolver);
                }
            }
        }
        addMetadataToPage(approvalStatus, activateNowLater, scheduledReplicationDate, embargoLiftDate, page);
        fetchAssetsOfPage(approvalStatus, activateNowLater, scheduledReplicationDate, embargoLiftDate, page, resourceResolver);
    }

    private static void fetchAssetsOfPage(String approvalStatus, String activateNowLater, String scheduledReplicationDate, String embargoLiftDate, Page page, ResourceResolver resourceResolver) {
        Map<String, Asset> assetMap = getAssetMapOfPage(page, resourceResolver);
        if(MapUtils.isNotEmpty(assetMap)) {
            assetMap.entrySet().stream().forEach(entry -> {
                Asset asset = entry.getValue();
                Map<String, Object> properties = asset.getMetadata();
                addProperties(approvalStatus, activateNowLater, scheduledReplicationDate, embargoLiftDate, page, properties);
            });
        }
    }

    private static void addMetadataToPage(String approvalStatus, String activateNowLater, String scheduledReplicationDate, String embargoLiftDate, Page page) {
        ValueMap properties = page.getProperties();
        addProperties(approvalStatus, activateNowLater, scheduledReplicationDate, embargoLiftDate, page, properties);
    }

    private static void addProperties(String approvalStatus, String activateNowLater, String scheduledReplicationDate, String embargoLiftDate, Page page, Map<String, Object> properties) {
        properties.put("approvalStatus", approvalStatus);
        properties.put("activateNowLater", activateNowLater);
        properties.put("scheduledReplicationDate", scheduledReplicationDate);
        properties.put("embargoLiftDate", embargoLiftDate);
        properties.put("approvedDate", new Date());
        properties.put("approvedBy", page.getLastModifiedBy());
    }

}
