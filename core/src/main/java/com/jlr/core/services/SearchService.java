package com.jlr.core.services;

import org.apache.sling.api.resource.ResourceResolver;

import java.util.List;
import java.util.Map;

public interface SearchService {

    List<String> getRelatedPages(String searchRoot, String searchText, ResourceResolver resolver, Map<String, String> exclusions);
}
