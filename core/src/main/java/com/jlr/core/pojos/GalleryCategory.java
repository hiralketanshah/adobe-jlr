package com.jlr.core.pojos;

public class GalleryCategory {

    private String portraitLargeImage;
    private String portraitSmallImage;
    private String landscapeLargeImage;
    private String imageAlt;
    private boolean isDecorative;
    private String categoryLink;
    private String categoryName;
    private int count;

    public GalleryCategory(String portraitLargeImage, String portraitSmallImage, String landscapeLargeImage,
            String imageAlt, boolean isDecorative, String link, String categoryName, int count) {
        this.portraitLargeImage = portraitLargeImage;
        this.portraitSmallImage = portraitSmallImage;
        this.landscapeLargeImage = landscapeLargeImage;
        this.imageAlt = imageAlt;
        this.isDecorative = isDecorative;
        this.categoryLink = link;
        this.categoryName = categoryName;
        this.count = count;
    }

    public String getPortraitLargeImage() {
        return portraitLargeImage;
    }

    public String getPortraitSmallImage() {
        return portraitSmallImage;
    }

    public String getLandscapeLargeImage() {
        return landscapeLargeImage;
    }

    public String getImageAlt() {
        if (isDecorative) {
            return null;
        }
        return imageAlt;
    }

    public boolean getIsDecorative() {
        return isDecorative;
    }

    public String getCategoryLink() {
        return categoryLink;
    }

    public String getCategoryName() {
        return categoryName;
    }

    public int getCount() {
        return count;
    }

}
