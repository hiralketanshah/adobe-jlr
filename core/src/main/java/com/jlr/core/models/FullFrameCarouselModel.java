package com.jlr.core.models;

import org.apache.commons.lang.StringUtils;
import org.osgi.annotation.versioning.ConsumerType;

/**
 * The Interface FullFrameCarouselModel.
 */
@ConsumerType
public interface FullFrameCarouselModel {

    /**
     * Gets the background image.
     *
     * @return the background image
     */
    default String getBackgroundImage() {
        return StringUtils.EMPTY;
    }
    
}