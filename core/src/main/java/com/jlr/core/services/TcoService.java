package com.jlr.core.services;

import com.day.cq.wcm.api.Page;
import com.jlr.core.pojos.PricingPojo;
import org.apache.sling.api.resource.ResourceResolver;

public interface TcoService {
    String getModelPrice(PricingPojo pricingPojo,
                         ResourceResolver resourceResolver,
                         Page currentPage);
}
