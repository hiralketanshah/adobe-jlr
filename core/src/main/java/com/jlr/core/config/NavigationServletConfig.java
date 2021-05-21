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
            name = "Header path",
            description = "header path of the primary navigation"
    )
    String headerPath() default "/content/landrover/global/global-master/en/config/navigation/header.html";

    @AttributeDefinition(
            name = "CSS Link",
            description = "CSS Link for the primary navigation"
    )
    String cssLink() default "https://dxnav.landrover.com/current/landrover-4d9fac083e07ef876c84b1aeafc88492.css";

    @AttributeDefinition(
            name = "CSS Font Imports Link",
            description = "CSS Font Imports Link for the primary navigation"
    )
    String cssFontImportsLink() default "https://dxnav.landrover.com/current/fontImports-landrover-385e43ef7ee2dd6fe7b21f42089c6929.css";

    @AttributeDefinition(
            name = "Configuration Name",
            description = "The unique identifier of this extension"
    )
    String javascriptLink() default "https://dxnav.landrover.com/current/main-2f17544b886e637183bcfd0cfa6021c2.js";

}