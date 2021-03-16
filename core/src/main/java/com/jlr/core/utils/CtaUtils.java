package com.jlr.core.utils;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.api.resource.ValueMap;
import com.jlr.core.constants.CommonConstants;
import com.jlr.core.pojos.CTAPojo;

/**
 * The Class CtaUtils.
 */
public class CtaUtils {

    /**
     * Instantiates a new cta utils.
     */
    private CtaUtils() {}

    public static List<CTAPojo> createCtaList(Resource ctaList, ResourceResolver resourceResolver) {
    	List<CTAPojo> list = new ArrayList<>();
		Iterator<Resource> childResources = ctaList.listChildren();
		while (childResources.hasNext()) {
		    Resource child = childResources.next();
		    ValueMap properties = child.adaptTo(ValueMap.class);
		    list.add(new CTAPojo(properties.get(CommonConstants.PN_CTA_TEXT, String.class),
		            LinkUtils.appendLinkExtension(properties.get(CommonConstants.PN_CTA_LINK, String.class),
		                    resourceResolver),
		            properties.get(CommonConstants.PN_CTA_TARGET, String.class),
		            properties.get(CommonConstants.PN_CTA_LINK_TYPE, String.class),
		            properties.get(CommonConstants.PN_ICON, String.class)));
		}
		return list;
	}
