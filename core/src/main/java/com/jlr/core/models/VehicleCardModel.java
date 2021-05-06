package com.jlr.core.models;

import org.apache.commons.lang.StringUtils;

/**
 * The type Vehicle card model.
 */
public interface VehicleCardModel {

    /**
     * Gets vehicle card json.
     *
     * @return the vehicle card json
     */
    default String getVehicleCardJson() {
        return StringUtils.EMPTY;
    }

}
