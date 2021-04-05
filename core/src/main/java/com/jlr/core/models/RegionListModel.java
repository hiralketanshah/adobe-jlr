package com.jlr.core.models;

import javax.inject.Inject;

public class RegionListModel {

	@Inject
    private String regionTitle;
	
	@Inject
    private String regionData;
	
	@Inject
    private String link;

	public String getRegionTitle() {
		return regionTitle;
	}

	public String getRegionData() {
		return regionData;
	}

	public String getLink() {
		return link;
	}
	
	
}
