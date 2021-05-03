package com.jlr.core.models;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import javax.inject.Inject;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.api.resource.ValueMap;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.jlr.core.internal.models.v1.GlobalModelImpl;
import com.jlr.core.pojos.CTAPojo;
import com.jlr.core.utils.CtaUtils;
import com.jlr.core.utils.LinkUtils;

/**
 * The Class ContentCardListModel.
 */
@Model(adaptables = Resource.class, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class ContentCardListModel extends GlobalModelImpl{
	
	/** The resource resolver. */
	@Inject
    private ResourceResolver resourceResolver;
	
	/** The resource. */
	@Inject
    private Resource resource;
	
	/** The assest type. */
	@Inject
    private String assestType;
	
	/** The first cta link. */
	@Inject
    private String firstCtaLink;
	
	/** The price. */
	@Inject
    private String price;
	
	/** The gallery link. */
	@Inject
    private String galleryLink;
	
	/** The cta list. */
	@Inject
    private Resource ctaList;
	
	/** The logger. */
	private final Logger logger = LoggerFactory.getLogger(this.getClass());
	
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
	 * Gets the first cta link.
	 *
	 * @return the first cta link
	 */
	public String getFirstCtaLink() {
		Resource contentCta=resource.listChildren().next();
		Iterator<Resource> contentCtaRes=contentCta.listChildren();
		Resource contentCtaLink=contentCtaRes.next();
		ValueMap properties = contentCtaLink.adaptTo(ValueMap.class);
		String firstCtaLink=properties.get("link",String.class);
		return LinkUtils.appendLinkExtension(firstCtaLink, resourceResolver);
	}

	/**
	 * Gets the price.
	 *
	 * @return the price
	 */
	public String getPrice() {
		return price;
	}

	/**
	 * Gets the gallery link.
	 *
	 * @return the gallery link
	 */
	public String getGalleryLink() {
		return LinkUtils.appendLinkExtension(galleryLink, resourceResolver);
	}

}
