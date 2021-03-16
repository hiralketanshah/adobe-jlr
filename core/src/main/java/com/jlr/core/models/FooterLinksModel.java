package com.jlr.core.models;

import org.apache.commons.lang.StringUtils;

/**
 * The Interface FooterLinksModel.
 */
public interface FooterLinksModel {
	
	/**
	 * Gets the header title.
	 *
	 * @return the header title
	 */
	default String getHeaderTitle() {
        return StringUtils.EMPTY;
    }

}
