package com.jlr.core.models;

import org.apache.commons.lang.StringUtils;
import org.osgi.annotation.versioning.ConsumerType;

/**
 * The Interface PriceModel.
 *
 * @author Adobe
 */
@ConsumerType
public interface PriceModel {

    default String getPrice() {
        return StringUtils.EMPTY;
    }

    default String getCookie() {
        return StringUtils.EMPTY;
    }
}
