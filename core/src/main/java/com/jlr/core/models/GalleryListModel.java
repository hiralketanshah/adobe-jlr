package com.jlr.core.models;

import java.util.ArrayList;
import java.util.List;

import org.apache.commons.lang.StringUtils;

import com.jlr.core.pojos.GalleryItem;

import javax.jcr.RepositoryException;

/**
 * The Interface GalleryListModel.
 */
public interface GalleryListModel {

    /**
     * Gets the gallery list.
     *
     * @return the gallery list
     */
    default List<GalleryItem> getGalleryList() {
        return new ArrayList<>();
    }

    /**
     * Gets the previous page link.
     *
     * @return the previous page link
     */
    default String getPreviousPageLink() {
        return StringUtils.EMPTY;
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
     * Gets the main header copy.
     *
     * @return the main header copy
     */
    default String getMainHeaderCopy() {
        return StringUtils.EMPTY;
    }

    default boolean getFirstPosition() throws RepositoryException { return false; }

}
