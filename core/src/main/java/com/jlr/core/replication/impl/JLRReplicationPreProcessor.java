package com.jlr.core.replication.impl;

import com.day.cq.commons.jcr.JcrConstants;
import com.day.cq.dam.api.DamConstants;
import com.day.cq.replication.*;
import com.day.cq.wcm.api.NameConstants;
import com.day.cq.wcm.api.Page;
import com.jlr.core.config.ReplicationAccessConfig;
import com.jlr.core.constants.CommonConstants;
import com.jlr.core.constants.ErrorUtilsConstants;
import com.jlr.core.utils.CommonUtils;
import com.jlr.core.utils.ErrorUtils;
import org.apache.commons.lang.StringUtils;
import org.apache.jackrabbit.api.security.principal.PrincipalManager;
import org.apache.jackrabbit.api.security.user.UserManager;
import org.apache.sling.api.resource.*;
import org.apache.sling.jcr.base.util.AccessControlUtil;
import org.osgi.service.component.annotations.Activate;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.Reference;
import org.osgi.service.metatype.annotations.Designate;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.jcr.RepositoryException;
import javax.jcr.Session;
import java.security.Principal;

import static com.jlr.core.constants.WorkflowConstants.JCR_CONTENT;
import static com.jlr.core.constants.WorkflowConstants.UNLOCK;
import static com.jlr.core.utils.LockUnlockUtil.lockUnlockPage;
import static com.jlr.core.utils.WorkflowUtils.*;

/**
 * The Class JLRReplicationPreProcessor.
 *
 * @author Adobe
 */
@Component(immediate = true)
@Designate(ocd = ReplicationAccessConfig.class)
public class JLRReplicationPreProcessor implements Preprocessor {
    
    /** The Constant LOGGER. */
    private static final Logger LOGGER = LoggerFactory.getLogger(JLRReplicationPreProcessor.class);

    /** The Constant RESOURCE_UNAPPROVED_MESSAGE. */
    private static final String RESOURCE_UNAPPROVED_MESSAGE = "Page/Asset is not approved or scheduled deployment time not met or Page/Asset has been modified after workflow creation!";

    /** The config. */
    private ReplicationAccessConfig config;

    /**
     * Activate.
     *
     * @param config the config
     */
    @Activate
    public void activate(ReplicationAccessConfig config) {
        if (null != config) {
            this.config = config;
        }
    }

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
        ResourceResolver resourceResolver = null;
        try {
            resourceResolver = CommonUtils.getServiceResolver(resourceResolverFactory, CommonConstants.JLR_WORKFLOW_SUBSERVICE);

            if (replicationAction == null || !ReplicationActionType.ACTIVATE.equals(replicationAction.getType())
                    || !(StringUtils.contains(actionPath, CommonConstants.JLR_CONTENT_PATH) || StringUtils.contains(actionPath, CommonConstants.JLR_DAM_PATH) || StringUtils.contains(actionPath, CommonConstants.JLR_XF_PATH)) || isAdministrator(resourceResolver, replicationAction)) {
                LOGGER.trace("Path of Resource being replicated is {}", actionPath);
                return;
            }
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
        } finally {
            if (resourceResolver != null && resourceResolver.isLive()) {
                // Always close resource resolver you open
                resourceResolver.close();
            }
        }

    }

    private boolean isAdministrator(ResourceResolver resourceResolver, ReplicationAction replicationAction) {
        boolean authorable = false;
        try {
            final UserManager userManager = AccessControlUtil.getUserManager(resourceResolver.adaptTo(Session.class));
            final PrincipalManager principalManager = AccessControlUtil.getPrincipalManager(resourceResolver.adaptTo(Session.class));
            Principal principal = principalManager.getPrincipal(replicationAction.getUserId());
            authorable = CommonUtils.isUserPartOfGroup(principal, userManager, config.getGroupName());
        } catch (RepositoryException e) {
            LOGGER.error(ErrorUtils.createErrorMessage(ErrorUtilsConstants.AEM_REPOSITORY_EXCEPTION, ErrorUtilsConstants.TECHNICAL, ErrorUtilsConstants.AEM_SITE,
                    ErrorUtilsConstants.MODULE_SERVICE, JLRReplicationPreProcessor.class.getName(), e));
        }
        return authorable;
    }


    /**
     * Checks if is resource approved.
     *
     * @param resource the resource
     * @param resourceResolver
     * @return the boolean
     */
    private Boolean isResourceApproved(Resource resource, ResourceResolver resourceResolver) {
        if(isValidResourceForReplication(resource)) {
            Page page = resource.adaptTo(Page.class);
            if(page != null) {
                lockUnlockPage(page, UNLOCK, resourceResolverFactory);
                removeMetadata(page, resourceResolver);
                saveChanges(resourceResolver);
                return true;
            } else {
                Resource asset = resource.getChild(JCR_CONTENT);
                ModifiableValueMap properties = asset.adaptTo(ModifiableValueMap.class);
                removeProperties(properties);
                saveChanges(resourceResolver);
                return true;
            }
        }
        return false;
    }

}
