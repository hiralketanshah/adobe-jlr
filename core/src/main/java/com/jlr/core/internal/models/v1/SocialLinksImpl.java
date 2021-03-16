package com.jlr.core.internal.models.v1;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import javax.annotation.PostConstruct;
import javax.inject.Inject;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.api.resource.ValueMap;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.Optional;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.jlr.core.constants.CommonConstants;
import com.jlr.core.models.SocialLinksModel;
import com.jlr.core.pojos.SocialLinks;
import com.jlr.core.utils.LinkUtils;

/**
 * The Class SocialLinksImpl.
 */
@Model(adaptables = { Resource.class }, 
adapters = { SocialLinksModel.class }, 
resourceType = SocialLinksImpl.RESOURCE_TYPE,
defaultInjectionStrategy=DefaultInjectionStrategy.OPTIONAL)
public class SocialLinksImpl extends GlobalModelImpl implements SocialLinksModel{
	
	
	/** The logger. */
	private final Logger logger = LoggerFactory.getLogger(this.getClass());
	
	/** The Constant RESOURCE_TYPE. */
	public static final String RESOURCE_TYPE = "jlr/components/sociallinks/v1/sociallinks";
	
	/** The social links. */
	@Inject
    @Optional
    private Resource socialLinks;

    /** The resource resolver. */
    @Inject
    private ResourceResolver resourceResolver;
	
	/** The list. */
	List<SocialLinks> list = new ArrayList<>();
    

	/**
	 * Inits the.
	 */
	@PostConstruct
	 public void init() {
		 if (socialLinks != null && socialLinks.hasChildren()) {
			 Iterator<Resource> childResources = socialLinks.listChildren();
	            while (childResources.hasNext()) {
	                Resource child = childResources.next();
	                ValueMap properties = child.adaptTo(ValueMap.class);
	                list.add(new SocialLinks(properties.get(CommonConstants.PN_CTA_TEXT, String.class),
	                		LinkUtils.appendLinkExtension(properties.get(CommonConstants.PN_CTA_LINK, String.class),
                                   resourceResolver),
	                        properties.get(CommonConstants.PN_CTA_TARGET, String.class),
	                        properties.get(CommonConstants.PN_LOGO_PATH, String.class)));
	            }
	        }
	    }
	
	/**
	 * Gets the social links.
	 *
	 * @return the social links
	 */
	@Override
    public List<SocialLinks> getSocialLinks() {
		return list;
	}
	
	
}
