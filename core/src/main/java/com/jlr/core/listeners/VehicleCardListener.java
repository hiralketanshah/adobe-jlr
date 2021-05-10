package com.jlr.core.listeners;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.apache.sling.api.resource.observation.ResourceChange;
import org.apache.sling.api.resource.observation.ResourceChangeListener;
import org.apache.sling.event.jobs.JobManager;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.Reference;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import com.jlr.core.constants.VehicleCardConstants;


/**
 * The listener interface for receiving vehicleCard events. The class that is interested in processing a vehicleCard event implements this interface, and the
 * object created with that class is registered with a component using the component's <code>addVehicleCardListener<code> method. When the vehicleCard event
 * occurs, that object's appropriate method is invoked.
 *
 * @see VehicleCardEvent
 */
@Component(immediate = true, service = ResourceChangeListener.class,
                property = {ResourceChangeListener.PATHS + "=glob:/content/landrover/**/jcr:content/root/container/vehiclecardcontainer*",
                                ResourceChangeListener.CHANGES + "=ADDED"})
public class VehicleCardListener implements ResourceChangeListener {

    /** The Constant LOGGER. */
    protected static final Logger LOGGER = LoggerFactory.getLogger(VehicleCardListener.class);

    /** The job manager. */
    @Reference
    private JobManager jobManager;

    /*
     * (non-Javadoc)
     * 
     * @see org.apache.sling.api.resource.observation.ResourceChangeListener#onChange(java.util.List)
     */
    @Override
    public void onChange(List<ResourceChange> resourceChangeList) {
        for (ResourceChange resourceChange : resourceChangeList) {
            final Map<String, Object> jobProps = new HashMap<>();
            final String resourcePath = resourceChange.getPath();
            jobProps.put("path", resourcePath);
            jobManager.addJob(VehicleCardConstants.JLR_VEHICLE_CARD_ADDED, jobProps);
            if (LOGGER.isDebugEnabled()) {
                LOGGER.debug("The Job created to process component : {}", resourcePath);
            }
        }
    }
}
