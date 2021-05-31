package com.jlr.core.pojos;

/**
 * The Class SocialLinks.
 *
 * @author Adobe
 */
public class SocialLinks {

    /** The text. */
    private String text;
    
    /** The link. */
    private String link;
    
    /** The target. */
    private String target;
	
	/** The socialicon. */
	private String socialicon;
	
	/** The aria label. */
	private String ariaLabel;

    /**
     * Instantiates a new social links.
     *
     * @param text the text
     * @param link the link
     * @param target the target
     * @param socialicon the socialicon
     * @param ariaLabel the aria label
     */
    public SocialLinks(String text, String link, String target, String socialicon, String ariaLabel) {
    	this.text = text;
        this.link = link;
        this.target = target;
    	this.socialicon = socialicon;
    	this.ariaLabel = ariaLabel;
    }

    /**
     * Gets the text.
     *
     * @return the text
     */
    public String getText() {
        return text;
    }

    /**
     * Sets the text.
     *
     * @param text the new text
     */
    public void setText(String text) {
        this.text = text;
    }

    /**
     * Gets the link.
     *
     * @return the link
     */
    public String getLink() {
        return link;
    }

    /**
     * Sets the link.
     *
     * @param link the new link
     */
    public void setLink(String link) {
        this.link = link;
    }

    /**
     * Gets the target.
     *
     * @return the target
     */
    public String getTarget() {
        return target;
    }

    /**
     * Sets the target.
     *
     * @param target the new target
     */
    public void setTarget(String target) {
        this.target = target;
    }

	/**
	 * Gets the socialicon.
	 *
	 * @return the socialicon
	 */
	public String getSocialicon() {
		return socialicon;
	}

	/**
	 * Sets the socialicon.
	 *
	 * @param socialicon the new socialicon
	 */
	public void setSocialicon(String socialicon) {
		this.socialicon = socialicon;
	}

	/**
	 * Gets the aria label.
	 *
	 * @return the aria label
	 */
	public String getAriaLabel() {
		return ariaLabel;
	}

	/**
	 * Sets the aria label.
	 *
	 * @param ariaLabel the new aria label
	 */
	public void setAriaLabel(String ariaLabel) {
		this.ariaLabel = ariaLabel;
	}
}
