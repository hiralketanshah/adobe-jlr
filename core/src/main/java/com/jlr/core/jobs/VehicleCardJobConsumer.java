package com.jlr.core.jobs;

import com.jlr.core.constants.CommonConstants;
import com.jlr.core.constants.ErrorUtilsConstants;
import com.jlr.core.constants.VehicleCardConstants;
import com.jlr.core.utils.ErrorUtils;
import org.apache.sling.api.resource.*;
import org.apache.sling.event.jobs.Job;
import org.apache.sling.event.jobs.consumer.JobConsumer;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.Reference;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.security.SecureRandom;
import java.util.HashMap;
import java.util.Map;

import static com.jlr.core.constants.VehicleCardConstants.JLR_VEHICLE_CARD_ADDED;

/**
 * The Class VehicleCardJobConsumer.
 *
 * @author Adobe
 */
@Component(
        immediate = true,
        service = JobConsumer.class,
        property = {
                JobConsumer.PROPERTY_TOPICS + "=" + JLR_VEHICLE_CARD_ADDED
        }
)
public class VehicleCardJobConsumer implements JobConsumer {

    /**
     * The Constant LOGGER.
     */
    private static final Logger LOGGER = LoggerFactory.getLogger(
            VehicleCardJobConsumer.class);

    /**
     * The resource resolver factory.
     */
    @Reference
    private ResourceResolverFactory resourceResolverFactory;

    /*
     * (non-Javadoc)
     *
     * @see org.apache.sling.event.jobs.consumer.JobConsumer#process(org.apache.sling.event.jobs.Job)
     */
    @Override
    public JobResult process(final Job job) {
        final String resourcePath = (String) job.getProperty(CommonConstants.PATH_STRING);
        try (ResourceResolver resourceResolver = getResourceResolver(resourceResolverFactory)) {
            Resource resource = resourceResolver.getResource(resourcePath);
            if (resource.isResourceType(VehicleCardConstants.VEHICLECARDCONTAINER_RESOURCETYPE)) {
                try {
                    ModifiableValueMap modVMap =
                            resource.adaptTo(ModifiableValueMap.class);
                    if (null != modVMap) {
                        if (!modVMap.containsKey(VehicleCardConstants.UNIQUE_ID)) {
                            int randomNumber = new SecureRandom().nextInt(999999);
                            String uniqueID = String.format("%6d", randomNumber);
                            modVMap.put(VehicleCardConstants.UNIQUE_ID, uniqueID);
                        }
                    }
                    if (resourceResolver.hasChanges()) {
                        resourceResolver.commit();
                    }
                    resourceResolver.refresh();
                } catch (PersistenceException e) {
                    LOGGER.error(ErrorUtils.createErrorMessage(ErrorUtilsConstants.AEM_PERSISTENCE_EXCEPTION, ErrorUtilsConstants.TECHNICAL,
                            ErrorUtilsConstants.AEM_SITE, ErrorUtilsConstants.MODULE_LISTENER, this.getClass().getSimpleName(), e));
                }
            }
        }
        return JobResult.OK;
    }

    /**
     * Gets the resource resolver.
     *
     * @param resolverFactory the resolver factory
     * @return the resource resolver
     */
    public ResourceResolver getResourceResolver(final ResourceResolverFactory resolverFactory) {
        try {
            Map<String, Object> param = new HashMap<>();
            param.put(ResourceResolverFactory.SUBSERVICE, VehicleCardConstants.VEHICLE_CARD);
            return resolverFactory.getServiceResourceResolver(param);
        } catch (LoginException e) {
            LOGGER.error(ErrorUtils.createErrorMessage(ErrorUtilsConstants.AEM_LOGIN_EXCEPTION, ErrorUtilsConstants.TECHNICAL, ErrorUtilsConstants.AEM_SITE,
                    ErrorUtilsConstants.MODULE_LISTENER, this.getClass().getSimpleName(), e));
        }
        return null;
    }
}
