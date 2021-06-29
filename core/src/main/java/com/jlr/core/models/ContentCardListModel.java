package com.jlr.core.models;

import java.util.ArrayList;
import java.util.List;

import org.apache.commons.lang.StringUtils;
import org.osgi.annotation.versioning.ConsumerType;

import com.jlr.core.pojos.CTAPojo;

/**
 * The Interface ContentCardListModel.
 */
@ConsumerType
public interface ContentCardListModel extends GlobalModel {

    /**
     * Gets the cta list.
     *
     * @return the cta list
     */
    default List<CTAPojo> getCtaList() {
        return new ArrayList<>();
    }

    /**
     * Gets the assest type.
     *
     * @return the assest type
     */
    default String getAssestType() {
        return StringUtils.EMPTY;
    }

    /**
     * Gets the poster image.
     *
     * @return the poster image
     */
    @Override
    default String getPosterImage() {
        return StringUtils.EMPTY;
    }

    /**
     * Gets the first cta link.
     *
     * @return the first cta link
     */
    default String getFirstCtaLink() {
        return StringUtils.EMPTY;
    }

    /**
     * Gets the gallery link.
     *
     * @return the gallery link
     */
    default String getGalleryLink() {
        return StringUtils.EMPTY;
    }

}
