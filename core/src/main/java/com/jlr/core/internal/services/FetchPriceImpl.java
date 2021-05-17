package com.jlr.core.internal.services;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import javax.jcr.Node;
import javax.jcr.RepositoryException;
import javax.jcr.Session;

import org.apache.commons.httpclient.HttpClient;
import org.apache.commons.httpclient.methods.GetMethod;
import org.apache.jackrabbit.commons.JcrUtils;
import org.apache.sling.api.resource.LoginException;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.api.resource.ResourceResolverFactory;
import org.apache.sling.api.resource.ValueMap;
import org.osgi.service.component.annotations.Activate;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.Reference;
import org.osgi.service.metatype.annotations.AttributeDefinition;
import org.osgi.service.metatype.annotations.AttributeType;
import org.osgi.service.metatype.annotations.Designate;
import org.osgi.service.metatype.annotations.ObjectClassDefinition;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.day.cq.commons.jcr.JcrConstants;
import com.google.gson.Gson;
import com.google.gson.JsonArray;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.jlr.core.constants.CommonConstants;
import com.jlr.core.services.FetchPrice;

@Component(service = FetchPrice.class)
@Designate(ocd = FetchPriceImpl.Configuration.class)
public class FetchPriceImpl implements FetchPrice {

    private static final Logger LOGGER = LoggerFactory.getLogger(FetchPriceImpl.class);

    @Reference
    private ResourceResolverFactory resourceResolverFactory;

    Map<String, String> endpoints;
    Map<String, String> configPages;

    @Activate
    public void activate(FetchPriceImpl.Configuration config) {
        endpoints = getMapOfConfigFields(config.listOfEndpoints());
        configPages = getMapOfConfigFields(config.listOfConfigPages());
        LOGGER.debug("JLR pricing scheduler is added");
    }

    private Map<String, String> getMapOfConfigFields(String[] listOfConfigFields) {
        Map<String, String> mapOfConfigFields = new HashMap<>();
        for (String item : listOfConfigFields) {
            String[] configFieldsEntry = item.split("\\|");
            if (configFieldsEntry.length == 2) {
                mapOfConfigFields.put(configFieldsEntry[0], configFieldsEntry[1]);
            }
        }
        return mapOfConfigFields;
    }

    @Override
    public String getPrices() {
        String resp = null;
        try (ResourceResolver resolver = resourceResolverFactory.getAdministrativeResourceResolver(null)) {
            List<String> listOfEndpoints = formEndpointURLs(resolver);
            for (String endpoint : listOfEndpoints) {

                resp = getPricingDetails(endpoint, resolver);

                // hit url one by one
                // save the info into AEM
                //
            }
        } catch (LoginException e) {
            e.printStackTrace();
        }

        return resp;
    }

    private String getPricingDetails(String endpoint, ResourceResolver resolver) {
        StringBuilder destinationPath = new StringBuilder();
        destinationPath.append("/var/lr/pricing/de/yyy/");
        try {
            Session session = resolver.adaptTo(Session.class);

            HttpClient httpClient = new HttpClient();
            GetMethod method = new GetMethod(endpoint);

            int status = httpClient.executeMethod(method);

            String response = method.getResponseBodyAsString();
            Gson gson = new Gson();
            JsonObject responseObject = new Gson().fromJson(response, JsonObject.class);
            JsonObject featureDictionary = responseObject.getAsJsonObject("feature-dictionary");

            JsonObject vehicle = featureDictionary.getAsJsonObject("vehicle");
            String id = vehicle.get("id").getAsString();
            String modelYear = vehicle.get("modelyear").getAsString();
            destinationPath.append(modelYear).append(CommonConstants.FORWARD_SLASH).append(id)
                    .append(CommonConstants.FORWARD_SLASH);
            JsonArray featureList = featureDictionary.getAsJsonArray("feature-list");
            for (JsonElement featureElement : featureList) {
                JsonObject featureObject = featureElement.getAsJsonObject();
                JsonArray productList = featureObject.getAsJsonArray("feature");
                for (JsonElement productElement : productList) {
                    JsonObject productObject = productElement.getAsJsonObject();
                    String productId = productObject.get("id").getAsString();
                    JsonObject priceObject = productObject.get("price").getAsJsonObject();

                    JsonObject grossObject = priceObject.get("GROSS").getAsJsonObject();
                    saveToCrx(grossObject, destinationPath.toString() + productId, session, "gross");

                    JsonObject netObject = priceObject.get("NET").getAsJsonObject();
                    saveToCrx(netObject, destinationPath.toString() + productId, session, "net");

                }
            }

            session.save();
        } catch (IOException | RepositoryException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }

        return destinationPath.toString();
    }

    private void saveToCrx(JsonObject grossObject, String destinationPath, Session session, String priceType) {
        try {
            Node priceNode = JcrUtils.getOrCreateByPath(destinationPath + CommonConstants.FORWARD_SLASH + priceType,
                    JcrConstants.NT_UNSTRUCTURED, session);
            priceNode.setProperty("currency", grossObject.get("currency").getAsString());
            priceNode.setProperty("value", grossObject.get("value").getAsString());

        } catch (RepositoryException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
    }

    private List<String> formEndpointURLs(ResourceResolver resolver) {
        List<String> listOfEndpoints = new ArrayList<>();

        for (Map.Entry<String, String> entrypoint : endpoints.entrySet()) {
            if (configPages.containsKey(entrypoint.getKey())) {
                String configPagePath = configPages.get(entrypoint.getKey());
                Resource configPage = resolver.getResource(configPagePath);
                if (null != configPage) {
                    Resource component = configPage.getChild(JcrConstants.JCR_CONTENT + CommonConstants.FORWARD_SLASH
                            + CommonConstants.JLR_ROOT + CommonConstants.FORWARD_SLASH + CommonConstants.JLR_CONTAINER
                            + CommonConstants.FORWARD_SLASH + "priceconfig/nameplateList");
                    if (null != component) {
                        List<String> listOfNameplate = getNameplateList(component);
                        for (String nameplate : listOfNameplate) {
                            listOfEndpoints.add(entrypoint.getValue() + CommonConstants.FORWARD_SLASH + nameplate
                                    + CommonConstants.EXTENSION_PRICING_API);
                        }
                    }
                }
            }
        }

        // Fetch the list of nameplateIDs and model year and form the endpoint
        // url.
        return listOfEndpoints;
    }

    private List<String> getNameplateList(Resource component) {
        List<String> listOfNameplate = new ArrayList<>();
        Iterator<Resource> iterator = component.listChildren();
        if (iterator.hasNext()) {
            Resource nameplateResource = iterator.next();
            ValueMap properties = nameplateResource.adaptTo(ValueMap.class);
            String nameplateId = properties.get("nameplateId", String.class);
            String[] modelYear = properties.get("modelYear", String[].class);

            for (String year : modelYear) {
                listOfNameplate.add(nameplateId + CommonConstants.UNDERSCORE + year);
            }

        }
        return listOfNameplate;
    }

    @ObjectClassDefinition(name = "JLR Pricing Details")
    public @interface Configuration {

        @AttributeDefinition(name = "Endpoints from which the prices shall be fetched", description = "Endpoints from which the prices shall be fetched. Format to be followed : <region> | <endpoint>", type = AttributeType.STRING)
        public String[] listOfEndpoints() default { "DE|https://rules.configureconnect.com/rc/lr2/de", "AU|xyz" };

        @AttributeDefinition(name = "List of Config Pages", description = "List of Config Pages. Format to be followed : <region>|<config page path>", type = AttributeType.STRING)
        public String[] listOfConfigPages() default {
                "DE|/content/landrover/europe/language-masters/germany/en/price-config", "AU|xyz" };

    }

}
