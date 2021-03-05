package com.jlr.core.models;

import org.apache.commons.lang.StringUtils;
import org.osgi.annotation.versioning.ConsumerType;

@ConsumerType
public interface AccoladeModel {

    default String getDate() {
        return StringUtils.EMPTY;
    }

    default String getBackgroundImage() {
        return StringUtils.EMPTY;
    }
}
