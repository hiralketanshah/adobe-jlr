package com.jlr.core.pojos;

// TODO: Auto-generated Javadoc
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
    private String description;
    
    /** The img alt text. */
    private String imgAltText;
	
	/** The file reference. */
	private String fileReference;
    
    /**
     * Instantiates a new ready to go bar.
     *
     * @param link the link
     * @param target the target
     * @param description the description
     * @param text the text
     * @param imgAltText the img alt text
     * @param fileReference the file reference
     */
    public ReadyToGoBar(String link, String target, String description, String text, String imgAltText, String fileReference) {
        this.text = text;
        this.link = link;
        this.target = target;
        this.description = description;
        this.imgAltText = imgAltText;
        this.fileReference = fileReference;
    }
    

    /**
     * Gets the description.
     *
     * @return the description
     */
    public String getDescription() {
		return description;
	}

	/**
	 * Sets the description.
	 *
	 * @param description the new description
	 */
	public void setDescription(String description) {
		this.description = description;
	}

	/**
	 * Gets the img alt.
	 *
	 * @return the img alt
	 */
	public String getImgAltText() {
		return imgAltText;
	}

	/**
	 * Sets the img alt.
	 *
	 * @param imgAlt the new img alt
	 */
	public void setImgAltText(String imgAltText) {
		this.imgAltText = imgAltText;
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
}

