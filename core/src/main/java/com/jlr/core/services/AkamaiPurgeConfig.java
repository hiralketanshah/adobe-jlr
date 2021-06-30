package com.jlr.core.services;

import org.osgi.service.component.annotations.Activate;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.Modified;
import org.osgi.service.metatype.annotations.Designate;
import com.jlr.core.config.AkamaiPurgeConfigs;


/**
 * The Class AkamaiPurgeConfig.
 *
 * @author Adobe
 */
@Component(service = AkamaiPurgeConfig.class, immediate = true)
@Designate(ocd = AkamaiPurgeConfigs.class)
public class AkamaiPurgeConfig {

    /** The akamai host. */
    private String akamaiHost;

    /** The client secret. */
    private String clientSecret;

    /** The access token. */
    private String accessToken;

    /** The client token. */
    private String clientToken;

    /** The delay time. */
    private long delayTime;

    /** The purge paths. */
    private String[] purgePaths;

    /** The environment. */
    private String environment;

    /** The akamai cache clear group. */
    private String akamaiCacheClearGroup;

    /** The enable akamai agent. */
    private String enableAkamaiAgent;

    /** The enable cache clear. */
    private String enableCacheClear;

    private String enableUrlRewrite;



    /**
     * Activate.
     *
     * @param akamaiPurgeConfigs the akamai purge configs
     */
    @Activate
    @Modified
    protected void activate(final AkamaiPurgeConfigs akamaiPurgeConfigs) {
        akamaiHost = akamaiPurgeConfigs.akamaiHost();
        clientSecret = akamaiPurgeConfigs.clientSecret();
        accessToken = akamaiPurgeConfigs.accessToken();
        clientToken = akamaiPurgeConfigs.clientToken();
        delayTime = akamaiPurgeConfigs.delayTime();
        purgePaths = akamaiPurgeConfigs.purgePaths();
        akamaiCacheClearGroup = akamaiPurgeConfigs.akamaiCacheClearGroup();
        environment = akamaiPurgeConfigs.environment();
        enableCacheClear = akamaiPurgeConfigs.enableCacheClear();
        enableAkamaiAgent = akamaiPurgeConfigs.enableAkamaiAgent();
        enableUrlRewrite = akamaiPurgeConfigs.enableUrlRewrite();
    }

    /**
     * @return the enableUrlRewrite
     */
    public String getEnableUrlRewrite() {
        return enableUrlRewrite;
    }

    /**
     * Gets the akamai host.
     *
     * @return the akamai host
     */
    public String getAkamaiHost() {
        return akamaiHost;
    }

    /**
     * Gets the client secret.
     *
     * @return the client secret
     */
    public String getClientSecret() {
        return clientSecret;
    }

    /**
     * Gets the access token.
     *
     * @return the access token
     */
    public String getAccessToken() {
        return accessToken;
    }

    /**
     * Gets the client token.
     *
     * @return the client token
     */
    public String getClientToken() {
        return clientToken;
    }

    /**
     * Gets the delay time.
     *
     * @return the delay time
     */
    public long getDelayTime() {
        return delayTime;
    }

    /**
     * Gets the purge paths.
     *
     * @return the purge paths
     */
    public String[] getPurgePaths() {
        return purgePaths.clone();
    }

    /**
     * Gets the enable cache clear.
     *
     * @return the enable cache clear
     */
    public String getEnableCacheClear() {
        return enableCacheClear;
    }

    /**
     * Gets the enable akamai agent.
     *
     * @return the enable akamai agent
     */
    public String getEnableAkamaiAgent() {
        return enableAkamaiAgent;
    }

    /**
     * Gets the environment.
     *
     * @return the environment
     */
    public String getEnvironment() {
        return environment;
    }

    /**
     * Gets the akamai cache clear group.
     *
     * @return the akamaiCacheClearGroup
     */
    public String getAkamaiCacheClearGroup() {
        return akamaiCacheClearGroup;
    }


}
