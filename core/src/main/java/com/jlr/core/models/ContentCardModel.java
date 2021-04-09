package com.jlr.core.models;

import java.util.ArrayList;
import java.util.List;

import org.apache.commons.lang.StringUtils;
import org.osgi.annotation.versioning.ConsumerType;

import com.jlr.core.pojos.CTAPojo;

/**
 * The Interface ContentCardModel.
 */
@ConsumerType
public interface ContentCardModel {

    /**
     * Gets the cta list.
     *
     * @return the cta list
     */
    default List<CTAPojo> getCtaList() {
        return new ArrayList<>();
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
