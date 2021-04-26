package com.jlr.core.models;

import java.util.List;

/**
 * Search Model
 */
public interface SearchModel {
    /**
     * Gets results.
     *
     * @return the results
     */
    List<String> getResults();

    /**
     * Gets relative path.
     *
     * @return the relative path
     */
    String getRelativePath();
}
