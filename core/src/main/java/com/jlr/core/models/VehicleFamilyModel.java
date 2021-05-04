package com.jlr.core.models;

import java.util.List;

import javax.inject.Inject;
import javax.inject.Named;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;


@Model(adaptables = Resource.class, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class VehicleFamilyModel {
	
	@Inject
	private String vehicleFamilyName;
	
	@Inject
	@Named("vehiclesList/.")
	List<VehiclePageLinkList> vehiclesList;

	public String getVehicleFamilyName() {
		return vehicleFamilyName;
	}

	public List<VehiclePageLinkList> getVehiclesList() {
		return vehiclesList;
	}

}
