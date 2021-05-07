package com.jlr.core.pojos;

/**
 * The Class HygieneLinks.
 *
 * @author Adobe
 */
public class HygieneLinks {

    /** The text. */
    private String text;
    
    /** The link. */
    private String link;
    
    /** The target. */
    private String target;
    
    /** The aria label. */
    private String ariaLabel;

    /**
     * Instantiates a new hygiene links.
     *
     * @param text the text
     * @param link the link
     * @param target the target
     * @param ariaLabel the aria label
     */
    public HygieneLinks(String text, String link, String target, String ariaLabel) {
    	this.text = text;
        this.link = link;
        this.target = target;
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
