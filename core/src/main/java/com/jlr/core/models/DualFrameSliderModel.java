package com.jlr.core.models;

import java.util.List;
import com.jlr.core.pojos.CTAPojo;


/**
 * The Interface DualFrameSliderModel.
 *
 * @author Adobe
 */
public interface DualFrameSliderModel {

    /**
     * Gets the cta list.
     *
     * @return the cta list
     */
    public List<CTAPojo> getCtaList();

    /**
     * Gets the image list.
     *
     * @return the image list
     */
    public List<String> getImageList();

    /**
     * Gets the image type.
     *
     * @return the image type
     */
    public String getImageType();

    /**
     * Gets the image count.
     *
     * @return the image count
     */
    public int getImageCount();

    /**
     * Gets the frame path.
     *
     * @return the frame path
     */
    public String getFramePath();

    public Integer getNumberOfDigit();

}
