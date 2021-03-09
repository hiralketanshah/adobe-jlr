package com.jlr.core.models;

import java.util.ArrayList;
import java.util.List;

import com.jlr.core.pojos.CTAPojo;

/**
 * The Interface HeroTitleBannerModel.
 */
public interface HeroTitleBannerModel {
	
	/**
	 * Gets the hero cta.
	 *
	 * @return the hero cta
	 */
	default List<CTAPojo> getHeroCta() {
        return new ArrayList<>();
    }

}
