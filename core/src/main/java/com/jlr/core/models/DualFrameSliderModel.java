package com.jlr.core.models;

import java.util.List;

import com.jlr.core.pojos.CTAPojo;

/**
 * The Interface DualFrameSliderModel.
 */
public interface DualFrameSliderModel {
	
	/**
	 * Gets the hero cta.
	 *
	 * @return the hero cta
	 */
	public List<CTAPojo> getCtaList();
	
	public List<String> getImageList();
	
	public String getImageType();
	
	public int getImageCount();
	
	public String getFramePath();
	
}
