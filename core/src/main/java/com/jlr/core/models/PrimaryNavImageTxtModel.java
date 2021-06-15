package com.jlr.core.models;

import org.apache.commons.lang.StringUtils;
import org.osgi.annotation.versioning.ConsumerType;

/**
 * The Interface PrimaryNavImageTxtModel.
 */
@ConsumerType
public interface PrimaryNavImageTxtModel {
	
	/**
	 * Gets the file reference image txt.
	 *
	 * @return the file reference image txt
	 */
	default String getFileReferenceImageTxt() {
        return StringUtils.EMPTY;
    }
	
	/**
	 * Gets the right pane image text alt.
	 *
	 * @return the right pane image text alt
	 */
	default String getRightPaneImageTextAlt() {
        return StringUtils.EMPTY;
    }
	
	/**
	 * Gets the right pane header copy.
	 *
	 * @return the right pane header copy
	 */
	default String getRightPaneHeaderCopy() {
        return StringUtils.EMPTY;
    }
	
	/**
	 * Gets the right pane body copy.
	 *
	 * @return the right pane body copy
	 */
	default String getRightPaneBodyCopy() {
        return StringUtils.EMPTY;
    }
	
	/**
	 * Gets the right pane copy cta text.
	 *
	 * @return the right pane copy cta text
	 */
	default String getRightPaneCopyCtaText() {
        return StringUtils.EMPTY;
    }
	
	/**
	 * Gets the right pane copy cta link.
	 *
	 * @return the right pane copy cta link
	 */
	default String getRightPaneCopyCtaLink() {
        return StringUtils.EMPTY;
    }
	
	/**
	 * Gets the right pane copy cta aria label.
	 *
	 * @return the right pane copy cta aria label
	 */
	default String getRightPaneCopyCtaAriaLabel() {
        return StringUtils.EMPTY;
    }
	
	/**
	 * Gets the right pane copy cta target.
	 *
	 * @return the right pane copy cta target
	 */
	default String getRightPaneCopyCtaTarget() {
        return StringUtils.EMPTY;
    }

}
