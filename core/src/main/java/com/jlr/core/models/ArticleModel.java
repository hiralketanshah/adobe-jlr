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
     * Gets the content type.
     *
     * @return the content type
     */
    default String getAssestType() {
        return StringUtils.EMPTY;
    }

    /**
     * Gets the video type.
     *
     * @return the video type
     */
    default String getVideoType() {
        return StringUtils.EMPTY;
    }
}
