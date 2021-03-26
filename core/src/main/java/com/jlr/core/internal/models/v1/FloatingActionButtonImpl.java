package com.jlr.core.internal.models.v1;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.Model;

import com.jlr.core.models.ReadyToGoBarModel;

@Model(adaptables = Resource.class, adapters = {ReadyToGoBarModel.class}, resourceType = FloatingActionButtonImpl.RESOURCE_TYPE)
public class FloatingActionButtonImpl {
	
	public static final String RESOURCE_TYPE = "jlr/components/readytogobar/v1/readytogobar";
	

}
