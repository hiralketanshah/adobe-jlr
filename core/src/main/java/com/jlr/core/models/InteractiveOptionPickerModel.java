package com.jlr.core.models;

import org.apache.commons.lang.StringUtils;
import org.osgi.annotation.versioning.ConsumerType;

// TODO: Auto-generated Javadoc
/**
 * The Interface InteractiveOptionPickerModel.
 *
 * @author Adobe
 */
@ConsumerType
public interface InteractiveOptionPickerModel {



    /**
     * Gets the option list as json.
     *
     * @return the option list as json
     */
    default String getOptionListAsJson() {
        return StringUtils.EMPTY;
    }
}
