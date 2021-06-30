package com.jlr.core.models;

import java.util.Map;

/**
 * The interface Search config model.
 */
public interface SearchConfigModel {

    /**
     * Gets exclusion.
     *
     * @return the exclusion
     */
    Map<String, String> getExclusion();

    /**
     * Gets priority.
     *
     * @return the priority
     */
    Map<String, String> getPriority();

}
