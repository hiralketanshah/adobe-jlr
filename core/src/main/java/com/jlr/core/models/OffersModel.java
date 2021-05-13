package com.jlr.core.models;

import java.util.ArrayList;
import java.util.List;

import org.apache.commons.lang.StringUtils;

import com.jlr.core.pojos.CTAPojo;

/**
 * The Interface OffersModel.
 */
public interface OffersModel {
	
	/**
	 * Gets the cta list.
	 *
	 * @return the cta list
	 */
	default List<CTAPojo> getCtaList() {
        return new ArrayList<>();
    }
	
	/**
	 * Gets the offers header copy.
	 *
	 * @return the offers header copy
	 */
	default String getOffersHeaderCopy() {
        return StringUtils.EMPTY;
    }
	
	/**
	 * Gets the offers image file reference.
	 *
	 * @return the offers image file reference
	 */
	default String getOffersImageFileReference() {
        return StringUtils.EMPTY;
    }
	
	/**
	 * Gets the offer list.
	 *
	 * @return the offer list
	 */
	default List<OffersList> getOfferList() {
        return new ArrayList<>();
    }

}
