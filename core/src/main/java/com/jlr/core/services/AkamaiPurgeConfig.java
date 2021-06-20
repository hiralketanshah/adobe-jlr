package com.jlr.core.services;

import org.osgi.service.component.annotations.Activate;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.Modified;
import org.osgi.service.metatype.annotations.Designate;
import com.jlr.core.config.AkamaiPurgeConfigs;


/**
 * @author Adobe
 */
@Component(service = AkamaiPurgeConfig.class, immediate = true)
@Designate(ocd = AkamaiPurgeConfigs.class)
public class AkamaiPurgeConfig {

    private String akamaiHost;
    private String clientSecret;
    private String accessToken;
    private String clientToken;
    private long delayTime;
    private String[] purgePaths;
    private String environment;
    private String akamaiCacheClearGroup;

    /**
     * @return the environment
     */
    public String getEnvironment() {
        return environment;
    }

    /**
     * @return the akamaiCacheClearGroup
     */
    public String getAkamaiCacheClearGroup() {
        return akamaiCacheClearGroup;
    }

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
    }

    public String getAkamaiHost() {
        return akamaiHost;
    }

    public String getClientSecret() {
        return clientSecret;
    }

    public String getAccessToken() {
        return accessToken;
    }

    public String getClientToken() {
        return clientToken;
    }

    public long getDelayTime() {
        return delayTime;
    }

    public String[] getPurgePaths() {
        return purgePaths.clone();
    }
}
