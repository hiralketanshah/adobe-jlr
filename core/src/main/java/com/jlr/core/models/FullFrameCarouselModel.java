package com.jlr.core.models;

import java.util.ArrayList;
import java.util.List;

import org.apache.commons.lang.StringUtils;
import org.osgi.annotation.versioning.ConsumerType;

import com.jlr.core.pojos.CTAPojo;

/**
 * The Interface FullFrameCarouselModel.
 */
@ConsumerType
public interface FullFrameCarouselModel {

    /**
     * Gets the hero cta.
     *
     * @return the hero cta
     */
    default List<CTAPojo> getCtaList() {
        return new ArrayList<>();
    }

    /**
     * Gets the asset type.
     *
     * @return the asset type
     */
    default String getAssetType() {
        return StringUtils.EMPTY;
    }

}