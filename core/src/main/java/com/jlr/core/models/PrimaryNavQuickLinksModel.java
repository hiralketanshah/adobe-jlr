package com.jlr.core.models;

import org.apache.commons.lang.StringUtils;
import org.osgi.annotation.versioning.ConsumerType;

/**
 * The Interface PrimaryNavQuickLinksModel.
 */
@ConsumerType
public interface PrimaryNavQuickLinksModel {

	/**
	 * Gets the quick links cta text.
	 *
	 * @return the quick links cta text
	 */
	default String getQuickLinksCtaText() {
        return StringUtils.EMPTY;
    }
	
	/**
	 * Gets the quick links copy cta link.
	 *
	 * @return the quick links copy cta link
	 */
	default String getQuickLinksCopyCtaLink() {
        return StringUtils.EMPTY;
    }
	
	/**
	 * Gets the quick links copy cta icon.
	 *
	 * @return the quick links copy cta icon
	 */
	default String getQuickLinksCopyCtaIcon() {
        return StringUtils.EMPTY;
    }
	
	/**
	 * Gets the quick links copy cta aria label.
	 *
	 * @return the quick links copy cta aria label
	 */
	default String getQuickLinksCopyCtaAriaLabel() {
        return StringUtils.EMPTY;
    }
	
	/**
	 * Gets the quick links copy cta target.
	 *
	 * @return the quick links copy cta target
	 */
	default String getQuickLinksCopyCtaTarget() {
        return StringUtils.EMPTY;
    }
	
}
