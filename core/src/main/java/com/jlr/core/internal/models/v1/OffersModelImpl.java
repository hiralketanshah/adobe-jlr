package com.jlr.core.internal.models.v1;

import java.util.ArrayList;
import java.util.List;

import javax.inject.Inject;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;

import com.jlr.core.models.OffersList;
import com.jlr.core.models.OffersModel;
import com.jlr.core.pojos.CTAPojo;
import com.jlr.core.utils.CtaUtils;

/**
 * The Class OffersModelImpl.
 */
@Model(adaptables = Resource.class, adapters = {OffersModel.class}, resourceType = OffersModelImpl.RESOURCE_TYPE,
defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class OffersModelImpl extends GlobalModelImpl implements OffersModel {
	
	/** The Constant RESOURCE_TYPE. */
	public static final String RESOURCE_TYPE = "jlr/components/offers/v1/offers";
	
	/** The list. */
	List<CTAPojo> list = new ArrayList<>();
	
	/** The offer list. */
	@Inject
	public List<OffersList> offerList = new ArrayList<>();
	
	/** The resource resolver. */
	@Inject
    private ResourceResolver resourceResolver;
	
	/** The cta list. */
	@Inject
    private Resource ctaList;
	
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
	 * Gets the offer list.
	 *
	 * @return the offer list
	 */
	@Override
    public List<OffersList> getOfferList() {
		return offerList;
	}

}
