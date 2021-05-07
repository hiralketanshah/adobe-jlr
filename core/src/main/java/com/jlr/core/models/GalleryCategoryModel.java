package com.jlr.core.models;

import java.util.ArrayList;
import java.util.List;

import org.apache.commons.lang.StringUtils;

import com.jlr.core.pojos.GalleryCategory;

/**
 * The Interface GalleryCategoryModel.
 */
public interface GalleryCategoryModel {

    default List<GalleryCategory> getCategoryList() {
        return new ArrayList<>();
    }

    default String getLogoLink() {
        return StringUtils.EMPTY;
    }

    default String getPreviousPageLink() {
        return StringUtils.EMPTY;
    }
}
