package com.jlr.core.config;

import org.osgi.service.metatype.annotations.AttributeDefinition;
import org.osgi.service.metatype.annotations.AttributeType;
import org.osgi.service.metatype.annotations.ObjectClassDefinition;

/**
 * Search OSGI configuration
 * 
 * @author Adobe
 *
 */
@ObjectClassDefinition(name = "JLR Search Configuration", description = "JLR Search Configuration")
public @interface SearchConfig {

    @AttributeDefinition(name = "Root path to be searched", description = "Root path to be searched", type = AttributeType.STRING)
    public String searchRootPath() default "/content/landrover";
}
