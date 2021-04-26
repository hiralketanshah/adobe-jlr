package com.jlr.core.models;

import java.util.ArrayList;
import java.util.List;

import com.jlr.core.pojos.CTAPojo;
import com.jlr.core.pojos.FooterPojo;

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
}
