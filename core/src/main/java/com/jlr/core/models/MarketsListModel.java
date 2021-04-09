package com.jlr.core.models;

import java.util.List;

import javax.inject.Inject;
import javax.inject.Named;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;

/**
 * The Class MarketsListModel.
 */
@Model(adaptables = Resource.class, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class MarketsListModel {
	
	/** The region. */
	@Inject
	public String region;
	
	/** The country list. */
	@Inject
    @Named("countryList/.")
	public List<CountryListModel> countryList;

	/**
	 * Gets the region.
	 *
	 * @return the region
	 */
	public String getRegion() {
		return region;
	}
	
	/**
	 * Gets the region name.
	 *
	 * @return the region name
	 */
	public String getRegionName() {
		switch(region)
        {
        case "region-1":
            	return "ASIA PACIFIC";
		case "region-2":
            	return "EUROPE";
		case "region-3":
            	return "MIDDLE EAST / AFRICA";
		case "region-4":
            	return "NORTH / CENTRAL AMERICA";
		case "region-5":
            	return "SOUTH AMERICA";
		default:
                return null;
        }
	}

	/**
	 * Gets the country list.
	 *
	 * @return the country list
	 */
	public List<CountryListModel> getCountryList() {
		return countryList;
	}

}
