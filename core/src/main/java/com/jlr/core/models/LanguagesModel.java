package com.jlr.core.models;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;

import com.jlr.core.utils.LinkUtils;

import javax.inject.Inject;
 
/**
 * The Class LanguagesModel.
 */
@Model(adaptables = Resource.class, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class LanguagesModel {
	
	/** The resource resolver. */
	@Inject
    private ResourceResolver resourceResolver;
 
    /** The language title. */
    @Inject
    private String languageTitle;
    
    /** The link. */
    @Inject
    private String link;
    
    /** The target. */
    @Inject
    private String target;
 
    /**
     * Gets the language title.
     *
     * @return the language title
     */
    public String getLanguageTitle() {
        return languageTitle;
    }
    
    /**
     * Gets the link.
     *
     * @return the link
     */
    public String getLink() {
        return LinkUtils.appendLinkExtension(link, resourceResolver);
    }
    
    /**
     * Gets the target.
     *
     * @return the target
     */
    public String getTarget() {
        return target;
    }
 
}
