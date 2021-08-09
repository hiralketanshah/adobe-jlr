package com.jlr.core.internal.services;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import javax.jcr.Session;

import org.apache.commons.lang.StringUtils;
import org.apache.sling.api.resource.LoginException;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.api.resource.ResourceResolverFactory;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.Reference;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.adobe.acs.commons.replication.AgentIdsAgentFilter;
import com.day.cq.replication.ReplicationActionType;
import com.day.cq.replication.ReplicationException;
import com.day.cq.replication.ReplicationOptions;
import com.day.cq.replication.Replicator;
import com.jlr.core.constants.CommonConstants;
import com.jlr.core.constants.ErrorUtilsConstants;
import com.jlr.core.services.DispatcherFlush;
import com.jlr.core.utils.CommonUtils;
import com.jlr.core.utils.ErrorUtils;

@Component(service = DispatcherFlush.class)
public class DispatcherFlushImpl implements DispatcherFlush {

	/** LOGGER */
	private static final Logger LOGGER = LoggerFactory.getLogger(DispatcherFlushImpl.class);

	@Reference
	private ResourceResolverFactory resourceResolverFactory;

	@Reference
	private Replicator replicator;

	@Override
	public void flushDispatcher() {
		try (ResourceResolver serviceResolver = CommonUtils.getServiceResolver(resourceResolverFactory,
				CommonConstants.DISPATCHER_FLUSH_SUBSERVICE)) {
			Resource vehicleResource = serviceResolver
					.getResource(CommonConstants.AU_PUBLISHED_SITES + CommonConstants.VEHICLE_PAGE);
			if (null != vehicleResource) {
				ReplicationOptions replicationOptions = new ReplicationOptions();
				replicationOptions.setSynchronous(Boolean.TRUE);
				List<String> agents = new ArrayList<>();
				agents.add("publish");
				replicationOptions.setFilter(new AgentIdsAgentFilter(agents));
				replicator.replicate(serviceResolver.adaptTo(Session.class), ReplicationActionType.ACTIVATE,
						vehicleResource.getPath(), replicationOptions);
				if (LOGGER.isTraceEnabled()) {
					LOGGER.trace("Dispatcher flush : Replicated path - {}", vehicleResource.getPath());
				}
			}
		} catch (LoginException e) {
			LOGGER.error(ErrorUtils.createErrorMessage(ErrorUtilsConstants.AEM_LOGIN_EXCEPTION,
					ErrorUtilsConstants.TECHNICAL, ErrorUtilsConstants.AEM_SITE, ErrorUtilsConstants.MODULE_SERVICE,
					this.getClass().getSimpleName(), e));
		} catch (ReplicationException e) {
			LOGGER.error(ErrorUtils.createErrorMessage(ErrorUtilsConstants.AEM_REPOSITORY_EXCEPTION,
					ErrorUtilsConstants.TECHNICAL, ErrorUtilsConstants.AEM_SITE, ErrorUtilsConstants.MODULE_SERVICE,
					this.getClass().getSimpleName(), e));
		}
	}
}
