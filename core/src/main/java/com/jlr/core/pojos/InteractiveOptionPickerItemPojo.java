package com.jlr.core.pojos;

/**
 * The Class InteractiveOptionPickerItemPojo.
 *
 * @author Adobe
 */
public class InteractiveOptionPickerItemPojo extends CTAPojo {

    /**
     * Instantiates a new interactive option picker item pojo.
     *
     * @param text the text
     * @param link the link
     * @param target the target
     * @param linkType the link type
     * @param icon the icon
     * @param ariaLabel the aria label
     */
    public InteractiveOptionPickerItemPojo(String text, String link, String target, String linkType, String icon, String ariaLabel) {
        super(text, link, target, linkType, icon, ariaLabel);
    }



    /**
     * Instantiates a new interactive option picker item pojo.
     *
     * @param text the text
     * @param link the link
     * @param target the target
     * @param linkType the link type
     * @param icon the icon
     * @param ariaLabel the aria label
     * @param optionImage the option image
     * @param imgAlt the img alt
     * @param isDecorative the is decorative
     * @param thumbnailImage the thumbnail image
     * @param optionLabel the option label
     * @param isCtaOverriden the is cta overriden
     */
    public InteractiveOptionPickerItemPojo(String text, String link, String target, String linkType, String icon, String ariaLabel, String optionImage,
                    String imgAlt, String isDecorative, String thumbnailImage, String optionLabel, String isCtaOverriden) {
        super(text, link, target, linkType, icon, ariaLabel);
        this.optionImage = optionImage;
        this.imgAlt = imgAlt;
        this.isDecorative = isDecorative;
        this.thumbnailImage = thumbnailImage;
        this.optionLabel = optionLabel;
        this.isCtaOverriden = isCtaOverriden;
    }



    /**
     * Gets the option image.
     *
     * @return the optionImage
     */
    public String getOptionImage() {
        return optionImage;
    }

    /**
     * Sets the option image.
     *
     * @param optionImage the optionImage to set
     */
    public void setOptionImage(String optionImage) {
        this.optionImage = optionImage;
    }

    /**
     * Gets the img alt.
     *
     * @return the imgAlt
     */
    public String getImgAlt() {
        return imgAlt;
    }

    /**
     * Sets the img alt.
     *
     * @param imgAlt the imgAlt to set
     */
    public void setImgAlt(String imgAlt) {
        this.imgAlt = imgAlt;
    }

    /**
     * Gets the checks if is decorative.
     *
     * @return the isDecorative
     */
    public String getIsDecorative() {
        return isDecorative;
    }

    /**
     * Sets the checks if is decorative.
     *
     * @param isDecorative the isDecorative to set
     */
    public void setIsDecorative(String isDecorative) {
        this.isDecorative = isDecorative;
    }

    /**
     * Gets the thumbnail image.
     *
     * @return the thumbnailImage
     */
    public String getThumbnailImage() {
        return thumbnailImage;
    }

    /**
     * Sets the thumbnail image.
     *
     * @param thumbnailImage the thumbnailImage to set
     */
    public void setThumbnailImage(String thumbnailImage) {
        this.thumbnailImage = thumbnailImage;
    }

    /**
     * Gets the option label.
     *
     * @return the optionLabel
     */
    public String getOptionLabel() {
        return optionLabel;
    }

    /**
     * Sets the option label.
     *
     * @param optionLabel the optionLabel to set
     */
    public void setOptionLabel(String optionLabel) {
        this.optionLabel = optionLabel;
    }

    /**
     * Gets the checks if is cta overriden.
     *
     * @return the isCtaOverriden
     */
    public String getIsCtaOverriden() {
        return isCtaOverriden;
    }

    /**
     * Sets the checks if is cta overriden.
     *
     * @param isCtaOverriden the isCtaOverriden to set
     */
    public void setIsCtaOverriden(String isCtaOverriden) {
        this.isCtaOverriden = isCtaOverriden;
    }

    /** The option image. */
    private String optionImage;
    
    /** The img alt. */
    private String imgAlt;
    
    /** The is decorative. */
    private String isDecorative;
    
    /** The thumbnail image. */
    private String thumbnailImage;
    
    /** The option label. */
    private String optionLabel;
    
    /** The is cta overriden. */
    private String isCtaOverriden;

}
