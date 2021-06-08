package com.jlr.core.models;

import java.util.ArrayList;
import java.util.List;

import org.apache.commons.lang.StringUtils;
import org.osgi.annotation.versioning.ConsumerType;

/**
 * The Interface VehicleFamilyModel.
 */
@ConsumerType
public interface VehicleFamilyModel {
	
	/**
	 * Gets the vehicle family name.
	 *
	 * @return the vehicle family name
	 */
	default String getVehicleFamilyName() {
        return StringUtils.EMPTY;
    }
	
	/**
	 * Gets the vehicles list.
	 *
	 * @return the vehicles list
	 */
	default List<VehiclePageLinkListModel> getVehiclesList() {
        return new ArrayList<>();
    }

}
