package com.jlr.core.internal.models.v1;

import java.util.List;

import javax.inject.Inject;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;

import com.jlr.core.models.VehicleCategoryModel;
import com.jlr.core.models.VehicleFamilyModel;
import com.jlr.core.utils.LinkUtils;

/**
 * The Class VehicleCategoryModel.
 *
 * @author Adobe
 */
@Model(adaptables = Resource.class, adapters = {VehicleCategoryModel.class}, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class VehicleCategoryModelImpl implements VehicleCategoryModel{

    /** The resource resolver. */
    @Inject
    private ResourceResolver resourceResolver;

    /** The vehicle tab name. */
    @Inject
    private String vehicleTabName;

    /** The compare text. */
    @Inject
    private String compareText;

    /** The compare link. */
    @Inject
    private String compareLink;

    /** The compare aria label. */
    @Inject
    private String compareAriaLabel;

    /** The compare target. */
    @Inject
    private String compareTarget;

    /** The vehicle family. */
    @Inject
    List<VehicleFamilyModel> vehicleFamily;

    /**
     * Gets the vehicle family.
     *
     * @return the vehicle family
     */
    @Override
    public List<VehicleFamilyModel> getVehicleFamily() {
        return vehicleFamily;
    }

    /**
     * Gets the vehicle tab name.
     *
     * @return the vehicle tab name
     */
    @Override
    public String getVehicleTabName() {
        return vehicleTabName;
    }

    /**
     * Gets the compare text.
     *
     * @return the compare text
     */
    @Override
    public String getCompareText() {
        return compareText;
    }

    /**
     * Gets the compare link.
     *
     * @return the compare link
     */
    @Override
    public String getCompareLink() {
        return LinkUtils.appendLinkExtension(compareLink, resourceResolver);
    }

    /**
     * Gets the compare aria label.
     *
     * @return the compare aria label
     */
    @Override
    public String getCompareAriaLabel() {
        return compareAriaLabel;
    }

    /**
     * Gets the compare target.
     *
     * @return the compare target
     */
    @Override
    public String getCompareTarget() {
        return compareTarget;
    }

}
