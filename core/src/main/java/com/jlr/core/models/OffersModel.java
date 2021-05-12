package com.jlr.core.models;

import java.util.ArrayList;
import java.util.List;

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
	 * Gets the offer list.
	 *
	 * @return the offer list
	 */
	default List<OffersList> getOfferList() {
        return new ArrayList<>();
    }

}
