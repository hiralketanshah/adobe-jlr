package com.jlr.core.replication.impl;

import org.apache.commons.lang3.StringUtils;
import org.apache.sling.api.resource.LoginException;
import org.apache.sling.api.resource.ModifiableValueMap;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.api.resource.ResourceResolverFactory;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.Reference;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import com.day.cq.commons.jcr.JcrConstants;
import com.day.cq.dam.api.DamConstants;
import com.day.cq.replication.Preprocessor;
import com.day.cq.replication.ReplicationAction;
import com.day.cq.replication.ReplicationActionType;
import com.day.cq.replication.ReplicationException;
import com.day.cq.replication.ReplicationOptions;
import com.day.cq.wcm.api.NameConstants;
import com.jlr.core.constants.CommonConstants;
import com.jlr.core.utils.CommonUtils;

@Component(immediate = true)
public class JLRReplicationPreProcessor implements Preprocessor {
    private static final Logger LOGGER = LoggerFactory.getLogger(JLRReplicationPreProcessor.class);

    private static final String RESOURCE_UNAPPROVED_MESSAGE = "Page/Asset is not approved or scheduled deployment time not met!";

    @Reference
    private ResourceResolverFactory resourceResolverFactory;


    @Override
    public void preprocess(final ReplicationAction replicationAction, final ReplicationOptions replicationOptions) throws ReplicationException {

        LOGGER.debug("Path of Resource being replicated is {}", replicationAction.getPath());
        LOGGER.debug("ReplicationAction is {}", replicationAction.getType());

        String actionPath = replicationAction.getPath();

        if (replicationAction == null || !ReplicationActionType.ACTIVATE.equals(replicationAction.getType())
                        || !StringUtils.contains(actionPath, CommonConstants.JLR_CONTENT_PATH)
                        || !StringUtils.contains(actionPath, CommonConstants.JLR_DAM_PATH) || !StringUtils.contains(actionPath, CommonConstants.JLR_XF_PATH)) {
            LOGGER.trace("Path of Resource being replicated is {}", actionPath);
            return;
        }

        ResourceResolver resourceResolver = null;

        try {
            resourceResolver = CommonUtils.getServiceResolver(resourceResolverFactory, CommonConstants.WF_PROCESS_SUBSERVICE);
            final Resource resource = resourceResolver.getResource(actionPath);
            if (resource.adaptTo(ModifiableValueMap.class).get(JcrConstants.JCR_PRIMARYTYPE).toString().equals(NameConstants.NT_PAGE)
                            || resource.adaptTo(ModifiableValueMap.class).get(JcrConstants.JCR_PRIMARYTYPE).toString().equals(DamConstants.NT_DAM_ASSET)) {
                if (isResourceApproved(resource)) {
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


    private Boolean isResourceApproved(Resource resource) {
        // TODO : Check if the approved flag is present in page properties and if the replication time is greater than the scheduled replication time property
        return true;


    }

}
