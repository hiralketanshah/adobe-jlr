
package com.jlr.core.internal.models.v1;

import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.StringJoiner;

import javax.annotation.PostConstruct;
import javax.inject.Inject;

import org.apache.commons.lang3.StringUtils;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.OSGiService;

import com.day.cq.commons.inherit.InheritanceValueMap;
import com.day.cq.wcm.api.Page;
import com.jlr.core.models.PriceModel;
import com.jlr.core.services.TcoService;
import com.jlr.core.utils.CommonUtils;
import com.jlr.core.utils.PricingUtils;

/**
 * The Class AccoladeModelImpl.
 *
 * @author Adobe
 */
@Model(adaptables = { Resource.class, SlingHttpServletRequest.class }, adapters = {
        PriceModel.class }, resourceType = PriceModelImpl.RESOURCE_TYPE)
public class PriceModelImpl implements PriceModel {

    /** The Constant RESOURCE_TYPE. */
    public static final String RESOURCE_TYPE = "jlr/components/pricing/v1/pricecomponent";

    @Inject
    private SlingHttpServletRequest request;

    @Inject
    private ResourceResolver resourceResolver;

    /** The current page. */
    @Inject
    private Page currentPage;

    /** The page properties. */
    @Inject
    private InheritanceValueMap pageProperties;

    /** The tco service. */
    @OSGiService
    private TcoService tcoService;

    String price;
    String priceConfigValue;
    Boolean isHeroOrDerivative = false;

    @PostConstruct
    public void init() {

        List<String> selectors = Arrays.asList(request.getRequestPathInfo().getSelectors());
        if (!selectors.isEmpty()) {
            StringJoiner joiner = new StringJoiner(".");
            selectors.forEach(item -> joiner.add(item));
            price = joiner.toString();
        }
        String resourceType = PricingUtils.getResourceType(request);
        setIfHeroOrDerivative(resourceType);
        Map<String, String> modelPriceMap = tcoService.getModelPrice(resourceResolver, request, currentPage,
                pageProperties, price, PricingUtils.getKey(resourceType));
        modelPriceMap.entrySet().iterator().forEachRemaining(entry -> {
            priceConfigValue = entry.getKey();
            price = entry.getValue();
        });
    }

    private void setIfHeroOrDerivative(String resourceType) {
        if (StringUtils.isNotBlank(resourceType)) {
            Map<String, String> map = CommonUtils.getMapOfFomCopy();
            for (String key : map.keySet()) {
                if (resourceType.contains(key) && (key.equalsIgnoreCase("heroitem")
                        || key.equalsIgnoreCase("herotitlebanner") || key.equalsIgnoreCase("derivative"))) {
                    isHeroOrDerivative = true;
                }
            }
        }

    }

    @Override
    public String getPrice() {
        return price;
    }

    @Override
    public String getPriceConfigValue() {
        return priceConfigValue;
    }

    public Boolean getIsHeroOrDerivative() {
        return isHeroOrDerivative;
    }
}
