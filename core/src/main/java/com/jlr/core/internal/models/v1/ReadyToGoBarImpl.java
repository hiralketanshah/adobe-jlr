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
import com.jlr.core.constants.CommonConstants;
import com.jlr.core.models.ReadyToGoBarModel;
import com.jlr.core.pojos.ReadyToGoBar;
import com.jlr.core.utils.LinkUtils;

/**
 * The Class ReadyToGoBarImpl.
 */
@Model(adaptables = Resource.class, 
adapters = { ReadyToGoBarModel.class }, 
resourceType = ReadyToGoBarImpl.RESOURCE_TYPE)
public class ReadyToGoBarImpl implements ReadyToGoBarModel {

	    /** The Constant RESOURCE_TYPE. */
	    public static final String RESOURCE_TYPE = "jlr/components/readytogobar/v1/readytogobar";


	    
	    /** The rtgb. */
    	@Inject
	    @Optional
	    private Resource rtgb;

	    /** The resource resolver. */
	    @Inject
	    private ResourceResolver resourceResolver;

	    
	    /** The list. */
    	List<ReadyToGoBar> list = new ArrayList<>();

	   
	    /**
    	 * Inits the.
    	 */
    	@PostConstruct
	    public void init() {
	        if (rtgb != null && rtgb.hasChildren()) {
	            Iterator<Resource> childResources = rtgb.listChildren();
	            while (childResources.hasNext()) {
	                Resource child = childResources.next();
	                ValueMap properties = child.adaptTo(ValueMap.class);
	                list.add(
	                        new ReadyToGoBar(LinkUtils.appendLinkExtension(properties.get(CommonConstants.PN_CTA_LINK, String.class),
                                    resourceResolver),
	                                properties.get(CommonConstants.PN_CTA_TARGET, String.class),
	                                properties.get(CommonConstants.PN_DESCRIPTION, String.class),
	                                properties.get(CommonConstants.PN_CTA_TEXT, String.class),
	                                properties.get(CommonConstants.PN_IMG_ALT_TEXT, String.class),
	                                properties.get(CommonConstants.PN_FILE_REFERENCE, String.class)));
	            }
	        }
	    }
	    
    	/**
    	 * Gets the rtgb.
    	 *
    	 * @return the rtgb
    	 */
    	@Override
	    public List<ReadyToGoBar> getRtgb() {
	        return list;
	    }
	   
	}

