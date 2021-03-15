package com.jlr.core.models;

import org.apache.commons.lang.StringUtils;
import org.osgi.annotation.versioning.ConsumerType;

/**
 * The Interface ArticleModel.
 */
@ConsumerType
public interface ArticleModel {

    /**
     * Gets the image position.
     *
     * @return the image position
     */
    default String getImagePosition() {
        return StringUtils.EMPTY;
    }

    /**
     * Gets the hide image.
     *
     * @return the hide image
     */
    default boolean getHideImage() {
        return false;
    }
}
