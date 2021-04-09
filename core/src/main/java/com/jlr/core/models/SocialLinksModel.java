package com.jlr.core.models;

import java.util.ArrayList;
import java.util.List;

import com.jlr.core.pojos.SocialLinks;

/**
 * The Interface SocialLinksModel.
 */
public interface SocialLinksModel {
	
	/**
	 * Gets the social links.
	 *
	 * @return the social links
	 */
	default List<SocialLinks> getSocialLinks() {
        return new ArrayList<>();
    }

}
