package com.jlr.core.config;

import org.osgi.service.metatype.annotations.AttributeDefinition;
import org.osgi.service.metatype.annotations.AttributeType;
import org.osgi.service.metatype.annotations.ObjectClassDefinition;

/**
 * Dictionary OSGI configuration 
 * @author Adobe
 *
 */
@ObjectClassDefinition(name = "Dictionary /SiteConfig Configuration", description = "Dictionary / SiteConfig Configuration")
public @interface DictionaryConfig {

	/**
	 * Returns the Relative Dictionary node path.
	 *
	 */
	@AttributeDefinition(name = "Dictionary Path", description = "Dictionary Path", type=AttributeType.STRING)
	String getPath() default "";
}
