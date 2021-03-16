package com.jlr.core.internal.models.v1;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.Model;

import com.jlr.core.models.FooterContainerModel;

@Model(adaptables = {Resource.class}, 
adapters = {FooterContainerModel.class }, 
resourceType = FooterContainerImpl.RESOURCE_TYPE)
public class FooterContainerImpl extends GlobalModelImpl implements FooterContainerModel{
	
	public static final String RESOURCE_TYPE = "jlr/components/footercontainer/v1/footercontainer";

}
