package com.jlr.core.httpcache.key;

import com.adobe.acs.commons.httpcache.config.HttpCacheConfig;
import com.adobe.acs.commons.httpcache.keys.AbstractCacheKey;
import com.adobe.acs.commons.httpcache.keys.CacheKey;
import com.day.cq.commons.PathInfo;
import org.apache.commons.lang3.builder.EqualsBuilder;
import org.apache.commons.lang3.builder.HashCodeBuilder;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.request.RequestPathInfo;

import java.io.IOException;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import java.io.Serializable;
import java.util.HashMap;

/**
 * HeaderPageCacheKey
 */
public class NavigationCacheKey extends AbstractCacheKey implements CacheKey, Serializable {

    private RequestKeyValueMap cookieKeyValueMap;
    private RequestKeyValueMap requestKeyValueMap;
    private String selector;
    private String extension;

    public NavigationCacheKey(SlingHttpServletRequest request, HttpCacheConfig cacheConfig, RequestKeyValueMap cookieKeyValueMap, RequestKeyValueMap requestKeyValueMap) {
        super(request, cacheConfig);
        RequestPathInfo pathInfo = request.getRequestPathInfo();
        this.cookieKeyValueMap = cookieKeyValueMap;
        this.selector = pathInfo.getSelectorString();
        this.extension = pathInfo.getExtension();
        this.requestKeyValueMap = requestKeyValueMap;
    }

    public NavigationCacheKey(String uri, HttpCacheConfig cacheConfig, RequestKeyValueMap cookieKeyValueMap, RequestKeyValueMap requestKeyValueMap) {
        super(uri, cacheConfig);
        RequestPathInfo pathInfo = new PathInfo(uri);
        this.selector = pathInfo.getSelectorString();
        this.extension = pathInfo.getExtension();
        this.cookieKeyValueMap = cookieKeyValueMap;
        this.requestKeyValueMap = requestKeyValueMap;
    }

    @Override
    public boolean equals(Object o) {

        if (o == null) {
            return false;
        }

        NavigationCacheKey that = (NavigationCacheKey) o;
        return new EqualsBuilder()
                .append(resourcePath, that.resourcePath)
                .append(cookieKeyValueMap, that.cookieKeyValueMap)
                .append(requestKeyValueMap, that.requestKeyValueMap)
                .append(getExtension(), that.getExtension())
                .append(getSelector(), that.getSelector())
                .isEquals();
    }

    @Override
    public int hashCode() {
        return new HashCodeBuilder()
                .append(resourcePath)
                .append(cookieKeyValueMap)
                .append(getExtension())
                .append(getSelector())
                .append(getAuthenticationRequirement())
                .toHashCode();
    }

    @Override
    public String toString() {
        StringBuilder formattedString = new StringBuilder(resourcePath + "." + getSelector() + "." + getExtension() + ".");
        formattedString.append(cookieKeyValueMap.toString());
        formattedString.append(requestKeyValueMap.toString());
        formattedString.append(getAuthenticationRequirement());
        return formattedString.toString();
    }


    public String getSelector() {
        return selector;
    }

    public String getExtension() {
        return extension;
    }

    public RequestKeyValueMap getCookieKeyValueMap() {
        return cookieKeyValueMap;
    }

    public RequestKeyValueMap getRequestKeyValueMap() {
        return requestKeyValueMap;
    }

    /** For Serialization **/
    private void writeObject(ObjectOutputStream o) throws IOException {
        parentWriteObject(o);
        o.writeObject(selector);
        o.writeObject(extension);
        o.writeObject(new HashMap<>(requestKeyValueMap));
        o.writeObject(new HashMap<>(cookieKeyValueMap));
    }

    /** For De-serialization **/
    private void readObject(ObjectInputStream o) throws IOException, ClassNotFoundException {
        parentReadObject(o);
        selector = (String) o.readObject();
        extension = (String) o.readObject();
        requestKeyValueMap = (RequestKeyValueMap) o.readObject();
        cookieKeyValueMap = (RequestKeyValueMap) o.readObject();
    }
}