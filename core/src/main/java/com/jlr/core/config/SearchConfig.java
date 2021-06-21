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

    @AttributeDefinition(name = "DE Search Config Path", description = "DE search config path for exclusions and priorities", type = AttributeType.STRING)
    public String deSearchConfigPath() default "/content/landrover/global/europe/published-sites/de_de/config/search-config";

    @AttributeDefinition(name = "AU Search Config Path", description = "AU search config path for exclusions and priorities", type = AttributeType.STRING)
    public String auSearchConfigPath() default "/content/landrover/global/row/published-sites/en_au/config/search-config";

}
