package com.jlr.core.models;

import java.util.ArrayList;
import java.util.List;

/**
 * The Interface TabbedContainerModel.
 */
public interface TabbedContainerModel {

    default List<String> getTabHeading() {
        return new ArrayList<>();
    }
}
