package com.jlr.core.models;

import java.util.ArrayList;
import java.util.List;

import org.apache.commons.lang.StringUtils;
import org.osgi.annotation.versioning.ConsumerType;

/**
 * The Interface PrimaryNavTabModel.
 */
@ConsumerType
public interface PrimaryNavTabModel {
	
	/**
	 * Gets the id.
	 *
	 * @return the id
	 */
	default String getId() {
        return StringUtils.EMPTY;
    }
	
	/**
	 * Gets the mm template.
	 *
	 * @return the mm template
	 */
	default String getMmTemplate() {
        return StringUtils.EMPTY;
    }
	
	/**
	 * Gets the left pane header copy.
	 *
	 * @return the left pane header copy
	 */
	default String getLeftPaneHeaderCopy() {
        return StringUtils.EMPTY;
    }
	
	/**
	 * Gets the left pane body copy.
	 *
	 * @return the left pane body copy
	 */
	default String getLeftPaneBodyCopy() {
        return StringUtils.EMPTY;
    }
	
	/**
	 * Gets the file reference image.
	 *
	 * @return the file reference image
	 */
	default String getFileReferenceImage() {
        return StringUtils.EMPTY;
    }
	
	/**
	 * Gets the right pane image alt.
	 *
	 * @return the right pane image alt
	 */
	default String getRightPaneImageAlt() {
        return StringUtils.EMPTY;
    }
	
	/**
	 * Gets the checks if is image decorative.
	 *
	 * @return the checks if is image decorative
	 */
	default String getIsImageDecorative() {
        return StringUtils.EMPTY;
    }
	
	/**
	 * Gets the primary nav aria label.
	 *
	 * @return the primary nav aria label
	 */
	default String getPrimaryNavAriaLabel() {
        return StringUtils.EMPTY;
    }
	
	/**
	 * Gets the right pane image link.
	 *
	 * @return the right pane image link
	 */
	default String getRightPaneImageLink() {
        return StringUtils.EMPTY;
    }
	
	/**
	 * Gets the right pane image target.
	 *
	 * @return the right pane image target
	 */
	default String getRightPaneImageTarget() {
        return StringUtils.EMPTY;
    }
	
	/**
	 * Gets the primar nav title.
	 *
	 * @return the primar nav title
	 */
	default String getPrimaryNavTitle() {
        return StringUtils.EMPTY;
    }
	
	/**
	 * Gets the tab name.
	 *
	 * @return the tab name
	 */
	default String getTabName() {
        return StringUtils.EMPTY;
    }
	
	/**
	 * Gets the left cta one.
	 *
	 * @return the left cta one
	 */
	default List<PrimaryNavLeftCTAModel> getLeftCtaOne() {
        return new ArrayList<>();
    }
	
	/**
	 * Gets the left text cta.
	 *
	 * @return the left text cta
	 */
	default List<PrimaryNavLeftTextCTAModel> getLeftTextCta() {
        return new ArrayList<>();
    }
	
	/**
	 * Gets the right cta.
	 *
	 * @return the right cta
	 */
	default List<PrimaryNavImageTxtModel> getRightCta() {
        return new ArrayList<>();
    }
	
	/**
	 * Gets the quick links.
	 *
	 * @return the quick links
	 */
	default List<PrimaryNavQuickLinksModel> getQuickLinks() {
        return new ArrayList<>();
    }
	
	/**
	 * Gets the left cta two.
	 *
	 * @return the left cta two
	 */
	default List<PrimaryNavLeftCTATwoModel> getLeftCtaTwo() {
        return new ArrayList<>();
    }

}
