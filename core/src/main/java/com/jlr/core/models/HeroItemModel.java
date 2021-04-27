package com.jlr.core.models;

import java.util.ArrayList;
import java.util.List;

import com.jlr.core.pojos.CTAPojo;
import com.jlr.core.pojos.FooterPojo;
import org.apache.commons.lang.StringUtils;

/**
 * The Interface HeroItemModel.
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
}
