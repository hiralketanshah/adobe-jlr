package com.jlr.core.internal.models.v1;

import java.util.ArrayList;
import java.util.List;

import javax.inject.Inject;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.Optional;

import com.jlr.core.models.HeroTitleBannerModel;
import com.jlr.core.pojos.CTAPojo;
import com.jlr.core.utils.CtaUtils;

/**
 * The Class HeroTitleBannerImpl.
 */
@Model(adaptables = Resource.class, adapters = {
        HeroTitleBannerModel.class }, resourceType = HeroTitleBannerImpl.RESOURCE_TYPE)
public class HeroTitleBannerImpl extends GlobalModelImpl implements HeroTitleBannerModel {

    /** The Constant RESOURCE_TYPE. */
    public static final String RESOURCE_TYPE = "jlr/components/herotitlebanner/v1/herotitlebanner";
    
    /** The cta list. */
    @Inject
    @Optional
    private Resource ctaList;

    /** The resource resolver. */
    @Inject
    private ResourceResolver resourceResolver;

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
			list = CtaUtils.createCtaList(ctaList, resourceResolver);
		}
		return list;
	}
  
}
