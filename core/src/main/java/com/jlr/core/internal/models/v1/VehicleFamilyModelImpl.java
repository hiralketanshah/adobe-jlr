package com.jlr.core.internal.models.v1;

import java.util.ArrayList;
import java.util.List;

import javax.inject.Inject;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;

import com.jlr.core.models.VehicleFamilyModel;
import com.jlr.core.models.VehiclePageLinkListModel;

/**
 * The Class VehicleFamilyModel.
 *
 * @author Adobe
 */
@Model(adaptables = Resource.class, adapters = {VehicleFamilyModel.class}, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class VehicleFamilyModelImpl implements VehicleFamilyModel {
	
	/** The vehicle family name. */
	@Inject
	private String vehicleFamilyName;
	
	/** The vehicles list. */
	@Inject
	List<VehiclePageLinkListModel> vehiclesList;

	/**
	 * Gets the vehicle family name.
	 *
	 * @return the vehicle family name
	 */
	@Override
	public String getVehicleFamilyName() {
		return vehicleFamilyName;
	}

	/**
	 * Gets the vehicles list.
	 *
	 * @return the vehicles list
	 */
	@Override
	public List<VehiclePageLinkListModel> getVehiclesList() {
		if(null == vehiclesList) {
			return new ArrayList<VehiclePageLinkListModel>();
		}
		return vehiclesList;
	}

}
