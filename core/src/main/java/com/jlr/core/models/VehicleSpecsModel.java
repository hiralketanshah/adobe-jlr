package com.jlr.core.models;

import com.jlr.core.pojos.CTAPojo;
import org.apache.commons.lang.StringUtils;

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
	public default String getBodyStyleHeader() {
		return StringUtils.EMPTY;
	}

	/**
	 * Gets modelHeader.
	 *
	 * @return the modelHeader
	 */
	public default String getModelHeader() {
		return StringUtils.EMPTY;
	}

	/**
	 * Gets engineHeader.
	 *
	 * @return the engineHeader
	 */
	public default String getEngineHeader() {
		return StringUtils.EMPTY;
	}

	/**
	 * Gets specHeader.
	 *
	 * @return the specHeader
	 */
	public default String getSpecHeader() {
		return StringUtils.EMPTY;
	}

	/**
	 * Gets enablePrice.
	 *
	 * @return the enablePrice
	 */
	public default boolean isEnablePrice() {
		return false;
	}

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
	public default String getNameplateDetails() {
		return StringUtils.EMPTY;
	}
}
