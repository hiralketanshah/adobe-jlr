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
import com.jlr.core.constants.CommonConstants;
import com.jlr.core.models.FooterLinksModel;
import com.jlr.core.pojos.HygieneLinks;
import com.jlr.core.utils.LinkUtils;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;


/**
 * The Class FooterLinksImpl.
 */
@Model(adaptables = {Resource.class}, 
adapters = {FooterLinksModel.class}, 
resourceType = FooterLinksImpl.RESOURCE_TYPE,
defaultInjectionStrategy=DefaultInjectionStrategy.OPTIONAL)
public class FooterLinksImpl extends GlobalModelImpl implements FooterLinksModel{
	
	
	/** The logger. */
	private final Logger logger = LoggerFactory.getLogger(this.getClass());
	
	/** The Constant RESOURCE_TYPE. */
	public static final String RESOURCE_TYPE = "jlr/components/footerlinks/v1/footerlinks";
	
	@Inject
    @Optional
    private Resource footerLinks;

    /** The resource resolver. */
    @Inject
    private ResourceResolver resourceResolver;
	
	/** The list. */
	List<HygieneLinks> list = new ArrayList<>();
	
	@PostConstruct
	 public void init() {
		 if (footerLinks != null && footerLinks.hasChildren()) {
			 Iterator<Resource> childResources = footerLinks.listChildren();
	            while (childResources.hasNext()) {
	                Resource child = childResources.next();
	                ValueMap properties = child.adaptTo(ValueMap.class);
	                list.add(new HygieneLinks(properties.get(CommonConstants.PN_CTA_TEXT, String.class),
	                		LinkUtils.appendLinkExtension(properties.get(CommonConstants.PN_CTA_LINK, String.class),
                                  resourceResolver),
	                        properties.get(CommonConstants.PN_CTA_TARGET, String.class)));
	            }
	        }
	    }
	
	@Override
    public List<HygieneLinks> getFooterLinks() {
		return list;
	}
	
}
