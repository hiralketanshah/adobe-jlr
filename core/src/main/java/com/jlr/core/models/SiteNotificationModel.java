package com.jlr.core.models;

import org.apache.commons.lang.StringUtils;

/**
 * The Interface SiteNotificationModel.
 */
public interface SiteNotificationModel {
	
	/**
	 * Gets the id.
	 *
	 * @return the id
	 */
	default String getId() {
		return StringUtils.EMPTY;
	}
	
	/**
	 * Gets the close button copy.
	 *
	 * @return the close button copy
	 */
	default String getCloseButtonCopy() {
		return StringUtils.EMPTY;
	}
	
	/**
	 * Gets the close button arialabel.
	 *
	 * @return the close button arialabel
	 */
	default String getCloseButtonArialabel() {
		return StringUtils.EMPTY;
	}
	
	/**
	 * Gets the component URL.
	 *
	 * @return the component URL
	 */
	default String getComponentURL() {
		return StringUtils.EMPTY;
	}

}
