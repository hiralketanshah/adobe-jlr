package com.jlr.core.services;

import com.day.cq.commons.inherit.InheritanceValueMap;
import com.day.cq.wcm.api.Page;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.ResourceResolver;

import java.util.Map;

/**
 * The interface Tco service.
 */
public interface TcoService {

    /**
     * Gets model price.
     *
     * @param resourceResolver the resource resolver
     * @param request          the request
     * @param currentPage      the current page
     * @param pageProperties   the page properties
     * @param priceMacro       the price macro
     * @param configKey        the config key
     * @return the model price
     */
    Map<String,String> getModelPrice(ResourceResolver resourceResolver,
                                     SlingHttpServletRequest request,
                                     Page currentPage, InheritanceValueMap pageProperties,
                                     String priceMacro, String configKey);
}
