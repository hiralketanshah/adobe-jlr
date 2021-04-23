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
import com.day.cq.wcm.api.Page;
import com.jlr.core.constants.CommonConstants;
import com.jlr.core.pojos.QuickLinks;
import com.jlr.core.utils.LinkUtils;

@Model(adaptables = Resource.class, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class PrimaryNavTabModel {
	
	@Inject
	private Resource resource;
	
	@Inject
	private String navPagePathOne;
	
	@Inject
	private String navPagePathTwo;
	
	@Inject
	private String navPagePathThree;

	@Inject
	private String primaryNavSecTabOne;
	
	@Inject
	private String primaryNavSecTabTwo;
	
	@Inject
	private String primaryNavSecTabThree;
	
	@Inject
	private String pageOneQuickLink;
	
	@Inject
	private String pageTwoQuickLink;
	
	@Inject
	private String pageThreeQuickLink;
	
	@Inject
	private String navPageTitleOne;
	
	@Inject
	private String navPageTitleTwo;
	
	@Inject
	private String navPageTitleThree;
	
	@Inject
    private ResourceResolver resourceResolver;
	
	@Inject
    private Page currentPage;
	
	private final Logger logger = LoggerFactory.getLogger(this.getClass());

	public String getNavPagePathOne() {
		return navPagePathOne;
	}
	
	public String getNavPagePathTwo() {
		return navPagePathTwo;
	}
	
	public String getNavPagePathThree() {
		return navPagePathThree;
	}

	public List<String> getPrimaryNavSecTabOne() {
		Resource rootNavigationResource=resourceResolver.getResource(navPagePathOne);
		Resource containerResource=rootNavigationResource.getChild(JcrConstants.JCR_CONTENT).getChild("root").getChild("container");
		List<String> list = new ArrayList<>();
        Iterator<Resource> childResources=containerResource.listChildren();
        while (childResources.hasNext()) {
            Resource child = childResources.next();
            ValueMap properties = child.adaptTo(ValueMap.class);
            String megadropdown="jlr/components/primarynavigation/v1/megadropdown";
            if(StringUtils.compare(megadropdown, properties.get(JcrResourceConstants.SLING_RESOURCE_TYPE_PROPERTY, String.class))==0) {
            	list.add(properties.get("tabName", String.class));
            	}
            }
        return list;
        }
	
	public List<String> getPrimaryNavSecTabTwo() {
		Resource rootNavigationResource=resourceResolver.getResource(navPagePathTwo);
		Resource containerResource=rootNavigationResource.getChild(JcrConstants.JCR_CONTENT).getChild("root").getChild("container");
		List<String> list = new ArrayList<>();
        Iterator<Resource> childResources=containerResource.listChildren();
        while (childResources.hasNext()) {
            Resource child = childResources.next();
            ValueMap properties = child.adaptTo(ValueMap.class);
            String megadropdown="jlr/components/primarynavigation/v1/megadropdown";
            if(StringUtils.compare(megadropdown, properties.get(JcrResourceConstants.SLING_RESOURCE_TYPE_PROPERTY, String.class))==0) {
            	list.add(properties.get("tabName", String.class));
            	}
            }
        return list;
        }
	
	public List<String> getPrimaryNavSecTabThree() {
		Resource rootNavigationResource=resourceResolver.getResource(navPagePathThree);
		Resource containerResource=rootNavigationResource.getChild(JcrConstants.JCR_CONTENT).getChild("root").getChild("container");
		List<String> list = new ArrayList<>();
        Iterator<Resource> childResources=containerResource.listChildren();
        while (childResources.hasNext()) {
            Resource child = childResources.next();
            ValueMap properties = child.adaptTo(ValueMap.class);
            String megadropdown="jlr/components/primarynavigation/v1/megadropdown";
            if(StringUtils.compare(megadropdown, properties.get(JcrResourceConstants.SLING_RESOURCE_TYPE_PROPERTY, String.class))==0) {
            	list.add(properties.get("tabName", String.class));
            	}
            }
        return list;
        }
	
	public List<QuickLinks> getPageOneQuickLink() {
		Resource rootNavigationResource=resourceResolver.getResource(navPagePathOne);
		Resource containerResource=rootNavigationResource.getChild(JcrConstants.JCR_CONTENT).getChild("root").getChild("container");
        Iterator<Resource> childResources=containerResource.listChildren();
        Resource child = childResources.next();
        ValueMap properties = child.adaptTo(ValueMap.class);
        List<QuickLinks> list = new ArrayList<>();
        String megadropdown="jlr/components/primarynavigation/v1/megadropdown";
        if(StringUtils.compare(megadropdown, properties.get(JcrResourceConstants.SLING_RESOURCE_TYPE_PROPERTY, String.class))==0) {
        	Resource quicklinks=child.getChild("quickLinks");
            Iterator<Resource> quickLinkchildResources=quicklinks.listChildren();
            while(quickLinkchildResources.hasNext()) {
            	Resource quickLinkchild = quickLinkchildResources.next();
                ValueMap quickLinkproperties = quickLinkchild.adaptTo(ValueMap.class);
                list.add(new QuickLinks(quickLinkproperties.get("quickLinksCtaText",String.class),
                		LinkUtils.appendLinkExtension(properties.get("quickLinksCopyCtaLink", String.class),
                                resourceResolver),
                		quickLinkproperties.get("quickLinksCopyCtaIcon",String.class),
                		quickLinkproperties.get("quickLinksCopyCtaTarget",String.class)));
            }
        }
        return list;
        }
	
	public List<QuickLinks> getPageTwoQuickLink() {
		Resource rootNavigationResource=resourceResolver.getResource(navPagePathTwo);
		Resource containerResource=rootNavigationResource.getChild(JcrConstants.JCR_CONTENT).getChild("root").getChild("container");
        Iterator<Resource> childResources=containerResource.listChildren();
        Resource child = childResources.next();
        ValueMap properties = child.adaptTo(ValueMap.class);
        List<QuickLinks> list = new ArrayList<>();
        String megadropdown="jlr/components/primarynavigation/v1/megadropdown";
        if(StringUtils.compare(megadropdown, properties.get(JcrResourceConstants.SLING_RESOURCE_TYPE_PROPERTY, String.class))==0) {
        	Resource quicklinks=child.getChild("quickLinks");
            Iterator<Resource> quickLinkchildResources=quicklinks.listChildren();
            while(quickLinkchildResources.hasNext()) {
            	Resource quickLinkchild = quickLinkchildResources.next();
                ValueMap quickLinkproperties = quickLinkchild.adaptTo(ValueMap.class);
                list.add(new QuickLinks(quickLinkproperties.get("quickLinksCtaText",String.class),
                		LinkUtils.appendLinkExtension(properties.get("quickLinksCopyCtaLink", String.class),
                                resourceResolver),
                		quickLinkproperties.get("quickLinksCopyCtaIcon",String.class),
                		quickLinkproperties.get("quickLinksCopyCtaTarget",String.class)));
            }
        }
        logger.info("listssss {}",list);
        return list;
        }
	
	public List<QuickLinks> getPageThreeQuickLink() {
		Resource rootNavigationResource=resourceResolver.getResource(navPagePathThree);
		Resource containerResource=rootNavigationResource.getChild(JcrConstants.JCR_CONTENT).getChild("root").getChild("container");
        Iterator<Resource> childResources=containerResource.listChildren();
        Resource child = childResources.next();
        ValueMap properties = child.adaptTo(ValueMap.class);
        List<QuickLinks> list = new ArrayList<>();
        String megadropdown="jlr/components/primarynavigation/v1/megadropdown";
        if(StringUtils.compare(megadropdown, properties.get(JcrResourceConstants.SLING_RESOURCE_TYPE_PROPERTY, String.class))==0) {
        	Resource quicklinks=child.getChild("quickLinks");
            Iterator<Resource> quickLinkchildResources=quicklinks.listChildren();
            while(quickLinkchildResources.hasNext()) {
            	Resource quickLinkchild = quickLinkchildResources.next();
                ValueMap quickLinkproperties = quickLinkchild.adaptTo(ValueMap.class);
                list.add(new QuickLinks(quickLinkproperties.get("quickLinksCtaText",String.class),
                		LinkUtils.appendLinkExtension(properties.get("quickLinksCopyCtaLink", String.class),
                                resourceResolver),
                		quickLinkproperties.get("quickLinksCopyCtaIcon",String.class),
                		quickLinkproperties.get("quickLinksCopyCtaTarget",String.class)));
            }
        }
        return list;
        }
	
	public List<String> getNavPageTitleOne() {
		Resource rootNavigationResource=resourceResolver.getResource(navPagePathOne);
		Resource containerResource=rootNavigationResource.getChild(JcrConstants.JCR_CONTENT).getChild("root").getChild("container");
		List<String> list = new ArrayList<>();
        Iterator<Resource> childResources=containerResource.listChildren();
        Resource child = childResources.next();
        ValueMap properties = child.adaptTo(ValueMap.class);
        String megadropdown="jlr/components/primarynavigation/v1/megadropdown";
        if(StringUtils.compare(megadropdown, properties.get(JcrResourceConstants.SLING_RESOURCE_TYPE_PROPERTY, String.class))==0) {
            	list.add(properties.get("primaryNavTitle", String.class));
          }
        return list;
        }
	
	public List<String> getNavPageTitleTwo() {
		Resource rootNavigationResource=resourceResolver.getResource(navPagePathTwo);
		Resource containerResource=rootNavigationResource.getChild(JcrConstants.JCR_CONTENT).getChild("root").getChild("container");
		List<String> list = new ArrayList<>();
        Iterator<Resource> childResources=containerResource.listChildren();
        Resource child = childResources.next();
        ValueMap properties = child.adaptTo(ValueMap.class);
        String megadropdown="jlr/components/primarynavigation/v1/megadropdown";
        if(StringUtils.compare(megadropdown, properties.get(JcrResourceConstants.SLING_RESOURCE_TYPE_PROPERTY, String.class))==0) {
            	list.add(properties.get("primaryNavTitle", String.class));
          }
        return list;
        }
	
	public List<String> getNavPageTitleThree() {
		Resource rootNavigationResource=resourceResolver.getResource(navPagePathThree);
		Resource containerResource=rootNavigationResource.getChild(JcrConstants.JCR_CONTENT).getChild("root").getChild("container");
		List<String> list = new ArrayList<>();
        Iterator<Resource> childResources=containerResource.listChildren();
        Resource child = childResources.next();
        ValueMap properties = child.adaptTo(ValueMap.class);
        String megadropdown="jlr/components/primarynavigation/v1/megadropdown";
        if(StringUtils.compare(megadropdown, properties.get(JcrResourceConstants.SLING_RESOURCE_TYPE_PROPERTY, String.class))==0) {
            	list.add(properties.get("primaryNavTitle", String.class));
          }
        return list;
        }
	}
