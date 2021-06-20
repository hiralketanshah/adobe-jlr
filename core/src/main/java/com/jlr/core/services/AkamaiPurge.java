package com.jlr.core.services;

import java.io.IOException;
import org.apache.sling.api.resource.ResourceResolver;

/**
 * Service Interface for Akamai Purge Service.
 *
 * @author Adobe
 */
public interface AkamaiPurge {

    public String buildPurgeObjectsFromReplicationAgent(ResourceResolver resourceResolver, String pathToPurge);

    public String buildPurgeObjectsFromServlet(String pagePath, String domain);

    public String purgeAkamaiCache(String purgeObject, boolean servlet) throws IOException;


}
