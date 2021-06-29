package com.jlr.core.pojos;

public class GalleryItem {

    private String headerCopy;
    private String copy;
    private String assetType;
    private String fileReference;
    private String imageAlt;
    private boolean isDecorative;
    private String videoId;
    private String posterImage;
    private String thumbnail;
    private String text;
    private String link;
    private String icon;
    private String ariaLabel;
    private String target;

    public GalleryItem(String headerCopy, String copy, String assetType, String fileReference, String imageAlt,
            boolean isDecorative, String videoId, String posterImage, String thumbnail, String text, String link,
            String icon, String ariaLabel, String target) {
        super();
        this.headerCopy = headerCopy;
        this.copy = copy;
        this.assetType = assetType;
        this.fileReference = fileReference;
        this.imageAlt = imageAlt;
        this.isDecorative = isDecorative;
        this.videoId = videoId;
        this.posterImage = posterImage;
        this.thumbnail = thumbnail;
        this.text = text;
        this.link = link;
        this.icon = icon;
        this.ariaLabel = ariaLabel;
        this.target = target;
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

    public String getImageAlt() {
        if (isDecorative) {
            return null;
        }
        return imageAlt;
    }

    public void setImageAlt(String imageAlt) {
        this.imageAlt = imageAlt;
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
