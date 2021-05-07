package com.jlr.core.pojos;

import java.util.ArrayList;
import java.util.List;

/**
 * The type Published image.
 */
public class PublishedImage {
    private List<String> publishedImages;

    /**
     * Gets published images.
     *
     * @return the published images
     */
    public List<String> getPublishedImages() {
        return new ArrayList<>(publishedImages);
    }

    /**
     * Sets published images.
     *
     * @param publishedImages the published images
     */
    public void setPublishedImages(List<String> publishedImages) {
        this.publishedImages = new ArrayList<>(publishedImages);
    }
}
