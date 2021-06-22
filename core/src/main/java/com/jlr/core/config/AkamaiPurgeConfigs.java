package com.jlr.core.config;

import org.osgi.service.metatype.annotations.AttributeDefinition;
import org.osgi.service.metatype.annotations.ObjectClassDefinition;

@ObjectClassDefinition(name = "AkamaiPurge Configs")
public @interface AkamaiPurgeConfigs {

    @AttributeDefinition(name = "Akamai Host")
    String akamaiHost();

    @AttributeDefinition(name = "Client Secret")
    String clientSecret();

    @AttributeDefinition(name = "Access Token")
    String accessToken();

    @AttributeDefinition(name = "Client Token")
    String clientToken();

    @AttributeDefinition(name = "Delay (milliSeconds)")
    long delayTime() default 5000;

    @AttributeDefinition(name = "Purge Paths")
    String[] purgePaths();

    @AttributeDefinition(name = "Environment")
    String environment() default "staging";

    @AttributeDefinition(name = "Akamai Cache Clear Group")
    String akamaiCacheClearGroup() default "administrators";

    @AttributeDefinition(name = "Enable Akamai Cache Clear")
    String enableCacheClear() default "false";

    @AttributeDefinition(name = "Enable Akamai Cache Clear Replication Agent")
    String enableAkamaiAgent() default "false";

}
