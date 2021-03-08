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
import com.jlr.core.models.HeroTitleBannerModel;
import com.jlr.core.pojos.CTAPojo;
import com.jlr.core.utils.LinkUtils;

@Model(adaptables = Resource.class, adapters = { HeroTitleBannerModel.class, GlobalModel.class }, resourceType = HeroTitleBannerImpl.RESOURCE_TYPE)
public class HeroTitleBannerImpl implements GlobalModel, HeroTitleBannerModel{
	
	public static final String RESOURCE_TYPE = "jlr/components/heroTitleBanner/v1/heroTitleBanner";
	
	@ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String id;

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String headerCopy;

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String copy;

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String fileReference;

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String imageAlt;
    
    @Inject
    @Optional
    private Resource heroCta;
    
    @Inject
    private ResourceResolver resourceResolver;
    
    List<CTAPojo> list = new ArrayList<>();

	@PostConstruct
    public void init() {
        if (heroCta != null && heroCta.hasChildren()) {
            Iterator<Resource> childResources = heroCta.listChildren();
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
    
    @Override
    public List<CTAPojo> getHeroCta() {
        return list;
    }
    
    @Override
    public String getId() {
		return id;
	}
    
    @Override
	public String getHeaderCopy() {
		return headerCopy;
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

}
