package com.jlr.core.models;

import java.util.ArrayList;
import java.util.List;

import org.apache.commons.lang.StringUtils;
import org.osgi.annotation.versioning.ConsumerType;

import com.jlr.core.pojos.CTAPojo;
import com.jlr.core.pojos.DerivativeEnginePojo;

/**
 * The Interface DerivativeCardModel.
 *
 * @author Adobe
 */
@ConsumerType
public interface DerivativeCardModel {

    /**
     * Gets the image position.
     *
     * @return the image position
     */
    default String getCaveat() {
        return StringUtils.EMPTY;
    }

    /**
     * Gets the asset type.
     *
     * @return the asset type
     */
    default String getLeftColumn() {
        return StringUtils.EMPTY;
    }

    default String getRightColumn() {
        return StringUtils.EMPTY;
    }

    /**
     * Gets the cta list.
     *
     * @return the cta list
     */
    default List<CTAPojo> getCtaList() {
        return new ArrayList<>();
    }

    default List<String> getEngineNames() {
        return new ArrayList<>();
    }

    default List<DerivativeEnginePojo> getEngineDataList() {
        return new ArrayList<>();
    }

    default String getSpecsAtaGlanceHeading() {
        return StringUtils.EMPTY;
    }

    default boolean getOverride() {
        return false;
    }

    default String getFeatureLabel() {
        return StringUtils.EMPTY;
    }
}
