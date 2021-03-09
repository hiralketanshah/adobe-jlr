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

import com.jlr.core.constants.CommonConstants;
import com.jlr.core.models.GlobalModel;
import com.jlr.core.pojos.CTAPojo;
import com.jlr.core.utils.LinkUtils;

@Model(adaptables = Resource.class, adapters = { GlobalModel.class}, resourceType = DualFrameCarouselImpl.RESOURCE_TYPE)
public class DualFrameCarouselImpl implements GlobalModel {

    public static final String RESOURCE_TYPE = "jlr/components/dualframecarousel/v1/dualframecarousel";

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String id;

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String headerTitle;

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String copy;

    /** The file reference. */
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String fileReference;

    /** The image alt. */
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String imageAlt;

    /** The image link. */
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String imageLink;

    @Inject
    private ResourceResolver resourceResolver;
    
    /** The cta list. */
    @Inject
    @Optional
    private Resource ctaList;
    
    /** The list. */
    List<CTAPojo> list = new ArrayList<>();
    
    /**
     * Inits the Article Model.
     */
    @PostConstruct
    public void init() {
        if (ctaList != null && ctaList.hasChildren()) {
            Iterator<Resource> childResources = ctaList.listChildren();
            while (childResources.hasNext()) {
                Resource child = childResources.next();
                ValueMap properties = child.adaptTo(ValueMap.class);
                list.add(
                        new CTAPojo(properties.get(CommonConstants.PN_CTA_TEXT, String.class),
                                LinkUtils.appendLinkExtension(properties.get(CommonConstants.PN_CTA_LINK, String.class),
                                        resourceResolver),
                                properties.get(CommonConstants.PN_CTA_TARGET, String.class),
                                properties.get(CommonConstants.PN_CTA_LINK_TYPE, String.class)));
            }
        }
    }

    /**
     * Gets the cta list.
     *
     * @return the cta list
     */
    public List<CTAPojo> getCtaList() {
        return list;
    }

    @Override
    public String getId() {
        return id;
    }

    @Override
    public String getHeaderTitle() {
        return headerTitle;
    }

    @Override
    public String getCopy() {
        return copy;
    }

    @Override
	public String getFileReference() {
		return fileReference;
	}
    @Override
	public String getImageAlt() {
		return imageAlt;
	}
    @Override
	public String getImageLink() {
		return imageLink;
	}
    
}