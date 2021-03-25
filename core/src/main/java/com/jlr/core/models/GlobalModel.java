package com.jlr.core.models;

import org.apache.commons.lang.StringUtils;
import org.osgi.annotation.versioning.ConsumerType;

@ConsumerType
public interface GlobalModel {

    default String getId() {
        return StringUtils.EMPTY;
    }

    default String getHeaderCopy() {
        return StringUtils.EMPTY;
    }

    default String getCopy() {
        return StringUtils.EMPTY;
    }

    default String getFileReference() {
        return StringUtils.EMPTY;
    }

    default String getImageAlt() {
        return StringUtils.EMPTY;
    }

    default String getImageLink() {
        return StringUtils.EMPTY;
    }

    default String getLogoImage() {
        return StringUtils.EMPTY;
    }

    default String getText() {
        return StringUtils.EMPTY;
    }

    default String getLink() {
        return StringUtils.EMPTY;
    }

    default String getTarget() {
        return StringUtils.EMPTY;
    }

    default String getAriaLabel() {
        return StringUtils.EMPTY;
    }

    default String getLinkType() {
        return StringUtils.EMPTY;
    }

    default String getHeaderTitle() {
        return StringUtils.EMPTY;
    }

    default String getVideoId() {
        return StringUtils.EMPTY;
    }

    default String getVideoPath() {
        return StringUtils.EMPTY;
    }

    default String getVideoTitle() {
        return StringUtils.EMPTY;
    }

    default String getIcon() {
        return StringUtils.EMPTY;
    }
}
