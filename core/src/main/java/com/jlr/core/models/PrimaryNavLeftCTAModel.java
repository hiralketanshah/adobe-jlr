package com.jlr.core.models;

import org.apache.commons.lang.StringUtils;
import org.osgi.annotation.versioning.ConsumerType;

/**
 * The Interface PrimaryNavLeftCTAModel.
 */
@ConsumerType
public interface PrimaryNavLeftCTAModel {

	/**
	 * Gets the left pane cta text one.
	 *
	 * @return the left pane cta text one
	 */
	default String getLeftPaneCtaTextOne() {
        return StringUtils.EMPTY;
    }
	
	/**
	 * Gets the left pane cta link one.
	 *
	 * @return the left pane cta link one
	 */
	default String getLeftPaneCtaLinkOne() {
        return StringUtils.EMPTY;
    }
	
	/**
	 * Gets the left pane cta aria label one.
	 *
	 * @return the left pane cta aria label one
	 */
	default String getLeftPaneCtaAriaLabelOne() {
        return StringUtils.EMPTY;
    }
	
	/**
	 * Gets the left pane cta target one.
	 *
	 * @return the left pane cta target one
	 */
	default String getLeftPaneCtaTargetOne() {
        return StringUtils.EMPTY;
    }
	
}
