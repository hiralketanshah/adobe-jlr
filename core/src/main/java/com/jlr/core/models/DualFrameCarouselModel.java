package com.jlr.core.models;

import java.util.ArrayList;
import java.util.List;
import org.apache.commons.lang.StringUtils;
import com.jlr.core.pojos.CTAPojo;

import javax.jcr.RepositoryException;


/**
 * The Interface DualFrameCarouselModel.
 *
 * @author Adobe
 */
public interface DualFrameCarouselModel {

    /**
     * Gets the cta list.
     *
     * @return the cta list
     */
    default List<CTAPojo> getCtaList() {
        return new ArrayList<>();
    }

    /**
     * Gets the asset type.
     *
     * @return the asset type
     */
    default String getAssetType() {
        return StringUtils.EMPTY;
    }

    default boolean getFirstPosition() throws RepositoryException { return false; }

}
