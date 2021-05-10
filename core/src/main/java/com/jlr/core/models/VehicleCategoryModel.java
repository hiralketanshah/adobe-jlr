package com.jlr.core.models;

import java.util.List;
import javax.inject.Inject;
import javax.inject.Named;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import com.jlr.core.utils.LinkUtils;

/**
 * The Class VehicleCategoryModel.
 *
 * @author Adobe
 */
@Model(adaptables = Resource.class, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class VehicleCategoryModel {

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
    @Named("vehicleFamily/.")
    List<VehicleFamilyModel> vehicleFamily;

    /**
     * Gets the vehicle family.
     *
     * @return the vehicle family
     */
    public List<VehicleFamilyModel> getVehicleFamily() {
        return vehicleFamily;
    }

    /**
     * Gets the vehicle tab name.
     *
     * @return the vehicle tab name
     */
    public String getVehicleTabName() {
        return vehicleTabName;
    }

    /**
     * Gets the compare text.
     *
     * @return the compare text
     */
    public String getCompareText() {
        return compareText;
    }

    /**
     * Gets the compare link.
     *
     * @return the compare link
     */
    public String getCompareLink() {
        return LinkUtils.appendLinkExtension(compareLink, resourceResolver);
    }

    /**
     * Gets the compare aria label.
     *
     * @return the compare aria label
     */
    public String getCompareAriaLabel() {
        return compareAriaLabel;
    }

    /**
     * Gets the compare target.
     *
     * @return the compare target
     */
    public String getCompareTarget() {
        return compareTarget;
    }

}
