package com.jlr.core.models;

import java.util.List;

import javax.inject.Inject;
import javax.inject.Named;

import com.jlr.core.pojos.MarketSelector;

public class MarketsListModel {
	
	@Inject
    private String regionData;
	
	@Inject
    @Named("marketData/.")
	public List<MarketSelector> marketData;

	public String getRegionData() {
		return regionData;
	}

	public List<MarketSelector> getMarketData() {
		return marketData;
	}

}
