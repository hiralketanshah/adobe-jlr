package com.jlr.core.services;

import java.util.Map;

/**
 * Service Interface for FetchPrice Service.
 *
 * @author Adobe
 */
public interface FetchPrice {

    public String getPrices(Map<String, String> endpoints, Map<String, String> staticUrl,
            Map<String, String> configPages, Map<String, String> header, String destinationPath, String market,
            String[] listOfStates);

    public void replicate(String pricingDestinationPath);
}