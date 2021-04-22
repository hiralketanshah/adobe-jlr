package com.jlr.core.pojos;

public class InteractiveOptionPickerItemPojo extends CTAPojo {

    public InteractiveOptionPickerItemPojo(String text, String link, String target, String linkType, String icon, String ariaLabel) {
        super(text, link, target, linkType, icon, ariaLabel);
    }



    public InteractiveOptionPickerItemPojo(String text, String link, String target, String linkType, String icon, String ariaLabel, String optionImage,
                    String imgAlt, Boolean isDecorative, String thumbnailImage, String optionLabel, String isCtaOverriden) {
        super(text, link, target, linkType, icon, ariaLabel);
        this.optionImage = optionImage;
        this.imgAlt = imgAlt;
        this.isDecorative = isDecorative;
        this.thumbnailImage = thumbnailImage;
        this.optionLabel = optionLabel;
        this.isCtaOverriden = isCtaOverriden;
    }



    /**
     * @return the optionImage
     */
    public String getOptionImage() {
        return optionImage;
    }

    /**
     * @param optionImage the optionImage to set
     */
    public void setOptionImage(String optionImage) {
        this.optionImage = optionImage;
    }

    /**
     * @return the imgAlt
     */
    public String getImgAlt() {
        return imgAlt;
    }

    /**
     * @param imgAlt the imgAlt to set
     */
    public void setImgAlt(String imgAlt) {
        this.imgAlt = imgAlt;
    }

    /**
     * @return the isDecorative
     */
    public Boolean getIsDecorative() {
        return isDecorative;
    }

    /**
     * @param isDecorative the isDecorative to set
     */
    public void setIsDecorative(Boolean isDecorative) {
        this.isDecorative = isDecorative;
    }

    /**
     * @return the thumbnailImage
     */
    public String getThumbnailImage() {
        return thumbnailImage;
    }

    /**
     * @param thumbnailImage the thumbnailImage to set
     */
    public void setThumbnailImage(String thumbnailImage) {
        this.thumbnailImage = thumbnailImage;
    }

    /**
     * @return the optionLabel
     */
    public String getOptionLabel() {
        return optionLabel;
    }

    /**
     * @param optionLabel the optionLabel to set
     */
    public void setOptionLabel(String optionLabel) {
        this.optionLabel = optionLabel;
    }

    /**
     * @return the isCtaOverriden
     */
    public String getIsCtaOverriden() {
        return isCtaOverriden;
    }

    /**
     * @param isCtaOverriden the isCtaOverriden to set
     */
    public void setIsCtaOverriden(String isCtaOverriden) {
        this.isCtaOverriden = isCtaOverriden;
    }

    private String optionImage;
    private String imgAlt;
    private Boolean isDecorative;
    private String thumbnailImage;
    private String optionLabel;
    private String isCtaOverriden;

}
