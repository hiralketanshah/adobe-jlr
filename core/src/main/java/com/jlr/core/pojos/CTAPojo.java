package com.jlr.core.pojos;

/**
 * The Class CTAPojo.
 *
 * @author Adobe
 */
public class CTAPojo {

    /** The text. */
    private String text;
    
    /** The link. */
    private String link;
    
    /** The target. */
    private String target;
    
    /** The link type. */
    private String linkType;
    
    /** The icon. */
    private String icon;
    
    /** The aria label. */
    private String ariaLabel;
    
    /** The copy. */
    private String copy;

    /**
     * Instantiates a new CTA pojo.
     *
     * @param text the text
     * @param link the link
     * @param target the target
     * @param linkType the link type
     * @param icon the icon
     * @param ariaLabel the aria label
     */
    public CTAPojo(String text, String link, String target, String linkType, String icon, String ariaLabel) {
        this.text = text;
        this.link = link;
        this.target = target;
        this.linkType = linkType;
        this.icon = icon;
        this.ariaLabel = ariaLabel;
    }
    
    /**
     * Instantiates a new CTA pojo.
     *
     * @param text the text
     * @param link the link
     * @param target the target
     * @param linkType the link type
     * @param icon the icon
     * @param ariaLabel the aria label
     * @param copy the copy
     */
    public CTAPojo(String text, String link, String target, String linkType, String icon, String ariaLabel, String copy) {
        this.text = text;
        this.link = link;
        this.target = target;
        this.linkType = linkType;
        this.icon = icon;
        this.ariaLabel = ariaLabel;
        this.copy = copy;
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
     * Gets the link type.
     *
     * @return the link type
     */
    public String getLinkType() {
        return linkType;
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
     * Gets the icon.
     *
     * @return the icon
     */
    public String getIcon() {
        return icon;
    }

    /**
     * Sets the icon.
     *
     * @param icon the new icon
     */
    public void setIcon(String icon) {
        this.icon = icon;
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
    
    /**
     * Gets the copy.
     *
     * @return the copy
     */
    public String getCopy() {
        return copy;
    }

    /**
     * Sets the copy.
     *
     * @param copy the new copy
     */
    public void setCopy(String copy) {
        this.copy = copy;
    }
}
