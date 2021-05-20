package com.jlr.core.services;

import com.day.cq.commons.inherit.InheritanceValueMap;
import com.day.cq.wcm.api.Page;
import org.apache.sling.api.resource.ResourceResolver;

public interface TcoService {
    String getModelPrice(ResourceResolver resourceResolver,
                         Page currentPage, InheritanceValueMap pageProperties, String priceMacro);
}
