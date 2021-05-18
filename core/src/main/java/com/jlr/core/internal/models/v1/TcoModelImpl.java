package com.jlr.core.internal.models.v1;

import com.day.cq.commons.inherit.InheritanceValueMap;
import com.jlr.core.constants.ErrorUtilsConstants;
import com.jlr.core.models.TcoModel;
import com.jlr.core.utils.ErrorUtils;
import org.apache.commons.collections.MapUtils;
import org.apache.commons.lang.StringUtils;
import org.apache.jackrabbit.JcrConstants;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.*;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.RequestAttribute;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.annotation.PostConstruct;
import javax.inject.Inject;

/**
 * The Class TcoModelImpl.
 *
 * @author Adobe
 */
@Model(adaptables = {Resource.class, SlingHttpServletRequest.class}, adapters = {TcoModel.class}, resourceType = TcoModelImpl.RESOURCE_TYPE)
public class TcoModelImpl extends GlobalModelImpl implements TcoModel {

    /**
     * The Constant LOGGER.
     */
    private static final Logger LOGGER = LoggerFactory.getLogger(
            TcoModelImpl.class);

    /**
     * The Constant RESOURCE_TYPE.
     */
    public static final String RESOURCE_TYPE = "jlr/components/tco/v1/tco";

    /**
     * The resource resolver.
     */
    @Inject
    private ResourceResolver resourceResolver;

    @Inject
    private InheritanceValueMap pageProperties;

    @RequestAttribute(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String priceMacro;

    private String namePlateDetails;
    private String priceType;
    private String modelPrice;
    private String modelYear;

    /**
     * Init.
     */
    @PostConstruct
    public void init() {
        priceMacro = "config.l405/A-I6-400-HSE_k20.price.net";
        if (StringUtils.isNotEmpty(priceMacro)) {
            String[] configCodes = priceMacro.split("\\.");
            namePlateDetails = configCodes[1];
            if(configCodes.length == 4) {
                priceType = configCodes[3];
            }
            if(StringUtils.isEmpty(priceType)) {
                priceType = pageProperties.getInherited("defaultPriceType", String.class).isEmpty()
                        ? pageProperties.getInherited("fallBackPriceType", String.class)
                        : pageProperties.getInherited("defaultPriceType", String.class);
            }
            String env = "prd";
            String region = "de";
            modelYear = pageProperties.getInherited("modelYear", String.class);
            modelYear = "k20";
            String basePath = "/var/jlr/pricing/" + env + "/" + region + "/" + getPlaceHolder(region) +"/";
            try {
                if (hasModelWithNamePlate(namePlateDetails)) {
                    fetchPriceFromModel(basePath, namePlateDetails, priceType);
                } else {
                    fetchPriceFromNamePlate(basePath, namePlateDetails, priceType);
                }
            } catch (PersistenceException e) {
                LOGGER.error(ErrorUtils.createErrorMessage(ErrorUtilsConstants.AEM_PERSISTENCE_EXCEPTION, ErrorUtilsConstants.TECHNICAL, ErrorUtilsConstants.AEM_SITE,
                        ErrorUtilsConstants.MODULE_LISTENER, this.getClass().getSimpleName(), e));
            }
        }

    }

    private void fetchPriceFromNamePlate(String basePath, String namePlateDetails, String priceType) throws PersistenceException {
        String path = basePath + modelYear +"/"+ namePlateDetails;
        Resource varResource = ResourceUtil.getOrCreateResource(
                resourceResolver, path, JcrConstants.NT_UNSTRUCTURED, JcrConstants.NT_UNSTRUCTURED, false);
        ValueMap valueMap = varResource.getValueMap();
        if (valueMap.containsKey(priceType)) {
            this.modelPrice = valueMap.get(priceType, String.class);
        }

    }

    private String getPlaceHolder(String region) {
        String placeHolder = null;
        if(region.equalsIgnoreCase("de")) {
            placeHolder = "yyy";
        } else {
            placeHolder = "state";
        }
        return placeHolder;
    }

    private void fetchPriceFromModel(String basePath, String namePlateDetails, String priceType) throws PersistenceException {
        String product = null;
        String namePlate = null;
        if (namePlateDetails.contains("/")) {
            String[] models = namePlateDetails.split("/");
            namePlate = models[0];
            if(models[1].contains("_")) {
                String[] productYears = models[1].split("_");
                product = productYears[0];
                modelYear = productYears[1];
            }
        } else {
            if(namePlateDetails.contains("_")) {
                String[] productYears = namePlateDetails.split("_");
                namePlate = productYears[0];
                modelYear = productYears[1];
            }
        }
        String path = getNamePlatePath(basePath, namePlate, product, modelYear);
        Resource resource = ResourceUtil.getOrCreateResource(
                resourceResolver, path, JcrConstants.NT_UNSTRUCTURED, JcrConstants.NT_UNSTRUCTURED, false);
        ValueMap valueMap = resource.getValueMap();
        if(MapUtils.isNotEmpty(valueMap)){
            this.modelPrice = valueMap.get(priceType, String.class);
        }
    }

    private String getNamePlatePath(String basePath, String namePlate, String product, String modelYear) {
        if(StringUtils.isNotEmpty(product)) {
            return basePath + modelYear+"/"+namePlate+"/" +product;
        } else {
            return basePath + modelYear+"/"+namePlate;
        }
    }

    private boolean hasModelWithNamePlate(String namePlateDetails) {
        return (namePlateDetails.contains("/") || namePlateDetails.contains("_"));
    }

    public String getModelPrice() {
        return modelPrice;
    }
}
