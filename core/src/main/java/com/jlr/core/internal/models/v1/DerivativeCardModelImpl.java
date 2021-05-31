package com.jlr.core.internal.models.v1;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.PostConstruct;
import javax.inject.Inject;

import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.api.resource.ValueMap;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.Optional;
import org.apache.sling.models.annotations.Via;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.OSGiService;
import org.apache.sling.models.annotations.injectorspecific.RequestAttribute;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

import com.day.cq.commons.inherit.InheritanceValueMap;
import com.day.cq.wcm.api.Page;
import com.jlr.core.models.DerivativeCardModel;
import com.jlr.core.pojos.CTAPojo;
import com.jlr.core.services.TcoService;
import com.jlr.core.utils.CtaUtils;

/**
 * The Class DerivativeCardModelImpl.
 *
 * @author Adobe
 */
@Model(adaptables = { Resource.class, SlingHttpServletRequest.class }, adapters = {
        DerivativeCardModel.class }, resourceType = DerivativeCardModelImpl.RESOURCE_TYPE)
public class DerivativeCardModelImpl extends GlobalModelImpl implements DerivativeCardModel {

    /** The Constant RESOURCE_TYPE. */
    public static final String RESOURCE_TYPE = "jlr/components/derivative/v1/derivativecard";

    /**
     * The Key.
     */
    @RequestAttribute(injectionStrategy = InjectionStrategy.OPTIONAL)
    String key;

    /** The request. */
    @Inject
    private SlingHttpServletRequest request;

    /** The current page. */
    @Inject
    private Page currentPage;

    /** The page properties. */
    @Inject
    private InheritanceValueMap pageProperties;

    /** The tco service. */
    @OSGiService
    private TcoService tcoService;

    /** The resource resolver. */
    @Inject
    private ResourceResolver resourceResolver;

    /** The caveat. */
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    @Via("resource")
    private String caveat;

    /** The leftColumn. */
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    @Via("resource")
    private String leftColumn;

    /** The override. */
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    @Via("resource")
    private String rightColumn;

    /** The override. */
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    @Via("resource")
    private boolean override;

    /** The specsAtaGlanceHeading. */
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    @Via("resource")
    private String specsAtaGlanceHeading;

    /** The price. */
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    @Via("resource")
    private String price;

    /** The cta list. */
    @Inject
    @Optional
    @Via("resource")
    private Resource ctaList;

    /** The engine list. */
    @Inject
    @Optional
    @Via("resource")
    private Resource engineList;

    private List<CTAPojo> list = new ArrayList<>();
    private List<String> engineNames = new ArrayList<>();
    private Map<String, Map<String, String>> engineDataList = new LinkedHashMap<>();
    private String priceConfigValue;

    @PostConstruct
    public void init() {
        if (null != price) {
            Map<String, String> modelPriceMap = tcoService.getModelPrice(resourceResolver, request, currentPage,
                    pageProperties, price, key);
            modelPriceMap.entrySet().iterator().forEachRemaining(entry -> {
                priceConfigValue = entry.getKey();
                price = entry.getValue();
            });
        }
        if (null != engineList) {
            Iterator<Resource> engineListResources = engineList.listChildren();
            while (engineListResources.hasNext()) {
                Resource engine = engineListResources.next();
                ValueMap properties = engine.adaptTo(ValueMap.class);
                if (null != properties) {
                    String engineName = properties.get("name", String.class);
                    engineNames.add(engineName);
                    Map<String, String> dataMap = getDataMap(engine);
                    engineDataList.put(engineName, dataMap);
                }

            }
        }

    }

    private Map<String, String> getDataMap(Resource engine) {
        Map<String, String> mapOfData = new LinkedHashMap<>();

        Resource dataListResource = engine.getChild("dataList");
        if (null != dataListResource) {
            Iterator<Resource> data = dataListResource.listChildren();
            while (data.hasNext()) {
                Resource dataResource = data.next();
                ValueMap properties = dataResource.adaptTo(ValueMap.class);
                mapOfData.put(properties.get("heading", String.class), properties.get("data", String.class));
            }
        }

        return mapOfData;

    }

    @Override
    public List<String> getEngineNames() {
        return engineNames;
    }

    @Override
    public Map<String, Map<String, String>> getEngineDataList() {
        return engineDataList;
    }

    @Override
    public String getCaveat() {
        return caveat;
    }

    /**
     * Gets the cta list.
     *
     * @return the cta list
     */
    @Override
    public List<CTAPojo> getCtaList() {
        if (null != ctaList && ctaList.hasChildren()) {
            list = CtaUtils.createCtaList(ctaList, super.getHeaderCopy(), resourceResolver);
        }
        return list;
    }

    @Override
    public String getLeftColumn() {
        return leftColumn;
    }

    @Override
    public String getRightColumn() {
        return rightColumn;
    }

    @Override
    public String getSpecsAtaGlanceHeading() {
        return specsAtaGlanceHeading;
    }

    /**
     * Gets the price.
     *
     * @return the price
     */
    @Override
    public String getPrice() {
        return price;
    }

    /**
     * Gets the price config value.
     *
     * @return the price config value
     */
    @Override
    public String getPriceConfigValue() {
        return priceConfigValue;
    }
}
