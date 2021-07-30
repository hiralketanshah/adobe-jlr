package com.jlr.core.httpcache;


import com.adobe.acs.commons.httpcache.config.HttpCacheConfig;
import com.adobe.acs.commons.httpcache.config.HttpCacheConfigExtension;
import com.adobe.acs.commons.httpcache.exception.HttpCacheKeyCreationException;
import com.adobe.acs.commons.httpcache.exception.HttpCacheRepositoryAccessException;
import com.adobe.acs.commons.httpcache.keys.CacheKey;
import com.adobe.acs.commons.httpcache.keys.CacheKeyFactory;
import com.google.common.collect.ImmutableSet;
import com.jlr.core.httpcache.key.CookieKeyValueMapBuilder;
import com.jlr.core.httpcache.key.NavigationCacheKey;
import com.jlr.core.httpcache.key.RequestKeyValueMap;
import com.jlr.core.httpcache.key.RequestKeyValueMapBuilder;
import org.apache.commons.collections.CollectionUtils;
import org.apache.commons.lang.ArrayUtils;
import org.apache.commons.lang3.StringUtils;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.osgi.service.component.annotations.Activate;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.ConfigurationPolicy;
import org.osgi.service.metatype.annotations.Designate;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.servlet.http.Cookie;
import java.util.*;
import java.util.regex.Pattern;

@Component(configurationPolicy = ConfigurationPolicy.REQUIRE, service = {HttpCacheConfigExtension.class, CacheKeyFactory.class})
@Designate(ocd = NavigationCacheExtensionConfig.class, factory = true)
public class NavigationCacheExtension implements HttpCacheConfigExtension, CacheKeyFactory {
    private static final Logger LOGGER = LoggerFactory.getLogger(NavigationCacheExtension.class);
    private List<Pattern> extensionPatterns;
    private Set<String> cookieKeys;
    private Set<String> resourceTypes;
    private boolean emptyCookieKeySetAllowed;
    private Set<String> requestParameters;
    private Set<String> requestParameterValues;
    private Map<String, String[]> allowedParameters;
    private String cacheKeyId;
    private String origin;

    public Map<String, String[]> getAllowedKeyValues() {
        return allowedParameters;
    }

    @Override
    public boolean accepts(SlingHttpServletRequest request, HttpCacheConfig cacheConfig) throws HttpCacheRepositoryAccessException {

        this.origin = request.getHeader("Origin");
        if(StringUtils.isEmpty(origin)) {
            this.origin = request.getHeader("Host");
        }
        if (!matches(extensionPatterns, request.getRequestPathInfo().getExtension())) {
            return false;
        }

        if (CollectionUtils.isNotEmpty(resourceTypes)) {
            if (!resourceTypeMatch(resourceTypes, request.getResource())) {
                return false;
            }
        }

        if (CollectionUtils.isNotEmpty(requestParameterValues) && !requestParameterMatch(request)) {
            return false;
        }

        if (!emptyCookieKeySetAllowed) {
            Set<Cookie> presentCookies = ImmutableSet.copyOf(request.getCookies());
            return containsAtLeastOneCookieKey(presentCookies);
        }

        return true;
    }

    protected String getActualValue(String key, SlingHttpServletRequest request) {
        return request.getParameter(key);
    }

    public String getCacheKeyId() {
        return "[Request Parameter: " + cacheKeyId + "]";
    }

    private boolean requestParameterMatch(SlingHttpServletRequest request) {
        for (final Map.Entry<String, String[]> entry : getAllowedKeyValues().entrySet()) {
            if (request.getParameterMap().keySet().contains(entry.getKey())) {
                final String[] parameterValues = request.getParameterMap().get(entry.getKey());
                if (ArrayUtils.isEmpty(entry.getValue()) || CollectionUtils.containsAny(Arrays.asList(entry.getValue()), Arrays.asList(parameterValues))) {
                    // If no values were specified, then assume ANY and ALL values are acceptable, and were are merely looking for the existence of the request
                    // parameter
                    return true;
                }
                // No matches found for this row; continue looking through the allowed list
            }
        }
        // No valid request parameter could be found.
        return false;
    }

    private boolean resourceTypeMatch(Set<String> resourceTypes, Resource resource) {
        ResourceResolver resourceResolver = resource.getResourceResolver();
        for (String resourceType : resourceTypes) {
            if (resourceResolver.isResourceType(resource, resourceType)) {
                return true;
            }
        }
        return false;
    }

    private boolean containsAtLeastOneCookieKey(Set<Cookie> presentCookies) {
        CookieKeyValueMapBuilder builder = new CookieKeyValueMapBuilder(cookieKeys, presentCookies);
        RequestKeyValueMap map = builder.build();
        return !map.isEmpty();
    }

    private boolean matches(List<Pattern> source, String query) {

        if (CollectionUtils.isEmpty(source)) {
            return true;
        }

        if (StringUtils.isNotBlank(query)) {
            for (Pattern pattern : source) {
                if (pattern.matcher(query).find()) {
                    return true;
                }
            }
        }
        return false;
    }

    @Override
    public CacheKey build(final SlingHttpServletRequest slingHttpServletRequest, final HttpCacheConfig cacheConfig) throws HttpCacheKeyCreationException {
        ImmutableSet<Cookie> presentCookies =
                        ImmutableSet.copyOf(slingHttpServletRequest.getCookies() != null ? slingHttpServletRequest.getCookies() : new Cookie[] {});
        CookieKeyValueMapBuilder cookieKeyValueMapBuilder = new CookieKeyValueMapBuilder(cookieKeys, presentCookies);
        RequestKeyValueMapBuilder requestKeyValueMapBuilder = new RequestKeyValueMapBuilder(requestParameters, requestParameterValues, slingHttpServletRequest);
        return new NavigationCacheKey(slingHttpServletRequest, cacheConfig, cookieKeyValueMapBuilder.build(), requestKeyValueMapBuilder.build());
    }


    @Override
    public CacheKey build(String resourcePath, HttpCacheConfig httpCacheConfig) throws HttpCacheKeyCreationException {
        return new NavigationCacheKey(resourcePath, httpCacheConfig, new RequestKeyValueMap("CookieKeyValueMap"), new RequestKeyValueMap("RequestKeyValueMap"), origin);
    }

    @Override
    public boolean doesKeyMatchConfig(CacheKey key, HttpCacheConfig cacheConfig) throws HttpCacheKeyCreationException {

        if(LOGGER.isDebugEnabled()) {
            LOGGER.debug("doesKeyMatchConfig() - NavigationCacheExtension CacheKey is {}", key);
        }

        // Check if key is instance of GroupCacheKey.
        if (!(key instanceof NavigationCacheKey)) {
            return false;
        }

        NavigationCacheKey thatKey = (NavigationCacheKey) key;

        return new NavigationCacheKey(thatKey.getUri(), cacheConfig, thatKey.getCookieKeyValueMap(), thatKey.getRequestKeyValueMap(), origin).equals(key);
    }

    @Activate
    protected void activate(NavigationCacheExtensionConfig config) {
        this.extensionPatterns = compileToPatterns(config.extensions());
        this.cookieKeys = ImmutableSet.copyOf(config.allowedCookieKeys());
        this.resourceTypes = ImmutableSet.copyOf(config.resourceTypes());
        this.emptyCookieKeySetAllowed = config.emptyCookieKeySetAllowed();
        this.requestParameters = ImmutableSet.copyOf(config.requestParameters());
        this.requestParameterValues = ImmutableSet.copyOf(config.requestParameterValues());
        RequestKeyValueMapBuilder requestKeyValueMapBuilder = new RequestKeyValueMapBuilder(requestParameters, requestParameterValues, null);
        allowedParameters = requestKeyValueMapBuilder.getAllowedParameterValues();
        cacheKeyId = UUID.randomUUID().toString();
    }

    private List<Pattern> compileToPatterns(final String[] regexes) {
        final List<Pattern> patterns = new ArrayList<>();

        for (String regex : regexes) {
            if (StringUtils.isNotBlank(regex)) {
                patterns.add(Pattern.compile(regex));
            }
        }

        return patterns;
    }
}
