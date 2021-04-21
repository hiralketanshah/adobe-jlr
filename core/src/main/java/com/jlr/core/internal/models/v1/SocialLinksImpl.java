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
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import com.jlr.core.constants.CommonConstants;
import com.jlr.core.models.SocialLinksModel;
import com.jlr.core.pojos.SocialLinks;
import com.jlr.core.utils.LinkUtils;

/**
 * The Class SocialLinksImpl.
 */
@Model(adaptables = {Resource.class}, adapters = {SocialLinksModel.class}, resourceType = SocialLinksImpl.RESOURCE_TYPE,
                defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class SocialLinksImpl extends GlobalModelImpl implements SocialLinksModel {



    /** The Constant RESOURCE_TYPE. */
    public static final String RESOURCE_TYPE = "jlr/components/sociallinks/v1/sociallinks";

    /** The social links. */
    @Inject
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
                                LinkUtils.appendLinkExtension(properties.get(CommonConstants.PN_CTA_LINK, String.class), resourceResolver),
                                properties.get(CommonConstants.PN_CTA_TARGET, String.class), properties.get(CommonConstants.PN_SOCIAL_ICONS, String.class),
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
     * Gets the social links.
     *
     * @return the social links
     */
    @Override
    public List<SocialLinks> getSocialLinks() {
        return list;
    }


}
