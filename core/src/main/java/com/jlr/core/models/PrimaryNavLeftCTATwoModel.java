package com.jlr.core.models;

import org.apache.commons.lang.StringUtils;
import org.osgi.annotation.versioning.ConsumerType;

/**
 * The Interface PrimaryNavLeftCTATwoModel.
 */
@ConsumerType
public interface PrimaryNavLeftCTATwoModel {

	/**
	 * Gets the left pane cta text two.
	 *
	 * @return the left pane cta text two
	 */
	default String getLeftPaneCtaTextTwo() {
        return StringUtils.EMPTY;
    }
	
	/**
	 * Gets the left pane cta link two.
	 *
	 * @return the left pane cta link two
	 */
	default String getLeftPaneCtaLinkTwo() {
        return StringUtils.EMPTY;
    }
	
	/**
	 * Gets the left pane cta aria label two.
	 *
	 * @return the left pane cta aria label two
	 */
	default String getLeftPaneCtaAriaLabelTwo() {
        return StringUtils.EMPTY;
    }
	
	/**
	 * Gets the left pane cta target two.
	 *
	 * @return the left pane cta target two
	 */
	default String getLeftPaneCtaTargetTwo() {
        return StringUtils.EMPTY;
    }
	
}
