package com.jlr.core.models;

import java.util.ArrayList;
import java.util.List;

import org.apache.commons.lang.StringUtils;

import com.jlr.core.pojos.CTAPojo;
import com.jlr.core.pojos.FooterPojo;

/**
 * The Interface HeroTitleBannerModel.
 */
public interface HeroTitleBannerModel {

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
}
