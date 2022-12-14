package com.jlr.core.internal.services;

import java.io.IOException;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import javax.jcr.RepositoryException;
import javax.jcr.Session;
import org.apache.commons.httpclient.HttpClient;
import org.apache.commons.httpclient.methods.GetMethod;
import org.apache.commons.lang.StringUtils;
import org.apache.sling.api.resource.LoginException;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.api.resource.ResourceResolverFactory;
import org.apache.sling.settings.SlingSettingsService;
import org.osgi.service.component.annotations.Activate;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.Reference;
import org.osgi.service.metatype.annotations.Designate;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import com.adobe.acs.commons.fam.ThrottledTaskRunner;
import com.adobe.acs.commons.replication.AgentIdsAgentFilter;
import com.adobe.granite.crypto.CryptoException;
import com.adobe.granite.crypto.CryptoSupport;
import com.day.cq.commons.jcr.JcrConstants;
import com.day.cq.replication.ReplicationActionType;
import com.day.cq.replication.ReplicationException;
import com.day.cq.replication.ReplicationOptions;
import com.day.cq.replication.Replicator;
import com.day.cq.search.PredicateGroup;
import com.day.cq.search.Query;
import com.day.cq.search.QueryBuilder;
import com.day.cq.search.result.Hit;
import com.day.cq.search.result.SearchResult;
import com.google.gson.JsonArray;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.jlr.core.config.PricingConfig;
import com.jlr.core.constants.CommonConstants;
import com.jlr.core.constants.ErrorUtilsConstants;
import com.jlr.core.constants.PricingConstants;
import com.jlr.core.services.FetchPrice;
import com.jlr.core.utils.CommonUtils;
import com.jlr.core.utils.ErrorUtils;
import com.jlr.core.utils.PricingUtils;

@Component(service = FetchPrice.class)
@Designate(ocd = PricingConfig.class)
public class FetchPriceImpl implements FetchPrice {

    /** LOGGER */
    private static final Logger LOGGER = LoggerFactory.getLogger(FetchPriceImpl.class);

    @Reference
    private ResourceResolverFactory resourceResolverFactory;

    @Reference
    private QueryBuilder builder;

    @Reference
    private Replicator replicator;

    @Reference
    private ThrottledTaskRunner throttledTaskRunner;

    @Reference
    private CryptoSupport cryptoSupport;

    @Reference
    private SlingSettingsService slingSettingsService;

    private Map<String, String> endpoints;
    private Map<String, String> stageEndpoints;
    private Map<String, String> staticUrl;
    private Map<String, String> configPages;
    private Map<String, String> destinationPaths;
    private Map<String, String> header = new HashMap<>();
    private String[] listOfStates;
    private String replicationPath;
    private String replicationAgent;

    @Activate
    public void activate(PricingConfig config) {
        destinationPaths = PricingUtils.getMapOfConfigFields(config.listOfDestinationPaths());
        endpoints = PricingUtils.getMapOfConfigFields(config.listOfProdEndpoints());
        if (!isProd()) {
            stageEndpoints = PricingUtils.getMapOfConfigFields(config.listOfStageEndpoints());
            String stageAPI = unProtect(config.stageApiKey());
            header.put(PricingConstants.JLR_PRICING_HEADER, stageAPI);
        }
        staticUrl = PricingUtils.getMapOfConfigFields(config.listOfStaticUrl());
        configPages = PricingUtils.getMapOfConfigFields(config.listOfConfigPages());
        listOfStates = config.listOfStates();
        replicationPath = config.replicationPath();
        replicationAgent = config.replicationAgent();

    }

    private String unProtect(String stageApiKey) {
        try {
            if (StringUtils.isNotBlank(stageApiKey) && this.cryptoSupport.isProtected(stageApiKey)) {
                stageApiKey = cryptoSupport.unprotect(stageApiKey);
            }
        } catch (CryptoException e) {
            LOGGER.error(ErrorUtils.createErrorMessage(ErrorUtilsConstants.AEM_CRYPTO_EXCEPTION, ErrorUtilsConstants.TECHNICAL, ErrorUtilsConstants.AEM_SITE,
                            ErrorUtilsConstants.MODULE_SERVICE, this.getClass().getSimpleName(), e));
        }

        return stageApiKey;
    }

    private boolean isProd() {
        return this.slingSettingsService.getRunModes().contains(CommonConstants.RUNMODE_PROD);
    }

    @Override
    public String fetchAndStorePrice(String market) {
        StringBuilder responseBuilder = new StringBuilder();
        ResourceResolver resolver = null;
        try {
            resolver = CommonUtils.getServiceResolver(resourceResolverFactory, PricingConstants.RESOLVER_SUBSERVICE);
            if (this.slingSettingsService.getRunModes().contains(CommonConstants.RUNMODE_AUTHOR)) {
                if (destinationPaths.containsKey(CommonConstants.RUNMODE_PROD)
                                && !isLocked(resolver, destinationPaths.get(CommonConstants.RUNMODE_PROD), responseBuilder)) {
                    String prodPath = destinationPaths.get(CommonConstants.RUNMODE_PROD);
                    lockPricingNode(resolver, prodPath);
                    List<String> listOfEndpoints = PricingUtils.formEndpointURLs(resolver, endpoints, staticUrl, configPages, market);
                    responseBuilder.append(getPrices(resolver, listOfEndpoints, header, prodPath, listOfStates));
                    unlockPricingNode(resolver, prodPath);
                }
                if (null != stageEndpoints && destinationPaths.containsKey(CommonConstants.RUNMODE_STAGE)
                                && !isLocked(resolver, destinationPaths.get(CommonConstants.RUNMODE_STAGE), responseBuilder)) {
                    String stagePath = destinationPaths.get(CommonConstants.RUNMODE_STAGE);
                    lockPricingNode(resolver, stagePath);
                    List<String> listOfEndpoints = PricingUtils.formEndpointURLs(resolver, stageEndpoints, staticUrl, configPages, market);
                    responseBuilder.append(getPrices(resolver, listOfEndpoints, header, stagePath, listOfStates));
                    unlockPricingNode(resolver, stagePath);
                }
                replicate(resolver, replicationPath);

            }

        } catch (LoginException e) {
            LOGGER.error(ErrorUtils.createErrorMessage(ErrorUtilsConstants.AEM_LOGIN_EXCEPTION, ErrorUtilsConstants.TECHNICAL, ErrorUtilsConstants.AEM_SITE,
                            ErrorUtilsConstants.MODULE_SERVICE, this.getClass().getSimpleName(), e));
        } finally {
            if (null != resolver) {
                resolver.close();
            }
        }
        return responseBuilder.toString();
    }

    private boolean isLocked(ResourceResolver resolver, String path, StringBuilder responseBuilder) {
        if (PricingUtils.isLocked(resolver, path)) {
            responseBuilder.append(path.concat(" is locked. Kindly contact administrator.").concat(PricingConstants.NEW_LINE));
            return true;
        }
        return false;
    }

    private void unlockPricingNode(ResourceResolver resolver, String path) {
        try {
            Session session = resolver.adaptTo(Session.class);
            PricingUtils.unlockPricingNode(session, path);
            session.save();
        } catch (RepositoryException e) {
            LOGGER.error(ErrorUtils.createErrorMessage(ErrorUtilsConstants.AEM_REPOSITORY_EXCEPTION, ErrorUtilsConstants.TECHNICAL,
                            ErrorUtilsConstants.AEM_SITE, ErrorUtilsConstants.MODULE_SERVICE, this.getClass().getSimpleName(), e));
        }

    }

    private void lockPricingNode(ResourceResolver resolver, String path) {
        try {
            Session session = resolver.adaptTo(Session.class);
            PricingUtils.lockPricingNode(session, path);
            session.save();
        } catch (RepositoryException e) {
            LOGGER.error(ErrorUtils.createErrorMessage(ErrorUtilsConstants.AEM_REPOSITORY_EXCEPTION, ErrorUtilsConstants.TECHNICAL,
                            ErrorUtilsConstants.AEM_SITE, ErrorUtilsConstants.MODULE_SERVICE, this.getClass().getSimpleName(), e));
        }

    }

    private String getPrices(ResourceResolver resolver, List<String> listOfEndpoints, Map<String, String> header, String destinationPath,
                    String[] listOfStates) {
        StringBuilder resp = new StringBuilder();

        if (LOGGER.isTraceEnabled()) {
            LOGGER.trace("Processing started {}", new java.util.Date());
        }
        for (String endpoint : listOfEndpoints) {
            String[] endpointSplitArray = endpoint.split(CommonConstants.DOUBLE_BACKSLASHES + CommonConstants.PIPE_CHARACTER);
            String locale = endpointSplitArray[0].trim();
            int count = 0;
            StringBuilder endpointBuilder = new StringBuilder(endpointSplitArray[1].trim());
            if (PricingConstants.JLR_LOCALE_AUS.equalsIgnoreCase(locale)) {
                for (String state : listOfStates) {
                    count = getPricingDetails(endpointBuilder.toString() + PricingConstants.JLR_ENDPOINT_AUS_STATE + state, header,
                                    destinationPath + PricingConstants.JLR_LOCALE_AUS + CommonConstants.FORWARD_SLASH + StringUtils.lowerCase(state)
                                                    + CommonConstants.FORWARD_SLASH,
                                    PricingConstants.JLR_CURRENCY_DE, resolver);
                    resp.append("Total number of products fetched from ").append(endpointBuilder.toString() + PricingConstants.JLR_ENDPOINT_AUS_STATE + state)
                                    .append(CommonConstants.COLON).append(count);
                    resp.append(PricingConstants.NEW_LINE);

                }
            } else {
                count = getPricingDetails(endpointBuilder.toString(), header,
                                destinationPath + PricingConstants.JLR_LOCALE_DE + PricingConstants.JLR_ENDPOINT_DE_STATE, PricingConstants.JLR_CURRENCY_DE,
                                resolver);
                resp.append("Total number of products fetched from ").append(endpointBuilder.toString()).append(CommonConstants.COLON).append(count);
                resp.append(PricingConstants.NEW_LINE);
            }

        }
        if (LOGGER.isTraceEnabled()) {
            LOGGER.trace("Processing Completed {}", new java.util.Date());
        }
        return resp.toString();
    }

    private int getPricingDetails(String endpoint, Map<String, String> header, String destinationPath, String currency, ResourceResolver resolver) {
        int count = 0;

        StringBuilder destinationPathBuilder = new StringBuilder();
        destinationPathBuilder.append(destinationPath);
        try {
            Session session = resolver.adaptTo(Session.class);
            HttpClient httpClient = new HttpClient();
            httpClient.getHttpConnectionManager().getParams().setConnectionTimeout(PricingConstants.HTTP_CLIENT_TIMEOUT);
            httpClient.getHttpConnectionManager().getParams().setSoTimeout(PricingConstants.HTTP_CLIENT_TIMEOUT);
            GetMethod method = new GetMethod(endpoint);
            for (Map.Entry<String, String> entry : header.entrySet()) {
                method.setRequestHeader(entry.getKey(), entry.getValue());
            }
            if (LOGGER.isDebugEnabled()) {
                LOGGER.debug("Started fetching response from {}. {}", endpoint, new java.util.Date());
            }
            httpClient.executeMethod(method);
            String response = method.getResponseBodyAsString();
            if (LOGGER.isDebugEnabled()) {
                LOGGER.debug("Completed fetched response from {}. {}", endpoint, new java.util.Date());
            }

            JsonObject responseObject = PricingUtils.getJsonObjectFromResponse(response);
            if (responseObject.has(PricingConstants.JLR_PRICING_JSON_FETAURE_DICTIONARY)) {
                JsonObject featureDictionary = responseObject.getAsJsonObject(PricingConstants.JLR_PRICING_JSON_FETAURE_DICTIONARY);
                if (featureDictionary.has(PricingConstants.JLR_PRICING_JSON_VEHICLE) && featureDictionary.has(PricingConstants.JLR_PRICING_JSON_FEATURE_LIST)) {

                    JsonObject vehicle = featureDictionary.getAsJsonObject(PricingConstants.JLR_PRICING_JSON_VEHICLE);
                    String id = vehicle.has(PricingConstants.JLR_PRICING_JSON_ID) ? vehicle.get(PricingConstants.JLR_PRICING_JSON_ID).getAsString()
                                    : StringUtils.EMPTY;
                    String modelYear = vehicle.has(PricingConstants.JLR_PRICING_JSON_MODELYEAR)
                                    ? vehicle.get(PricingConstants.JLR_PRICING_JSON_MODELYEAR).getAsString()
                                    : StringUtils.EMPTY;
                    destinationPathBuilder.append(modelYear).append(CommonConstants.FORWARD_SLASH).append(id).append(CommonConstants.FORWARD_SLASH);
                    JsonArray featureList = featureDictionary.getAsJsonArray(PricingConstants.JLR_PRICING_JSON_FEATURE_LIST);

                    count = fetchPricesFromJsonResponse(session, featureList, destinationPathBuilder, currency);

                    session.save();

                }

            }

        } catch (IOException e) {
            LOGGER.error(ErrorUtils.createErrorMessage(ErrorUtilsConstants.AEM_IO_EXCEPTION, ErrorUtilsConstants.TECHNICAL, ErrorUtilsConstants.AEM_SITE,
                            ErrorUtilsConstants.MODULE_SERVICE, this.getClass().getSimpleName(), e));
        } catch (RepositoryException e) {
            LOGGER.error(ErrorUtils.createErrorMessage(ErrorUtilsConstants.AEM_REPOSITORY_EXCEPTION, ErrorUtilsConstants.TECHNICAL,
                            ErrorUtilsConstants.AEM_SITE, ErrorUtilsConstants.MODULE_SERVICE, this.getClass().getSimpleName(), e));
        }
        return count;
    }

    private int fetchPricesFromJsonResponse(Session session, JsonArray featureList, StringBuilder destinationPathBuilder, String currency)
                    throws RepositoryException {
        double minGross = 0;
        double minNet = 0;
        double minRetail = 0;
        int count = 0;
        for (JsonElement featureElement : featureList) {
            JsonObject featureObject = featureElement.getAsJsonObject();
            if (featureObject.has(PricingConstants.JLR_PRICING_JSON_FEATURE)) {
                JsonArray productList = featureObject.getAsJsonArray(PricingConstants.JLR_PRICING_JSON_FEATURE);
                for (JsonElement productElement : productList) {
                    JsonObject productObject = productElement.getAsJsonObject();
                    String productId = productObject.has(PricingConstants.JLR_PRICING_JSON_ID)
                                    ? productObject.get(PricingConstants.JLR_PRICING_JSON_ID).getAsString()
                                    : StringUtils.EMPTY;
                    if (productObject.has(PricingConstants.JLR_PRICING_JSON_PRICE)) {
                        JsonElement priceElement = productObject.get(PricingConstants.JLR_PRICING_JSON_PRICE);
                        JsonObject priceObject = priceElement.getAsJsonObject();
                        String finalDestinationPath = destinationPathBuilder.toString();
                        JsonElement grossElement = priceObject.get(StringUtils.upperCase(PricingConstants.PN_GROSS));
                        minGross = PricingUtils.savePriceToCrx(grossElement, finalDestinationPath, productId, session, PricingConstants.PN_GROSS, minGross);

                        JsonElement netElement = priceObject.get(StringUtils.upperCase(PricingConstants.PN_NET));
                        minNet = PricingUtils.savePriceToCrx(netElement, finalDestinationPath, productId, session, PricingConstants.PN_NET, minNet);

                        JsonElement retailElement = priceObject.get(StringUtils.upperCase(PricingConstants.PN_RETAIL));
                        minRetail = PricingUtils.savePriceToCrx(retailElement, finalDestinationPath, productId, session, PricingConstants.PN_RETAIL, minRetail);
                        count++;
                    }

                }
            }

        }
        PricingUtils.saveMinPrices(minGross, minNet, minRetail, destinationPathBuilder.toString(), currency, session);
        return count;
    }

    public void replicate(ResourceResolver resolver, String pricingDestinationPath) {

        if (null != pricingDestinationPath && !pricingDestinationPath.isEmpty() && !PricingUtils.isLocked(resolver, pricingDestinationPath)) {
            ReplicationOptions replicationOptions = new ReplicationOptions();
            replicationOptions.setSynchronous(Boolean.TRUE);
            List<String> agents = Arrays.asList(StringUtils.split(replicationAgent, ","));
            replicationOptions.setFilter(new AgentIdsAgentFilter(agents));

            try {
                if (LOGGER.isTraceEnabled()) {
                    LOGGER.trace("Replication started at {}", new java.util.Date());
                }
                Map<String, String> parameters = new HashMap<>();
                parameters.put(CommonConstants.QUERY_PATH, pricingDestinationPath);
                parameters.put(CommonConstants.QUERY_TYPE, JcrConstants.NT_UNSTRUCTURED);
                parameters.put(CommonConstants.QUERY_ORDERBY, CommonConstants.QUERY_PATH);
                parameters.put(CommonConstants.QUERY_GROUP_OR, CommonConstants.TRUE);
                parameters.put(CommonConstants.QUERY_GROUP1_DATECOMPARISON_PROPERTY1,CommonConstants.JCR_LASTMODIFIED);
                parameters.put(CommonConstants.QUERY_GROUP1_DATECOMPARISON_PROPERTY2,CommonConstants.CQ_LASTREPLICATED);
                parameters.put(CommonConstants.QUERY_GROUP1_DATECOMPARISON_OPERATION,CommonConstants.GREATER);
                parameters.put(CommonConstants.QUERY_GROUP2_PROPERTY,CommonConstants.CQ_LASTREPLICATED);
                parameters.put(CommonConstants.QUERY_GROUP2_PROPERTY_OPERATION,CommonConstants.NOT);
                parameters.put(CommonConstants.QUERY_LIMIT, "10000");

                Query query = builder.createQuery(PredicateGroup.create(parameters), resolver.adaptTo(Session.class));
                SearchResult result = query.getResult();
                if (LOGGER.isTraceEnabled()) {
                    LOGGER.trace("Total Nodes to replicate :{}", result.getHits().size());
                }
                for (Hit hit : result.getHits()) {
                    activate(replicator, replicationOptions, resolver.adaptTo(Session.class), hit.getPath());
                }
                if (LOGGER.isTraceEnabled()) {
                    LOGGER.trace("Replication Completed at {}", new java.util.Date());
                }

            } catch (RepositoryException e) {
                LOGGER.error(ErrorUtils.createErrorMessage(ErrorUtilsConstants.AEM_REPOSITORY_EXCEPTION, ErrorUtilsConstants.TECHNICAL,
                                ErrorUtilsConstants.AEM_SITE, ErrorUtilsConstants.MODULE_SERVICE, this.getClass().getSimpleName(), e));
            }

        } else {

            LOGGER.error("Failed to Replicate due to invalid/missing destination path config or locked by previous iteration!");

        }

    }

    private void activate(Replicator replicator, ReplicationOptions replicationOptions, Session session, String path) {
        try {
            throttledTaskRunner.waitForLowCpuAndLowMemory();
            replicator.replicate(session, ReplicationActionType.ACTIVATE, path, replicationOptions);
        } catch (ReplicationException e) {
            LOGGER.error(ErrorUtils.createErrorMessage(ErrorUtilsConstants.AEM_REPOSITORY_EXCEPTION, ErrorUtilsConstants.TECHNICAL,
                            ErrorUtilsConstants.AEM_SITE, ErrorUtilsConstants.MODULE_SERVICE, this.getClass().getSimpleName(), e));
        } catch (InterruptedException e) {
            LOGGER.error(ErrorUtils.createErrorMessage(ErrorUtilsConstants.AEM_INTERRUPTED_EXCEPTION, ErrorUtilsConstants.TECHNICAL,
                            ErrorUtilsConstants.AEM_SITE, ErrorUtilsConstants.MODULE_SERVICE, this.getClass().getSimpleName(), e));

        }
    }
}
