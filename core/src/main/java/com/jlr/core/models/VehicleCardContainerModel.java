package com.jlr.core.models;

import org.apache.commons.lang.StringUtils;

/**
 * The interface Vehicle card container model.
 */
public interface VehicleCardContainerModel {
    /**
     * Gets vehicle card json.
     *
     * @return the vehicle card json
     */
    default String getVehicleCardJson() {
        return StringUtils.EMPTY;
    }
}
