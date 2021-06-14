package com.jlr.wf.core.config;

import org.osgi.service.metatype.annotations.AttributeDefinition;
import org.osgi.service.metatype.annotations.AttributeType;
import org.osgi.service.metatype.annotations.ObjectClassDefinition;

/**
 * Dictionary OSGI configuration 
 * @author Adobe
 *
 */
@ObjectClassDefinition(name = "Replication Access Configuration", description = "Replication Access Configuration")
public @interface ReplicationAccessConfig {

	/**
	 * Returns the group name.
	 *
	 */
	@AttributeDefinition(name = "Group Name", description = "Group Name", type=AttributeType.STRING)
	String getGroupName() default "";
}
