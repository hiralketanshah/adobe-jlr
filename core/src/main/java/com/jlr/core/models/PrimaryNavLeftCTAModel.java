package com.jlr.core.models;

import javax.inject.Inject;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;

import com.jlr.core.utils.LinkUtils;

@Model(adaptables = Resource.class, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class PrimaryNavLeftCTAModel {
	
	@Inject
    private ResourceResolver resourceResolver;
 
    @Inject
    private String leftPaneCtaText;
    
    @Inject
    private String leftPaneCtaLink;
    
    @Inject
    private String leftPaneCtaAriaLabel;
    
    @Inject
    private String leftPaneCtaTarget;

	public String getLeftPaneCtaText() {
		return leftPaneCtaText;
	}

	public String getLeftPaneCtaLink() {
		return LinkUtils.appendLinkExtension(leftPaneCtaLink, resourceResolver);
	}

	public String getLeftPaneCtaAriaLabel() {
		return leftPaneCtaAriaLabel;
	}

	public String getLeftPaneCtaTarget() {
		return leftPaneCtaTarget;
	}
}
