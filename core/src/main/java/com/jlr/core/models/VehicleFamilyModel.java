package com.jlr.core.models;

import java.util.ArrayList;
import java.util.List;
import javax.inject.Inject;
import javax.inject.Named;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;

/**
 * The Class VehicleFamilyModel.
 *
 * @author Adobe
 */
@Model(adaptables = Resource.class, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class VehicleFamilyModel {
	
	/** The vehicle family name. */
	@Inject
	private String vehicleFamilyName;
	
	/** The vehicles list. */
	@Inject
	@Named("vehiclesList/.")
	List<VehiclePageLinkList> vehiclesList;

	/**
	 * Gets the vehicle family name.
	 *
	 * @return the vehicle family name
	 */
	public String getVehicleFamilyName() {
		return vehicleFamilyName;
	}

	/**
	 * Gets the vehicles list.
	 *
	 * @return the vehicles list
	 */
	public List<VehiclePageLinkList> getVehiclesList() {
		if(null == vehiclesList) {
			return new ArrayList<VehiclePageLinkList>();
		}
		return vehiclesList;
	}

}
