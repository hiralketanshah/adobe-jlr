package com.jlr.core.httpcache;

import com.adobe.acs.commons.httpcache.config.HttpCacheConfig;
import com.adobe.acs.commons.httpcache.exception.HttpCacheKeyCreationException;
import com.adobe.acs.commons.httpcache.keys.AbstractCacheKey;
import com.adobe.acs.commons.httpcache.keys.CacheKey;
import org.apache.commons.lang.StringUtils;
import org.apache.commons.lang.builder.EqualsBuilder;
import org.apache.commons.lang.builder.HashCodeBuilder;
import org.apache.sling.api.SlingHttpServletRequest;

import java.io.IOException;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import java.io.Serializable;

public class NavigationResourceCacheKey extends AbstractCacheKey implements CacheKey, Serializable
    {
        private String selectorString;
        private String extension;

        public NavigationResourceCacheKey(SlingHttpServletRequest request, HttpCacheConfig cacheConfig) throws
                HttpCacheKeyCreationException {
            super(request, cacheConfig);
            selectorString = request.getRequestPathInfo().getSelectorString();
            extension = request.getRequestPathInfo().getExtension();
        }

        public NavigationResourceCacheKey(String uri, HttpCacheConfig cacheConfig) throws HttpCacheKeyCreationException {
            super(uri, cacheConfig);
            selectorString = StringUtils.EMPTY;
            extension = ".html";
        }

        @Override
        public boolean equals(Object o) {
            if (!super.equals(o)) {
                return false;
            }

            if (o == null) {
                return false;
            }

            NavigationResourceCacheKey that = (NavigationResourceCacheKey) o;
            return new EqualsBuilder()
                    .append(getUri(), that.getUri())
                    .append(getResourcePath(), that.getResourcePath())
                    .append(getSelectorString(), that.getSelectorString())
                    .append(getAuthenticationRequirement(), that.getAuthenticationRequirement())
                    .isEquals();
        }

        @Override
        public int hashCode() {
            return new HashCodeBuilder(17, 37)
                    .append(getUri())
                    .append(getAuthenticationRequirement()).toHashCode();
        }

        @Override
        public String toString() {
            return this.resourcePath + "." + selectorString + "." + extension + " [AUTH_REQ:" + getAuthenticationRequirement() + "]";

        }

        @Override
        public String getUri() {
            return this.resourcePath;
        }

        public String getSelectorString() {
            return selectorString;
        }

        /** For Serialization **/
        private void writeObject(ObjectOutputStream o) throws IOException
        {
            parentWriteObject(o);
            o.writeObject(selectorString);
            o.writeObject(extension);
        }


        /** For De serialization **/
        private void readObject(ObjectInputStream o)
                throws IOException, ClassNotFoundException {

            parentReadObject(o);
            selectorString = (String) o.readObject();
            extension = (String) o.readObject();
        }
    }
