package com.jlr.core.config;

import org.osgi.service.metatype.annotations.AttributeDefinition;
import org.osgi.service.metatype.annotations.ObjectClassDefinition;

/**
 * NavigationServletConfig
 * <p>
 * Configuration OCD object for the NavigationServletConfig
 * </p>
 */
@ObjectClassDefinition(
        name = "NavigationServletConfig - Configuration OCD object for the " +
                "NavigationServlet",
        description = "Extension for the ACS commons HTTP Cache. Based on resource paths, selectors and extensions."
)
public @interface NavigationServletConfig {

    @AttributeDefinition(
            name = "Germany Header path",
            description = "header path of the primary navigation"
    )
    String deHeaderPath();

    @AttributeDefinition(
            name = "Australia Header path",
            description = "header path of the primary navigation"
    )
    String auHeaderPath();

    @AttributeDefinition(
            name = "CSS Link",
            description = "CSS Link for the primary navigation"
    )
    String cssLink();

    @AttributeDefinition(
            name = "CSS Font Imports Link",
            description = "CSS Font Imports Link for the primary navigation"
    )
    String cssFontImportsLink();

    @AttributeDefinition(
            name = "Configuration Name",
            description = "The unique identifier of this extension"
    )
    String javascriptLink();

}