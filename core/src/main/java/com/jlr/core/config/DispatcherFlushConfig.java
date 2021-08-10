package com.jlr.core.config;

import org.osgi.service.metatype.annotations.AttributeDefinition;
import org.osgi.service.metatype.annotations.AttributeType;
import org.osgi.service.metatype.annotations.ObjectClassDefinition;

@ObjectClassDefinition(name = "JLR Dispatcher Flush Scheduler Configuration", description = "Dispatchher Flush Scheduler Configuration")
public @interface DispatcherFlushConfig {

	@AttributeDefinition(name = "Enabled", description = "Enable Scheduler", type = AttributeType.BOOLEAN)
	boolean serviceEnabled() default false;

	@AttributeDefinition(name = "Cron Job Expression", description = "Cron Job Expression", type = AttributeType.STRING)
	public String cronExpression() default "0 0/15 * 1/1 * ? *";

	@AttributeDefinition(name = "Scheduler name", description = "Scheduler name", type = AttributeType.STRING)
	public String schedulerName() default "JLR Dispatcher Flush Scheduler";
	
    @AttributeDefinition(name = "Replication Agents", description = "Comma separated list of replication agents", type = AttributeType.STRING)
    public String replicationAgent() default "publish";
}
