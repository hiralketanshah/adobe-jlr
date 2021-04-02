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
	
	/**
	 * Gets the enable FAB.
	 *
	 * @return the enable FAB
	 */
	default String getEnableFAB() {
        return StringUtils.EMPTY;
    }

    /**
     * Gets the hide desktop.
     *
     * @return the hide desktop
     */
    default String getHideDesktop() {
        return StringUtils.EMPTY;
    }

    /**
     * Gets the hide tablet.
     *
     * @return the hide tablet
     */
    default String getHideTablet() {
        return StringUtils.EMPTY;
    }

    /**
     * Gets the hide mobile.
     *
     * @return the hide mobile
     */
    default String getHideMobile() {
        return StringUtils.EMPTY;
    }

    /**
     * Gets the list type.
     *
     * @return the list type
     */
    default String getListType() {
        return StringUtils.EMPTY;
    }

    /**
     * Gets the faboverride.
     *
     * @return the faboverride
     */
    default List<CTAPojo> getFaboverride() {
		return new ArrayList<>();
	 }


}
