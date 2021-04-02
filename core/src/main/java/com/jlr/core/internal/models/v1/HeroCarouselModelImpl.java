package com.jlr.core.internal.models.v1;

import java.util.ArrayList;
import java.util.List;

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
    private boolean enableTco;

    /** The description. */
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String description;

    /** The list. */
    List<CTAPojo> list = new ArrayList<>();

    /**
     * Gets the cta list.
     *
     * @return the cta list
     */
    @Override
    public List<CTAPojo> getCtaList() {
        if (null != ctaList && ctaList.hasChildren()) {
            list = CtaUtils.createCtaList(ctaList, super.getHeaderCopy(), resourceResolver);
        }
        return list;
    }

    /**
     * Gets the enable tco.
     *
     * @return the enable tco
     */
    @Override
    public boolean getEnableTco() {
        return enableTco;
    }

    /**
     * Gets the description.
     *
     * @return the description
     */
    @Override
    public String getDescription() {
        return description;
    }

}
