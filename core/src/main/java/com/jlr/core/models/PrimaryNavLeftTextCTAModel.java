package com.jlr.core.models;

import org.apache.commons.lang.StringUtils;
import org.osgi.annotation.versioning.ConsumerType;

/**
 * The Interface PrimaryNavLeftTextCTAModel.
 */
@ConsumerType
public interface PrimaryNavLeftTextCTAModel {

	/**
	 * Gets the left pane copy cta text.
	 *
	 * @return the left pane copy cta text
	 */
	default String getLeftPaneCopyCtaText() {
        return StringUtils.EMPTY;
    }
	
	/**
	 * Gets the left pane copy cta link.
	 *
	 * @return the left pane copy cta link
	 */
	default String getLeftPaneCopyCtaLink() {
        return StringUtils.EMPTY;
    }
	
	/**
	 * Gets the left pane copy cta icon.
	 *
	 * @return the left pane copy cta icon
	 */
	default String getLeftPaneCopyCtaIcon() {
        return StringUtils.EMPTY;
    }
	
	/**
	 * Gets the left pane copy cta link type.
	 *
	 * @return the left pane copy cta link type
	 */
	default String getLeftPaneCopyCtaLinkType() {
        return StringUtils.EMPTY;
    }
	
	/**
	 * Gets the left pane copy cta aria label.
	 *
	 * @return the left pane copy cta aria label
	 */
	default String getLeftPaneCopyCtaAriaLabel() {
        return StringUtils.EMPTY;
    }
	
	/**
	 * Gets the left pane copy cta target.
	 *
	 * @return the left pane copy cta target
	 */
	default String getLeftPaneCopyCtaTarget() {
        return StringUtils.EMPTY;
    }
	
}
