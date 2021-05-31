package com.jlr.core.models;

import java.util.ArrayList;
import java.util.List;

import org.apache.commons.lang.StringUtils;

import com.jlr.core.pojos.GalleryItem;

/**
 * The Interface GalleryListModel.
 */
public interface GalleryListModel {

    default List<GalleryItem> getGalleryList() {
        return new ArrayList<>();
    }

    default String getPreviousPageLink() {
        return StringUtils.EMPTY;
    }

    default String getExitPageLink() {
        return StringUtils.EMPTY;
    }
}
