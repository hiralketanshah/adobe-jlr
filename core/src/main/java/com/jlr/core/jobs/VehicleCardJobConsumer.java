package com.jlr.core.jobs;

import static com.jlr.core.constants.VehicleCardConstants.JLR_VEHICLE_CARD_ADDED;
import java.util.HashMap;
import java.util.Map;
import java.util.Random;
import javax.jcr.Node;
import javax.jcr.RepositoryException;
import javax.jcr.Session;
import org.apache.sling.api.resource.LoginException;
import org.apache.sling.api.resource.PersistenceException;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.api.resource.ResourceResolverFactory;
import org.apache.sling.event.jobs.Job;
import org.apache.sling.event.jobs.consumer.JobConsumer;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.Reference;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import com.jlr.core.constants.CommonConstants;
import com.jlr.core.constants.ErrorUtilsConstants;
import com.jlr.core.constants.VehicleCardConstants;
import com.jlr.core.utils.ErrorUtils;


/**
 * The Class VehicleCardJobConsumer.
 *
 * @author Adobe
 */
@Component(immediate = true, service = JobConsumer.class, property = {JobConsumer.PROPERTY_TOPICS + "=" + JLR_VEHICLE_CARD_ADDED,})
public class VehicleCardJobConsumer implements JobConsumer {

    /** The Constant LOGGER. */
    private static final Logger LOGGER = LoggerFactory.getLogger(VehicleCardJobConsumer.class);

    /** The resource resolver factory. */
    @Reference
    private ResourceResolverFactory resourceResolverFactory;

    /*
     * (non-Javadoc)
     * 
     * @see org.apache.sling.event.jobs.consumer.JobConsumer#process(org.apache.sling.event.jobs.Job)
     */
    @Override
    public JobResult process(final Job job) {
        final String topic = job.getTopic();
        final String resourcePath = (String) job.getProperty(CommonConstants.PATH_STRING);
        try (ResourceResolver resourceResolver = getResourceResolver(resourceResolverFactory)) {
            Resource resource = resourceResolver.getResource(resourcePath);
            if (resource.isResourceType(VehicleCardConstants.VEHICLECARDCONTAINER_RESOURCETYPE)) {
                Session session = resourceResolver.adaptTo(Session.class);
                try {
                    Node rootNode = session.getNode(resource.getPath());
                    int randomNumber = new Random().nextInt(999999);
                    String uniqueID = String.format("%6d", randomNumber);
                    if (!(rootNode.hasProperty(VehicleCardConstants.UNIQUE_ID))) {
                        rootNode.setProperty(VehicleCardConstants.UNIQUE_ID, uniqueID);
                        session.save();
                        resourceResolver.commit();
                        if (LOGGER.isDebugEnabled()) {
                            LOGGER.debug("Changes successfully saved to {}", resourcePath);
                        }
                    }
                } catch (RepositoryException | PersistenceException e) {
                    LOGGER.error(ErrorUtils.createErrorMessage(ErrorUtilsConstants.AEM_REPOSITORY_EXCEPTION, ErrorUtilsConstants.TECHNICAL,
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
