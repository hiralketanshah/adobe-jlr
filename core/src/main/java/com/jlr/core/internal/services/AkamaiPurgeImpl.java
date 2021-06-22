package com.jlr.core.internal.services;

import java.io.IOException;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.apache.commons.lang3.StringUtils;
import org.apache.sling.api.resource.ResourceResolver;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.Reference;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import com.akamai.edgegrid.signer.ClientCredential;
import com.akamai.edgegrid.signer.ClientCredential.ClientCredentialBuilder;
import com.akamai.edgegrid.signer.exceptions.RequestSigningException;
import com.akamai.edgegrid.signer.googlehttpclient.GoogleHttpClientEdgeGridRequestSigner;
import com.day.cq.commons.Externalizer;
import com.google.api.client.http.ByteArrayContent;
import com.google.api.client.http.GenericUrl;
import com.google.api.client.http.HttpHeaders;
import com.google.api.client.http.HttpRequest;
import com.google.api.client.http.HttpRequestFactory;
import com.google.api.client.http.HttpResponse;
import com.google.api.client.http.HttpTransport;
import com.google.api.client.http.apache.ApacheHttpTransport;
import com.google.common.collect.Maps;
import com.google.gson.Gson;
import com.jlr.core.constants.CommonConstants;
import com.jlr.core.constants.ErrorUtilsConstants;
import com.jlr.core.services.AkamaiPurge;
import com.jlr.core.services.AkamaiPurgeConfig;
import com.jlr.core.utils.ErrorUtils;

@Component(service = AkamaiPurge.class)
public class AkamaiPurgeImpl implements AkamaiPurge {

    private static final Logger LOGGER = LoggerFactory.getLogger(AkamaiPurgeImpl.class);

    private static final String INTERFACE_PATH = "/ccu/v3/invalidate/url/";
    private static final String HTML_EXTENSION = ".html";
    private static final String DE_PUBLISHED_SITES = "/content/landrover/global/europe/published-sites/de_de";
    private static final String AU_PUBLISHED_SITES = "/content/landrover/global/row/published-sites/en_au";
    private static final String DAM_GLOBAL_ASSETS = "/content/dam/landrover/global";

    @Reference
    private transient Externalizer externalizer;

    @Reference
    private transient AkamaiPurgeConfig akamaiPurgeConfig;

    @Override
    public String buildPurgeObjectsFromReplicationAgent(ResourceResolver resourceResolver, String pathToPurge) {

        String incomingURLtoPurge = null;
        String externalizerDomain = null;

        if (pathToPurge.contains(DAM_GLOBAL_ASSETS)) {
            Map<String, List<String>> akamaiRequestMap = Maps.newHashMap();

            ArrayList<String> arrayList = new ArrayList<>();
            String[] allMarkets = {"https://www.landrover.com.au", "https://www.landrover.de"};
            for (String market : allMarkets) {
                StringBuilder clearPagePath = new StringBuilder();
                arrayList.add(clearPagePath.append(market).append(pathToPurge).toString());
            }
            akamaiRequestMap.put("objects", arrayList);
            incomingURLtoPurge = new Gson().toJson(akamaiRequestMap);

        } else {
            if (pathToPurge.contains("/en_au/") || pathToPurge.contains("dam/landrover/australia")) {
                externalizerDomain = CommonConstants.AU_EXTERNALIZER_DOMAIN;
            } else if (pathToPurge.contains("/de_de/") || pathToPurge.contains("dam/landrover/germany")) {
                externalizerDomain = CommonConstants.DE_EXTERNALIZER_DOMAIN;
            }

            incomingURLtoPurge = externalizer.externalLink(resourceResolver, externalizerDomain, pathToPurge);

            if (pathToPurge.contains(DE_PUBLISHED_SITES)) {
                incomingURLtoPurge = incomingURLtoPurge.replaceAll(DE_PUBLISHED_SITES, StringUtils.EMPTY).concat(HTML_EXTENSION);
            } else if (pathToPurge.contains(AU_PUBLISHED_SITES)) {
                incomingURLtoPurge = incomingURLtoPurge.replaceAll(AU_PUBLISHED_SITES, StringUtils.EMPTY).concat(HTML_EXTENSION);
            }
            incomingURLtoPurge = "{\"objects\":[\"" + incomingURLtoPurge + "\"]}";
        }


        if (LOGGER.isDebugEnabled()) {
            LOGGER.debug("pathToPurge from replication agent: {}", incomingURLtoPurge);
        }
        return incomingURLtoPurge;
    }

    @Override
    public String buildPurgeObjectsFromServlet(String pagePath, String domain) {

        Map<String, List<String>> akamaiRequestMap = new HashMap<>();

        ArrayList<String> arrayList = new ArrayList<>();


        StringBuilder clearPagePath = new StringBuilder(domain);
        arrayList.add(clearPagePath.append("/").append(pagePath).toString());

        akamaiRequestMap.put("objects", arrayList);
        if (LOGGER.isDebugEnabled()) {
            LOGGER.debug("Objects Json: {}", new Gson().toJson(akamaiRequestMap));
        }
        return new Gson().toJson(akamaiRequestMap);
    }



    /**
     * @param purgeObject
     * @param servlet
     * @throws IOException
     */
    @Override
    public String purgeAkamaiCache(String purgeObject, boolean servlet) throws IOException {

        String purgeResponse = "Exception while calling akamai api";
        // Need to send a HTTP Request to the OPEN API Interface,
        // therefore we are using the com.google.api.client.http Helper Classes
        HttpTransport httpTransport = new ApacheHttpTransport();
        HttpRequestFactory requestFactory = httpTransport.createRequestFactory();
        URI uri = null;
        try {
            uri = new URI("https", akamaiPurgeConfig.getAkamaiHost(), INTERFACE_PATH + akamaiPurgeConfig.getEnvironment(), null, null);
        } catch (URISyntaxException e1) {
            LOGGER.error("URL gone wrong! {}", e1.getMessage());
        }
        // It is important to send the Request with the Content-Type application/json
        if (uri != null && purgeObject != null) {
            HttpRequest akamaiRequest = requestFactory.buildPostRequest(new GenericUrl(uri), ByteArrayContent.fromString("application/json", purgeObject));
            HttpHeaders headers = akamaiRequest.getHeaders();
            headers.set("Host", akamaiPurgeConfig.getAkamaiHost());


            if (StringUtils.isNotBlank(akamaiPurgeConfig.getAccessToken()) && StringUtils.isNotBlank(akamaiPurgeConfig.getClientSecret())
                            && StringUtils.isNotBlank(akamaiPurgeConfig.getClientToken()) && StringUtils.isNotBlank(akamaiPurgeConfig.getAkamaiHost())) {

                GoogleHttpClientEdgeGridRequestSigner requestSigner = new GoogleHttpClientEdgeGridRequestSigner(akamaiClientCredentials(akamaiPurgeConfig));
                try {
                    requestSigner.sign(akamaiRequest);
                    Thread.sleep(akamaiPurgeConfig.getDelayTime());
                } catch (RequestSigningException | InterruptedException e) {
                    LOGGER.error("Error in signing request to Akamai: {}", e.getMessage());
                }
                HttpResponse akamaiResponse = null;
                try {

                    if (akamaiPurgeConfig.getEnableCacheClear().equalsIgnoreCase("true")) {
                        LOGGER.trace("Akamai Execute: {}", akamaiRequest.getUrl());
                        LOGGER.trace("Akamai Cache clear enabled!");
                        akamaiResponse = akamaiRequest.execute();
                    }
                } catch (Exception e) {
                    LOGGER.error(ErrorUtils.createErrorMessage(ErrorUtilsConstants.AEM_GENERIC_EXCEPTION, ErrorUtilsConstants.TECHNICAL,
                                    ErrorUtilsConstants.AEM_SITE, ErrorUtilsConstants.MODULE_SERVICE, this.getClass().getSimpleName(), e));
                }
                if (servlet) {
                    purgeResponse = akamaiResponseCheck(akamaiResponse);
                    LOGGER.info("Akamai Cache Response {}", purgeResponse);
                }

            } else {
                purgeResponse = "Akamai Fast Purge Not Configured";
                LOGGER.warn("Akamai Fast Purge Not Configured");
            }
        }
        return purgeResponse;
    }

    /*
     * Create the EdgeGrid credential object which will be used as an input parameter to sign the request with the EdgeGrid Signer Object Input:
     * akamaiPurgeService Output: ClientCredentialBuilder
     */
    private ClientCredential akamaiClientCredentials(AkamaiPurgeConfig akamaiPurgeService) {

        ClientCredentialBuilder ccb = new ClientCredentialBuilder();
        ccb.accessToken(akamaiPurgeService.getAccessToken());
        ccb.clientSecret(akamaiPurgeService.getClientSecret());
        ccb.clientToken(akamaiPurgeService.getClientToken());
        ccb.host(akamaiPurgeService.getAkamaiHost());
        return ccb.build();
    }

    /*
     * Input HttpResponse of Akamai Response Output: Status response or error message
     */
    private String akamaiResponseCheck(HttpResponse akamaiResponse) {

        String purgeResponse = "";
        if (akamaiResponse != null) {
            try {
                purgeResponse = "Akamai Response Code " + akamaiResponse.getStatusCode();
            } catch (Exception e) {
                purgeResponse = "Exception while calling akamai response code return null";
                LOGGER.error("Exception while getting akamaiResponse Status Code{}", e.getMessage());
            }
        }
        return purgeResponse;
    }


}
