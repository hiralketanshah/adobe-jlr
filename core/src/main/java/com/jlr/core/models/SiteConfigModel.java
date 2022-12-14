package com.jlr.core.models;

import java.util.Map;
import org.osgi.annotation.versioning.ConsumerType;

/**
 * Model Interface for SiteConfiguration.
 *
 * @author Adobe
 */
@ConsumerType
public interface SiteConfigModel {

    /**
     * Get Configuration Map for List of Key passed to model as parameter.
     *
     * @return the config map
     */
    public Map<String, String> getConfigMap();

    /**
     * Get Configuration value for Single Key.
     *
     * @return the config value
     */
    public String getConfigValue();
}
