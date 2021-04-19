package com.jlr.core.internal.models.v1;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import javax.annotation.PostConstruct;
import javax.inject.Inject;

import org.apache.commons.lang.StringUtils;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.api.resource.ValueMap;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.Optional;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.jlr.core.constants.CommonConstants;
import com.jlr.core.models.HygieneLinksModel;
import com.jlr.core.pojos.HygieneLinks;
import com.jlr.core.utils.LinkUtils;

/**
 * The Class HygieneLinkListImpl.
 */
@Model(adaptables = Resource.class, adapters = {
		HygieneLinksModel.class }, resourceType = HygieneLinkListImpl.RESOURCE_TYPE)
public class HygieneLinkListImpl extends GlobalModelImpl implements HygieneLinksModel {
	
	/** The Constant RESOURCE_TYPE. */
	public static final String RESOURCE_TYPE = "jlr/components/hygienelinks/v1/hygienelinks";
	
	/** The logger. */
	private final Logger logger = LoggerFactory.getLogger(this.getClass());
	
	/** The hygienelinks list. */
	@Inject
    @Optional
    private Resource hygienelinksList;
	
	/** The resource resolver. */
	@Inject
    private ResourceResolver resourceResolver;
	
	/** The market link. */
	@ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String marketLink;
	
	/** The country name. */
	@ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String countryName;
	
	/** The country code. */
	@ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String countryCode;
	
	/** The logo image. */
	@ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String logoImage;
	
	/** The list. */
	List<HygieneLinks> list = new ArrayList<>();
	
	/**
	 * Inits the.
	 */
	@PostConstruct
	 public void init() {
		 if (hygienelinksList != null && hygienelinksList.hasChildren()) {
			 Iterator<Resource> childResources = hygienelinksList.listChildren();
	            while (childResources.hasNext()) {
	                Resource child = childResources.next();
	                ValueMap properties = child.adaptTo(ValueMap.class);
	                list.add(new HygieneLinks(properties.get(CommonConstants.PN_CTA_TEXT, String.class),
	                		LinkUtils.appendLinkExtension(properties.get(CommonConstants.PN_CTA_LINK, String.class),
                                  resourceResolver),
	                        properties.get(CommonConstants.PN_CTA_TARGET, String.class),
	                        getComputedAriaLabel(properties, super.getHeaderTitle())));
	            }
	        }
	    }
	
	/**
	 * Gets the computed aria label.
	 *
	 * @param properties the properties
	 * @param header the header
	 * @return the computed aria label
	 */
	private static String getComputedAriaLabel(ValueMap properties, String header) {
        if (null != properties.get(CommonConstants.PN_CTA_ARIALABEL, String.class)) {
            return properties.get(CommonConstants.PN_CTA_ARIALABEL, String.class);
        }
        return getAriaLabel(header, properties.get(CommonConstants.PN_CTA_TEXT, String.class));
    }

    /**
     * Gets the aria label.
     *
     * @param header the header
     * @param text the text
     * @return the aria label
     */
    public static String getAriaLabel(String header, String text) {
        if (null != header) {
            return header.concat(CommonConstants.COLON).concat(text);
        }
        return StringUtils.EMPTY;
    }
	
	/**
	 * Gets the hygienelinks list.
	 *
	 * @return the hygienelinks list
	 */
	@Override
    public List<HygieneLinks> getHygienelinksList() {
		return list;
	}

	/**
	 * Gets the market link.
	 *
	 * @return the market link
	 */
	@Override
	public String getMarketLink() {
		String link=LinkUtils.appendLinkExtension(marketLink, resourceResolver);
		return link;
	}

	/**
	 * Gets the country name.
	 *
	 * @return the country name
	 */
	@Override
	public String getCountryName() {
		if(countryName =="" || countryName == null) {
			return null;
		}
		return countryName.toUpperCase();
	}

	/**
	 * Gets the country code.
	 *
	 * @return the country code
	 */
	@Override
	public String getCountryCode() {
		if(countryCode == "" || countryCode == null) {
			return null;
		}
		return countryCode.toUpperCase();
	}

	/**
	 * Gets the logo image.
	 *
	 * @return the logo image
	 */
	@Override
	public String getLogoImage() {
		return logoImage;
	}
}
