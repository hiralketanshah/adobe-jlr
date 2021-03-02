package com.jlr.core.utils;

import org.apache.sling.api.resource.ResourceResolver;

import com.day.cq.wcm.api.Page;
import com.day.cq.wcm.api.PageManager;
import com.jlr.core.constants.Constants;

/**
 * The Class LinkUtils.
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
        if (path != null && resolver.getResource(path) != null) {
            PageManager pageManager = resolver.adaptTo(PageManager.class);
            if (null != pageManager) {
                Page page = pageManager.getPage(path);
                if (null != page) {
                    reqUrl = path.concat(Constants.EXTENSION_DOT_HTML);
                }
            }
        } else {
            if (path != null && !path.startsWith(Constants.PATH_CONTENT) && !path.startsWith(Constants.PROTOCOL_HTTP)) {
                reqUrl = Constants.PREFIX_HTTPS.concat(path);
            }
        }
        return reqUrl;
    }
}
