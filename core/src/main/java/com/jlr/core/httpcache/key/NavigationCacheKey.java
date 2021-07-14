package com.jlr.core.httpcache.key;

import com.adobe.acs.commons.httpcache.config.HttpCacheConfig;
import com.adobe.acs.commons.httpcache.keys.AbstractCacheKey;
import com.adobe.acs.commons.httpcache.keys.CacheKey;
import com.day.cq.commons.PathInfo;
import org.apache.commons.lang3.StringUtils;
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
    private String extension;
    private String origin;

    public NavigationCacheKey(SlingHttpServletRequest request, HttpCacheConfig cacheConfig, RequestKeyValueMap cookieKeyValueMap, RequestKeyValueMap requestKeyValueMap) {
        super(request, cacheConfig);
        RequestPathInfo pathInfo = request.getRequestPathInfo();
        this.origin = request.getHeader("Origin");
        if(StringUtils.isEmpty(origin)) {
            this.origin = request.getHeader("Host");
        }
        this.cookieKeyValueMap = cookieKeyValueMap;
        this.extension = pathInfo.getExtension();
        this.requestKeyValueMap = requestKeyValueMap;
    }

    public NavigationCacheKey(String uri, HttpCacheConfig cacheConfig, RequestKeyValueMap cookieKeyValueMap, RequestKeyValueMap requestKeyValueMap, String clientOrigin) {
        super(uri, cacheConfig);
        RequestPathInfo pathInfo = new PathInfo(uri);
        this.extension = pathInfo.getExtension();
        this.cookieKeyValueMap = cookieKeyValueMap;
        this.requestKeyValueMap = requestKeyValueMap;
        this.origin = clientOrigin;
    }

    @Override
    public boolean equals(Object o) {

        if (o == null) {
            return false;
        }

        NavigationCacheKey that = (NavigationCacheKey) o;
        return new EqualsBuilder()
                .append(resourcePath, that.resourcePath)
                .append(origin, that.origin)
                .append(cookieKeyValueMap, that.cookieKeyValueMap)
                .append(requestKeyValueMap, that.requestKeyValueMap)
                .append(getExtension(), that.getExtension())
                .isEquals();
    }

    @Override
    public int hashCode() {
        return new HashCodeBuilder()
                .append(resourcePath)
                .append(origin)
                .append(cookieKeyValueMap)
                .append(getExtension())
                .append(getAuthenticationRequirement())
                .toHashCode();
    }

    @Override
    public String toString() {
        StringBuilder formattedString = new StringBuilder(resourcePath + "." + getExtension() + "." + origin +".");
        formattedString.append(cookieKeyValueMap.toString());
        formattedString.append(requestKeyValueMap.toString());
        formattedString.append(getAuthenticationRequirement());
        return formattedString.toString();
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
        o.writeObject(extension);
        o.writeObject(origin);
        o.writeObject(new HashMap<>(requestKeyValueMap));
        o.writeObject(new HashMap<>(cookieKeyValueMap));
    }

    /** For De-serialization **/
    private void readObject(ObjectInputStream o) throws IOException, ClassNotFoundException {
        parentReadObject(o);
        extension = (String) o.readObject();
        origin = (String) o.readObject();
        requestKeyValueMap = (RequestKeyValueMap) o.readObject();
        cookieKeyValueMap = (RequestKeyValueMap) o.readObject();
    }
}