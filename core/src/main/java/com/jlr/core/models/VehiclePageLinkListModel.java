package com.jlr.core.models;

import org.apache.commons.lang.StringUtils;
import org.osgi.annotation.versioning.ConsumerType;

/**
 * The Interface VehiclePageLinkListModel.
 */
@ConsumerType
public interface VehiclePageLinkListModel {
	
	/**
	 * Gets the vehicle card link.
	 *
	 * @return the vehicle card link
	 */
	default String getVehicleCardLink() {
        return StringUtils.EMPTY;
    }
}
