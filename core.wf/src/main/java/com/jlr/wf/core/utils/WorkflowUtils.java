package com.jlr.wf.core.utils;

import com.adobe.acs.commons.notifications.InboxNotification;
import com.adobe.acs.commons.notifications.InboxNotificationSender;
import com.adobe.aem.formsndocuments.util.FMUtils;
import com.adobe.granite.taskmanagement.TaskManagerException;
import com.adobe.granite.workflow.exec.WorkItem;
import com.day.cq.dam.api.Asset;
import com.day.cq.dam.api.DamConstants;
import com.day.cq.dam.commons.util.AssetReferenceSearch;
import com.day.cq.wcm.api.Page;
import com.jlr.wf.core.constants.ErrorUtilsConstants;
import com.jlr.wf.core.constants.WorkflowConstants;
import org.apache.commons.collections.MapUtils;
import org.apache.commons.lang.StringUtils;
import org.apache.jackrabbit.api.security.user.UserManager;
import org.apache.sling.api.resource.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.jcr.Node;
import javax.jcr.RepositoryException;
import java.security.Principal;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Collections;
import java.util.Date;
import java.util.Map;

import static com.day.cq.commons.jcr.JcrConstants.JCR_CONTENT;
import static com.day.cq.wcm.api.NameConstants.*;
import static com.jlr.wf.core.constants.WorkflowConstants.*;

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

    /**
     * Retrieves the service user resolver.
     *
     * @param resolverFactory - resource resolver factory.
     * @param subServiceName - configured service user subservice name
     * @return - service user resolver
     */
    public static ResourceResolver getServiceResolver(final ResourceResolverFactory resolverFactory, final String subServiceName) throws LoginException {
        Map<String, Object> subServiceAuthInfo = Collections.singletonMap(ResourceResolverFactory.SUBSERVICE, (Object) subServiceName);
        return resolverFactory.getServiceResourceResolver(subServiceAuthInfo);
    }

    public static ResourceResolver getJlrWorkflowResolver(ResourceResolverFactory resolverFactory, String path) {
        try (ResourceResolver resourceResolver = getServiceResolver(resolverFactory, JLR_WORKFLOW_SUBSERVICE)) {
           return resourceResolver;
        } catch (LoginException e) {
            LOGGER.error(ErrorUtils.createErrorMessage(ErrorUtilsConstants.AEM_LOGIN_EXCEPTION, ErrorUtilsConstants.TECHNICAL, ErrorUtilsConstants.AEM_SITE,
                    ErrorUtilsConstants.MODULE_WORKFLOW, WORKFLOW_UTILS, e));
        }
        return null;
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
            String lastModified = valueMap.get(PN_PAGE_LAST_MOD, String.class);
            if(StringUtils.isEmpty(lastModified)) {
                lastModified = valueMap.get(PN_LAST_MOD, String.class);
            }
        try {
            if(StringUtils.isNotEmpty(date)) {
                SimpleDateFormat dateFormat = new SimpleDateFormat(YYYY_MM_DD_T_HH_MM_SS);
                Date approvedDate = dateFormat.parse(date);
                if(StringUtils.isNotEmpty(lastModified)) {
                    Date lastModifiedDate = dateFormat.parse(lastModified);
                    if(lastModifiedDate != null && lastModifiedDate.before(approvedDate)) {
                        return  APPROVE.equalsIgnoreCase(approvalStatus) && approvedDate != null && (approvedDate.equals(new Date()) || approvedDate.before(new Date()));
                    }
                } else {
                    return  APPROVE.equalsIgnoreCase(approvalStatus) && approvedDate != null && (approvedDate.equals(new Date()) || approvedDate.before(new Date()));
                }
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
                String activateNowLater = valueMap.get(ACTIVATE_NOW_LATER, String.class);
                if(ACTIVATE_NOW.equalsIgnoreCase(activateNowLater)) {
                    if(embargoLiftDate == null) {
                        return true;
                    } else if(embargoLiftDate.equals(new Date()) || embargoLiftDate.before(new Date())) {
                        return true;
                    }
                } else if(ACTIVATE_LATER.equalsIgnoreCase(activateNowLater)){
                    if(embargoLiftDate == null) {
                        if(contentPublishingDate != null && (contentPublishingDate.equals(new Date()) || contentPublishingDate.before(new Date()))) {
                            return true;
                        }
                    } else if( contentPublishingDate != null
                            && (embargoLiftDate.equals(contentPublishingDate) || embargoLiftDate.before(contentPublishingDate))) {
                        return true;
                    }
                } else {
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
            removeProperties(page.getContentResource());
        }
    }

    private static void removeMetadataOfAssets(Page page, ResourceResolver resourceResolver) {
        Map<String, Asset> assetMap = getAssetMapOfPage(page, resourceResolver);
        if(MapUtils.isNotEmpty(assetMap)) {
            assetMap.entrySet().stream().forEach(entry -> {
                Asset asset = entry.getValue();
                Resource resource = resourceResolver.getResource(asset.getPath());
                removeProperties(resource.getChild(JCR_CONTENT));
            });
        }
    }

    public static void removeProperties(Resource resource) {
        ModifiableValueMap properties = resource.adaptTo(ModifiableValueMap.class);
        if(MapUtils.isNotEmpty(properties)) {
            properties.remove(APPROVAL_STATUS);
            properties.remove(ACTIVATE_NOW_LATER);
            properties.remove(CONTENT_PUBLISHING_DATE);
            properties.remove(EMBARGO_LIFT_DATE);
            properties.remove(APPROVED_DATE);
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
            addProperties(approvalStatus, activateNowLater, contentPublishingDate, embargoLiftDate, asset);
        }
    }

    private static void fetchAssetsOfPage(String approvalStatus, String activateNowLater, String contentPublishingDate, String embargoLiftDate, Page page, ResourceResolver resourceResolver) {
        Map<String, Asset> assetMap = getAssetMapOfPage(page, resourceResolver);
        if(MapUtils.isNotEmpty(assetMap)) {
            assetMap.entrySet().stream().forEach(entry -> {
                Asset asset = entry.getValue();
                Resource resource = resourceResolver.getResource(asset.getPath());
                addProperties(approvalStatus, activateNowLater, contentPublishingDate, embargoLiftDate, resource.getChild(JCR_CONTENT));
            });
        }
    }

    private static void addMetadataToPage(String approvalStatus, String activateNowLater, String contentPublishingDate, String embargoLiftDate, Page page) {
        if(page.getContentResource() != null) {
            addProperties(approvalStatus, activateNowLater, contentPublishingDate, embargoLiftDate, page.getContentResource());
        }
    }

    private static void addProperties(String approvalStatus, String activateNowLater, String contentPublishingDate, String embargoLiftDate, Resource resource) {
        ModifiableValueMap properties = resource.adaptTo(ModifiableValueMap.class);
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
        SimpleDateFormat dateFormat = new SimpleDateFormat(YYYY_MM_DD_T_HH_MM_SS);
        properties.put(WorkflowConstants.APPROVED_DATE, dateFormat.format(new Date()));
        if(properties.get(PN_PAGE_LAST_MOD_BY) != null){
            properties.put(APPROVED_BY, properties.get(PN_PAGE_LAST_MOD_BY));
        } else if(properties.get(PN_LAST_MOD_BY) != null){
            properties.put(APPROVED_BY, properties.get(PN_LAST_MOD_BY));
        } else {
            properties.put(APPROVED_BY, StringUtils.EMPTY);
        }
    }

    /**
     * Checks if is user part of group.
     *
     * @param user the user
     * @param um the um
     * @param group the group
     * @return the boolean
     */
    public static Boolean isUserPartOfGroup(Principal user, UserManager um, String group) {
        try {
            return FMUtils.isUserPartOfGroup(user, um, group);
        } catch (RepositoryException e) {

            LOGGER.error(ErrorUtils.createErrorMessage(ErrorUtilsConstants.AEM_REPOSITORY_EXCEPTION, ErrorUtilsConstants.TECHNICAL,
                    ErrorUtilsConstants.AEM_SITE, ErrorUtilsConstants.MODULE_SERVICE, WorkflowUtils.class.getSimpleName(), e));
        }
        return false;
    }

}
