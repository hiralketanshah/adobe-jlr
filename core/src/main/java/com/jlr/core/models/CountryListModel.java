package com.jlr.core.models;

import java.util.List;

import javax.inject.Inject;
import javax.inject.Named;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.jlr.core.utils.LinkUtils;

/**
 * The Class CountryListModel.
 */
@Model(adaptables = Resource.class, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class CountryListModel {
	
	private final Logger logger = LoggerFactory.getLogger(this.getClass());
	
	/** The resource resolver. */
	@Inject
    private ResourceResolver resourceResolver;

	/** The country name. */
	@Inject
	public String countryName;
	
	/** The country code. */
	@Inject
	public String countryCode;
	
	/** The language list. */
	@Inject
    @Named("languageList/.")
    public List<LanguagesModel> languageList;

	/**
	 * Gets the country name.
	 *
	 * @return the country name
	 */
	public String getCountryName() {
		return countryName;
	}
	
	/**
	 * Gets the country code.
	 *
	 * @return the country code
	 */
	public String getCountryCode() {
		return countryCode;
	}

	/**
	 * Gets the language list.
	 *
	 * @return the language list
	 */
	public List<LanguagesModel> getLanguageList() {
		return languageList;
	}
}
