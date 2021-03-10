package com.jlr.core.internal.models.v1;

import java.util.ArrayList;
import java.util.List;

import javax.annotation.PostConstruct;
import javax.inject.Inject;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.Optional;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

import com.jlr.core.models.HeroCarouselModel;
import com.jlr.core.pojos.CTAPojo;
import com.jlr.core.utils.CtaUtils;

/**
 * The Class HeroCarouselModelImpl.
 */
@Model(adaptables = Resource.class, adapters = {
		HeroCarouselModel.class }, resourceType = HeroCarouselModelImpl.RESOURCE_TYPE)
public class HeroCarouselModelImpl extends GlobalModelImpl implements HeroCarouselModel {

    /** The Constant RESOURCE_TYPE. */
    public static final String RESOURCE_TYPE = "jlr/components/herocarousel/v1/herocarousel";
    
    /** The cta list. */
    @Inject
    @Optional
    private Resource ctaList;

    /** The resource resolver. */
    @Inject
    private ResourceResolver resourceResolver;
    
    /** The enable TCO. */
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String enableTco;
    
    /** The description. */
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String description;

    /** The list. */
    List<CTAPojo> list = new ArrayList<>();

    /**
     * Inits the.
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
    @Override
	public String getEnableTco() {
		return enableTco;
	}
    @Override
	public String getDescription() {
		return description;
	}
  
  
}
