package com.jlr.core.models;

import java.util.ArrayList;
import java.util.List;

import org.apache.commons.lang.StringUtils;
import org.osgi.annotation.versioning.ConsumerType;

import com.jlr.core.pojos.CTAPojo;

/**
 * The Interface ArticleModel.
 */
@ConsumerType
public interface ArticleModel {

    /**
     * Gets the cta list.
     *
     * @return the cta list
     */
    default List<CTAPojo> getCtaList() {
        return new ArrayList<>();
    }

    /**
     * Gets the title.
     *
     * @return the title
     */
    default String getTitle() {
        return StringUtils.EMPTY;
    }

    /**
     * Gets the subtitle.
     *
     * @return the subtitle
     */
    default String getSubtitle() {
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
