package com.jlr.core.models;

import javax.inject.Inject;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;

import com.jlr.core.utils.LinkUtils;

@Model(adaptables = Resource.class, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class PrimaryNavDualLeftCTAModel {
	
	@Inject
    private ResourceResolver resourceResolver;
 
    @Inject
    private String leftPaneDualCtaText;
    
    @Inject
    private String leftPaneDualCtaLink;
    
    @Inject
    private String leftPaneDualCtaAriaLabel;
    
    @Inject
    private String leftPaneDualCtaTarget;

	public String getLeftPaneDualCtaText() {
		return leftPaneDualCtaText;
	}

	public String getLeftPaneDualCtaLink() {
		return LinkUtils.appendLinkExtension(leftPaneDualCtaLink, resourceResolver);
	}

	public String getLeftPaneDualCtaAriaLabel() {
		return leftPaneDualCtaAriaLabel;
	}

	public String getLeftPaneDualCtaTarget() {
		return leftPaneDualCtaTarget;
	}

}
