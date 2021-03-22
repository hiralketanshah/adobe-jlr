package com.jlr.core.internal.models.v1;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import javax.annotation.PostConstruct;
import javax.inject.Inject;

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
	
	/** The hygienelinks list. */
	@Inject
    @Optional
    private Resource hygienelinksList;
	
	/** The resource resolver. */
	@Inject
    private ResourceResolver resourceResolver;
	
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
	                        properties.get(CommonConstants.PN_CTA_TARGET, String.class)));
	            }
	        }
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
}
