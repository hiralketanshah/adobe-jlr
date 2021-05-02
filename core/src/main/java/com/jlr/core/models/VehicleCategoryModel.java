package com.jlr.core.models;

import java.util.List;

import javax.inject.Inject;
import javax.inject.Named;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;

import com.jlr.core.utils.LinkUtils;

@Model(adaptables = Resource.class, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class VehicleCategoryModel {
	
	@Inject
    private ResourceResolver resourceResolver;
	
	@Inject
	private String vehicleTabName;
	
	@Inject
	private String compareText;
	
	@Inject
	private String compareLink;
	
	@Inject
	private String compareAriaLabel;
	
	@Inject
	private String compareIcon;
	
	@Inject
	private String compareTarget;
	
	@Inject
	@Named("vehicleFamily/.")
	List<VehicleFamilyModel> vehicleFamily;

	public List<VehicleFamilyModel> getVehicleFamily() {
		return vehicleFamily;
	}

	public String getVehicleTabName() {
		return vehicleTabName;
	}

	public String getCompareText() {
		return compareText;
	}

	public String getCompareLink() {
		return LinkUtils.appendLinkExtension(compareLink, resourceResolver);
	}

	public String getCompareAriaLabel() {
		return compareAriaLabel;
	}

	public String getCompareIcon() {
		return compareIcon;
	}

	public String getCompareTarget() {
		return compareTarget;
	}
	
}
