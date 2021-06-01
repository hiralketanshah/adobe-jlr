package com.jlr.core.internal.models.v1;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Set;

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
import com.google.gson.Gson;
import com.jlr.core.models.DerivativeCardModel;
import com.jlr.core.models.DerivativeContainerModel;
import com.jlr.core.services.Derivative;
import com.jlr.core.services.TcoService;

/**
 * The Class DerivativeContainerModelImpl.
 *
 * @author Adobe
 */
@Model(adaptables = { Resource.class, SlingHttpServletRequest.class }, adapters = {
        DerivativeContainerModel.class }, resourceType = DerivativeContainerModelImpl.RESOURCE_TYPE)
public class DerivativeContainerModelImpl extends GlobalModelImpl implements DerivativeContainerModel {

    /** The Constant RESOURCE_TYPE. */
    public static final String RESOURCE_TYPE = "jlr/components/derivative/v1/derivativecontainer";

    /**
     * The Key.
     */
    @RequestAttribute(injectionStrategy = InjectionStrategy.OPTIONAL)
    String key;

    /** The current page. */
    @Inject
    private Page currentPage;

    /** The page properties. */
    @Inject
    private InheritanceValueMap pageProperties;

    /** The tco service. */
    @OSGiService
    private TcoService tcoService;

    @OSGiService
    private Derivative derivativeService;

    /** The request. */
    @Inject
    private SlingHttpServletRequest request;

    /** The resource resolver. */
    @Inject
    private ResourceResolver resourceResolver;

    /** The tab list. */
    @Inject
    @Optional
    @Via("resource")
    private Resource tabList;

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    @Via("resource")
    private String firstDropdownHeading;

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    @Via("resource")
    private String secondDropdownHeading;

    /** The dropdown list. */
    @Inject
    @Optional
    @Via("resource")
    private Resource dropdownList;

    /** The specsAtaGlanceHeading. */
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    @Via("resource")
    private String specsAtaGlanceHeading;

    /** The enable pricing. */
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    @Via("resource")
    private String enablePricing;

    /** The layout. */
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    @Via("resource")
    private String layout;

    Map<String, DerivativeCardModel> listOfTabs = new LinkedHashMap<>();
    List<String> tabHeadings = new ArrayList<>();
    List<String> firstDropdownList = new ArrayList<>();
    Map<String, Map<String, DerivativeCardModel>> listOfDropdown = new LinkedHashMap<>();
    String selector;

    @PostConstruct
    public void init() {
        if (("tab").equalsIgnoreCase(layout)) {
            selector = request.getRequestPathInfo().getSelectorString();
            Iterator<Resource> tabResources = tabList.listChildren();
            while (tabResources.hasNext()) {
                Resource tab = tabResources.next();
                ValueMap properties = tab.adaptTo(ValueMap.class);
                if (null != properties) {
                    tabHeadings.add(properties.get("tabHeading", String.class));
                    DerivativeCardModel card = derivativeService.getDerivativeCard(request,
                            properties.get("link", String.class));
                    evaluatePrice(card);
                    listOfTabs.put(properties.get("urlPath", String.class), card);
                }

            }

        } else if (("dropdown").equalsIgnoreCase(layout)) {
            Iterator<Resource> iterator = dropdownList.listChildren();
            while (iterator.hasNext()) {
                Resource resource = iterator.next();
                ValueMap properties = resource.adaptTo(ValueMap.class);
                if (null != properties) {
                    firstDropdownList.add(properties.get("label", String.class));
                    listOfDropdown.put(properties.get("label", String.class), getListOfDerivatives(resource));

                }

            }
        }

    }

    private DerivativeCardModel evaluatePrice(DerivativeCardModel card) {
        Map<String, String> modelPriceMap = tcoService.getModelPrice(resourceResolver, request, currentPage,
                pageProperties, card.getPrice(), key);
        modelPriceMap.entrySet().iterator().forEachRemaining(entry -> {
            card.setPriceConfigValue(entry.getKey());
            card.setPrice(entry.getValue());
        });
        return card;
    }

    private Map<String, DerivativeCardModel> getListOfDerivatives(Resource resource) {
        Map<String, DerivativeCardModel> listOfDerivatives = new LinkedHashMap<>();
        Resource derivativeListResource = resource.getChild("derivativeList");
        Iterator<Resource> derivativeIterator = derivativeListResource.listChildren();
        while (derivativeIterator.hasNext()) {
            Resource res = derivativeIterator.next();
            ValueMap prop = res.adaptTo(ValueMap.class);
            if (null != prop) {
                String path = prop.get("link", String.class);
                String dropdownName = derivativeService.getListOfDerivativeDropdown(request, path);
                DerivativeCardModel card = derivativeService.getDerivativeCard(request, path);
                evaluatePrice(card);
                listOfDerivatives.put(dropdownName, card);
            }
        }
        return listOfDerivatives;
    }

    @Override
    public List<String> getTabHeadings() {
        return tabHeadings;
    }

    @Override
    public List<String> getDropdownLabels() {
        return firstDropdownList;
    }

    public String getJson() {
        Map<String, Set<String>> jsonMap = new LinkedHashMap<>();

        for (Entry<String, Map<String, DerivativeCardModel>> firstLabel : listOfDropdown.entrySet()) {
            Map<String, DerivativeCardModel> innerMap = firstLabel.getValue();
            Set<String> secondDropdownLabels = new LinkedHashSet<>();
            for (String secondLabel : innerMap.keySet()) {
                secondDropdownLabels.add(secondLabel);
            }
            jsonMap.put(firstLabel.getKey(), secondDropdownLabels);
        }

        Gson gson = new Gson();

        return gson.toJson(jsonMap);

    }

    @Override
    public Set<String> getSecondDropdownLabels() {
        Set<String> secondDropdownLabels = new LinkedHashSet<>();
        for (Entry<String, Map<String, DerivativeCardModel>> firstLabel : listOfDropdown.entrySet()) {
            Map<String, DerivativeCardModel> innerMap = firstLabel.getValue();
            for (String secondLabel : innerMap.keySet()) {
                secondDropdownLabels.add(secondLabel);
            }
        }
        return secondDropdownLabels;
    }

    @Override
    public Map<String, DerivativeCardModel> getListOfTabs() {
        return listOfTabs;
    }

    @Override
    public Map<String, Map<String, DerivativeCardModel>> getListOfDropdown() {
        return listOfDropdown;
    }

    @Override
    public String getEnablePricing() {
        return enablePricing;
    }

    @Override
    public String getSpecsAtaGlanceHeading() {
        return specsAtaGlanceHeading;
    }

    @Override
    public String getLayout() {
        return layout;
    }

    @Override
    public String getFirstDropdownHeading() {
        return firstDropdownHeading;
    }

    @Override
    public String getSecondDropdownHeading() {
        return secondDropdownHeading;
    }

    public String getSelector() {
        return selector;
    }
}
