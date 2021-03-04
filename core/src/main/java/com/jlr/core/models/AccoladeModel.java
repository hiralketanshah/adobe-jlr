package com.jlr.core.models;

import org.apache.commons.lang.StringUtils;
import org.osgi.annotation.versioning.ConsumerType;

@ConsumerType
public interface AccoladeModel {

    default String getId() {
        return StringUtils.EMPTY;
    }

    default String getHeaderCopy() {
        return StringUtils.EMPTY;
    }

    default String getBodyCopy() {
        return StringUtils.EMPTY;
    }

    default String getBackgroundImage() {
        return StringUtils.EMPTY;
    }

    default String getBackgroundImageAlt() {
        return StringUtils.EMPTY;
    }

    default String getLogo() {
        return StringUtils.EMPTY;
    }

    default String getLogoAlt() {
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
}
