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
     * Gets the price.
     *
     * @return the price
     */
    default String getModelPrice() {
        return StringUtils.EMPTY;
    }
}
