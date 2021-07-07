package com.jlr.core.utils;

import org.apache.sling.api.resource.ResourceResolver;

import com.adobe.aemds.guide.utils.GuideConstants;
import com.day.cq.wcm.api.Page;
import com.day.cq.wcm.api.PageManager;
import com.jlr.core.constants.CommonConstants;

/**
 * The Class LinkUtils.
 *
 * @author Adobe
 */
public class LinkUtils {

    /**
     * Instantiates a new link utils.
     */
    private LinkUtils() {
    }

    /**
     * Append link extension.
     *
     * @param path
     *            the path
     * @param resolver
     *            the resolver
     * @return the string
     */
    public static String appendLinkExtension(String path, ResourceResolver resolver) {
        String reqUrl = path;
        if (null != path && null != resolver.getResource(path)) {
            PageManager pageManager = resolver.adaptTo(PageManager.class);
            if (null != pageManager) {
                Page page = pageManager.getPage(path);
                if (null != page) {
                    reqUrl = path.concat(CommonConstants.EXTENSION_DOT_HTML);
                }
            }
        } else {
            if (null != path && !path.startsWith(CommonConstants.PATH_CONTENT)
                    && !path.startsWith(GuideConstants.PROTOCOL_HTTP)
                    && !path.startsWith(GuideConstants.PROTOCOL_HTTPS) && !path.startsWith("#")) {
                reqUrl = CommonConstants.PREFIX_HTTPS.concat(path);
            }
        }
        return reqUrl;
    }
}
