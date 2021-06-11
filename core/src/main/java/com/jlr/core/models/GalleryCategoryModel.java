package com.jlr.core.models;

import java.util.ArrayList;
import java.util.List;

import org.apache.commons.lang.StringUtils;

import com.jlr.core.pojos.GalleryCategory;

/**
 * The Interface GalleryCategoryModel.
 */
public interface GalleryCategoryModel {

    /**
     * Gets the category list.
     *
     * @return the category list
     */
    default List<GalleryCategory> getCategoryList() {
        return new ArrayList<>();
    }

    /**
     * Gets the exit page link.
     *
     * @return the exit page link
     */
    default String getExitPageLink() {
        return StringUtils.EMPTY;
    }

    /**
     * Gets the categories count.
     *
     * @return the categories count
     */
    default int getCategoriesCount() {
        return 0;
    }

}
