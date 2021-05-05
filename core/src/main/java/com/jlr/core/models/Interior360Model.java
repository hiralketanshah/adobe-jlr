package com.jlr.core.models;

import java.util.List;

import com.jlr.core.pojos.CTAPojo;

public interface Interior360Model {

	/**
	 * Return CTA List
	 */
	public List<CTAPojo> getCtaList();
	
	/**
	 * Return images folder path
	 */
	public String getFolderPath();
}
