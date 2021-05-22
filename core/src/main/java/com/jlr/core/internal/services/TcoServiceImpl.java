package com.jlr.core.internal.services;

import static com.jlr.core.constants.CommonConstants.JLR_LOCALE_PRICING;
import static com.jlr.core.constants.PricingConstants.DEFAULT_PRICE_TYPE;
import static com.jlr.core.constants.PricingConstants.DOT_REGEX;
import static com.jlr.core.constants.PricingConstants.FALLBACK_PRICE_TYPE;
import static com.jlr.core.constants.PricingConstants.PRICING_CURRENT_FORMAT;
import static com.jlr.core.constants.PricingConstants.PRICING_SUPPRESSION;
import static com.jlr.core.utils.CommonUtils.getSiteRootPath;
import static com.jlr.core.utils.TcoUtils.BASE_PATH;
import static com.jlr.core.utils.TcoUtils.getNamePlatePath;
import java.util.Arrays;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.atomic.AtomicReference;
import javax.servlet.http.Cookie;
import org.apache.commons.collections.MapUtils;
import org.apache.commons.lang.StringUtils;
import org.apache.jackrabbit.JcrConstants;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.PersistenceException;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.api.resource.ResourceUtil;
import org.apache.sling.api.resource.ValueMap;
import org.osgi.service.component.annotations.Activate;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.Reference;
import org.osgi.service.metatype.annotations.Designate;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import com.day.cq.commons.inherit.InheritanceValueMap;
import com.day.cq.wcm.api.Page;
import com.jlr.core.config.PricingConfig;
import com.jlr.core.constants.CommonConstants;
import com.jlr.core.constants.ErrorUtilsConstants;
import com.jlr.core.pojos.PricingPojo;
import com.jlr.core.services.Dictionary;
import com.jlr.core.services.TcoService;
import com.jlr.core.utils.ErrorUtils;
import com.jlr.core.utils.TcoUtils;

@Component(immediate = true, service = TcoService.class)
@Designate(ocd = PricingConfig.class)
public class TcoServiceImpl implements TcoService {
    /**
     * The Constant LOGGER.
     */
    private static final Logger LOGGER = LoggerFactory.getLogger(TcoServiceImpl.class);

    private String[] listOfStates;

    @Reference
    private Dictionary dictionary;

    @Activate
    public void activate(PricingConfig config) {
        listOfStates = config.listOfStates();
    }

    @Override
    public Map<String, String> getModelPrice(ResourceResolver resourceResolver, SlingHttpServletRequest request, Page currentPage,
                    InheritanceValueMap pageProperties, String priceMacro, String configKey) {


        if (StringUtils.isEmpty(priceMacro)) {
            return Collections.emptyMap();
        }
        Map<String, String> modelPriceMap = new HashMap<>();
        PricingPojo pricingPojo = new PricingPojo();
        String region = getRegionFromPage(currentPage, resourceResolver);

        if (StringUtils.isEmpty(region)) {
            return Collections.emptyMap();
        }
        pricingPojo.setRegion(region);

        if (LOGGER.isDebugEnabled()) {
            LOGGER.info("Region detected is {} with price macro {}", region, priceMacro);
        }

        if (StringUtils.isNotEmpty(priceMacro)) {
            if (!(Boolean.valueOf(pageProperties.getInherited(PRICING_SUPPRESSION, String.class))) && (priceMacro.contains("{{") && priceMacro.contains("}}"))
                            && StringUtils.isNotEmpty(region)) {

                if (null != request.getAttribute(PRICING_SUPPRESSION)) {
                    if (request.getAttribute(PRICING_SUPPRESSION).toString().equalsIgnoreCase("true")) {
                        modelPriceMap.put(StringUtils.EMPTY, StringUtils.EMPTY);
                        return modelPriceMap;
                    }
                }


                if (LOGGER.isDebugEnabled()) {
                    LOGGER.info("Valid marco with pricing supression: False");
                }

                String stateCookieValue = StringUtils.EMPTY;
                if (region.equalsIgnoreCase("en_au")) {

                    Cookie stateCode = request.getCookie(JLR_LOCALE_PRICING);

                    if (null == stateCode) {
                        stateCode = (Cookie) request.getAttribute(JLR_LOCALE_PRICING);
                    }
                    // Updating map to contain no values so macros are not displayed
                    if (null == stateCode || !validState(stateCode.getValue(), listOfStates)) {
                        modelPriceMap.put(StringUtils.EMPTY, StringUtils.EMPTY);
                        return modelPriceMap;
                    }


                    stateCookieValue = stateCode.getValue();
                    if (LOGGER.isDebugEnabled()) {
                        LOGGER.info("Australian state detected from cookies is {}", stateCookieValue);
                    }
                    pricingPojo.setStateCode(stateCookieValue.toLowerCase());
                }
                mapPagePropertiesToPojo(pricingPojo, pageProperties);

                buildModelPriceMap(resourceResolver, request, currentPage, priceMacro, configKey, modelPriceMap, pricingPojo);
            } else {
                modelPriceMap.put(StringUtils.EMPTY, priceMacro);
            }
        }
        return modelPriceMap;
    }

    private void buildModelPriceMap(ResourceResolver resourceResolver, SlingHttpServletRequest request, Page currentPage, String priceMacro, String configKey,
                    Map<String, String> modelPriceMap, PricingPojo pricingPojo) {
        priceMacro.replaceAll("\\{\\}", StringUtils.EMPTY);
        String[] configCodes = priceMacro.split(DOT_REGEX);
        pricingPojo.setPriceMacroConfig(configCodes[1]);
        if (configCodes.length == 4) {
            pricingPojo.setPriceType(configCodes[3]);

            if (LOGGER.isDebugEnabled()) {
                LOGGER.info("Has complex macro: {}", TcoUtils.hasComplexMacro(pricingPojo.getPriceMacroConfig()));
            }
        }
        if (TcoUtils.hasComplexMacro(pricingPojo.getPriceMacroConfig())) {
            decodeComplexMacroForPrice(pricingPojo, resourceResolver, currentPage);
        } else {
            decodeSimpleMacroForPrice(pricingPojo, resourceResolver, currentPage);
        }
        Map<String, String> configMap = dictionary.getConfigMap(resourceResolver, request.getResource(), currentPage);
        String configValue = configMap.get(configKey);
        if (LOGGER.isDebugEnabled()) {
            LOGGER.info("Config Key : {} and Price is {}", configKey, pricingPojo.getModelPrice());
        }
        if (StringUtils.isNotEmpty(pricingPojo.getStateCode()) && StringUtils.isNotEmpty(configValue)) {
            configValue = configValue.replace("{state}", pricingPojo.getStateCode().toUpperCase());
        }
        modelPriceMap.put(configValue, pricingPojo.getModelPrice());
    }

    private boolean validState(String stateCode, String[] states) {
        return Arrays.stream(states).anyMatch(s -> s.equalsIgnoreCase(stateCode));
    }

    private String getRegionFromPage(Page currentPage, ResourceResolver resourceResolver) {
        String siteRootPath = getSiteRootPath(currentPage);
        Resource resource = resourceResolver.getResource(siteRootPath);
        // TODO: need to process other regions, default to "de" for now
        String region = StringUtils.EMPTY;
        if (resource.getName().contains("en_au") || resource.getName().contains("aus")) {
            region = "en_au";
        } else if (resource.getName().contains("de") || resource.getName().contains("deu")) {
            region = "de";
        }
        return region;
    }

    private void mapPagePropertiesToPojo(PricingPojo pricingPojo, InheritanceValueMap pageProperties) {
        pricingPojo.setCurrencyFormat(pageProperties.getInherited(PRICING_CURRENT_FORMAT, String.class));
        pricingPojo.setDefaultPriceType(pageProperties.getInherited(DEFAULT_PRICE_TYPE, String.class));
        pricingPojo.setFallbackPriceType(pageProperties.getInherited(FALLBACK_PRICE_TYPE, String.class));
        if (LOGGER.isDebugEnabled()) {
            LOGGER.info("CurrentFormat is : {} and Default Price tyoe is {}", pageProperties.getInherited(PRICING_CURRENT_FORMAT, String.class),
                            pageProperties.getInherited(DEFAULT_PRICE_TYPE, String.class));
        }
    }

    private void decodeSimpleMacroForPrice(PricingPojo pricingPojo, ResourceResolver resourceResolver, Page currentPage) {
        pricingPojo.setNamePlate(pricingPojo.getPriceMacroConfig());
        fetchPageProperties(pricingPojo, resourceResolver, currentPage);
        String path = getNamePlatePath(pricingPojo, StringUtils.EMPTY, BASE_PATH);
        fetchPriceFromResource(pricingPojo, resourceResolver, path);

    }

    private void decodeComplexMacroForPrice(PricingPojo pricingPojo, ResourceResolver resourceResolver, Page currentPage) {
        String macroModelYear = fetchNamePlateProductDetails(pricingPojo);
        fetchPageProperties(pricingPojo, resourceResolver, currentPage);
        String path = getNamePlatePath(pricingPojo, macroModelYear, BASE_PATH);
        fetchPriceFromResource(pricingPojo, resourceResolver, path);
    }

    private void fetchPriceFromResource(PricingPojo pricingPojo, ResourceResolver resourceResolver, String path) {
        try {
            Resource varResource = ResourceUtil.getOrCreateResource(resourceResolver, path, JcrConstants.NT_UNSTRUCTURED, JcrConstants.NT_UNSTRUCTURED, false);
            ValueMap valueMap = varResource.getValueMap();
            if (MapUtils.isNotEmpty(valueMap)) {
                if (StringUtils.isEmpty(pricingPojo.getPriceType())) {
                    pricingPojo.setPriceType(pricingPojo.getDefaultPriceType());
                }
                Double dPrice = getConvertedPrice(valueMap.get(pricingPojo.getPriceType(), String.class), pricingPojo, valueMap);
                pricingPojo.setModelPrice(TcoUtils.currencyFormat(pricingPojo.getCurrencyFormat(), dPrice));
                if (LOGGER.isDebugEnabled()) {
                    LOGGER.info("Path of the nameplate is {} with price {}", path, dPrice);
                }
            }
        } catch (PersistenceException e) {
            LOGGER.error(ErrorUtils.createErrorMessage(ErrorUtilsConstants.AEM_PERSISTENCE_EXCEPTION, ErrorUtilsConstants.TECHNICAL,
                            ErrorUtilsConstants.AEM_SITE, ErrorUtilsConstants.MODULE_SERVICE, this.getClass().getSimpleName(), e));
        }
    }

    private Double getConvertedPrice(String price, PricingPojo pricingPojo, ValueMap valueMap) {
        if (isNotValidPrice(price)) {
            price = valueMap.get(pricingPojo.getDefaultPriceType(), String.class);
            if (isNotValidPrice(price)) {
                price = valueMap.get(pricingPojo.getFallbackPriceType(), String.class);
            }
        }
        return Double.parseDouble(StringUtils.isEmpty(price) ? "0.0" : price);
    }

    private boolean isNotValidPrice(String price) {
        return StringUtils.isEmpty(price) || Double.parseDouble(price) == 0.0d;
    }

    private String fetchNamePlateProductDetails(PricingPojo pricingPojo) {
        String macroModelYear = StringUtils.EMPTY;
        if (pricingPojo.getPriceMacroConfig().contains(CommonConstants.FORWARD_SLASH)) {
            String[] models = pricingPojo.getPriceMacroConfig().split(CommonConstants.FORWARD_SLASH);
            pricingPojo.setNamePlate(models[0]);
            if (models[1].contains(CommonConstants.UNDERSCORE)) {
                String[] productYears = models[1].split(CommonConstants.UNDERSCORE);
                pricingPojo.setProduct(productYears[0]);
                macroModelYear = productYears[1];
            } else {
                pricingPojo.setProduct(models[1]);
            }
        } else {
            if (pricingPojo.getPriceMacroConfig().contains(CommonConstants.UNDERSCORE)) {
                String[] productYears = pricingPojo.getPriceMacroConfig().split(CommonConstants.UNDERSCORE);
                pricingPojo.setNamePlate(productYears[0]);
                macroModelYear = productYears[1];
            }
        }
        return macroModelYear;
    }

    private void fetchPageProperties(PricingPojo pricingPojo, ResourceResolver resourceResolver, Page currentPage) {
        Resource resource = getNamePlateResource(pricingPojo, resourceResolver, currentPage);
        if (resource != null) {
            resource.getChildren().iterator().forEachRemaining(child -> {
                if (child.getValueMap().get("nameplate", String.class).equals(pricingPojo.getNamePlate())) {
                    pricingPojo.setModelYear(child.getValueMap().get("modelYear", String.class));
                    pricingPojo.setEnvironment(child.getValueMap().get("environment", String.class));
                }
            });
        }
    }

    private Resource getNamePlateResource(PricingPojo pricingPojo, ResourceResolver resourceResolver, Page currentPage) {
        Resource resource = resourceResolver.getResource(currentPage.getPath() + "/jcr:content/nameplateDetails");
        if (null == resource || !resourceMatched(pricingPojo, resource)) {
            if (!reachedRoot(currentPage.getName())) {
                return getNamePlateResource(pricingPojo, resourceResolver, currentPage.getParent());
            }
        }
        return resource;
    }

    private boolean resourceMatched(PricingPojo pricingPojo, Resource resource) {
        AtomicReference<Boolean> resourceFound = new AtomicReference<>(false);
        resource.getChildren().forEach(child -> {
            if (child.getValueMap().get("nameplate", String.class).equals(pricingPojo.getNamePlate())) {
                resourceFound.set(true);
            }
        });
        return resourceFound.get();
    }

    private boolean reachedRoot(String name) {
        return name.equalsIgnoreCase("de_de") || name.equalsIgnoreCase("deu") || name.equalsIgnoreCase("en_au") || name.equalsIgnoreCase("aus");
    }
}
