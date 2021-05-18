package com.jlr.core.internal.models.v1;

import com.day.cq.commons.inherit.InheritanceValueMap;
import com.day.cq.wcm.api.Page;
import com.jlr.core.constants.CommonConstants;
import com.jlr.core.models.TcoModel;
import com.jlr.core.pojos.PricingPojo;
import com.jlr.core.services.TcoService;
import org.apache.commons.lang.StringUtils;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.OSGiService;
import org.apache.sling.models.annotations.injectorspecific.RequestAttribute;

import javax.annotation.PostConstruct;
import javax.inject.Inject;

/**
 * The Class TcoModelImpl.
 *
 * @author Adobe
 */
@Model(adaptables = {Resource.class, SlingHttpServletRequest.class}, adapters = {TcoModel.class},
        resourceType = TcoModelImpl.RESOURCE_TYPE)
public class TcoModelImpl extends GlobalModelImpl implements TcoModel {

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
    private Page currentPage;

    @Inject
    private InheritanceValueMap pageProperties;

    @OSGiService
    private TcoService tcoService;

    @RequestAttribute(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String priceMacro;
    private String pricingSuppression;
    private String modelPrice;

    /**
     * Init.
     */
    @PostConstruct
    public void init() {
        priceMacro = "config.l663/A-S-D200-I6.price.gross";

        pricingSuppression = pageProperties
                .getInherited(CommonConstants.PRICING_SUPPRESSION, String.class);
        if (Boolean.valueOf(pricingSuppression)) {
            return;
        }
        PricingPojo pricingPojo = new PricingPojo();
        pricingPojo.setRegion("de");
        pricingPojo.setCurrencyFormat(
                pageProperties.getInherited(CommonConstants.PRICING_CURRENT_FORMAT, String.class));
        pricingPojo.setDefaultPriceType(
                pageProperties.getInherited(CommonConstants.DEFAULT_PRICE_TYPE, String.class));
        pricingPojo.setFallbackPriceType(
                pageProperties.getInherited(CommonConstants.FALLBACK_PRICE_TYPE, String.class));
        if (StringUtils.isNotEmpty(priceMacro)) {
            String[] configCodes = priceMacro.split(CommonConstants.DOT_REGEX);
            pricingPojo.setPriceMacroConfig(configCodes[1]);
            if (configCodes.length == 4) {
                pricingPojo.setPriceType(configCodes[3]);
            }
            modelPrice = tcoService.getModelPrice(pricingPojo, resourceResolver, currentPage);
        }

    }

    public String getModelPrice() {
        return modelPrice;
    }
}
