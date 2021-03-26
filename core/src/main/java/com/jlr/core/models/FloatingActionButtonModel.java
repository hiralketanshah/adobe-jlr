package com.jlr.core.models;

import java.util.ArrayList;
import java.util.List;

import org.apache.commons.lang.StringUtils;
import org.osgi.annotation.versioning.ConsumerType;

import com.jlr.core.pojos.CTAPojo;

@ConsumerType
public interface FloatingActionButtonModel {
	
	default String getEnableFAB() {
        return StringUtils.EMPTY;
    }

    default String getHideDesktop() {
        return StringUtils.EMPTY;
    }

    default String getHideTablet() {
        return StringUtils.EMPTY;
    }

    default String getHideMobile() {
        return StringUtils.EMPTY;
    }

    default String getListType() {
        return StringUtils.EMPTY;
    }

    default List<CTAPojo> getFaboverride() {
		return new ArrayList<>();
	 }

}
