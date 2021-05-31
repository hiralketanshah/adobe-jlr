package com.jlr.core.models;

import java.util.List;
import javax.inject.Inject;
import javax.inject.Named;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;


/**
 * The Class CountryListModel.
 *
 * @author Adobe
 */
@Model(adaptables = Resource.class, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class CountryListModel {



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
