package com.jlr.core.models;

import java.util.ArrayList;
import java.util.List;

import com.jlr.core.pojos.HygieneLinks;

/**
 * The Interface HygieneLinksModel.
 */
public interface HygieneLinksModel {
	
	/**
	 * Gets the hygienelinks list.
	 *
	 * @return the hygienelinks list
	 */
	default List<HygieneLinks> getHygienelinksList() {
        return new ArrayList<>();
    }
}
