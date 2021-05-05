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
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.adobe.aemds.guide.utils.JcrResourceConstants;
import com.day.cq.commons.jcr.JcrConstants;
import com.jlr.core.constants.CommonConstants;
import com.jlr.core.pojos.QuickLinks;
import com.jlr.core.utils.LinkUtils;

@Model(adaptables = Resource.class, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class PrimaryNavigationModel {
	
	@Inject
	private String navPagePathOne;
	
	@Inject
	private String navPagePathTwo;
	
	@Inject
	private String navPagePathThree;
	
	@Inject
	private String logoImageAlt;
	
	@Inject
	private String logoImageLink;
	
	@Inject
	private String navPagePathFour;
	
	@Inject
	private String enableLastVisited;
	
	@Inject
	private String enableCustPortal;
	
	@Inject
	private String custPortalLink;
	
	@Inject
	private String custPortalAriaLabel;
	
	@Inject
	private String retailerlLink;
	
	@Inject
	private String retailerAriaLabel;
	
	@Inject
	private String searchAriaLabel;
	
	@Inject
	private String mobileBurgerAriaLabel;

	@Inject
    private ResourceResolver resourceResolver;

    static String megadropdown="jlr/components/primarynavigation/v1/megadropdown";
    
    static String vehicledropdown="jlr/components/primarynavigation/v1/vehiclecategory";
	
	private final Logger logger = LoggerFactory.getLogger(this.getClass());

	private List<String> getPrimaryNavSecTab(String path) {
		Resource rootNavigationResource=resourceResolver.getResource(path);
		Resource containerResource=rootNavigationResource.getChild(JcrConstants.JCR_CONTENT).getChild(CommonConstants.JLR_ROOT).getChild(CommonConstants.JLR_CONTAINER);
		List<String> list = new ArrayList<>();
        Iterator<Resource> childResources=containerResource.listChildren();
        while (childResources.hasNext()) {
            Resource child = childResources.next();
            ValueMap properties = child.adaptTo(ValueMap.class);
            if(StringUtils.compare(megadropdown, properties.get(JcrResourceConstants.SLING_RESOURCE_TYPE_PROPERTY, String.class))==0) {
            	list.add(properties.get(CommonConstants.PN_TAB_NAME, String.class));
            	}
            }
        return list;
	}
	
	private List<QuickLinks> getQuickLinks(String path) {
		Resource rootNavigationResource=resourceResolver.getResource(path);
		Resource containerResource=rootNavigationResource.getChild(JcrConstants.JCR_CONTENT).getChild(CommonConstants.JLR_ROOT).getChild(CommonConstants.JLR_CONTAINER);
        Iterator<Resource> childResources=containerResource.listChildren();
        Resource child = childResources.next();
        ValueMap properties = child.adaptTo(ValueMap.class);
        List<QuickLinks> list = new ArrayList<>();
        if(StringUtils.compare(megadropdown, properties.get(JcrResourceConstants.SLING_RESOURCE_TYPE_PROPERTY, String.class))==0) {
        	Resource quicklinks=child.getChild(CommonConstants.PN_QUICK_LINKS);
            Iterator<Resource> quickLinkchildResources=quicklinks.listChildren();
            while(quickLinkchildResources.hasNext()) {
            	Resource quickLinkchild = quickLinkchildResources.next();
                ValueMap quickLinkproperties = quickLinkchild.adaptTo(ValueMap.class);
                list.add(new QuickLinks(quickLinkproperties.get(CommonConstants.PN_QUICK_LINKS_CTA_TEXT,String.class),
                		LinkUtils.appendLinkExtension(properties.get(CommonConstants.PN_QUICK_LINKS_CTA_LINK, String.class),
                                resourceResolver),
                		quickLinkproperties.get(CommonConstants.PN_QUICK_LINKS_CTA_ICON,String.class),
                		quickLinkproperties.get(CommonConstants.PN_QUICK_LINKS_CTA_TARGET,String.class)));
            }
        }
        return list;
	}
	
	private List<String> getNavPageTitle(String path) {
		Resource rootNavigationResource=resourceResolver.getResource(path);
		Resource containerResource=rootNavigationResource.getChild(JcrConstants.JCR_CONTENT).getChild(CommonConstants.JLR_ROOT).getChild(CommonConstants.JLR_CONTAINER);
		List<String> list = new ArrayList<>();
        Iterator<Resource> childResources=containerResource.listChildren();
        Resource child = childResources.next();
        ValueMap properties = child.adaptTo(ValueMap.class);
        if(StringUtils.compare(megadropdown, properties.get(JcrResourceConstants.SLING_RESOURCE_TYPE_PROPERTY, String.class))==0) {
            	list.add(properties.get(CommonConstants.PN_PRIMARY_NAV_TITLE, String.class));
          }
        return list;
	}
	
	private List<String> getNavPageAriaLabel(String path) {
		Resource rootNavigationResource=resourceResolver.getResource(path);
		Resource containerResource=rootNavigationResource.getChild(JcrConstants.JCR_CONTENT).getChild(CommonConstants.JLR_ROOT).getChild(CommonConstants.JLR_CONTAINER);
		List<String> list = new ArrayList<>();
        Iterator<Resource> childResources=containerResource.listChildren();
        Resource child = childResources.next();
        ValueMap properties = child.adaptTo(ValueMap.class);
        if(StringUtils.compare(megadropdown, properties.get(JcrResourceConstants.SLING_RESOURCE_TYPE_PROPERTY, String.class))==0) {
            	list.add(properties.get(CommonConstants.PN_PRIMARY_NAV_ARIA_LABEL, String.class));
          }
        return list;
	}
	
	public List<String> getVehicleTabName(){
		Resource rootNavigationResource=resourceResolver.getResource(navPagePathFour);
		Resource containerResource=rootNavigationResource.getChild(JcrConstants.JCR_CONTENT).getChild(CommonConstants.JLR_ROOT).getChild(CommonConstants.JLR_CONTAINER).getChild("vehiclecontainer").getChild("vehicles");
		List<String> list = new ArrayList<>();
        Iterator<Resource> childResources=containerResource.listChildren();
        while (childResources.hasNext()) {
            Resource child = childResources.next();
            ValueMap properties = child.adaptTo(ValueMap.class);
            if(StringUtils.compare(vehicledropdown, properties.get(JcrResourceConstants.SLING_RESOURCE_TYPE_PROPERTY, String.class))==0) {
            	list.add(properties.get("vehicleTabName", String.class));
            	}
            }
        return list;
	}
	
	public List<String> getVehicleNavPageTitle(){
		Resource rootNavigationResource=resourceResolver.getResource(navPagePathFour);
		Resource containerResource=rootNavigationResource.getChild(JcrConstants.JCR_CONTENT).getChild(CommonConstants.JLR_ROOT).getChild(CommonConstants.JLR_CONTAINER).getChild("vehiclecontainer").getChild("vehicles");
		List<String> list = new ArrayList<>();
        Iterator<Resource> childResources=containerResource.listChildren();
        Resource child = childResources.next();
        ValueMap properties = child.adaptTo(ValueMap.class);
        if(StringUtils.compare(vehicledropdown, properties.get(JcrResourceConstants.SLING_RESOURCE_TYPE_PROPERTY, String.class))==0) {
        	list.add(properties.get(CommonConstants.PN_PRIMARY_NAV_TITLE, String.class));
        	}
        return list;
	}
	
	public List<String> getVehicleNavPageArialabel(){
		Resource rootNavigationResource=resourceResolver.getResource(navPagePathFour);
		Resource containerResource=rootNavigationResource.getChild(JcrConstants.JCR_CONTENT).getChild(CommonConstants.JLR_ROOT).getChild(CommonConstants.JLR_CONTAINER).getChild("vehiclecontainer").getChild("vehicles");
		List<String> list = new ArrayList<>();
        Iterator<Resource> childResources=containerResource.listChildren();
        Resource child = childResources.next();
        ValueMap properties = child.adaptTo(ValueMap.class);
        if(StringUtils.compare(vehicledropdown, properties.get(JcrResourceConstants.SLING_RESOURCE_TYPE_PROPERTY, String.class))==0) {
        	list.add(properties.get(CommonConstants.PN_PRIMARY_NAV_ARIA_LABEL, String.class));
        	}
        return list;
	}
	
	public String getNavPagePathOne() {
		return navPagePathOne;
	}
	
	public String getNavPagePathTwo() {
		return navPagePathTwo;
	}
	
	public String getNavPagePathThree() {
		return navPagePathThree;
	}
	
	public String getNavPagePathFour() {
		return navPagePathFour;
	}

	public String getLogoImageAlt() {
		return logoImageAlt;
	}

	public String getLogoImageLink() {
		return logoImageLink;
	}

	public String getEnableLastVisited() {
		return enableLastVisited;
	}

	public String getEnableCustPortal() {
		return enableCustPortal;
	}

	public String getCustPortalLink() {
		return custPortalLink;
	}

	public String getCustPortalAriaLabel() {
		return custPortalAriaLabel;
	}

	public String getRetailerlLink() {
		return retailerlLink;
	}

	public String getRetailerAriaLabel() {
		return retailerAriaLabel;
	}

	public String getSearchAriaLabel() {
		return searchAriaLabel;
	}

	public String getMobileBurgerAriaLabel() {
		return mobileBurgerAriaLabel;
	}

	public List<String> getPrimaryNavSecTabOne() {
		return getPrimaryNavSecTab(navPagePathOne);
        }
	
	public List<String> getPrimaryNavSecTabTwo() {
		return getPrimaryNavSecTab(navPagePathTwo);
        }
	
	public List<String> getPrimaryNavSecTabThree() {
		return getPrimaryNavSecTab(navPagePathThree);
        }
	
	public List<QuickLinks> getPageOneQuickLink() {
		return getQuickLinks(navPagePathOne);
        }
	
	public List<QuickLinks> getPageTwoQuickLink() {
		return getQuickLinks(navPagePathTwo);
        }
	
	public List<QuickLinks> getPageThreeQuickLink() {
		return getQuickLinks(navPagePathThree);
        }
	
	public List<String> getNavPageTitleOne() {
		return getNavPageTitle(navPagePathOne);
        }
	
	public List<String> getNavPageTitleTwo() {
		return getNavPageTitle(navPagePathTwo);
        }
	
	public List<String> getNavPageTitleThree() {
		return getNavPageTitle(navPagePathThree);
        }
	
	public List<String> getNavPageAriaLabelOne() {
		return getNavPageAriaLabel(navPagePathOne);
        }
	
	public List<String> getNavPageAriaLabelTwo() {
		return getNavPageAriaLabel(navPagePathTwo);
        }
	
	public List<String> getNavPageAriaLabelThree() {
		return getNavPageAriaLabel(navPagePathThree);
        }
}
