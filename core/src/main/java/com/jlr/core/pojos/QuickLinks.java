package com.jlr.core.pojos;

public class QuickLinks {

    private String quickLinksCtaText;
    private String quickLinksCopyCtaLink;
    private String quickLinksCopyCtaIcon;
    private String quickLinksCopyCtaTarget;

    public QuickLinks(String quickLinksCtaText, String quickLinksCopyCtaLink, String quickLinksCopyCtaIcon, String quickLinksCopyCtaTarget) {
    	this.quickLinksCtaText = quickLinksCtaText;
        this.quickLinksCopyCtaLink = quickLinksCopyCtaLink;
        this.quickLinksCopyCtaIcon = quickLinksCopyCtaIcon;
        this.quickLinksCopyCtaTarget = quickLinksCopyCtaTarget;
    }

    public String getQuickLinksCtaText() {
        return quickLinksCtaText;
    }

    public void setQuickLinksCtaText(String quickLinksCtaText) {
        this.quickLinksCtaText = quickLinksCtaText;
    }

    public String getQuickLinksCopyCtaLink() {
        return quickLinksCopyCtaLink;
    }

    public void setQuickLinksCopyCtaLink(String quickLinksCopyCtaLink) {
        this.quickLinksCopyCtaLink = quickLinksCopyCtaLink;
    }

    public String getQuickLinksCopyCtaIcon() {
        return quickLinksCopyCtaIcon;
    }

    public void setQuickLinksCopyCtaIcon(String quickLinksCopyCtaIcon) {
        this.quickLinksCopyCtaIcon = quickLinksCopyCtaIcon;
    }

	public String getQuickLinksCopyCtaTarget() {
		return quickLinksCopyCtaTarget;
	}

	public void setQuickLinksCopyCtaTarget(String quickLinksCopyCtaTarget) {
		this.quickLinksCopyCtaTarget = quickLinksCopyCtaTarget;
	}

}
