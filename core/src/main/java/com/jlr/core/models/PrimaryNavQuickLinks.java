package com.jlr.core.models;

import javax.inject.Inject;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;

import com.jlr.core.utils.LinkUtils;

@Model(adaptables = Resource.class, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class PrimaryNavQuickLinks {
	
	@Inject
    private ResourceResolver resourceResolver;
	
	@Inject
    private String quickLinksCtaText;
    
    @Inject
    private String quickLinksCopyCtaLink;
    
    @Inject
    private String quickLinksCopyCtaIcon;
    
    @Inject
    private String quickLinksCopyCtaLinkType;
    
    @Inject
    private String quickLinksCopyCtaAriaLabel;
    
    @Inject
    private String quickLinksCopyCtaTarget;

	public String getQuickLinksCtaText() {
		return quickLinksCtaText;
	}

	public String getQuickLinksCopyCtaLink() {
		return LinkUtils.appendLinkExtension(quickLinksCopyCtaLink, resourceResolver);
	}

	public String getQuickLinksCopyCtaIcon() {
		return quickLinksCopyCtaIcon;
	}

	public String getQuickLinksCopyCtaLinkType() {
		return quickLinksCopyCtaLinkType;
	}

	public String getQuickLinksCopyCtaAriaLabel() {
		return quickLinksCopyCtaAriaLabel;
	}

	public String getQuickLinksCopyCtaTarget() {
		return quickLinksCopyCtaTarget;
	}

}
