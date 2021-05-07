package com.jlr.core.models;

import org.apache.commons.lang.StringUtils;

/**
 * The interface Vehicle card container model.
 *
 * @author Adobe
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

    /**
     * Gets vehicle card script.
     *
     * @return the vehicle card script
     */
    default String getVehicleCardScript() {
        return StringUtils.EMPTY;
    }

    /**
     * Gets unique id.
     *
     * @return the unique id
     */
    default String getUniqueID() {
        return StringUtils.EMPTY;
    }

    /**
     * Gets vehicle image reference.
     *
     * @return the vehicle image reference
     */
    default String getVehicleImageReference() {
        return StringUtils.EMPTY;
    }

    /**
     * Gets vehicle image link.
     *
     * @return the vehicle image link
     */
    default String getVehicleImageLink() {
        return StringUtils.EMPTY;
    }
}
