package com.jlr.core.pojos;

import javax.inject.Inject;

import org.apache.sling.api.resource.ResourceResolver;

public class GalleryItem {

    private String headerCopy;
    private String copy;
    private String assetType;
    private String fileReference;
    private String imageAlt;
    private Boolean isDecorative;
    private String videoId;
    private String posterImage;
    private String posterImgAltText;
    private String thumbnail;
    private String text;
    private String link;
    private String icon;
    private String ariaLabel;
    private String target;
    private Boolean altTextFromDAM;

    public GalleryItem(String headerCopy, String copy, String assetType, String fileReference, String imageAlt,
    		Boolean isDecorative, String videoId, String posterImage,String posterImgAltText, String thumbnail, String text, String link,
            String icon, String ariaLabel, String target, Boolean altTextFromDAM) {
        super();
        this.headerCopy = headerCopy;
        this.copy = copy;
        this.assetType = assetType;
        this.fileReference = fileReference;
        this.imageAlt = imageAlt;
        this.isDecorative = isDecorative;
        this.videoId = videoId;
        this.posterImage = posterImage;
        this.posterImgAltText = posterImgAltText;
        this.thumbnail = thumbnail;
        this.text = text;
        this.link = link;
        this.icon = icon;
        this.ariaLabel = ariaLabel;
        this.target = target;
        this.altTextFromDAM = altTextFromDAM;
    }

    public String getHeaderCopy() {
        return headerCopy;
    }

    public void setHeaderCopy(String headerCopy) {
        this.headerCopy = headerCopy;
    }

    public String getCopy() {
        return copy;
    }

    public void setCopy(String copy) {
        this.copy = copy;
    }

    public String getAssetType() {
        return assetType;
    }

    public void setAssetType(String assetType) {
        this.assetType = assetType;
    }

    public String getFileReference() {
        return fileReference;
    }

    public void setFileReference(String fileReference) {
        this.fileReference = fileReference;
    }
    
    public Boolean getAltTextFromDAM() {
        return altTextFromDAM;
    }

    public void setAltTextFromDAM(Boolean altTextFromDAM) {
		this.altTextFromDAM = altTextFromDAM;
	}

	public void setImageAlt(String imageAlt, ResourceResolver resolver) {
        this.imageAlt = imageAlt;
    }
    
    public String getImageAlt() {
        return imageAlt;
    }

    public boolean getIsDecorative() {
        return isDecorative;
    }

    public void setIsDecorative(boolean isDecorative) {
        this.isDecorative = isDecorative;
    }

    public String getVideoId() {
        return videoId;
    }

    public String getPosterImage() {
        return posterImage;
    }
    
    public String getPosterImgAltText() {
        return posterImgAltText;
    }

    public String getThumbnail() {
        return thumbnail;
    }

    public void setVideoId(String videoId) {
        this.videoId = videoId;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public String getLink() {
        return link;
    }

    public void setLink(String link) {
        this.link = link;
    }

    public String getIcon() {
        return icon;
    }

    public void setIcon(String icon) {
        this.icon = icon;
    }

    public String getAriaLabel() {
        return ariaLabel;
    }

    public void setAriaLabel(String ariaLabel) {
        this.ariaLabel = ariaLabel;
    }

    public String getTarget() {
        return target;
    }

    public void setTarget(String target) {
        this.target = target;
    }
}
