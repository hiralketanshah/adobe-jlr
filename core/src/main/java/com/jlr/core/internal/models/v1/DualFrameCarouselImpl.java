package com.jlr.core.internal.models.v1;

import java.util.ArrayList;
import java.util.List;

import javax.annotation.PostConstruct;
import javax.inject.Inject;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.Optional;

import com.jlr.core.models.DualFrameCarouselModel;
import com.jlr.core.pojos.CTAPojo;
import com.jlr.core.utils.CtaUtils;

@Model(adaptables = Resource.class, adapters = { DualFrameCarouselModel.class}, resourceType = DualFrameCarouselImpl.RESOURCE_TYPE)
public class DualFrameCarouselImpl extends GlobalModelImpl implements DualFrameCarouselModel {

    public static final String RESOURCE_TYPE = "jlr/components/dualframecarousel/v1/dualframecarousel";

    @Inject
    private ResourceResolver resourceResolver;
    
    /** The cta list. */
    @Inject
    @Optional
    private Resource ctaList;
    
    /** The list. */
    List<CTAPojo> list = new ArrayList<>();
    
    /**
     * Inits the Article Model.
     */
    @PostConstruct
    public void init() {
        if (null != ctaList && ctaList.hasChildren()) {
            list =  CtaUtils.createCtaList(ctaList, resourceResolver);
            }
    }

    /**
     * Gets the cta list.
     *
     * @return the cta list
     */

    @Override
    public List<CTAPojo> getCtaList() {
        return list;
    }    
}