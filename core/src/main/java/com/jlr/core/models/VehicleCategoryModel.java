package com.jlr.core.models;

import java.util.ArrayList;
import java.util.List;

import javax.inject.Inject;
import javax.inject.Named;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;

@Model(adaptables = Resource.class, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class VehicleCategoryModel {
	
	@Inject
	private String vehicleTabName;
	
	@Inject
	@Named("vehicleFamily/.")
	List<VehicleFamilyModel> vehicleFamily;

	public String getVehicleTabName() {
		return vehicleTabName;
	}

	public List<VehicleFamilyModel> getVehicleFamily() {
		return vehicleFamily;
	}
	
}
