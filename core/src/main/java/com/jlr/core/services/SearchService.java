package com.jlr.core.services;

import com.jlr.core.pojos.SearchPojo;

import org.apache.sling.api.SlingHttpServletRequest;
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
     * @param request   the request
     * @return the full json
     */
    String getFullJson(String searchText, String locale, SlingHttpServletRequest request);

    /**
     * Process results by rules string.
     *
     * @param searchPojo the search pojo
     * @param request   the request
     * @param locale 
     * @return the string
     */
    String processResultsByRules(SearchPojo searchPojo, SlingHttpServletRequest request, String locale);
}
