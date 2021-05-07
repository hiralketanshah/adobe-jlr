package com.jlr.core.pojos;

public class GalleryCategory {

    private String portraitLargeImage;
    private String portraitSmallImage;
    private String landscapeLargeImage;
    private String imageAlt;
    private boolean isDecorative;
    private String categoryLink;
    private String categoryName;

    public GalleryCategory(String portraitLargeImage, String portraitSmallImage, String landscapeLargeImage,
            String imageAlt, boolean isDecorative, String link, String categoryName) {
        this.portraitLargeImage = portraitLargeImage;
        this.portraitSmallImage = portraitSmallImage;
        this.landscapeLargeImage = landscapeLargeImage;
        this.imageAlt = imageAlt;
        this.isDecorative = isDecorative;
        this.categoryLink = link;
        this.categoryName = categoryName;
    }

    public String getPortraitLargeImage() {
        return portraitLargeImage;
    }

    public void setPortraitLargeImage(String portraitLargeImage) {
        this.portraitLargeImage = portraitLargeImage;
    }

    public String getPortraitSmallImage() {
        return portraitSmallImage;
    }

    public void setPortraitSmallImage(String portraitSmallImage) {
        this.portraitSmallImage = portraitSmallImage;
    }

    public String getLandscapeLargeImage() {
        return landscapeLargeImage;
    }

    public void setLandscapeLargeImage(String landscapeLargeImage) {
        this.landscapeLargeImage = landscapeLargeImage;
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

    public String getCategoryLink() {
        return categoryLink;
    }

    public void setCategoryLink(String categoryLink) {
        this.categoryLink = categoryLink;
    }

    public String getCategoryName() {
        return categoryName;
    }

    public void setCategoryName(String categoryName) {
        this.categoryName = categoryName;
    }
}
