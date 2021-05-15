package com.jlr.core.httpcache;

import org.osgi.service.metatype.annotations.AttributeDefinition;
import org.osgi.service.metatype.annotations.ObjectClassDefinition;

/**
 * NavigationCacheExtensionConfig
 * <p>
 * Configuration OCD object for the NavigationCacheExtensionConfig
 * </p>
 */
@ObjectClassDefinition(
        name = "NavigationCacheExtensionConfig - Configuration OCD object for the NavigationCacheExtension",
        description = "Extension for the ACS commons HTTP Cache. Based on resource paths, selectors and extensions."
)
public @interface NavigationCacheExtensionConfig {

    @AttributeDefinition(
            name = "Resource types",
            description = "Resources types valid for caching"
    )
    String[] resourceTypes();

    @AttributeDefinition(
            name = "Selector patterns",
            description = "List of selector patterns (regex) that will be valid for caching"
    )
    String[] selectors();

    @AttributeDefinition(
            name = "Extension patterns",
            description = "List of extension patterns (regex) that will be valid for caching"
    )
    String[] extensions();

    @AttributeDefinition(
            name = "Configuration Name",
            description = "The unique identifier of this extension"
    )
    String configName() default "";

    @AttributeDefinition(
            name = "Allowed Cookies",
            description = "Cookie keys that will used to generate a cache key."
    )
    String[] allowedCookieKeys() default {};

    @AttributeDefinition(
            name = "Empty cookie is allowed",
            description = "If no cookie found within cookie key generation set, still proceed"
    )
    boolean emptyCookieKeySetAllowed() default false;

    @AttributeDefinition(
            name = "Allow request parameters",
            description = "The HTTP Request Parameter to check."
    )
    String[] requestParameters() default {};

    @AttributeDefinition(
            name = "Allowed request parameter values",
            description = "This request is only accepted for caching when its named request parameter (above) contains one of these values. Leave blank for any value."
    )
    String[] requestParameterValues() default {};
}