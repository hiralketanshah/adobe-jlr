package com.jlr.core.models;

import java.util.ArrayList;
import java.util.List;

import javax.inject.Inject;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import com.jlr.core.internal.models.v1.GlobalModelImpl;
import com.jlr.core.pojos.CTAPojo;
import com.jlr.core.utils.CtaUtils;

/**
 * The Class ContentCardListModel.
 */
@Model(adaptables = Resource.class, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class ContentCardListModel extends GlobalModelImpl{
	
	/** The resource resolver. */
	@Inject
    private ResourceResolver resourceResolver;
	
	/** The assest type. */
	@Inject
    private String assestType;
	
	/** The price. */
	@Inject
    private String price;
	
	/** The cta list. */
	@Inject
    private Resource ctaList;
	
	/** The list. */
	List<CTAPojo> list = new ArrayList<>();
	
    /**
     * Gets the cta list.
     *
     * @return the cta list
     */
    public List<CTAPojo> getCtaList() {
        if (null != ctaList && ctaList.hasChildren()) {
            list = CtaUtils.createCtaList(ctaList, super.getHeaderCopy(), resourceResolver);
        }
        return list;
    }

	/**
	 * Gets the assest type.
	 *
	 * @return the assest type
	 */
	public String getAssestType() {
		return assestType;
	}

	/**
	 * Gets the price.
	 *
	 * @return the price
	 */
	public String getPrice() {
		return price;
	}

}
