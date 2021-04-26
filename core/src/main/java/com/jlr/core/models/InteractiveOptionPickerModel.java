package com.jlr.core.models;

import org.apache.commons.lang.StringUtils;
import org.osgi.annotation.versioning.ConsumerType;

/**
 * The Interface InteractiveOptionPickerModel.
 */
@ConsumerType
public interface InteractiveOptionPickerModel {



    default String getOptionListAsJson() {
        return StringUtils.EMPTY;
    }
}
