package com.jlr.core.models;

import org.apache.commons.lang.StringUtils;
import org.osgi.annotation.versioning.ConsumerType;

/**
 * The Interface GlobalModel.
 *
 * @author Adobe
 */
@ConsumerType
public interface GlobalModel {

    /**
     * Gets the id.
     *
     * @return the id
     */
    default String getId() {
        return StringUtils.EMPTY;
    }

    /**
     * Gets the date.
     *
     * @return the date
     */
    default String getDate() {
        return StringUtils.EMPTY;
    }

    /**
     * Gets the header copy.
     *
     * @return the header copy
     */
    default String getHeaderCopy() {
        return StringUtils.EMPTY;
    }

    /**
     * Gets the header icon.
     *
     * @return the header icon
     */
    default String getHeaderIcon() {
        return StringUtils.EMPTY;
    }

    /**
     * Gets the copy.
     *
     * @return the copy
     */
    default String getCopy() {
        return StringUtils.EMPTY;
    }

    /**
     * Gets the file reference.
     *
     * @return the file reference
     */
    default String getFileReference() {
        return StringUtils.EMPTY;
    }

    /**
     * Gets the image alt.
     *
     * @return the image alt
     */
    default String getImageAlt() {
        return StringUtils.EMPTY;
    }

    /**
     * Gets the image link.
     *
     * @return the image link
     */
    default String getImageLink() {
        return StringUtils.EMPTY;
    }

    /**
     * Gets the logo image.
     *
     * @return the logo image
     */
    default String getLogoImage() {
        return StringUtils.EMPTY;
    }

    /**
     * Gets the text.
     *
     * @return the text
     */
    default String getText() {
        return StringUtils.EMPTY;
    }

    /**
     * Gets the link.
     *
     * @return the link
     */
    default String getLink() {
        return StringUtils.EMPTY;
    }

    /**
     * Gets the target.
     *
     * @return the target
     */
    default String getTarget() {
        return StringUtils.EMPTY;
    }

    /**
     * Gets the aria label.
     *
     * @return the aria label
     */
    default String getAriaLabel() {
        return StringUtils.EMPTY;
    }

    /**
     * Gets the link type.
     *
     * @return the link type
     */
    default String getLinkType() {
        return StringUtils.EMPTY;
    }

    /**
     * Gets the header title.
     *
     * @return the header title
     */
    default String getHeaderTitle() {
        return StringUtils.EMPTY;
    }

    /**
     * Gets the video id.
     *
     * @return the video id
     */
    default String getVideoId() {
        return StringUtils.EMPTY;
    }

    /**
     * Gets the video path.
     *
     * @return the video path
     */
    default String getVideoPath() {
        return StringUtils.EMPTY;
    }

    /**
     * Gets the poster image.
     *
     * @return the poster image
     */
    default String getPosterImage() {
        return StringUtils.EMPTY;
    }

    /**
     * Gets the video title.
     *
     * @return the video title
     */
    default String getVideoTitle() {
        return StringUtils.EMPTY;
    }

    /**
     * Gets the icon.
     *
     * @return the icon
     */
    default String getIcon() {
        return StringUtils.EMPTY;
    }

    /**
     * Gets the asset type.
     *
     * @return the asset type
     */
    default String getAssetType() {
        return StringUtils.EMPTY;
    }

    /**
     * Gets the price.
     *
     * @return the price
     */
    default String getPrice() {
        return StringUtils.EMPTY;
    }

    default Boolean getIsStaticPrice() {
        return false;
    }
}
