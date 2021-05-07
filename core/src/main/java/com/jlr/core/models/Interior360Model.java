package com.jlr.core.models;

import java.util.List;

import com.jlr.core.pojos.CTAPojo;

// TODO: Auto-generated Javadoc
/**
 * The Interface Interior360Model.
 *
 * @author Adobe
 */
public interface Interior360Model {

	/**
	 * Return CTA List.
	 *
	 * @return the cta list
	 */
	public List<CTAPojo> getCtaList();
	
	/**
	 * Return images folder path.
	 *
	 * @return the folder path
	 */
	public String getFolderPath();
}
