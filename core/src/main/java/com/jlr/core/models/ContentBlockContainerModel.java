package com.jlr.core.models;

import java.util.ArrayList;
import java.util.List;

import org.apache.commons.lang.StringUtils;
import org.osgi.annotation.versioning.ConsumerType;

import com.jlr.core.pojos.CTAPojo;

/**
 * The Interface ContentBlockContainerModel.
 */
@ConsumerType
public interface ContentBlockContainerModel {
	
	/**
	 * Gets the cta list.
	 *
	 * @return the cta list
	 */
	default List<CTAPojo> getCtaList() {
        return new ArrayList<>();
    }
	
	/**
	 * Gets the column.
	 *
	 * @return the column
	 */
	default String getColumn() {
        return StringUtils.EMPTY;
    }
	
	/**
	 * Gets the body copy.
	 *
	 * @return the body copy
	 */
	default String getBodyCopy() {
        return StringUtils.EMPTY;
    }

}
