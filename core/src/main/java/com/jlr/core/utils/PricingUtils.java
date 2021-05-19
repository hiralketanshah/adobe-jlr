package com.jlr.core.utils;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import javax.jcr.Node;
import javax.jcr.RepositoryException;
import javax.jcr.Session;

import org.apache.jackrabbit.commons.JcrUtils;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.api.resource.ValueMap;

import com.day.cq.commons.jcr.JcrConstants;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.jlr.core.constants.CommonConstants;
import com.jlr.core.constants.PricingConstants;

public class PricingUtils {

    public static Map<String, String> getMapOfConfigFields(String[] listOfConfigFields) {
        Map<String, String> mapOfConfigFields = new HashMap<>();
        for (String item : listOfConfigFields) {
            String[] configFieldsEntry = item
                    .split(CommonConstants.DOUBLE_BACKSLASHES + CommonConstants.PIPE_CHARACTER);
            if (configFieldsEntry.length == 2) {
                mapOfConfigFields.put(configFieldsEntry[0], configFieldsEntry[1]);
            }
        }
        return mapOfConfigFields;
    }

    public static List<String> formEndpointURLs(ResourceResolver resolver, Map<String, String> endpoints,
            Map<String, String> staticUrl, Map<String, String> configPages, String market) {
        List<String> listOfEndpoints = new ArrayList<>();

        for (Map.Entry<String, String> endpoint : endpoints.entrySet()) {
            if ((market.equalsIgnoreCase(PricingConstants.JLR_PRICING_MARKET_ALL)
                    || endpoint.getKey().equalsIgnoreCase(market)) && staticUrl.containsKey(endpoint.getKey())
                    && configPages.containsKey(endpoint.getKey())) {
                String url = staticUrl.get(endpoint.getKey());
                String configPagePath = configPages.get(endpoint.getKey());
                Resource configPage = resolver.getResource(configPagePath);
                if (null != configPage) {
                    Resource component = configPage.getChild(JcrConstants.JCR_CONTENT + CommonConstants.FORWARD_SLASH
                            + CommonConstants.JLR_ROOT + CommonConstants.FORWARD_SLASH + CommonConstants.JLR_CONTAINER
                            + CommonConstants.FORWARD_SLASH + PricingConstants.JLR_PRICING_COMPONENT);
                    List<String> listOfNameplate = getNameplateList(component);
                    for (String nameplate : listOfNameplate) {
                        listOfEndpoints.add(endpoint.getKey() + CommonConstants.PIPE_CHARACTER + endpoint.getValue()
                                + url + nameplate + PricingConstants.EXTENSION_PRICING_API);
                    }

                }
            }
        }
        return listOfEndpoints;
    }

    private static List<String> getNameplateList(Resource component) {
        List<String> listOfNameplate = new ArrayList<>();
        if (null != component) {
            Iterator<Resource> iterator = component.listChildren();
            while (iterator.hasNext()) {
                Resource nameplateResource = iterator.next();
                ValueMap properties = nameplateResource.adaptTo(ValueMap.class);
                String nameplateId = properties.get(PricingConstants.PN_NAMEPLATEID, String.class);
                String modelYears = properties.get(CommonConstants.PN_MODELYEAR, String.class);
                String[] modelYear = modelYears.split(CommonConstants.COMMA);

                for (String year : modelYear) {
                    listOfNameplate.add(nameplateId.trim() + CommonConstants.UNDERSCORE + year.trim());
                }

            }
        }
        return listOfNameplate;
    }

    public static void saveMinPrices(double minGross, double minNet, double minRetail, String destinationPath,
            String currency, Session session) throws RepositoryException {

        Node modelNode = JcrUtils.getOrCreateByPath(destinationPath, JcrConstants.NT_UNSTRUCTURED, session);
        modelNode.setProperty(PricingConstants.PN_GROSS, Double.toString(minGross));
        modelNode.setProperty(PricingConstants.PN_NET, Double.toString(minNet));
        modelNode.setProperty(PricingConstants.PN_RETAIL, Double.toString(minRetail));
        modelNode.setProperty(PricingConstants.PN_CURRENCY, currency);

    }

    public static double savePriceToCrx(JsonElement priceElement, String destinationPath, String productId,
            Session session, String priceType, double minPrice) throws RepositoryException {
        if (null != priceElement) {
            JsonObject priceObject = priceElement.getAsJsonObject();
            Node productNode = JcrUtils.getOrCreateByPath(destinationPath + productId, JcrConstants.NT_UNSTRUCTURED,
                    session);

            productNode.setProperty(priceType, priceObject.get(PricingConstants.JLR_PRICING_JSON_VALUE).getAsString());
            double price = priceObject.get(PricingConstants.JLR_PRICING_JSON_VALUE).getAsDouble();
            if (minPrice >= price || minPrice == 0) {
                minPrice = price;
            }
        }
        return minPrice;
    }

}
