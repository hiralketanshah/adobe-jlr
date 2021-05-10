package com.jlr.core.models;

import java.util.ArrayList;
import java.util.List;
import org.apache.commons.lang.StringUtils;
import org.osgi.annotation.versioning.ConsumerType;

/**
 * The Interface TcoModel.
 *
 * @author Adobe
 */
@ConsumerType
public interface TcoModel {

    /**
     * Gets the caveats.
     *
     * @return the caveats
     */
    default List<String> getCaveats() {
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
     * Gets the price desc symbol.
     *
     * @return the price desc symbol
     */
    default String getPriceDescSymbol() {
        return StringUtils.EMPTY;
    }

    /**
     * Gets the price suffix.
     *
     * @return the price suffix
     */
    default String getPriceSuffix() {
        return StringUtils.EMPTY;
    }

    /**
     * Gets the view type.
     *
     * @return the view type
     */
    default String getViewType() {
        return StringUtils.EMPTY;
    }

    /**
     * Gets the emission head.
     *
     * @return the emission head
     */
    default String getEmissionHead() {
        return StringUtils.EMPTY;
    }

    /**
     * Gets the emission body.
     *
     * @return the emission body
     */
    default String getEmissionBody() {
        return StringUtils.EMPTY;
    }

    /**
     * Gets the lease label.
     *
     * @return the lease label
     */
    default String getLeaseLabel() {
        return StringUtils.EMPTY;
    }

    /**
     * Gets the lease price.
     *
     * @return the lease price
     */
    default String getLeasePrice() {
        return StringUtils.EMPTY;
    }

}
