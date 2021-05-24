package com.jlr.core.models;

import java.util.ArrayList;
import java.util.List;

import org.apache.commons.lang.StringUtils;

import com.jlr.core.pojos.CTAPojo;
import com.jlr.core.pojos.FooterPojo;

/**
 * The Interface HeroItemModel.
 *
 * @author Adobe
 */
public interface HeroItemModel {

    /**
     * Gets the cta list.
     *
     * @return the cta list
     */
    default List<CTAPojo> getCtaList() {
        return new ArrayList<>();
    }

    /**
     * Gets the footer list.
     *
     * @return the footer list
     */
    default List<FooterPojo> getFooterList() {
        return new ArrayList<>();
    }

    /**
     * Gets caveat.
     *
     * @return the caveat
     */
    default String getCaveat() {
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
