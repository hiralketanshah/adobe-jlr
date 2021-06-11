package com.jlr.core.utils;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.apache.commons.lang.StringUtils;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.api.resource.ValueMap;
import org.jsoup.Jsoup;
import org.jsoup.safety.Whitelist;

import com.jlr.core.constants.CommonConstants;
import com.jlr.core.pojos.CTAPojo;

/**
 * The Class CtaUtils.
 *
 * @author Adobe
 */
public class CtaUtils {

    /**
     * Instantiates a new cta utils.
     */
    private CtaUtils() {
    }

    /**
     * Creates the cta list.
     *
     * @param ctaList
     *            the cta list
     * @param header
     *            the header
     * @param resourceResolver
     *            the resource resolver
     * @return the list
     */
    public static List<CTAPojo> createCtaList(Resource ctaList, String header, ResourceResolver resourceResolver) {
        List<CTAPojo> list = new ArrayList<>();
        Iterator<Resource> childResources = ctaList.listChildren();
        while (childResources.hasNext()) {
            Resource child = childResources.next();
            ValueMap properties = child.adaptTo(ValueMap.class);
            if (null != properties) {
                String icon = properties.get(CommonConstants.PN_ICON, String.class);
                String linkType = properties.get(CommonConstants.PN_CTA_LINK_TYPE, String.class);
                list.add(new CTAPojo(properties.get(CommonConstants.PN_CTA_TEXT, String.class),
                        LinkUtils.appendLinkExtension(properties.get(CommonConstants.PN_CTA_LINK, String.class),
                                resourceResolver),
                        properties.get(CommonConstants.PN_CTA_TARGET, String.class), linkType, getIcon(icon, linkType),
                        getComputedAriaLabel(properties, header),
                        properties.get(CommonConstants.PN_DESCRIPTION, String.class)));
            }
        }
        return list;
    }

    /**
     * Gets the computed aria label.
     *
     * @param properties
     *            the properties
     * @param header
     *            the header
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
     * @param header
     *            the header
     * @param text
     *            the text
     * @return the aria label
     */
    public static String getAriaLabel(String header, String text) {
        if (null != header) {
            String updatedHeader = Jsoup.clean(header, Whitelist.none());
            if (StringUtils.isEmpty(text)) {
                return updatedHeader;
            }
            return updatedHeader.concat(CommonConstants.COLON).concat(text);
        }

        return StringUtils.EMPTY;
    }

    /**
     * Gets the icon.
     *
     * @param icon
     *            the icon
     * @param linkType
     *            the link type
     * @return the icon
     */
    public static String getIcon(String icon, String linkType) {
        if (StringUtils.isNotEmpty(icon)) {
            return icon;
        }
        if (null != linkType && linkType.equals("primary")) {
            return CommonConstants.DEFAULT_PRIMARY_ICON;
        }
        return CommonConstants.DEFAULT_SECONDARY_ICON;
    }

}
