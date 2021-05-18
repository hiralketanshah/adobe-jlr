package com.jlr.core.pojos;

import org.apache.commons.lang.StringUtils;

/**
 * The type Pricing pojo.
 */
public class PricingPojo {
    private String priceMacroConfig;
    private String namePlate;
    private String priceType;
    private String modelPrice;
    private String modelYear;
    private String environment;
    private String region;
    private String product;
    private String defaultPriceType;
    private String fallbackPriceType;
    private String pricingSuppression;
    private String currencyFormat;

    /**
     * Gets price macro config.
     *
     * @return the price macro config
     */
    public String getPriceMacroConfig() {
        return priceMacroConfig;
    }

    /**
     * Sets price macro config.
     *
     * @param priceMacroConfig the price macro config
     */
    public void setPriceMacroConfig(String priceMacroConfig) {
        this.priceMacroConfig = priceMacroConfig;
    }

    /**
     * Gets name plate.
     *
     * @return the name plate
     */
    public String getNamePlate() {
        return namePlate;
    }

    /**
     * Sets name plate.
     *
     * @param namePlate the name plate
     */
    public void setNamePlate(String namePlate) {
        this.namePlate = namePlate;
    }

    /**
     * Gets price type.
     *
     * @return the price type
     */
    public String getPriceType() {
        return StringUtils.isEmpty(priceType) ? defaultPriceType : priceType;
    }

    /**
     * Sets price type.
     *
     * @param priceType the price type
     */
    public void setPriceType(String priceType) {
        this.priceType = priceType;
    }

    /**
     * Gets model price.
     *
     * @return the model price
     */
    public String getModelPrice() {
        return modelPrice;
    }

    /**
     * Sets model price.
     *
     * @param modelPrice the model price
     */
    public void setModelPrice(String modelPrice) {
        this.modelPrice = modelPrice;
    }

    /**
     * Gets model year.
     *
     * @return the model year
     */
    public String getModelYear() {
        return modelYear;
    }

    /**
     * Sets model year.
     *
     * @param modelYear the model year
     */
    public void setModelYear(String modelYear) {
        this.modelYear = modelYear;
    }

    /**
     * Gets environment.
     *
     * @return the environment
     */
    public String getEnvironment() {
        return environment;
    }

    /**
     * Sets environment.
     *
     * @param environment the environment
     */
    public void setEnvironment(String environment) {
        this.environment = environment;
    }

    /**
     * Gets region.
     *
     * @return the region
     */
    public String getRegion() {
        return region;
    }

    /**
     * Sets region.
     *
     * @param region the region
     */
    public void setRegion(String region) {
        this.region = region;
    }

    /**
     * Gets product.
     *
     * @return the product
     */
    public String getProduct() {
        return product;
    }

    /**
     * Sets product.
     *
     * @param product the product
     */
    public void setProduct(String product) {
        this.product = product;
    }

    /**
     * Gets default price type.
     *
     * @return the default price type
     */
    public String getDefaultPriceType() {
        return StringUtils.isEmpty(defaultPriceType) ? fallbackPriceType : defaultPriceType;
    }

    /**
     * Sets default price type.
     *
     * @param defaultPriceType the default price type
     */
    public void setDefaultPriceType(String defaultPriceType) {
        this.defaultPriceType = defaultPriceType;
    }

    /**
     * Gets fallback price type.
     *
     * @return the fallback price type
     */
    public String getFallbackPriceType() {
        return fallbackPriceType;
    }

    /**
     * Sets fallback price type.
     *
     * @param fallbackPriceType the fallback price type
     */
    public void setFallbackPriceType(String fallbackPriceType) {
        this.fallbackPriceType = fallbackPriceType;
    }

    /**
     * Gets pricing suppression.
     *
     * @return the pricing suppression
     */
    public String getPricingSuppression() {
        return pricingSuppression;
    }

    /**
     * Sets pricing suppression.
     *
     * @param pricingSuppression the pricing suppression
     */
    public void setPricingSuppression(String pricingSuppression) {
        this.pricingSuppression = pricingSuppression;
    }

    /**
     * Gets currency format.
     *
     * @return the currency format
     */
    public String getCurrencyFormat() {
        return currencyFormat;
    }

    /**
     * Sets currency format.
     *
     * @param currencyFormat the currency format
     */
    public void setCurrencyFormat(String currencyFormat) {
        this.currencyFormat = currencyFormat;
    }
}
