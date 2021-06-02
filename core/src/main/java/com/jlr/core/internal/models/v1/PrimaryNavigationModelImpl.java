package com.jlr.core.internal.models.v1;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import javax.inject.Inject;

import org.apache.commons.lang3.StringUtils;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.api.resource.ValueMap;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.Via;
import org.apache.sling.models.annotations.injectorspecific.ScriptVariable;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.adobe.aemds.guide.utils.JcrResourceConstants;
import com.jlr.core.constants.CommonConstants;
import com.jlr.core.models.PrimaryNavigationModel;
import com.jlr.core.models.VehicleCategoryModel;
import com.jlr.core.models.VehicleFamilyModel;
import com.jlr.core.models.VehiclePageLinkListModel;
import com.jlr.core.pojos.QuickLinks;
import com.jlr.core.utils.CommonUtils;
import com.jlr.core.utils.LinkUtils;

/**
 * The Class PrimaryNavigationModel.
 *
 * @author Adobe
 */
@Model(adaptables = { SlingHttpServletRequest.class, Resource.class}, adapters = {
		PrimaryNavigationModel.class }, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class PrimaryNavigationModelImpl implements PrimaryNavigationModel{
	
	/** The current page. */
	@ScriptVariable
    protected com.day.cq.wcm.api.Page currentPage;

    /** The nav page path one. */
    @Inject
    @Via("resource")
    private String navPagePathOne;

    /** The nav page path two. */
    @Inject
    @Via("resource")
    private String navPagePathTwo;

    /** The nav page path three. */
    @Inject
    @Via("resource")
    private String navPagePathThree;

    /** The logo image alt. */
    @Inject
    @Via("resource")
    private String logoImageAlt;

    /** The logo image link. */
    @Inject
    @Via("resource")
    private String logoImageLink;

    /** The vehicle nav page path. */
    @Inject
    @Via("resource")
    private String vehicleNavPagePath;

    /** The enable last visited. */
    @Inject
    @Via("resource")
    private String enableLastVisited;

    /** The enable cust portal. */
    @Inject
    @Via("resource")
    private String enableCustPortal;

    /** The cust portal link. */
    @Inject
    @Via("resource")
    private String custPortalLink;

    /** The cust portal icon. */
    @Inject
    @Via("resource")
    private String custPortalIcon;
    
    /** The cust portal aria label. */
    @Inject
    @Via("resource")
    private String custPortalAriaLabel;

    /** The retailer link. */
    @Inject
    @Via("resource")
    private String retailerLink;

    /** The retailer aria label. */
    @Inject
    @Via("resource")
    private String retailerAriaLabel;

    /** The search aria label. */
    @Inject
    @Via("resource")
    private String searchAriaLabel;

    /** The mobile burger aria label. */
    @Inject
    @Via("resource")
    private String mobileBurgerAriaLabel;

    /** The resource resolver. */
    @Inject
    @Via("resource")
    private ResourceResolver resourceResolver;
    
    /** The logger. */
    private final Logger logger = LoggerFactory.getLogger(this.getClass());

    /** The Constant RT_MEGADROPDOWN. */
    static final String RT_MEGADROPDOWN = "jlr/components/primarynavigation/v1/megadropdown";

    /** The Constant RT_VEHICLEDROPDOWN. */
    static final String RT_VEHICLEDROPDOWN = "jlr/components/primarynavigation/v1/vehiclecategory";

    /**
     * Gets the primary nav sec tab.
     *
     * @param path the path
     * @return the primary nav sec tab
     */
    private List<String> getPrimaryNavSecTab(String path) {
        Resource rootNavigationResource = resourceResolver.getResource(path);
        Resource containerResource =
                        rootNavigationResource.getChild("jcr:content/root/container");
        List<String> list = new ArrayList<>();
        Iterator<Resource> childResources = containerResource.listChildren();
        while (childResources.hasNext()) {
            Resource child = childResources.next();
            ValueMap properties = child.adaptTo(ValueMap.class);
            if (StringUtils.compare(RT_MEGADROPDOWN, properties.get(JcrResourceConstants.SLING_RESOURCE_TYPE_PROPERTY, String.class)) == 0) {
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
                        rootNavigationResource.getChild("jcr:content/root/container");
        Iterator<Resource> childResources = containerResource.listChildren();
        Resource child = childResources.next();
        ValueMap properties = child.adaptTo(ValueMap.class);
        List<QuickLinks> list = new ArrayList<>();
        if (StringUtils.compare(RT_MEGADROPDOWN, properties.get(JcrResourceConstants.SLING_RESOURCE_TYPE_PROPERTY, String.class)) == 0) {
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
     * @param primarycommonConstants the primarycommon constants
     * @return the nav page title
     */
    private List<String> getNavPage(String path, String primarycommonConstants) {
        Resource rootNavigationResource = resourceResolver.getResource(path);
        Resource containerResource =
                        rootNavigationResource.getChild("jcr:content/root/container");
        List<String> list = new ArrayList<>();
        Iterator<Resource> childResources = containerResource.listChildren();
        Resource child = childResources.next();
        ValueMap properties = child.adaptTo(ValueMap.class);
        if (StringUtils.compare(RT_MEGADROPDOWN, properties.get(JcrResourceConstants.SLING_RESOURCE_TYPE_PROPERTY, String.class)) == 0) {
            list.add(properties.get(primarycommonConstants, String.class));
        }
        return list;
    }


    /**
     * Gets the vehicle tab name.
     *
     * @return the vehicle tab name
     */
    @Override
    public List<String> getVehicleTabName() {
        Resource rootNavigationResource = resourceResolver.getResource(vehicleNavPagePath);
        Resource containerResource = rootNavigationResource.getChild("jcr:content/root")
                        .getChild(CommonConstants.NN_CONTAINER).getChild(CommonConstants.PN_VEHICLE_CONTAINER).getChild(CommonConstants.PN_VEHICLES);
        List<String> list = new ArrayList<>();
        Iterator<Resource> childResources = containerResource.listChildren();
        while (childResources.hasNext()) {
            Resource child = childResources.next();
            ValueMap properties = child.adaptTo(ValueMap.class);
            if (StringUtils.compare(RT_VEHICLEDROPDOWN, properties.get(JcrResourceConstants.SLING_RESOURCE_TYPE_PROPERTY, String.class)) == 0) {
                list.add(properties.get(CommonConstants.PN_VEHICLE_TAB_NAME, String.class));
            }
        }
        return list;
    }
    
    /**
     * Gets the vehicle nav page.
     *
     * @param primarycommonConstants the primarycommon constants
     * @return the vehicle nav page
     */
    public List<String> getVehicleNavPage(String primarycommonConstants) {
        Resource rootNavigationResource = resourceResolver.getResource(vehicleNavPagePath);
        Resource containerResource = rootNavigationResource.getChild("jcr:content/root/container/vehiclecontainer/vehicles");
        List<String> list = new ArrayList<>();
        Iterator<Resource> childResources = containerResource.listChildren();
        Resource child = childResources.next();
        ValueMap properties = child.adaptTo(ValueMap.class);
        if (StringUtils.compare(RT_VEHICLEDROPDOWN, properties.get(JcrResourceConstants.SLING_RESOURCE_TYPE_PROPERTY, String.class)) == 0) {
            list.add(properties.get(primarycommonConstants, String.class));
        }
        return list;
    }
    
    /**
     * Gets the vehicle nav page title.
     *
     * @return the vehicle nav page title
     */
    @Override
    public List<String> getVehicleNavPageTitle() {
		return getVehicleNavPage(CommonConstants.PN_PRIMARY_NAV_TITLE);	
    }
    
    /**
     * Gets the vehicle nav page arialabel.
     *
     * @return the vehicle nav page arialabel
     */
    @Override
    public List<String> getVehicleNavPageArialabel() {
		return getVehicleNavPage(CommonConstants.PN_PRIMARY_NAV_ARIA_LABEL);	
    }

    

    /**
     * Gets the vehicle card json.
     *
     * @return the vehicle card json
     */
    @Override
    public List<String> getVehicleCardJson() {
        Resource rootNavigationResource = resourceResolver.getResource(vehicleNavPagePath);
        List<String> list = new ArrayList<>();
        Resource containerResource = rootNavigationResource.getChild("jcr:content/root")
                        .getChild(CommonConstants.NN_CONTAINER).getChild(CommonConstants.PN_VEHICLE_CONTAINER).getChild(CommonConstants.PN_VEHICLES);
        Iterator<Resource> childitr = containerResource.getChildren().iterator();
        while (childitr.hasNext()) {
            Resource categoryRes = childitr.next();
            VehicleCategoryModel category = categoryRes.adaptTo(VehicleCategoryModel.class);
            for (VehicleFamilyModel vehiclefamily : category.getVehicleFamily()) {
                for (VehiclePageLinkListModel vehiclePageLink : vehiclefamily.getVehiclesList()) {
                    list.add(vehiclePageLink.getVehicleCardLink());
                }
            }
        }
        return list;
    }

    /**
     * Gets the nav page path one.
     *
     * @return the nav page path one
     */
    @Override
    public String getNavPagePathOne() {
        return navPagePathOne;
    }

    /**
     * Gets the nav page path two.
     *
     * @return the nav page path two
     */
    @Override
    public String getNavPagePathTwo() {
        return navPagePathTwo;
    }

    /**
     * Gets the nav page path three.
     *
     * @return the nav page path three
     */
    @Override
    public String getNavPagePathThree() {
        return navPagePathThree;
    }

    /**
     * Gets the vehicle nav page path.
     *
     * @return the vehicle nav page path
     */
    @Override
    public String getVehicleNavPagePath() {
        return vehicleNavPagePath;
    }

    /**
     * Gets the logo image alt.
     *
     * @return the logo image alt
     */
    @Override
    public String getLogoImageAlt() {
        return logoImageAlt;
    }

    /**
     * Gets the logo image link.
     *
     * @return the logo image link
     */
    @Override
    public String getLogoImageLink() {
    	logoImageLink = CommonUtils.getSiteRootPath(currentPage);
        return logoImageLink;
    }

    /**
     * Gets the enable last visited.
     *
     * @return the enable last visited
     */
    @Override
    public String getEnableLastVisited() {
        return enableLastVisited;
    }

    /**
     * Gets the enable cust portal.
     *
     * @return the enable cust portal
     */
    @Override
    public String getEnableCustPortal() {
        return enableCustPortal;
    }

    /**
     * Gets the cust portal link.
     *
     * @return the cust portal link
     */
    @Override
    public String getCustPortalLink() {
        return LinkUtils.appendLinkExtension(custPortalLink, resourceResolver);
    }

    /**
     * Gets the cust portal aria label.
     *
     * @return the cust portal aria label
     */
    @Override
    public String getCustPortalAriaLabel() {
        return custPortalAriaLabel;
    }
    
    /**
     * Gets the cust portal icon.
     *
     * @return the cust portal icon
     */
    @Override
    public String getCustPortalIcon() {
        return custPortalIcon;
    }

    /**
     * Gets the retailer link.
     *
     * @return the retailer link
     */
    @Override
    public String getRetailerLink() {
        return retailerLink;
    }

    /**
     * Gets the retailer aria label.
     *
     * @return the retailer aria label
     */
    @Override
    public String getRetailerAriaLabel() {
        return retailerAriaLabel;
    }

    /**
     * Gets the search aria label.
     *
     * @return the search aria label
     */
    @Override
    public String getSearchAriaLabel() {
        return searchAriaLabel;
    }

    /**
     * Gets the mobile burger aria label.
     *
     * @return the mobile burger aria label
     */
    @Override
    public String getMobileBurgerAriaLabel() {
        return mobileBurgerAriaLabel;
    }

    /**
     * Gets the primary nav sec tab one.
     *
     * @return the primary nav sec tab one
     */
    @Override
    public List<String> getPrimaryNavSecTabOne() {
        return getPrimaryNavSecTab(navPagePathOne);
    }

    /**
     * Gets the primary nav sec tab two.
     *
     * @return the primary nav sec tab two
     */
    @Override
    public List<String> getPrimaryNavSecTabTwo() {
        return getPrimaryNavSecTab(navPagePathTwo);
    }

    /**
     * Gets the primary nav sec tab three.
     *
     * @return the primary nav sec tab three
     */
    @Override
    public List<String> getPrimaryNavSecTabThree() {
        return getPrimaryNavSecTab(navPagePathThree);
    }

    /**
     * Gets the page one quick link.
     *
     * @return the page one quick link
     */
    @Override
    public List<QuickLinks> getPageOneQuickLink() {
        return getQuickLinks(navPagePathOne);
    }

    /**
     * Gets the page two quick link.
     *
     * @return the page two quick link
     */
    @Override
    public List<QuickLinks> getPageTwoQuickLink() {
        return getQuickLinks(navPagePathTwo);
    }

    /**
     * Gets the page three quick link.
     *
     * @return the page three quick link
     */
    @Override
    public List<QuickLinks> getPageThreeQuickLink() {
        return getQuickLinks(navPagePathThree);
    }

    /**
     * Gets the nav page title one.
     *
     * @return the nav page title one
     */
    @Override
    @Via("resource")
    public List<String> getNavPageTitleOne() {
        return getNavPage(navPagePathOne, CommonConstants.PN_PRIMARY_NAV_TITLE);
    }

    /**
     * Gets the nav page title two.
     *
     * @return the nav page title two
     */
    @Override
    public List<String> getNavPageTitleTwo() {
        return getNavPage(navPagePathTwo, CommonConstants.PN_PRIMARY_NAV_TITLE);
    }

    /**
     * Gets the nav page title three.
     *
     * @return the nav page title three
     */
    @Override
    public List<String> getNavPageTitleThree() {
        return getNavPage(navPagePathThree, CommonConstants.PN_PRIMARY_NAV_TITLE);
    }

    /**
     * Gets the nav page aria label one.
     *
     * @return the nav page aria label one
     */
    @Override
    public List<String> getNavPageAriaLabelOne() {
        return getNavPage(navPagePathOne, CommonConstants.PN_PRIMARY_NAV_ARIA_LABEL);
    }

    /**
     * Gets the nav page aria label two.
     *
     * @return the nav page aria label two
     */
    @Override
    public List<String> getNavPageAriaLabelTwo() {
        return getNavPage(navPagePathTwo, CommonConstants.PN_PRIMARY_NAV_ARIA_LABEL);
    }

    /**
     * Gets the nav page aria label three.
     *
     * @return the nav page aria label three
     */
    @Override
    public List<String> getNavPageAriaLabelThree() {
        return getNavPage(navPagePathThree, CommonConstants.PN_PRIMARY_NAV_ARIA_LABEL);
    }
}
