package com.jlr.core.models;

import com.jlr.core.pojos.CTAPojo;

import java.util.ArrayList;
import java.util.List;

/**
 * The Interface VehicleSpecsModel.
 *
 * @author Adobe
 */
public interface VehicleSpecsModel {

	/**
	 * Gets bodyStyleHeader.
	 *
	 * @return the bodyStyleHeader
	 */
	public String getBodyStyleHeader();

	/**
	 * Gets modelHeader.
	 *
	 * @return the modelHeader
	 */
	public String getModelHeader();

	/**
	 * Gets engineHeader.
	 *
	 * @return the engineHeader
	 */
	public String getEngineHeader();

	/**
	 * Gets specHeader.
	 *
	 * @return the specHeader
	 */
	public String getSpecHeader();

	/**
	 * Gets enablePrice.
	 *
	 * @return the enablePrice
	 */
	public boolean isEnablePrice();

	/**
	 * Gets the cta list.
	 *
	 * @return the cta list
	 */
	default List<CTAPojo> getCtaList() {
		return new ArrayList<>();
	}

	/**
	 * Gets nameplateDetails.
	 *
	 * @return the nameplateDetails
	 */
	public String getNameplateDetails();
}
