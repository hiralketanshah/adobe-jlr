package com.jlr.core.models;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
 
import javax.inject.Inject;
import javax.inject.Named;
import java.util.List;
 
/**
 * The Class MarketListModel.
 */
@Model(adaptables = Resource.class, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class MarketListModel {
 
    /** The market list. */
    @Inject
    @Named("markets/.")
    public List<MarketsModel> marketList;
 
    /**
     * Gets the markets.
     *
     * @return the markets
     */
    public List<MarketsModel> getMarkets() {
        return marketList;
    }
 
}