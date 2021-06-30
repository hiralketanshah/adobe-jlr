package com.jlr.core.services;

import com.jlr.core.pojos.SearchPojo;
import org.apache.sling.api.resource.ResourceResolver;

/**
 * The interface Search service.
 */
public interface SearchService {

    /**
     * Gets full json.
     *
     * @param searchText the search text
     * @param locale     the locale
     * @param resolver   the resolver
     * @return the full json
     */
    String getFullJson(String searchText, String locale, ResourceResolver resolver);

    /**
     * Process results by rules string.
     *
     * @param searchPojo the search pojo
     * @param resolver   the resolver
     * @return the string
     */
    String processResultsByRules(SearchPojo searchPojo, ResourceResolver resolver);
}
