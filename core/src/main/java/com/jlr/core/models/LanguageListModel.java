package com.jlr.core.models;

import java.util.List;

import javax.inject.Inject;
import javax.inject.Named;

public class LanguageListModel {
	
	@Inject
    private String countryCode;
	
	@Inject
    @Named("languageData/.")
	public List<LanguagesModel> languageData;

	public String getCountryCode() {
		return countryCode;
	}

	public List<LanguagesModel> getMarketData() {
		return marketData;
	}

}
