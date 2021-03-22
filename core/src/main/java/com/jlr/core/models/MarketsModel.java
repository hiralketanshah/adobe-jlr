package com.jlr.core.models;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
 
import javax.inject.Inject;
import javax.inject.Named;
import java.util.List;
 
/**
 * The Class MarketsModel.
 */
@Model(adaptables = Resource.class, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class MarketsModel {
 
	
	/** The market name. */
	@Inject
    private String marketName;
    
    /** The market flag. */
    @Inject
    private String marketFlag;
    
    /** The region. */
    @Inject
    private String[] region;
 
    /** The languages. */
    @Inject
    @Named("languages/.")
    private List<LanguagesModel> languages;
    
    /**
     * Gets the market name.
     *
     * @return the market name
     */
    public String getMarketName() {
        return marketName;
    }
    
    /**
     * Gets the market flag.
     *
     * @return the market flag
     */
    public String getMarketFlag() {
        return marketFlag;
    }
    
    /**
     * Gets the region.
     *
     * @return the region
     */
    public String[] getRegion() {
        return region;
    }
 
    /**
     * Gets the languages.
     *
     * @return the languages
     */
    public List<LanguagesModel> getLanguages() {
        return languages;
    }
 
}
