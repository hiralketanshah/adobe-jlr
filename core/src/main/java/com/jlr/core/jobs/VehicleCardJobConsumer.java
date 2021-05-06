package com.jlr.core.jobs;

import com.jlr.core.constants.CommonConstants;
import org.apache.sling.api.resource.*;
import org.apache.sling.event.jobs.Job;
import org.apache.sling.event.jobs.consumer.JobConsumer;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.Reference;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.jcr.Node;
import javax.jcr.RepositoryException;
import javax.jcr.Session;
import java.util.HashMap;
import java.util.Map;
import java.util.Random;

import static com.jlr.core.constants.CommonConstants.JLR_VEHICLE_CARD_ADDED;

@Component(
        immediate = true,
        service = JobConsumer.class,
        property = {
                JobConsumer.PROPERTY_TOPICS + "="+JLR_VEHICLE_CARD_ADDED,
        }
)
public class VehicleCardJobConsumer implements JobConsumer {
    private static final Logger LOGGER = LoggerFactory.getLogger(
            VehicleCardJobConsumer.class);

    @Reference
    private ResourceResolverFactory resourceResolverFactory;

    @Override
    public JobResult process(final Job job) {
        final String topic = job.getTopic();
        LOGGER.info("Consuming job of topic: {}", topic);
        final String resourcePath = (String) job.getProperty("path");
        try (ResourceResolver resourceResolver =
                     getResourceResolver(resourceResolverFactory)) {
            Resource resource = resourceResolver.getResource(resourcePath);
            if (resource.isResourceType("jlr/components/primarynavigation/v1/vehiclecardcontainer")) {
                Session session = resourceResolver.adaptTo(Session.class);
                try {
                    Node rootNode = session.getNode(resource.getPath());
                    int number = new Random().nextInt(999999);
                    String uniqueID = String.format("%6d", number);
                    if (!(rootNode.hasProperty(CommonConstants.UNIQUE_ID))) {
                        rootNode.setProperty(CommonConstants.UNIQUE_ID, uniqueID);
                        session.save();
                        resourceResolver.commit();
                    }
                } catch (RepositoryException | PersistenceException e) {
                    LOGGER.info("Error while data saved to {}", resourcePath);
                }
            }
            LOGGER.info("Changes successfully saved to {}", resourcePath);
        }
        return JobResult.OK;
    }

    public static ResourceResolver getResourceResolver(
            final ResourceResolverFactory resolverFactory) {
        try {
            Map<String, Object> param = new HashMap<>();
            param.put(ResourceResolverFactory.SUBSERVICE, "vehicle-card");
            return resolverFactory.getServiceResourceResolver(param);
        } catch (LoginException e) {
            LOGGER.error("Login exception when trying to create a resource "
                    + "resolver for sub service: vehicle-card-service");
        }
        return null;
    }
}
