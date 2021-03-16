package com.jlr.core.models;

import java.util.ArrayList;
import java.util.List;

import com.jlr.core.pojos.HygieneLinks;

public interface HygieneLinksModel {
	
	default List<HygieneLinks> getHygienelinksList() {
        return new ArrayList<>();
    }

}
