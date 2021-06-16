package com.jlr.core.models;

import org.apache.commons.lang.StringUtils;

public interface SiteNotificationModel {
	
	default String getId() {
		return StringUtils.EMPTY;
	}
	
	default String getCloseButtonCopy() {
		return StringUtils.EMPTY;
	}
	
	default String getCloseButtonArialabel() {
		return StringUtils.EMPTY;
	}

}
