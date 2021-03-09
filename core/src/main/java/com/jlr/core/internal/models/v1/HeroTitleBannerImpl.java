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
import com.jlr.core.models.HeroTitleBannerModel;
import com.jlr.core.pojos.CTAPojo;
import com.jlr.core.utils.LinkUtils;

/**
 * The Class HeroTitleBannerImpl.
 */
@Model(adaptables = Resource.class, adapters = {
        HeroTitleBannerModel.class }, resourceType = HeroTitleBannerImpl.RESOURCE_TYPE)
public class HeroTitleBannerImpl extends GlobalModelImpl implements HeroTitleBannerModel {

    /** The Constant RESOURCE_TYPE. */
    public static final String RESOURCE_TYPE = "jlr/components/heroTitleBanner/v1/heroTitleBanner";

    /** The hero cta. */
    @Inject
    @Optional
    private Resource heroCta;

    /** The resource resolver. */
    @Inject
    private ResourceResolver resourceResolver;

    /** The list. */
    List<CTAPojo> list = new ArrayList<>();

    /**
     * Inits the.
     */
    @PostConstruct
    public void init() {
        if (null != heroCta && heroCta.hasChildren()) {
            Iterator<Resource> childResources = heroCta.listChildren();
            while (childResources.hasNext()) {
                Resource child = childResources.next();
                ValueMap properties = child.adaptTo(ValueMap.class);
                list.add(new CTAPojo(properties.get(CommonConstants.PN_CTA_TEXT, String.class),
                        LinkUtils.appendLinkExtension(properties.get(CommonConstants.PN_CTA_LINK, String.class),
                                resourceResolver),
                        properties.get(CommonConstants.PN_CTA_TARGET, String.class),
                        properties.get(CommonConstants.PN_CTA_LINK_TYPE, String.class)));
            }
        }
    }

    /**
     * Gets the hero cta.
     *
     * @return the hero cta
     */
    @Override
    public List<CTAPojo> getHeroCta() {
        return list;
    }
  
}
