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
import com.jlr.core.httpcache.key.RequestParameterKeyValueMapBuilder;
import org.apache.commons.collections.CollectionUtils;
import org.apache.commons.lang3.StringUtils;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.osgi.service.component.annotations.Activate;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.ConfigurationPolicy;
import org.osgi.service.metatype.annotations.Designate;

import javax.servlet.http.Cookie;
import java.util.*;
import java.util.concurrent.atomic.AtomicReference;
import java.util.regex.Pattern;

@Component(configurationPolicy = ConfigurationPolicy.REQUIRE, service = {HttpCacheConfigExtension.class, CacheKeyFactory.class})
@Designate(ocd = NavigationCacheExtensionConfig.class, factory = true)
public class NavigationCacheExtension implements HttpCacheConfigExtension, CacheKeyFactory {

    private List<Pattern> selectorPatterns;
    private List<Pattern> extensionPatterns;
    private Set<String> cookieKeys;
    private Set<String> resourceTypes;
    private boolean emptyCookieKeySetAllowed;
    private Set<String> requestParameters;
    private Set<String> requestParameterValues;
    private String configName;

    @Override
    public boolean accepts(SlingHttpServletRequest request, HttpCacheConfig cacheConfig) throws
            HttpCacheRepositoryAccessException {
        String resourcePath = request.getRequestPathInfo().getResourcePath();

        if (!matches(selectorPatterns, request.getRequestPathInfo().getSelectorString())) {
            return false;
        }

        if (!matches(extensionPatterns, request.getRequestPathInfo().getExtension())) {
            return false;
        }

        if (CollectionUtils.isNotEmpty(resourceTypes)) {
            if (!resourceTypeMatch(resourceTypes, request.getResource())) {
                return false;
            }
        }

        if (CollectionUtils.isNotEmpty(requestParameters)) {
            if (!requestParameterMatch(requestParameters, request.getParameterMap())) {
                return false;
            }
        }

        if (!emptyCookieKeySetAllowed) {
            Set<Cookie> presentCookies = ImmutableSet.copyOf(request.getCookies());
            return containsAtLeastOneCookieKey(presentCookies);
        }

        return true;
    }

    private boolean requestParameterMatch(Set<String> requestParameters, Map<String, String[]> parameterMap) {
        AtomicReference<Boolean> matched = new AtomicReference<>(false);
        RequestParameterKeyValueMapBuilder builder = new RequestParameterKeyValueMapBuilder(requestParameters, requestParameterValues);
        Map<String, String[]> map = builder.build();
        parameterMap.entrySet().stream().forEach(entry -> {
            if(map.containsKey(entry.getKey())) {
                matched.set(Arrays.stream(map.get(entry.getKey())).anyMatch(value -> (value.equals(entry.getValue()[0]))));
            }
        });
        return matched.get();
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
    public CacheKey build(final SlingHttpServletRequest slingHttpServletRequest, final HttpCacheConfig cacheConfig)
            throws HttpCacheKeyCreationException {
        ImmutableSet<Cookie> presentCookies = ImmutableSet.copyOf(slingHttpServletRequest.getCookies());
        CookieKeyValueMapBuilder cookieKeyValueMapBuilder = new CookieKeyValueMapBuilder(cookieKeys, presentCookies);
        RequestParameterKeyValueMapBuilder requestParameterKeyValueMapBuilder = new RequestParameterKeyValueMapBuilder(requestParameters, requestParameterValues);
        return new NavigationCacheKey(
                slingHttpServletRequest,
                cacheConfig,
                cookieKeyValueMapBuilder.build()
        );
    }


    public CacheKey build(String resourcePath, HttpCacheConfig httpCacheConfig) throws HttpCacheKeyCreationException {
        return new NavigationCacheKey(resourcePath, httpCacheConfig, new RequestKeyValueMap("CookieKeyValueMap"));
    }

    @Override
    public boolean doesKeyMatchConfig(CacheKey key, HttpCacheConfig cacheConfig) throws HttpCacheKeyCreationException {

        // Check if key is instance of GroupCacheKey.
        if (!(key instanceof NavigationCacheKey)) {
            return false;
        }

        NavigationCacheKey thatKey = (NavigationCacheKey) key;

        return new NavigationCacheKey(thatKey.getUri(), cacheConfig, thatKey.getCookieKeyValueMap()).equals(key);
    }

    @Activate
    protected void activate(NavigationCacheExtensionConfig config) {
        this.configName = config.configName();
        this.extensionPatterns = compileToPatterns(config.extensions());
        this.selectorPatterns = compileToPatterns(config.selectors());
        this.cookieKeys = ImmutableSet.copyOf(config.allowedCookieKeys());
        this.resourceTypes = ImmutableSet.copyOf(config.resourceTypes());
        this.configName = config.configName();
        this.emptyCookieKeySetAllowed = config.emptyCookieKeySetAllowed();
        this.requestParameters = ImmutableSet.copyOf(config.requestParameters());
        this.requestParameterValues = ImmutableSet.copyOf(config.requestParameterValues());
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