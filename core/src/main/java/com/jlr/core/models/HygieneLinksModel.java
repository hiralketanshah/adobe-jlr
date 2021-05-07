package com.jlr.core.models;

import java.util.ArrayList;
import java.util.List;

import org.apache.commons.lang.StringUtils;

import com.jlr.core.pojos.HygieneLinks;

// TODO: Auto-generated Javadoc
/**
 * The Interface HygieneLinksModel.
 *
 * @author Adobe
 */
public interface HygieneLinksModel {
	
	/**
	 * Gets the hygienelinks list.
	 *
	 * @return the hygienelinks list
	 */
	default List<HygieneLinks> getHygienelinksList() {
        return new ArrayList<>();
    }
	
	/**
	 * Gets the market link.
	 *
	 * @return the market link
	 */
	default String getMarketLink() {
	     return StringUtils.EMPTY;
	 }
	
	/**
	 * Gets the country code.
	 *
	 * @return the country code
	 */
	default String getCountryCode() {
	     return StringUtils.EMPTY;
	 }
	
	/**
	 * Gets the country name.
	 *
	 * @return the country name
	 */
	default String getCountryName() {
	     return StringUtils.EMPTY;
	 }
	
	/**
	 * Gets the logo image.
	 *
	 * @return the logo image
	 */
	default String getFlagImage() {
	     return StringUtils.EMPTY;
	 }
}
