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

@Model(adaptables = Resource.class, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class VehicleContainerModel {
	
	@Inject
    private ResourceResolver resourceResolver;
	
	@Inject
	private Page currentPage;
	
	@Inject
	List<String> vehicleInfo;
	
	static String vehicledropdown="jlr/components/primarynavigation/v1/vehicleCategory";
	
	private final Logger logger = LoggerFactory.getLogger(this.getClass());
	
	
	public List<String> getVehicleInfo(){
		String pagePath=currentPage.getPath();
		Resource rootNavigationResource=resourceResolver.getResource(pagePath);
		Resource containerResource=rootNavigationResource.getChild(JcrConstants.JCR_CONTENT).getChild(CommonConstants.JLR_ROOT).getChild(CommonConstants.JLR_CONTAINER);
		List<String> list = new ArrayList<>();
        Iterator<Resource> childResources=containerResource.listChildren();
        logger.info("containerResource {}",containerResource);
        while (childResources.hasNext()) {
            Resource child = childResources.next();
            ValueMap properties = child.adaptTo(ValueMap.class);
            if(StringUtils.compare(vehicledropdown, properties.get(JcrResourceConstants.SLING_RESOURCE_TYPE_PROPERTY, String.class))==0) {
            	list.add(properties.get("vehicleTabName", String.class));
            	}
            logger.info("pagePath {}",pagePath);
            logger.info("properties {}",properties);
            }
        return list;
	}

}
