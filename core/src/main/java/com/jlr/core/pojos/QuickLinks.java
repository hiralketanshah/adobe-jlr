package com.jlr.core.pojos;

/**
 * The Class QuickLinks.
 *
 * @author Adobe
 */
public class QuickLinks {

    /** The quick links cta text. */
    private String quickLinksCtaText;
    
    /** The quick links copy cta link. */
    private String quickLinksCopyCtaLink;
    
    /** The quick links copy cta icon. */
    private String quickLinksCopyCtaIcon;
    
    /** The quick links copy cta target. */
    private String quickLinksCopyCtaTarget;

    /**
     * Instantiates a new quick links.
     *
     * @param quickLinksCtaText the quick links cta text
     * @param quickLinksCopyCtaLink the quick links copy cta link
     * @param quickLinksCopyCtaIcon the quick links copy cta icon
     * @param quickLinksCopyCtaTarget the quick links copy cta target
     */
    public QuickLinks(String quickLinksCtaText, String quickLinksCopyCtaLink, String quickLinksCopyCtaIcon, String quickLinksCopyCtaTarget) {
    	this.quickLinksCtaText = quickLinksCtaText;
        this.quickLinksCopyCtaLink = quickLinksCopyCtaLink;
        this.quickLinksCopyCtaIcon = quickLinksCopyCtaIcon;
        this.quickLinksCopyCtaTarget = quickLinksCopyCtaTarget;
    }

    /**
     * Gets the quick links cta text.
     *
     * @return the quick links cta text
     */
    public String getQuickLinksCtaText() {
        return quickLinksCtaText;
    }

    /**
     * Sets the quick links cta text.
     *
     * @param quickLinksCtaText the new quick links cta text
     */
    public void setQuickLinksCtaText(String quickLinksCtaText) {
        this.quickLinksCtaText = quickLinksCtaText;
    }

    /**
     * Gets the quick links copy cta link.
     *
     * @return the quick links copy cta link
     */
    public String getQuickLinksCopyCtaLink() {
        return quickLinksCopyCtaLink;
    }

    /**
     * Sets the quick links copy cta link.
     *
     * @param quickLinksCopyCtaLink the new quick links copy cta link
     */
    public void setQuickLinksCopyCtaLink(String quickLinksCopyCtaLink) {
        this.quickLinksCopyCtaLink = quickLinksCopyCtaLink;
    }

    /**
     * Gets the quick links copy cta icon.
     *
     * @return the quick links copy cta icon
     */
    public String getQuickLinksCopyCtaIcon() {
        return quickLinksCopyCtaIcon;
    }

    /**
     * Sets the quick links copy cta icon.
     *
     * @param quickLinksCopyCtaIcon the new quick links copy cta icon
     */
    public void setQuickLinksCopyCtaIcon(String quickLinksCopyCtaIcon) {
        this.quickLinksCopyCtaIcon = quickLinksCopyCtaIcon;
    }

	/**
	 * Gets the quick links copy cta target.
	 *
	 * @return the quick links copy cta target
	 */
	public String getQuickLinksCopyCtaTarget() {
		return quickLinksCopyCtaTarget;
	}

	/**
	 * Sets the quick links copy cta target.
	 *
	 * @param quickLinksCopyCtaTarget the new quick links copy cta target
	 */
	public void setQuickLinksCopyCtaTarget(String quickLinksCopyCtaTarget) {
		this.quickLinksCopyCtaTarget = quickLinksCopyCtaTarget;
	}

}
