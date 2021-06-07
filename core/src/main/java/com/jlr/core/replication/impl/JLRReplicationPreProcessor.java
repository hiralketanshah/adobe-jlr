package com.jlr.core.replication.impl;

import com.day.cq.commons.jcr.JcrConstants;
import com.day.cq.dam.api.DamConstants;
import com.day.cq.replication.Preprocessor;
import com.day.cq.replication.ReplicationAction;
import com.day.cq.replication.ReplicationException;
import com.day.cq.replication.ReplicationOptions;
import com.day.cq.wcm.api.NameConstants;
import com.day.cq.wcm.api.Page;
import com.jlr.core.constants.CommonConstants;
import com.jlr.core.utils.CommonUtils;
import org.apache.sling.api.resource.*;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.Reference;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.jcr.RepositoryException;
import javax.jcr.Session;
import javax.jcr.lock.LockManager;

import static com.jlr.core.utils.WorkflowUtils.*;

/**
 * The Class JLRReplicationPreProcessor.
 *
 * @author Adobe
 */
@Component(immediate = true)
public class JLRReplicationPreProcessor implements Preprocessor {
    
    /** The Constant LOGGER. */
    private static final Logger LOGGER = LoggerFactory.getLogger(JLRReplicationPreProcessor.class);

    /** The Constant RESOURCE_UNAPPROVED_MESSAGE. */
    private static final String RESOURCE_UNAPPROVED_MESSAGE = "Page/Asset is not approved or scheduled deployment time not met!";

    /** The resource resolver factory. */
    @Reference
    private ResourceResolverFactory resourceResolverFactory;


    /* (non-Javadoc)
     * @see com.day.cq.replication.Preprocessor#preprocess(com.day.cq.replication.ReplicationAction, com.day.cq.replication.ReplicationOptions)
     */
    @Override
    public void preprocess(final ReplicationAction replicationAction, final ReplicationOptions replicationOptions) throws ReplicationException {
        LOGGER.debug("Path of Resource being replicated is {}", replicationAction.getPath());
        LOGGER.debug("ReplicationAction is {}", replicationAction.getType());

        String actionPath = replicationAction.getPath();

        /*if (replicationAction == null || !ReplicationActionType.ACTIVATE.equals(replicationAction.getType())
                        || !StringUtils.contains(actionPath, CommonConstants.JLR_CONTENT_PATH)
                        || !StringUtils.contains(actionPath, CommonConstants.JLR_DAM_PATH) || !StringUtils.contains(actionPath, CommonConstants.JLR_XF_PATH)) {
            LOGGER.trace("Path of Resource being replicated is {}", actionPath);
            return;
        }*/

        ResourceResolver resourceResolver = null;

        try {
            resourceResolver = CommonUtils.getServiceResolver(resourceResolverFactory, CommonConstants.JLR_WORKFLOW_SUBSERVICE);
            final Resource resource = resourceResolver.getResource(actionPath);
            if (resource.adaptTo(ModifiableValueMap.class).get(JcrConstants.JCR_PRIMARYTYPE).toString().equals(NameConstants.NT_PAGE)
                            || resource.adaptTo(ModifiableValueMap.class).get(JcrConstants.JCR_PRIMARYTYPE).toString().equals(DamConstants.NT_DAM_ASSET)) {
                if (isResourceApproved(resource, resourceResolver)) {
                    LOGGER.trace("Resource with path {} is approved", resource.getPath());
                    return;
                } else {
                    throw new ReplicationException(RESOURCE_UNAPPROVED_MESSAGE);
                }
            } else {
                return;
            }
        } catch (LoginException e) {
            throw new ReplicationException(e);
        } catch (RepositoryException e) {
            e.printStackTrace();
        } finally {
            if (resourceResolver != null && resourceResolver.isLive()) {
                // Always close resource resolver you open
                resourceResolver.close();
            }
        }

    }


    /**
     * Checks if is resource approved.
     *
     * @param resource the resource
     * @param resourceResolver
     * @return the boolean
     */
    private Boolean isResourceApproved(Resource resource, ResourceResolver resourceResolver) throws
            RepositoryException {
        if(isValidResourceForReplication(resource)) {
            LockManager lockManager = resourceResolver.adaptTo(Session.class).getWorkspace().getLockManager();
            lockManager.unlock(resource.getPath());
            Page page = resource.adaptTo(Page.class);
            if(page != null) {
                lockUnlockPage(page, "unlock");
                removeMetadata(page, resourceResolver);
                saveChanges(resourceResolver);
                return true;
            } else {
                Resource asset = resource.getChild("jcr:content");
                ModifiableValueMap properties = asset.adaptTo(ModifiableValueMap.class);
                removeProperties(properties);
                saveChanges(resourceResolver);
                return true;
            }
        }
        return false;
    }

}
