package com.jlr.core.services;

import com.jlr.core.pojos.SearchPojo;
import org.apache.sling.api.resource.ResourceResolver;

public interface SearchService {

    String getFullJson(String searchText, ResourceResolver resolver);

    String processResultsByRules(SearchPojo searchPojo, ResourceResolver resolver);
}
