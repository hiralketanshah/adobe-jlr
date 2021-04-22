package com.jlr.core.models;

import java.util.ArrayList;
import java.util.List;
import org.osgi.annotation.versioning.ConsumerType;

/**
 * The Interface InteractiveOptionPickerModel.
 */
@ConsumerType
public interface InteractiveOptionPickerModel {


    default List<String> getOptionImageList() {
        return new ArrayList<>();
    }
}
