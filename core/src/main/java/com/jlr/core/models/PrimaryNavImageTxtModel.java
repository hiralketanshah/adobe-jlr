package com.jlr.core.models;

import javax.inject.Inject;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;

@Model(adaptables = Resource.class, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class PrimaryNavImageTxtModel {
	
	@Inject
    private ResourceResolver resourceResolver;
	
	@Inject
    private String fileReferenceImageTxt;
	
	@Inject
    private String rightPaneImageTextAlt;
	
	@Inject
    private String rightPaneHeaderCopy;
	
	@Inject
    private String rightPaneBodyCopy;
	
	@Inject
    private String rightPaneCopyCtaText;
	
	@Inject
    private String rightPaneCopyCtaLink;
	
	@Inject
    private String rightPaneCopyCtaIcon;
	
	@Inject
    private String rightPaneCopyCtaLinkType;
	
	@Inject
    private String rightPaneCopyCtaAriaLabel;
	
	@Inject
    private String rightPaneCopyCtaTarget;
	
	@Inject
    private Resource quicklinks;
	
	public String getFileReferenceImageTxt() {
		return fileReferenceImageTxt;
	}

	public String getRightPaneImageTextAlt() {
		return rightPaneImageTextAlt;
	}

	public String getRightPaneHeaderCopy() {
		return rightPaneHeaderCopy;
	}

	public String getRightPaneBodyCopy() {
		return rightPaneBodyCopy;
	}

	public String getRightPaneCopyCtaText() {
		return rightPaneCopyCtaText;
	}

	public String getRightPaneCopyCtaLink() {
		return rightPaneCopyCtaLink;
	}

	public String getRightPaneCopyCtaIcon() {
		return rightPaneCopyCtaIcon;
	}

	public String getRightPaneCopyCtaLinkType() {
		return rightPaneCopyCtaLinkType;
	}

	public String getRightPaneCopyCtaAriaLabel() {
		return rightPaneCopyCtaAriaLabel;
	}

	public String getRightPaneCopyCtaTarget() {
		return rightPaneCopyCtaTarget;
	}
}
