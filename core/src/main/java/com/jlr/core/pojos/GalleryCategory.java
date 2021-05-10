package com.jlr.core.pojos;

public class GalleryCategory {

    private String bgImage;
    private String imageAlt;
    private boolean isDecorative;
    private String categoryLink;
    private String categoryName;
    private int count;

    public GalleryCategory(String bgImage, String imageAlt, boolean isDecorative, String link, String categoryName,
            int count) {
        this.bgImage = bgImage;
        this.imageAlt = imageAlt;
        this.isDecorative = isDecorative;
        this.categoryLink = link;
        this.categoryName = categoryName;
        this.count = count;
    }

    public String getBgImage() {
        return bgImage;
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
