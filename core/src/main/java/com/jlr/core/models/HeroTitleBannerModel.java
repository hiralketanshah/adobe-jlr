package com.jlr.core.models;

import java.util.ArrayList;
import java.util.List;

import com.jlr.core.pojos.CTAPojo;

/**
 * The Interface HeroTitleBannerModel.
 */
public interface HeroTitleBannerModel {
	
	/**
	 * Gets the cta list.
	 *
	 * @return the cta list
	 */
	default List<CTAPojo> getCtaList() {
        return new ArrayList<>();
    }

}
