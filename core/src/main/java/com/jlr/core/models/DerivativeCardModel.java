package com.jlr.core.models;

import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import org.apache.commons.lang.StringUtils;
import org.osgi.annotation.versioning.ConsumerType;

import com.jlr.core.pojos.CTAPojo;

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

    default Map<String, Map<String, String>> getEngineDataList() {
        return new LinkedHashMap<>();
    }

    default String getSpecsAtaGlanceHeading() {
        return StringUtils.EMPTY;
    }

    /**
     * Gets the price.
     *
     * @return the price
     */
    default String getPrice() {
        return StringUtils.EMPTY;
    }

    /**
     * Gets the price config value.
     *
     * @return the price config value
     */
    default String getPriceConfigValue() {
        return StringUtils.EMPTY;
    }
}
