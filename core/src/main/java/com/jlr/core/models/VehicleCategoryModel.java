package com.jlr.core.models;

import java.util.ArrayList;
import java.util.List;

import org.apache.commons.lang.StringUtils;
import org.osgi.annotation.versioning.ConsumerType;

/**
 * The Interface VehicleCategoryModel.
 */
@ConsumerType
public interface VehicleCategoryModel {
	
	/**
	 * Gets the vehicle tab name.
	 *
	 * @return the vehicle tab name
	 */
	default String getVehicleTabName() {
        return StringUtils.EMPTY;
    }
	
	/**
	 * Gets the vehicle family.
	 *
	 * @return the vehicle family
	 */
	default List<VehicleFamilyModel> getVehicleFamily() {
        return new ArrayList<>();
    }
	
	/**
	 * Gets the compare text.
	 *
	 * @return the compare text
	 */
	default String getCompareText() {
        return StringUtils.EMPTY;
    }
	
	/**
	 * Gets the compare link.
	 *
	 * @return the compare link
	 */
	default String getCompareLink() {
        return StringUtils.EMPTY;
    }
	
	/**
	 * Gets the compare aria label.
	 *
	 * @return the compare aria label
	 */
	default String getCompareAriaLabel() {
        return StringUtils.EMPTY;
    }
	
	/**
	 * Gets the compare target.
	 *
	 * @return the compare target
	 */
	default String getCompareTarget() {
        return StringUtils.EMPTY;
    }

}
