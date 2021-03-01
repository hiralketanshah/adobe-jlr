package com.jlr.core.utils;

import org.apache.sling.api.resource.ResourceResolver;

import com.jlr.core.constants.Constants;

public class LinkUtils {

    public static String getLinkURL(String path, ResourceResolver resolver) {
        String reqUrl;
        if (path != null && path.startsWith(Constants.CONTENT_PATH)) {

            String[] splitPath = path.split("\\" + Constants.EXTENSION_DOT_HTML);
            reqUrl = (splitPath.length > 1)
                    ? (resolver.map(splitPath[0]).concat(Constants.EXTENSION_DOT_HTML)).concat(splitPath[1])
                    : (resolver.map(splitPath[0]).concat(Constants.EXTENSION_DOT_HTML));
        } else {
            reqUrl = path;
        }
        return reqUrl;
    }
}
