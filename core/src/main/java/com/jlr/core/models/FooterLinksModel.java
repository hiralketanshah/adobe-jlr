package com.jlr.core.models;

import java.util.ArrayList;
import java.util.List;

import com.jlr.core.pojos.HygieneLinks;

/**
 * The Interface FooterLinksModel.
 */
public interface FooterLinksModel {
	
	default List<HygieneLinks> getFooterLinks() {
        return new ArrayList<>();
    }

}
