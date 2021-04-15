package com.jlr.core.models;

import java.util.ArrayList;
import java.util.List;

import org.apache.commons.lang.StringUtils;

import com.jlr.core.pojos.CTAPojo;

public interface PrimaryNavigationModel {
	
	default String getMmTemplate() {
        return StringUtils.EMPTY;
    }
	
	default String getLeftPaneHeaderCopy() {
        return StringUtils.EMPTY;
    }
	
	default List<CTAPojo> getLeftCta() {
        return new ArrayList<>();
    }
	
	default String getLeftPaneBodyCopy() {
        return StringUtils.EMPTY;
    }
	
	default String getFileReference() {
        return StringUtils.EMPTY;
    }
	
	default List<CTAPojo> getLeftTextCta() {
        return new ArrayList<>();
    }
	
	default String getRightPaneImageAlt() {
        return StringUtils.EMPTY;
    }
	
	default List<PrimaryNavImageTxtModel> getRightCta() {
        return new ArrayList<>();
    }

}
