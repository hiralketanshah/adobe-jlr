package com.jlr.core.models;

import java.util.ArrayList;
import java.util.List;

import org.apache.commons.lang.StringUtils;
import org.osgi.annotation.versioning.ConsumerType;

import com.jlr.core.pojos.CTAPojo;

import javax.jcr.RepositoryException;

/**
 * The Interface ContentCardModel.
 *
 * @author Adobe
 */
@ConsumerType
public interface ContentCardModel {

    /**
     * Gets the content card list.
     *
     * @return the content card list
     */
    default List<ContentCardListModel> getContentCardList() {
        return new ArrayList<>();
    }

    /**
     * Gets the column.
     *
     * @return the column
     */
    default String getColumn() {
        return StringUtils.EMPTY;
    }
    
    /**
     * Gets the enable pricing.
     *
     * @return the enable pricing
     */
    default String getEnablePricing() {
        return StringUtils.EMPTY;
    }

    /**
     * Gets the enable stacking.
     *
     * @return the enable stacking
     */
    default String getEnableStacking() {
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

    default boolean getFirstPosition() throws RepositoryException { return false; }
}
