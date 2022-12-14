package com.jlr.core.pojos;

/**
 * The type Image.
 *
 * @author Adobe
 */
public class Image {

    /** The widest image. */
    private String widestImage;
    
    /** The alt. */
    private String alt;
    
    /** The image. */
    private PublishedImage image;

    /**
     * Gets widest image.
     *
     * @return the widest image
     */
    public String getWidestImage() {
        return widestImage;
    }

    /**
     * Sets widest image.
     *
     * @param widestImage the widest image
     */
    public void setWidestImage(String widestImage) {
        this.widestImage = widestImage;
    }

    /**
     * Gets alt.
     *
     * @return the alt
     */
    public String getAlt() {
        return alt;
    }

    /**
     * Sets alt.
     *
     * @param alt the alt
     */
    public void setAlt(String alt) {
        this.alt = alt;
    }

    /**
     * Gets image.
     *
     * @return the image
     */
    public PublishedImage getImage() {
        return image;
    }

    /**
     * Sets image.
     *
     * @param image the image
     */
    public void setImage(PublishedImage image) {
        this.image = image;
    }
}
