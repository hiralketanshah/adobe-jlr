package com.jlr.core.models;

import java.util.List;

import javax.inject.Inject;
import javax.inject.Named;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;

import com.jlr.core.pojos.MarketSelector;

@Model(adaptables = Resource.class, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class MarketsCountryListModel {

	@Inject
    private String regionTitle;
	
	@Inject
    @Named("marketCountryData/.")
	public List<MarketSelector> marketCountryData;

	public String getRegionTitle() {
		return regionTitle;
	}

	public List<MarketSelector> getMarketCountryData() {
		return marketCountryData;
	}
	
	
}
