package com.jlr.core.models;

import java.util.ArrayList;
import java.util.List;
import org.apache.commons.lang.StringUtils;
import org.osgi.annotation.versioning.ConsumerType;
import com.jlr.core.pojos.InteractiveOptionPickerItemPojo;

/**
 * The Interface InteractiveOptionPickerModel.
 */
@ConsumerType
public interface InteractiveOptionPickerModel {


    default List<InteractiveOptionPickerItemPojo> getOptionImageList() {
        return new ArrayList<>();
    }

    default String getOptionListAsJson() {
        return StringUtils.EMPTY;
    }
}
