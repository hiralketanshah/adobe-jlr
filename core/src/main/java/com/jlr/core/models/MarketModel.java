package com.jlr.core.models;

import java.util.List;

import javax.inject.Inject;
import javax.inject.Named;

public class MarketModel {
	
	@Inject
    @Named("marketCountryList/.")
    public List<MarketsCountryListModel> marketCountryList;
	
	@Inject
    @Named("regionList/.")
    public List<RegionListModel> regionList;

	@Inject
    @Named("marketList/.")
    public List<MarketsListModel> marketList;
	
	@Inject
    @Named("languageList/.")
    public List<LanguageListModel> languageList;
	
	public List<MarketsCountryListModel> getMarketCountryList() {
		return marketCountryList;
	}

	public List<RegionListModel> getRegionList() {
		return regionList;
	}

	public List<MarketsListModel> getMarketList() {
		return marketList;
	}

	public List<LanguageListModel> getLanguageList() {
		return languageList;
	}

}
