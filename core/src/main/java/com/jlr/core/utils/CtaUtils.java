package com.jlr.core.utils;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.apache.commons.lang.StringUtils;
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
    private CtaUtils() {
    }

    public static List<CTAPojo> createCtaList(Resource ctaList, String header, ResourceResolver resourceResolver) {
        List<CTAPojo> list = new ArrayList<>();
        Iterator<Resource> childResources = ctaList.listChildren();
        while (childResources.hasNext()) {
            Resource child = childResources.next();
            ValueMap properties = child.adaptTo(ValueMap.class);
            if(null!=properties){
            String icon = properties.get(CommonConstants.PN_ICON, String.class);
            String linkType = properties.get(CommonConstants.PN_CTA_LINK_TYPE, String.class);
            list.add(new CTAPojo(properties.get(CommonConstants.PN_CTA_TEXT, String.class),
                    LinkUtils.appendLinkExtension(properties.get(CommonConstants.PN_CTA_LINK, String.class),
                            resourceResolver),
                    properties.get(CommonConstants.PN_CTA_TARGET, String.class), linkType, getIcon(icon, linkType),
                    getComputedAriaLabel(properties, header),properties.get(CommonConstants.PN_DESCRIPTION, String.class)));
        }
        }
        return list;
    }

    private static String getComputedAriaLabel(ValueMap properties, String header) {
        if (null != properties.get(CommonConstants.PN_CTA_ARIALABEL, String.class)) {
            return properties.get(CommonConstants.PN_CTA_ARIALABEL, String.class);
        }
        return getAriaLabel(header, properties.get(CommonConstants.PN_CTA_TEXT, String.class));
    }

    public static String getAriaLabel(String header, String text) {
        if (null != header) {
            Pattern removeTags = Pattern.compile("<.+?>");

            Matcher m = removeTags.matcher(header);
            String updatedHeader = m.replaceAll("");
            updatedHeader = updatedHeader.replaceAll("(\\n|\\r)", "");
            return updatedHeader.concat(CommonConstants.COLON).concat(text);
        }

        return StringUtils.EMPTY;
    }

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
