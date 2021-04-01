package com.jlr.core.models;

import java.util.ArrayList;
import java.util.List;

import org.apache.commons.lang.StringUtils;

public interface GenericExternalAppModel {
	
	default String getContainerId() {
        return StringUtils.EMPTY;
    }
	
	default String getScriptURL() {
        return StringUtils.EMPTY;
    }
	
	public String getScriptParam();
	
	public String[] getConsentCategory();
	
	default String getUnconsentedHeader() {
        return StringUtils.EMPTY;
    }
	
	default String getUnconsentedMessage() {
        return StringUtils.EMPTY;
    }
	
	default String getCtaText() {
        return StringUtils.EMPTY;
    }
	
	default List<String> getConsentCategoryData(){
		return new ArrayList<>();
	}
}
