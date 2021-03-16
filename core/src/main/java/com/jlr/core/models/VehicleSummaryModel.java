package com.jlr.core.models;

import java.util.ArrayList;
import java.util.List;

import org.apache.commons.lang3.StringUtils;

import com.jlr.core.pojos.CTAPojo;

/**
 * The Interface VehicleSummaryModel.
 */
public interface VehicleSummaryModel {
	
	default List<CTAPojo> getCtaList() {
        return new ArrayList<>();
    }
	
	default String getPrice() {
        return StringUtils.EMPTY;
    }

}
