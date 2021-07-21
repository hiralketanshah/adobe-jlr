package com.jlr.core.config;

import org.osgi.service.metatype.annotations.AttributeDefinition;
import org.osgi.service.metatype.annotations.ObjectClassDefinition;

/**
 * The Interface AkamaiPurgeConfigs.
 *
 * @author Adobe
 */
@ObjectClassDefinition(name = "JLR AkamaiPurge Configs")
public @interface AkamaiPurgeConfigs {

    /**
     * Akamai host.
     *
     * @return the string
     */
    @AttributeDefinition(name = "Akamai Host")
    String akamaiHost();

    /**
     * Client secret.
     *
     * @return the string
     */
    @AttributeDefinition(name = "Client Secret")
    String clientSecret();

    /**
     * Access token.
     *
     * @return the string
     */
    @AttributeDefinition(name = "Access Token")
    String accessToken();

    /**
     * Client token.
     *
     * @return the string
     */
    @AttributeDefinition(name = "Client Token")
    String clientToken();

    /**
     * Delay time.
     *
     * @return the long
     */
    @AttributeDefinition(name = "Delay (milliSeconds)")
    long delayTime() default 5000;

    /**
     * Purge paths.
     *
     * @return the string[]
     */
    @AttributeDefinition(name = "Purge Paths")
    String[] purgePaths();

    /**
     * Environment.
     *
     * @return the string
     */
    @AttributeDefinition(name = "Environment")
    String environment() default "staging";

    /**
     * Akamai cache clear group.
     *
     * @return the string
     */
    @AttributeDefinition(name = "Akamai Cache Clear Group")
    String akamaiCacheClearGroup() default "administrators";

    /**
     * Enable cache clear.
     *
     * @return the string
     */
    @AttributeDefinition(name = "Enable Akamai Cache Clear")
    String enableCacheClear() default "false";

    /**
     * Enable akamai agent.
     *
     * @return the string
     */
    @AttributeDefinition(name = "Enable Akamai Cache Clear Replication Agent")
    String enableAkamaiAgent() default "false";

    /**
     * Enable url rewrite.
     *
     * @return the string
     */
    @AttributeDefinition(name = "Enable URL Rewrite")
    String enableUrlRewrite() default "false";

}
