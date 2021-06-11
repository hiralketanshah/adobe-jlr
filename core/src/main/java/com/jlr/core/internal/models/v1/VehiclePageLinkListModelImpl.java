package com.jlr.core.internal.models.v1;

import javax.inject.Inject;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;

import com.jlr.core.models.VehiclePageLinkListModel;

/**
 * The Class VehiclePageLinkList.
 *
 * @author Adobe
 */
@Model(adaptables = Resource.class, adapters = {VehiclePageLinkListModel.class}, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class VehiclePageLinkListModelImpl implements VehiclePageLinkListModel{

    /** The vehicle card link. */
    @Inject
    private String vehicleCardLink;

    /**
     * Gets the vehicle card link.
     *
     * @return the vehicle card link
     */
    @Override
    public String getVehicleCardLink() {
        return vehicleCardLink;
    }

}
