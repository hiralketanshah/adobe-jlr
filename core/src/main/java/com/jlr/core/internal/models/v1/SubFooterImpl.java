package com.jlr.core.internal.models.v1;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.Model;
import com.jlr.core.models.SubFooterModel;

/**
 * The Class SubFooterImpl.
 */
@Model(adaptables = {Resource.class}, 
adapters = {SubFooterModel.class }, 
resourceType = SubFooterImpl.RESOURCE_TYPE)
public class SubFooterImpl extends GlobalModelImpl implements SubFooterModel{
	
	/** The Constant RESOURCE_TYPE. */
	public static final String RESOURCE_TYPE = "jlr/components/subfooter/v1/subfooter";
		
}
