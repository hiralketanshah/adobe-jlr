package com.jlr.core.models;

import java.util.ArrayList;
import java.util.List;

import org.apache.commons.lang3.StringUtils;

import com.jlr.core.pojos.CTAPojo;

/**
 * The Interface VehicleSummaryModel.
 *
 * @author Adobe
 */
public interface VehicleSummaryModel {

    /**
     * Gets the cta list.
     *
     * @return the cta list
     */
    default List<CTAPojo> getCtaList() {
        return new ArrayList<>();
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
