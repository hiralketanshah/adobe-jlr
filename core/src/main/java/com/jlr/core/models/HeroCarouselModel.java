package com.jlr.core.models;

import java.util.ArrayList;
import java.util.List;

import org.apache.commons.lang3.StringUtils;

import com.jlr.core.pojos.CTAPojo;

/**
 * The Interface HeroCarouselModel.
 */
public interface HeroCarouselModel {
	
	/**
	 * Gets the cta list.
	 *
	 * @return the cta list
	 */
	default List<CTAPojo> getCtaList() {
        return new ArrayList<>();
    }
	
    /**
     * Gets the enable tco.
     *
     * @return the enable tco
     */
    default boolean getEnableTco() {
    	return false;
    }
    
    /**
     * Gets the description.
     *
     * @return the description
     */
    default String getDescription() {
    	return StringUtils.EMPTY;
    }

}
