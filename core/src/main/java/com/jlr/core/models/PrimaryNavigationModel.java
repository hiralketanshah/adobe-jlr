package com.jlr.core.models;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import javax.inject.Inject;
import org.apache.commons.lang3.StringUtils;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.api.resource.ValueMap;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import com.adobe.aemds.guide.utils.JcrResourceConstants;
import com.day.cq.commons.jcr.JcrConstants;
import com.jlr.core.constants.CommonConstants;
import com.jlr.core.pojos.QuickLinks;
import com.jlr.core.utils.LinkUtils;



/**
 * The Class PrimaryNavigationModel.
 *
 * @author Adobe
 */
@Model(adaptables = Resource.class, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class PrimaryNavigationModel {

    /** The nav page path one. */
    @Inject
    private String navPagePathOne;

    /** The nav page path two. */
    @Inject
    private String navPagePathTwo;

    /** The nav page path three. */
    @Inject
    private String navPagePathThree;

    /** The logo image alt. */
    @Inject
    private String logoImageAlt;

    /** The logo image link. */
    @Inject
    private String logoImageLink;

    /** The vehicle nav page path. */
    @Inject
    private String vehicleNavPagePath;

    /** The enable last visited. */
    @Inject
    private String enableLastVisited;

    /** The enable cust portal. */
    @Inject
    private String enableCustPortal;

    /** The cust portal link. */
    @Inject
    private String custPortalLink;

    /** The cust portal aria label. */
    @Inject
    private String custPortalAriaLabel;

    /** The retailerl link. */
    @Inject
    private String retailerlLink;

    /** The retailer aria label. */
    @Inject
    private String retailerAriaLabel;

    /** The search aria label. */
    @Inject
    private String searchAriaLabel;

    /** The mobile burger aria label. */
    @Inject
    private String mobileBurgerAriaLabel;

    /** The resource resolver. */
    @Inject
    private ResourceResolver resourceResolver;

    /** The megadropdown. */
    static String megadropdown = "jlr/components/primarynavigation/v1/megadropdown";

    /** The vehicledropdown. */
    static String vehicledropdown = "jlr/components/primarynavigation/v1/vehiclecategory";

    /**
     * Gets the primary nav sec tab.
     *
     * @param path the path
     * @return the primary nav sec tab
     */
    private List<String> getPrimaryNavSecTab(String path) {
        Resource rootNavigationResource = resourceResolver.getResource(path);
        Resource containerResource =
                        rootNavigationResource.getChild(JcrConstants.JCR_CONTENT).getChild(CommonConstants.JLR_ROOT).getChild(CommonConstants.JLR_CONTAINER);
        List<String> list = new ArrayList<>();
        Iterator<Resource> childResources = containerResource.listChildren();
        while (childResources.hasNext()) {
            Resource child = childResources.next();
            ValueMap properties = child.adaptTo(ValueMap.class);
            if (StringUtils.compare(megadropdown, properties.get(JcrResourceConstants.SLING_RESOURCE_TYPE_PROPERTY, String.class)) == 0) {
                list.add(properties.get(CommonConstants.PN_TAB_NAME, String.class));
            }
        }
        return list;
    }

    /**
     * Gets the quick links.
     *
     * @param path the path
     * @return the quick links
     */
    private List<QuickLinks> getQuickLinks(String path) {
        Resource rootNavigationResource = resourceResolver.getResource(path);
        Resource containerResource =
                        rootNavigationResource.getChild(JcrConstants.JCR_CONTENT).getChild(CommonConstants.JLR_ROOT).getChild(CommonConstants.JLR_CONTAINER);
        Iterator<Resource> childResources = containerResource.listChildren();
        Resource child = childResources.next();
        ValueMap properties = child.adaptTo(ValueMap.class);
        List<QuickLinks> list = new ArrayList<>();
        if (StringUtils.compare(megadropdown, properties.get(JcrResourceConstants.SLING_RESOURCE_TYPE_PROPERTY, String.class)) == 0) {
            Resource quicklinks = child.getChild(CommonConstants.PN_QUICK_LINKS);
            Iterator<Resource> quickLinkchildResources = quicklinks.listChildren();
            while (quickLinkchildResources.hasNext()) {
                Resource quickLinkchild = quickLinkchildResources.next();
                ValueMap quickLinkproperties = quickLinkchild.adaptTo(ValueMap.class);
                list.add(new QuickLinks(quickLinkproperties.get(CommonConstants.PN_QUICK_LINKS_CTA_TEXT, String.class),
                                LinkUtils.appendLinkExtension(properties.get(CommonConstants.PN_QUICK_LINKS_CTA_LINK, String.class), resourceResolver),
                                quickLinkproperties.get(CommonConstants.PN_QUICK_LINKS_CTA_ICON, String.class),
                                quickLinkproperties.get(CommonConstants.PN_QUICK_LINKS_CTA_TARGET, String.class)));
            }
        }
        return list;
    }

    /**
     * Gets the nav page title.
     *
     * @param path the path
     * @return the nav page title
     */
    private List<String> getNavPageTitle(String path) {
        Resource rootNavigationResource = resourceResolver.getResource(path);
        Resource containerResource =
                        rootNavigationResource.getChild(JcrConstants.JCR_CONTENT).getChild(CommonConstants.JLR_ROOT).getChild(CommonConstants.JLR_CONTAINER);
        List<String> list = new ArrayList<>();
        Iterator<Resource> childResources = containerResource.listChildren();
        Resource child = childResources.next();
        ValueMap properties = child.adaptTo(ValueMap.class);
        if (StringUtils.compare(megadropdown, properties.get(JcrResourceConstants.SLING_RESOURCE_TYPE_PROPERTY, String.class)) == 0) {
            list.add(properties.get(CommonConstants.PN_PRIMARY_NAV_TITLE, String.class));
        }
        return list;
    }

    /**
     * Gets the nav page aria label.
     *
     * @param path the path
     * @return the nav page aria label
     */
    private List<String> getNavPageAriaLabel(String path) {
        Resource rootNavigationResource = resourceResolver.getResource(path);
        Resource containerResource =
                        rootNavigationResource.getChild(JcrConstants.JCR_CONTENT).getChild(CommonConstants.JLR_ROOT).getChild(CommonConstants.JLR_CONTAINER);
        List<String> list = new ArrayList<>();
        Iterator<Resource> childResources = containerResource.listChildren();
        Resource child = childResources.next();
        ValueMap properties = child.adaptTo(ValueMap.class);
        if (StringUtils.compare(megadropdown, properties.get(JcrResourceConstants.SLING_RESOURCE_TYPE_PROPERTY, String.class)) == 0) {
            list.add(properties.get(CommonConstants.PN_PRIMARY_NAV_ARIA_LABEL, String.class));
        }
        return list;
    }

    /**
     * Gets the vehicle tab name.
     *
     * @return the vehicle tab name
     */
    public List<String> getVehicleTabName() {
        Resource rootNavigationResource = resourceResolver.getResource(vehicleNavPagePath);
        Resource containerResource = rootNavigationResource.getChild(JcrConstants.JCR_CONTENT).getChild(CommonConstants.JLR_ROOT)
                        .getChild(CommonConstants.JLR_CONTAINER).getChild(CommonConstants.PN_VEHICLE_CONTAINER).getChild(CommonConstants.PN_VEHICLES);
        List<String> list = new ArrayList<>();
        Iterator<Resource> childResources = containerResource.listChildren();
        while (childResources.hasNext()) {
            Resource child = childResources.next();
            ValueMap properties = child.adaptTo(ValueMap.class);
            if (StringUtils.compare(vehicledropdown, properties.get(JcrResourceConstants.SLING_RESOURCE_TYPE_PROPERTY, String.class)) == 0) {
                list.add(properties.get(CommonConstants.PN_VEHICLE_TAB_NAME, String.class));
            }
        }
        return list;
    }

    /**
     * Gets the vehicle nav page title.
     *
     * @return the vehicle nav page title
     */
    public List<String> getVehicleNavPageTitle() {
        Resource rootNavigationResource = resourceResolver.getResource(vehicleNavPagePath);
        Resource containerResource = rootNavigationResource.getChild(JcrConstants.JCR_CONTENT).getChild(CommonConstants.JLR_ROOT)
                        .getChild(CommonConstants.JLR_CONTAINER).getChild(CommonConstants.PN_VEHICLE_CONTAINER).getChild(CommonConstants.PN_VEHICLES);
        List<String> list = new ArrayList<>();
        Iterator<Resource> childResources = containerResource.listChildren();
        Resource child = childResources.next();
        ValueMap properties = child.adaptTo(ValueMap.class);
        if (StringUtils.compare(vehicledropdown, properties.get(JcrResourceConstants.SLING_RESOURCE_TYPE_PROPERTY, String.class)) == 0) {
            list.add(properties.get(CommonConstants.PN_PRIMARY_NAV_TITLE, String.class));
        }
        return list;
    }

    /**
     * Gets the vehicle nav page arialabel.
     *
     * @return the vehicle nav page arialabel
     */
    public List<String> getVehicleNavPageArialabel() {
        Resource rootNavigationResource = resourceResolver.getResource(vehicleNavPagePath);
        Resource containerResource = rootNavigationResource.getChild(JcrConstants.JCR_CONTENT).getChild(CommonConstants.JLR_ROOT)
                        .getChild(CommonConstants.JLR_CONTAINER).getChild(CommonConstants.PN_VEHICLE_CONTAINER).getChild(CommonConstants.PN_VEHICLES);
        List<String> list = new ArrayList<>();
        Iterator<Resource> childResources = containerResource.listChildren();
        Resource child = childResources.next();
        ValueMap properties = child.adaptTo(ValueMap.class);
        if (StringUtils.compare(vehicledropdown, properties.get(JcrResourceConstants.SLING_RESOURCE_TYPE_PROPERTY, String.class)) == 0) {
            list.add(properties.get(CommonConstants.PN_PRIMARY_NAV_ARIA_LABEL, String.class));
        }
        return list;
    }

    /**
     * Gets the vehicle card script path.
     *
     * @return the vehicle card script path
     */
    public List<String> getVehicleCardScriptPath() {
        Resource rootNavigationResource = resourceResolver.getResource(vehicleNavPagePath);
        Resource containerResource = rootNavigationResource.getChild(JcrConstants.JCR_CONTENT).getChild(CommonConstants.JLR_ROOT)
                        .getChild(CommonConstants.JLR_CONTAINER).getChild(CommonConstants.PN_VEHICLE_CONTAINER).getChild(CommonConstants.PN_VEHICLES);
        List<String> list = new ArrayList<>();
        Iterator<Resource> childResources = containerResource.listChildren().next().listChildren().next().listChildren();
        while (childResources.hasNext()) {
            Resource child = childResources.next();
            Iterator<Resource> childResourcesList = child.listChildren().next().listChildren();
            while (childResourcesList.hasNext()) {
                Resource childLink = childResourcesList.next();
                ValueMap properties = childLink.adaptTo(ValueMap.class);
                list.add(properties.get(CommonConstants.PN_VEHICLE_CARD_LINK, String.class));
                return list;
            }
        }
        return list;
    }

    /**
     * Gets the nav page path one.
     *
     * @return the nav page path one
     */
    public String getNavPagePathOne() {
        return navPagePathOne;
    }

    /**
     * Gets the nav page path two.
     *
     * @return the nav page path two
     */
    public String getNavPagePathTwo() {
        return navPagePathTwo;
    }

    /**
     * Gets the nav page path three.
     *
     * @return the nav page path three
     */
    public String getNavPagePathThree() {
        return navPagePathThree;
    }

    /**
     * Gets the vehicle nav page path.
     *
     * @return the vehicle nav page path
     */
    public String getVehicleNavPagePath() {
        return vehicleNavPagePath;
    }

    /**
     * Gets the logo image alt.
     *
     * @return the logo image alt
     */
    public String getLogoImageAlt() {
        return logoImageAlt;
    }

    /**
     * Gets the logo image link.
     *
     * @return the logo image link
     */
    public String getLogoImageLink() {
        return logoImageLink;
    }

    /**
     * Gets the enable last visited.
     *
     * @return the enable last visited
     */
    public String getEnableLastVisited() {
        return enableLastVisited;
    }

    /**
     * Gets the enable cust portal.
     *
     * @return the enable cust portal
     */
    public String getEnableCustPortal() {
        return enableCustPortal;
    }

    /**
     * Gets the cust portal link.
     *
     * @return the cust portal link
     */
    public String getCustPortalLink() {
        return custPortalLink;
    }

    /**
     * Gets the cust portal aria label.
     *
     * @return the cust portal aria label
     */
    public String getCustPortalAriaLabel() {
        return custPortalAriaLabel;
    }

    /**
     * Gets the retailerl link.
     *
     * @return the retailerl link
     */
    public String getRetailerlLink() {
        return retailerlLink;
    }

    /**
     * Gets the retailer aria label.
     *
     * @return the retailer aria label
     */
    public String getRetailerAriaLabel() {
        return retailerAriaLabel;
    }

    /**
     * Gets the search aria label.
     *
     * @return the search aria label
     */
    public String getSearchAriaLabel() {
        return searchAriaLabel;
    }

    /**
     * Gets the mobile burger aria label.
     *
     * @return the mobile burger aria label
     */
    public String getMobileBurgerAriaLabel() {
        return mobileBurgerAriaLabel;
    }

    /**
     * Gets the primary nav sec tab one.
     *
     * @return the primary nav sec tab one
     */
    public List<String> getPrimaryNavSecTabOne() {
        return getPrimaryNavSecTab(navPagePathOne);
    }

    /**
     * Gets the primary nav sec tab two.
     *
     * @return the primary nav sec tab two
     */
    public List<String> getPrimaryNavSecTabTwo() {
        return getPrimaryNavSecTab(navPagePathTwo);
    }

    /**
     * Gets the primary nav sec tab three.
     *
     * @return the primary nav sec tab three
     */
    public List<String> getPrimaryNavSecTabThree() {
        return getPrimaryNavSecTab(navPagePathThree);
    }

    /**
     * Gets the page one quick link.
     *
     * @return the page one quick link
     */
    public List<QuickLinks> getPageOneQuickLink() {
        return getQuickLinks(navPagePathOne);
    }

    /**
     * Gets the page two quick link.
     *
     * @return the page two quick link
     */
    public List<QuickLinks> getPageTwoQuickLink() {
        return getQuickLinks(navPagePathTwo);
    }

    /**
     * Gets the page three quick link.
     *
     * @return the page three quick link
     */
    public List<QuickLinks> getPageThreeQuickLink() {
        return getQuickLinks(navPagePathThree);
    }

    /**
     * Gets the nav page title one.
     *
     * @return the nav page title one
     */
    public List<String> getNavPageTitleOne() {
        return getNavPageTitle(navPagePathOne);
    }

    /**
     * Gets the nav page title two.
     *
     * @return the nav page title two
     */
    public List<String> getNavPageTitleTwo() {
        return getNavPageTitle(navPagePathTwo);
    }

    /**
     * Gets the nav page title three.
     *
     * @return the nav page title three
     */
    public List<String> getNavPageTitleThree() {
        return getNavPageTitle(navPagePathThree);
    }

    /**
     * Gets the nav page aria label one.
     *
     * @return the nav page aria label one
     */
    public List<String> getNavPageAriaLabelOne() {
        return getNavPageAriaLabel(navPagePathOne);
    }

    /**
     * Gets the nav page aria label two.
     *
     * @return the nav page aria label two
     */
    public List<String> getNavPageAriaLabelTwo() {
        return getNavPageAriaLabel(navPagePathTwo);
    }

    /**
     * Gets the nav page aria label three.
     *
     * @return the nav page aria label three
     */
    public List<String> getNavPageAriaLabelThree() {
        return getNavPageAriaLabel(navPagePathThree);
    }
}
