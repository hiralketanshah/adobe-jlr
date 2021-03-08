package com.jlr.core.pojos;

/**
 * The Class ReadyToGoBar.
 */
public class ReadyToGoBar {
	
	/** The text. */
	private String text;
    
    /** The link. */
    private String link;
    
    /** The target. */
    private String target;
    
    /** The description. */
    private String copy;
    
    /** The img alt text. */
    private String imageAlt;
	
	/** The file reference. */
	private String fileReference;
	
	/** The link type. */
	private String linkType;
    
    /**
     * Instantiates a new ready to go bar.
     *
     * @param link the link
     * @param target the target
     * @param copy the copy
     * @param text the text
     * @param imageAlt the image alt
     * @param fileReference the file reference
     * @param linkType the link type
     */
    public ReadyToGoBar(String link, String target, String copy, String text, String imageAlt, String fileReference, String linkType) {
        this.text = text;
        this.link = link;
        this.target = target;
        this.copy = copy;
        this.imageAlt = imageAlt;
        this.fileReference = fileReference;
        this.linkType=linkType;
    }
    

    /**
     * Gets the description.
     *
     * @return the description
     */
    public String getCopy() {
		return copy;
	}

	/**
	 * Sets the description.
	 *
	 * @param copy the new copy
	 */
	public void setCopy(String copy) {
		this.copy = copy;
	}

	/**
	 * Gets the img alt.
	 *
	 * @return the img alt
	 */
	public String getImageAlt() {
		return imageAlt;
	}

	/**
	 * Sets the img alt.
	 *
	 * @param imageAlt the new image alt
	 */
	public void setImageAlt(String imageAlt) {
		this.imageAlt = imageAlt;
	}

	/**
	 * Gets the file reference.
	 *
	 * @return the file reference
	 */
	public String getFileReference() {
		return fileReference;
	}

	/**
	 * Sets the file reference.
	 *
	 * @param fileReference the new file reference
	 */
	public void setFileReference(String fileReference) {
		this.fileReference = fileReference;
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
	 * Sets the link type.
	 *
	 * @param linkType the new link type
	 */
	public void setLinkType(String linkType) {
		this.linkType = linkType;
	}


	/**
	 * Gets the link type.
	 *
	 * @return the link type
	 */
	public String getLinkType() {
		return linkType;
	}
}

