package com.jlr.core.models;

import java.util.ArrayList;
import java.util.List;

import org.apache.commons.lang.StringUtils;

import com.jlr.core.pojos.ScriptParam;

public interface GenericExternalAppModel {
	
	default String getContainerId() {
        return StringUtils.EMPTY;
    }
	
	default String getScriptURL() {
        return StringUtils.EMPTY;
    }
	
	default List<ScriptParam> getScriptParam() {
        return new ArrayList<>();
    }
	
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
	
	default String getCtaLink() {
        return StringUtils.EMPTY;
    }
	
	default String getTarget() {
        return StringUtils.EMPTY;
    }

}
