package com.jlr.core.models;

import java.util.List;

import javax.inject.Inject;
import javax.inject.Named;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;

/**
 * The Class MarketModel.
 */
@Model(adaptables = Resource.class, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class MarketModel {
	
	/** The market list. */
	@Inject
    @Named("marketList/.")
    public List<MarketsListModel> marketList;
	
	/**
	 * Gets the market list.
	 *
	 * @return the market list
	 */
	public List<MarketsListModel> getMarketList() {
		return marketList;
	}

}
