package com.jlr.core.models;

import java.text.ParseException;
import java.util.ArrayList;
import java.util.List;

import org.apache.commons.lang.StringUtils;
import org.osgi.annotation.versioning.ConsumerType;

import com.jlr.core.pojos.CTAPojo;

/**
 * The Interface ContentCardModel.
 */
@ConsumerType
public interface ContentCardModel {

	/**
	 * Gets the cta list.
	 *
	 * @return the cta list
	 */
	default List<CTAPojo> getCtaList() {
        return new ArrayList<>();
    }
	
	/**
	 * Gets the body copy.
	 *
	 * @return the body copy
	 */
	default String getBodyCopy() {
        return StringUtils.EMPTY;
    }
	
	default String getDate() throws ParseException {
        return StringUtils.EMPTY;
    }
	
	default String getContentType() {
        return StringUtils.EMPTY;
    }
	
	default String getVideoType() {
        return StringUtils.EMPTY;
    }
	
}
