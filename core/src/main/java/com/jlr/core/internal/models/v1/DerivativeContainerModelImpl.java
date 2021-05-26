package com.jlr.core.internal.models.v1;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import javax.annotation.PostConstruct;
import javax.inject.Inject;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ValueMap;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.Optional;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

import com.jlr.core.models.DerivativeContainerModel;
import com.jlr.core.pojos.DerivativeTab;

/**
 * The Class DerivativeContainerModelImpl.
 *
 * @author Adobe
 */
@Model(adaptables = Resource.class, adapters = {
        DerivativeContainerModel.class }, resourceType = DerivativeContainerModelImpl.RESOURCE_TYPE)
public class DerivativeContainerModelImpl extends GlobalModelImpl implements DerivativeContainerModel {

    /** The Constant RESOURCE_TYPE. */
    public static final String RESOURCE_TYPE = "jlr/components/derivative/v1/derivativcontainer";

    /** The tab list. */
    @Inject
    @Optional
    private Resource tabList;

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String firstDropdownHeading;

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String secondDropdownHeading;

    /** The dropdown list. */
    @Inject
    @Optional
    private Resource dropdownList;

    /** The specsAtaGlanceHeading. */
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String specsAtaGlanceHeading;

    /** The enable pricing. */
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String enablePricing;

    /** The layout. */
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String layout;

    /** The list. */
    List<DerivativeTab> listOfTabs = new ArrayList<>();
    List<String> tabHeadings = new ArrayList<>();

    @PostConstruct
    public void init() {
        if (("tab").equalsIgnoreCase(layout)) {
            Iterator<Resource> tabResources = tabList.listChildren();
            while (tabResources.hasNext()) {
                Resource tab = tabResources.next();
                ValueMap properties = tab.adaptTo(ValueMap.class);
                if (null != properties) {
                    tabHeadings.add(properties.get("tabHeading", String.class));
                    listOfTabs.add(new DerivativeTab(properties.get("tabHeading", String.class),
                            properties.get("metaTitle", String.class), properties.get("metaDescription", String.class),
                            properties.get("link", String.class), properties.get("urlPath", String.class)));
                }

            }
        }

    }

    @Override
    public List<String> getTabHeadings() {
        return tabHeadings;
    }

    @Override
    public List<DerivativeTab> getListOfTabs() {
        return listOfTabs;
    }

    /**
     * Gets the enable pricing.
     *
     * @return the enable pricing
     */
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
}
