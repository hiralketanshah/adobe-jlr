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

@Model(adaptables = Resource.class, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class PrimaryModel {
	
	@Inject
	private Resource resource;
	
	@Inject
	private String navPagePathOne;
	
	@Inject
	private String navPagePathTwo;
	
	@Inject
	private String navPagePathThree;
	
	@Inject
	private String primaryNavTitleOne;
	
	@Inject
	private String primaryNavTitleTwo;
	
	@Inject
	private String primaryNavTitleThree;
	
	@Inject
	private String primaryNavTitleFour;
	
	@Inject
	private String primaryNavSecTabOne;
	
	@Inject
	private String primaryNavSecTabTwo;
	
	@Inject
	private String primaryNavSecTabThree;
	
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
	
	public String getPrimaryNavTitleOne() {
		logger.info("primaryNavTitleTwo {}",primaryNavTitleTwo);
		return primaryNavTitleOne;
	}

	public String getPrimaryNavTitleTwo() {
		return primaryNavTitleTwo;
	}

	public String getPrimaryNavTitleThree() {
		return primaryNavTitleThree;
	}

	public String getPrimaryNavTitleFour() {
		return primaryNavTitleFour;
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
	}
