package com.jlr.core.models;

import java.util.ArrayList;
import java.util.List;
import org.apache.commons.lang.StringUtils;
import com.jlr.core.pojos.CTAPojo;

/**
 * The Interface SnippetModel.
 *
 * @author Adobe
 */
public interface SnippetModel {

    /**
     * Gets the cta list.
     *
     * @return the cta list
     */
    default List<CTAPojo> getCtaList() {
        return new ArrayList<>();
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
     * Gets the market region path.
     *
     * @return the market region path
     */
    default String getMarketRegionPath() {
        return StringUtils.EMPTY;
    }

}
