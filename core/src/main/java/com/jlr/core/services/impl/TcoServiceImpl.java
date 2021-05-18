package com.jlr.core.services.impl;

import com.day.cq.wcm.api.Page;
import com.jlr.core.constants.CommonConstants;
import com.jlr.core.constants.ErrorUtilsConstants;
import com.jlr.core.pojos.PricingPojo;
import com.jlr.core.services.TcoService;
import com.jlr.core.utils.ErrorUtils;
import com.jlr.core.utils.TcoUtils;
import org.apache.commons.collections.MapUtils;
import org.apache.commons.lang.StringUtils;
import org.apache.jackrabbit.JcrConstants;
import org.apache.sling.api.resource.*;
import org.osgi.service.component.annotations.Component;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import static com.jlr.core.utils.TcoUtils.BASE_PATH;
import static com.jlr.core.utils.TcoUtils.getNamePlatePath;

@Component(immediate = true, service = TcoService.class)
public class TcoServiceImpl implements TcoService {
    /**
     * The Constant LOGGER.
     */
    private static final Logger LOGGER = LoggerFactory.getLogger(
            TcoServiceImpl.class);

    @Override
    public String getModelPrice(PricingPojo pricingPojo, ResourceResolver resourceResolver,
                                Page currentPage) {
        if (TcoUtils.hasComplexMacro(pricingPojo.getPriceMacroConfig())) {
            decodeComplexMacroForPrice(pricingPojo, resourceResolver, currentPage);
        } else {
            decodeSimpleMacroForPrice(pricingPojo, resourceResolver, currentPage);
        }
        return pricingPojo.getModelPrice();
    }

    private void decodeSimpleMacroForPrice(PricingPojo pricingPojo,
                                           ResourceResolver resourceResolver,
                                           Page currentPage) {
        pricingPojo.setNamePlate(pricingPojo.getPriceMacroConfig());
        fetchPageProperties(pricingPojo, resourceResolver, currentPage);
        String path = getNamePlatePath(pricingPojo, StringUtils.EMPTY, BASE_PATH);
        fetchPriceFromResource(pricingPojo, resourceResolver, path);
    }

    private void decodeComplexMacroForPrice(PricingPojo pricingPojo,
                                            ResourceResolver resourceResolver,
                                            Page currentPage) {
        String macroModelYear = fetchNamePlateProductDetails(pricingPojo);
        fetchPageProperties(pricingPojo, resourceResolver, currentPage);
        String path = getNamePlatePath(pricingPojo, macroModelYear, BASE_PATH);
        fetchPriceFromResource(pricingPojo, resourceResolver, path);
    }

    private void fetchPriceFromResource(PricingPojo pricingPojo,
                                        ResourceResolver resourceResolver,
                                        String path) {
        try {
            Resource varResource = ResourceUtil.getOrCreateResource(
                    resourceResolver, path, JcrConstants.NT_UNSTRUCTURED,
                    JcrConstants.NT_UNSTRUCTURED,
                    false);
            ValueMap valueMap = varResource.getValueMap();
            if (MapUtils.isNotEmpty(valueMap)
                    && valueMap.containsKey(pricingPojo.getPriceType())) {
                String price = valueMap.get(pricingPojo.getPriceType(), String.class);
                pricingPojo.setModelPrice(TcoUtils.currencyFormat(pricingPojo.getCurrencyFormat(),
                        Double.parseDouble(price)));
            }
        } catch (PersistenceException e) {
            LOGGER.error(ErrorUtils
                    .createErrorMessage(ErrorUtilsConstants.AEM_PERSISTENCE_EXCEPTION,
                            ErrorUtilsConstants.TECHNICAL, ErrorUtilsConstants.AEM_SITE,
                            ErrorUtilsConstants.MODULE_SERVICE,
                            this.getClass().getSimpleName(), e));
        }
    }

    private String fetchNamePlateProductDetails(PricingPojo pricingPojo) {
        String macroModelYear = StringUtils.EMPTY;
        if (pricingPojo.getPriceMacroConfig().contains(CommonConstants.FORWARD_SLASH)) {
            String[] models = pricingPojo.getPriceMacroConfig()
                    .split(CommonConstants.FORWARD_SLASH);
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
                String[] productYears = pricingPojo.getPriceMacroConfig()
                        .split(CommonConstants.UNDERSCORE);
                pricingPojo.setNamePlate(productYears[0]);
                macroModelYear = productYears[1];
            }
        }
        return macroModelYear;
    }

    private void fetchPageProperties(PricingPojo pricingPojo, ResourceResolver resourceResolver,
                                     Page currentPage) {
        Resource resource = resourceResolver
                .getResource(currentPage.getPath() + "/jcr:content/nameplateDetails");
        if (resource != null) {
            resource.getChildren().iterator().forEachRemaining(child -> {
                if (child.getValueMap().get("nameplate", String.class)
                        .equals(pricingPojo.getNamePlate())) {
                    pricingPojo.setModelYear(child.getValueMap().get("modelYear",
                            String.class));
                    pricingPojo.setEnvironment(child.getValueMap().get("environment",
                            String.class));
                }
            });
        }
    }
}
