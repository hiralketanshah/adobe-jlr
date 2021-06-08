package com.jlr.core.models;

import java.util.ArrayList;
import java.util.List;

import org.apache.commons.lang.StringUtils;
import org.osgi.annotation.versioning.ConsumerType;

import com.jlr.core.pojos.QuickLinks;

/**
 * The Interface PrimaryNavigationModel.
 */
@ConsumerType
public interface PrimaryNavigationModel {
	
	/**
	 * Gets the nav page path one.
	 *
	 * @return the nav page path one
	 */
	default String getNavPagePathOne() {
        return StringUtils.EMPTY;
    }
	
	/**
	 * Gets the nav page path two.
	 *
	 * @return the nav page path two
	 */
	default String getNavPagePathTwo() {
        return StringUtils.EMPTY;
    }
	
	/**
	 * Gets the nav page path three.
	 *
	 * @return the nav page path three
	 */
	default String getNavPagePathThree() {
        return StringUtils.EMPTY;
    }
	
	/**
	 * Gets the vehicle nav page path.
	 *
	 * @return the vehicle nav page path
	 */
	default String getVehicleNavPagePath() {
        return StringUtils.EMPTY;
    }
	
	/**
	 * Gets the logo image alt.
	 *
	 * @return the logo image alt
	 */
	default String getLogoImageAlt() {
        return StringUtils.EMPTY;
    }
	
	/**
	 * Gets the logo image link.
	 *
	 * @return the logo image link
	 */
	default String getLogoImageLink() {
        return StringUtils.EMPTY;
    }
	
	/**
	 * Gets the enable last visited.
	 *
	 * @return the enable last visited
	 */
	default String getEnableLastVisited() {
        return StringUtils.EMPTY;
    }
	
	/**
	 * Gets the enable cust portal.
	 *
	 * @return the enable cust portal
	 */
	default String getEnableCustPortal() {
        return StringUtils.EMPTY;
    }
	
	/**
	 * Gets the cust portal link.
	 *
	 * @return the cust portal link
	 */
	default String getCustPortalLink() {
        return StringUtils.EMPTY;
    }
	
	/**
	 * Gets the cust portal aria label.
	 *
	 * @return the cust portal aria label
	 */
	default String getCustPortalAriaLabel() {
        return StringUtils.EMPTY;
    }
	
	/**
	 * Gets the retailer link.
	 *
	 * @return the retailer link
	 */
	default String getRetailerLink() {
        return StringUtils.EMPTY;
    }
	
	/**
	 * Gets the retailer aria label.
	 *
	 * @return the retailer aria label
	 */
	default String getRetailerAriaLabel() {
        return StringUtils.EMPTY;
    }
	
	/**
	 * Gets the mobile burger aria label.
	 *
	 * @return the mobile burger aria label
	 */
	default String getMobileBurgerAriaLabel() {
        return StringUtils.EMPTY;
    }
	
	/**
	 * Gets the search aria label.
	 *
	 * @return the search aria label
	 */
	default String getSearchAriaLabel() {
        return StringUtils.EMPTY;
    }

	/**
	 * Gets the vehicle tab name.
	 *
	 * @return the vehicle tab name
	 */
	default List<String> getVehicleTabName() {
        return new ArrayList<>();
    }

	/**
	 * Gets the vehicle nav page title.
	 *
	 * @return the vehicle nav page title
	 */
	default List<String> getVehicleNavPageTitle() {
        return new ArrayList<>();
    }

	/**
	 * Gets the vehicle nav page arialabel.
	 *
	 * @return the vehicle nav page arialabel
	 */
	default List<String> getVehicleNavPageArialabel() {
        return new ArrayList<>();
    }

	/**
	 * Gets the vehicle card json.
	 *
	 * @return the vehicle card json
	 */
	default List<String> getVehicleCardJson() {
        return new ArrayList<>();
    }

	/**
	 * Gets the primary nav sec tab one.
	 *
	 * @return the primary nav sec tab one
	 */
	default List<String> getPrimaryNavSecTabOne() {
        return new ArrayList<>();
    }

	/**
	 * Gets the primary nav sec tab two.
	 *
	 * @return the primary nav sec tab two
	 */
	default List<String> getPrimaryNavSecTabTwo() {
        return new ArrayList<>();
    }

	/**
	 * Gets the primary nav sec tab three.
	 *
	 * @return the primary nav sec tab three
	 */
	default List<String> getPrimaryNavSecTabThree() {
        return new ArrayList<>();
    }

	/**
	 * Gets the page one quick link.
	 *
	 * @return the page one quick link
	 */
	default List<QuickLinks> getPageOneQuickLink() {
        return new ArrayList<>();
    }
	
	/**
	 * Gets the page two quick link.
	 *
	 * @return the page two quick link
	 */
	default List<QuickLinks> getPageTwoQuickLink() {
        return new ArrayList<>();
    }
	
	/**
	 * Gets the page three quick link.
	 *
	 * @return the page three quick link
	 */
	default List<QuickLinks> getPageThreeQuickLink() {
        return new ArrayList<>();
    }
	
	/**
	 * Gets the nav page title one.
	 *
	 * @return the nav page title one
	 */
	default List<String> getNavPageTitleOne() {
        return new ArrayList<>();
    }
	
	/**
	 * Gets the nav page title two.
	 *
	 * @return the nav page title two
	 */
	default List<String> getNavPageTitleTwo() {
        return new ArrayList<>();
    }
	
	/**
	 * Gets the nav page title three.
	 *
	 * @return the nav page title three
	 */
	default List<String> getNavPageTitleThree() {
        return new ArrayList<>();
    }
	
	/**
	 * Gets the nav page aria label one.
	 *
	 * @return the nav page aria label one
	 */
	default List<String> getNavPageAriaLabelOne() {
        return new ArrayList<>();
    }
	
	/**
	 * Gets the nav page aria label two.
	 *
	 * @return the nav page aria label two
	 */
	default List<String> getNavPageAriaLabelTwo() {
        return new ArrayList<>();
    }
	
	/**
	 * Gets the nav page aria label three.
	 *
	 * @return the nav page aria label three
	 */
	default List<String> getNavPageAriaLabelThree() {
        return new ArrayList<>();
    }
	
}
