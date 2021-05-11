package com.jlr.core.httpcache;

import com.adobe.acs.commons.httpcache.config.HttpCacheConfig;
import com.adobe.acs.commons.httpcache.config.HttpCacheConfigExtension;
import com.adobe.acs.commons.httpcache.exception.HttpCacheKeyCreationException;
import com.adobe.acs.commons.httpcache.exception.HttpCacheRepositoryAccessException;
import com.adobe.acs.commons.httpcache.keys.CacheKey;
import com.adobe.acs.commons.httpcache.keys.CacheKeyFactory;
import com.adobe.acs.commons.util.ParameterUtil;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.osgi.framework.Constants;
import org.osgi.service.component.annotations.Activate;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.ConfigurationPolicy;
import org.osgi.service.metatype.annotations.AttributeDefinition;
import org.osgi.service.metatype.annotations.Designate;
import org.osgi.service.metatype.annotations.ObjectClassDefinition;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import static org.apache.commons.lang.ArrayUtils.contains;

@Component(
        configurationPolicy = ConfigurationPolicy.REQUIRE,
        service = {HttpCacheConfigExtension.class, CacheKeyFactory.class},
        property = {Constants.SERVICE_RANKING + ":Integer=10" }
)
@Designate(
        ocd = NavigationRequestConfigExtension.Config.class,
        factory = true
)
public class NavigationRequestConfigExtension implements HttpCacheConfigExtension, CacheKeyFactory {
    private static final Logger log = LoggerFactory.getLogger(NavigationRequestConfigExtension.class);

    @ObjectClassDefinition(name="NavigationRequestConfigExtension")
    public @interface Config{
        @AttributeDefinition(name="Allowed paths")
        String[] httpcache_config_extensions_paths_allowed() default {};

        @AttributeDefinition(name = "Allowed resource types")
        String[] httpcache_config_extension_resourcetypes_allowed() default {};

        @AttributeDefinition(name = "Allowed sling selectors")
        String[] httpcache_config_extension_selectors_allowed() default {};

        @AttributeDefinition(name = "Config name")
        String configName();
    }

    private List<Pattern> pathPatterns;
    private List<Pattern> resourceTypePatterns;
    private String configName;
    private String[] selectors;

    //-------------------------<HttpCacheConfigExtension methods>

    @Override
    public boolean accepts(SlingHttpServletRequest request, HttpCacheConfig cacheConfig) throws
            HttpCacheRepositoryAccessException {

        if (log.isDebugEnabled()) {
            log.debug("ResourceType acceptance check on [ {} ~> {} ]", request.getResource(), request.getResource().getResourceType());
        }

        for (Pattern pattern : pathPatterns) {
            Matcher m = pattern.matcher(request.getResource().getPath());
            if (!m.matches()) {
                return false;
            }
        }

        if(selectors.length > 0){
            boolean selectorMatched = false;
            for(String selector: selectors){
                final String[] presentSelectors = request.getRequestPathInfo().getSelectors();
                if(contains(presentSelectors, selector)){
                    selectorMatched = true;
                }
            }

            if(!selectorMatched){
                return false;
            }
        }

        // Passed the content path test..

        Resource candidateResource = request.getResource();
        log.debug("ResourceHttpCacheConfigExtension checking for resource type matches");
        // Match resource types.
        for (Pattern pattern : resourceTypePatterns) {
            Matcher m = pattern.matcher(candidateResource.getResourceType());

            if (m.matches()) {
                if (log.isTraceEnabled()) {
                    log.trace("ResourceHttpCacheConfigExtension accepts request [ {} ]", candidateResource);
                }
                return true;
            }
        }

        return false;
    }

    //-------------------------<CacheKeyFactory methods>

    @Override
    public CacheKey build(final SlingHttpServletRequest slingHttpServletRequest, final HttpCacheConfig cacheConfig)
            throws HttpCacheKeyCreationException {
        return new NavigationResourceCacheKey(slingHttpServletRequest, cacheConfig);
    }

    @Override
    public CacheKey build(final String resourcePath, final HttpCacheConfig cacheConfig)
            throws HttpCacheKeyCreationException {
        return new NavigationResourceCacheKey(resourcePath, cacheConfig);
    }

    @Override
    public boolean doesKeyMatchConfig(CacheKey key, HttpCacheConfig cacheConfig) throws HttpCacheKeyCreationException {

        // Check if key is instance of ResourcePathCacheKey.
        if (!(key instanceof NavigationResourceCacheKey)) {
            return false;
        }
        // Validate if key request uri can be constructed out of uri patterns in cache config.
        return new NavigationResourceCacheKey(key.getUri(), cacheConfig).equals(key);
    }

    //-------------------------<OSGi Component methods>

    @Activate
    protected void activate(Config config) {
        resourceTypePatterns = ParameterUtil.toPatterns(config.httpcache_config_extension_resourcetypes_allowed());
        pathPatterns = ParameterUtil.toPatterns(config.httpcache_config_extensions_paths_allowed());
        selectors = config.httpcache_config_extension_selectors_allowed();
        configName = config.configName();

        log.info("NavigationRequestConfigExtension activated/modified.");
    }
}