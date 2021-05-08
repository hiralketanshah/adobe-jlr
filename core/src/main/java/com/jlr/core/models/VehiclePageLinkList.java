package com.jlr.core.models;

import javax.inject.Inject;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;

/**
 * The Class VehiclePageLinkList.
 *
 * @author Adobe
 */
@Model(adaptables = Resource.class, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class VehiclePageLinkList {

    /** The vehicle card link. */
    @Inject
    private String vehicleCardLink;

    /**
     * Gets the vehicle card link.
     *
     * @return the vehicle card link
     */
    public String getVehicleCardLink() {
        return vehicleCardLink;
    }

}
