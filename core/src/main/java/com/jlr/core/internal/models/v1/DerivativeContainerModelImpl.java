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
import javax.jcr.Node;
import javax.jcr.RepositoryException;

import com.jlr.core.utils.ComponentPositionUtils;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.api.resource.ValueMap;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.Optional;
import org.apache.sling.models.annotations.Via;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.OSGiService;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

import com.day.cq.wcm.api.Page;
import com.google.gson.Gson;
import com.jlr.core.constants.DerivativeConstants;
import com.jlr.core.models.DerivativeContainerModel;
import com.jlr.core.services.Derivative;
import com.jlr.core.utils.DerivativeUtils;

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

    @OSGiService
    private Derivative derivativeService;

    /** The request. */
    @Inject
    private SlingHttpServletRequest request;

    /** The current page. */
    @Inject
    private Page currentPage;

    @Inject
    private Node currentNode;


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

    Map<String, List<DerivativeCardModelImpl>> listOfTabs = new LinkedHashMap<>();
    Map<String, String> tabHeadings = new LinkedHashMap<>();
    List<String> firstDropdownList = new ArrayList<>();
    Map<String, Map<String, List<DerivativeCardModelImpl>>> listOfDropdown = new LinkedHashMap<>();
    String selector;

    @PostConstruct
    public void init() {
        if ((DerivativeConstants.LAYOUT_TAB).equalsIgnoreCase(layout)) {
            selector = request.getRequestPathInfo().getSelectorString();
            Iterator<Resource> tabResources = tabList.listChildren();
            while (tabResources.hasNext()) {
                Resource tab = tabResources.next();
                ValueMap properties = tab.adaptTo(ValueMap.class);
                if (null != properties) {
                    String dynamicUrlPath = properties.containsKey(DerivativeConstants.PN_URL_PATH)
                            ? DerivativeUtils
                                    .getDynamicUrlPath(properties.get(DerivativeConstants.PN_URL_PATH, String.class))
                            : DerivativeUtils.getDynamicUrlPath(
                                    properties.get(DerivativeConstants.PN_TAB_HEADING, String.class));
                    tabHeadings.put(properties.get(DerivativeConstants.PN_TAB_HEADING, String.class), dynamicUrlPath);
                    List<DerivativeCardModelImpl> cardList = derivativeService.getDerivativeCard(request,
                            properties.get(DerivativeConstants.PN_LINK, String.class));
                    updateList(cardList);
                    listOfTabs.put(dynamicUrlPath, cardList);
                }

            }

        } else if ((DerivativeConstants.LAYOUT_DROPDOWN).equalsIgnoreCase(layout)) {
            Iterator<Resource> iterator = dropdownList.listChildren();
            while (iterator.hasNext()) {
                Resource resource = iterator.next();
                ValueMap properties = resource.adaptTo(ValueMap.class);
                if (null != properties && properties.containsKey(DerivativeConstants.PN_DROPDOWN_LABEL)) {
                    firstDropdownList.add(properties.get(DerivativeConstants.PN_DROPDOWN_LABEL, String.class));
                    listOfDropdown.put(properties.get(DerivativeConstants.PN_DROPDOWN_LABEL, String.class),
                            getListOfDerivatives(resource));

                }

            }
        }

    }

    private void updateList(List<DerivativeCardModelImpl> cardList) {
        for (DerivativeCardModelImpl card : cardList) {
            card.setCurrentPage(currentPage);
            card.setRequest(request);
        }

    }

    private Map<String, List<DerivativeCardModelImpl>> getListOfDerivatives(Resource resource) {
        Map<String, List<DerivativeCardModelImpl>> listOfDerivatives = new LinkedHashMap<>();
        Resource derivativeListResource = resource.getChild(DerivativeConstants.NN_DERIVATIVE_LIST);
        Iterator<Resource> derivativeIterator = derivativeListResource.listChildren();
        while (derivativeIterator.hasNext()) {
            Resource res = derivativeIterator.next();
            ValueMap prop = res.adaptTo(ValueMap.class);
            if (null != prop) {
                String path = prop.get(DerivativeConstants.PN_LINK, String.class);
                String dropdownName = derivativeService.getListOfDerivativeDropdown(request, path);
                List<DerivativeCardModelImpl> cardList = derivativeService.getDerivativeCard(request, path);
                updateList(cardList);
                listOfDerivatives.put(dropdownName, cardList);
            }
        }
        return listOfDerivatives;
    }

    @Override
    public Map<String, String> getTabHeadings() {
        return tabHeadings;
    }

    @Override
    public List<String> getDropdownLabels() {
        return firstDropdownList;
    }

    public String getJson() {
        Map<String, Set<String>> jsonMap = new LinkedHashMap<>();
        for (Entry<String, Map<String, List<DerivativeCardModelImpl>>> firstLabel : listOfDropdown.entrySet()) {
            Map<String, List<DerivativeCardModelImpl>> innerMap = firstLabel.getValue();
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
        for (Entry<String, Map<String, List<DerivativeCardModelImpl>>> firstLabel : listOfDropdown.entrySet()) {
            Map<String, List<DerivativeCardModelImpl>> innerMap = firstLabel.getValue();
            for (String secondLabel : innerMap.keySet()) {
                secondDropdownLabels.add(secondLabel);
            }
        }
        return secondDropdownLabels;
    }

    @Override
    public Map<String, List<DerivativeCardModelImpl>> getListOfTabs() {
        return listOfTabs;
    }

    @Override
    public Map<String, Map<String, List<DerivativeCardModelImpl>>> getListOfDropdown() {
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

    @Override
    public boolean getFirstPosition() throws RepositoryException {
        String pageContainerPath = currentPage.getPath().concat("/jcr:content/root/container");
        return ComponentPositionUtils.getComponentPosition(pageContainerPath, currentNode, resourceResolver);
    }
}
