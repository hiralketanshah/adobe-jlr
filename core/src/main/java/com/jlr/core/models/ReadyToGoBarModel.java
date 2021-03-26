package com.jlr.core.models;

import java.util.ArrayList;
import java.util.List;

import org.apache.commons.lang.StringUtils;

import com.jlr.core.pojos.CTAPojo;

/**
 * The Interface ReadyToGoBarModel.
 */
public interface ReadyToGoBarModel {
	
	/**
	 * Gets the rtgb.
	 *
	 * @return the rtgb
	 */
	default List<CTAPojo> getRtgb() {
		return new ArrayList<>();
	 }
	
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
