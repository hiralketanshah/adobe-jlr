package com.jlr.core.listeners;

import com.jlr.core.constants.CommonConstants;
import org.apache.sling.api.resource.observation.ResourceChange;
import org.apache.sling.api.resource.observation.ResourceChangeListener;
import org.apache.sling.event.jobs.JobManager;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.ConfigurationPolicy;
import org.osgi.service.component.annotations.Reference;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Component(
        immediate = true,
        service = ResourceChangeListener.class,
        property = {
                ResourceChangeListener.PATHS
                        + "=glob:/content/landrover/**/jcr:content/root/container/vehiclecardcontainer*",
                ResourceChangeListener.CHANGES + "=ADDED"
        }
)
public class VehicleCardListener implements ResourceChangeListener {

        protected static final Logger LOG = LoggerFactory.getLogger(
                VehicleCardListener.class);

        @Reference
        private JobManager jobManager;

        @Override
        public void onChange(List<ResourceChange> resourceChangeList) {
                for (ResourceChange resourceChange : resourceChangeList) {
                        final Map<String, Object> jobProps = new HashMap<>();
                        final String resourcePath = resourceChange.getPath();
                        jobProps.put("path", resourcePath);
                        jobManager.addJob(CommonConstants.JLR_VEHICLE_CARD_ADDED, jobProps);
                        LOG.debug(
                                "The Job created to process component : {}",
                                resourcePath);
                }
        }
}
