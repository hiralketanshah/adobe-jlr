package com.jlr.core.models;

import org.apache.commons.lang.StringUtils;
import org.osgi.annotation.versioning.ConsumerType;

/**
 * The Interface AccoladeModel.
 */
@ConsumerType
public interface AccoladeModel {

    /**
     * Gets the date.
     *
     * @return the date
     */
    default String getDate() {
        return StringUtils.EMPTY;
    }

    /**
     * Gets the background image.
     *
     * @return the background image
     */
    default String getBackgroundImage() {
        return StringUtils.EMPTY;
    }
}
