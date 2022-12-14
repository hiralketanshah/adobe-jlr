package com.jlr.core.models;

import java.util.ArrayList;
import java.util.List;
import org.apache.commons.lang.StringUtils;
import org.osgi.annotation.versioning.ConsumerType;
import com.jlr.core.pojos.CTAPojo;

import javax.jcr.RepositoryException;

/**
 * The Interface ArticleModel.
 *
 * @author Adobe
 */
@ConsumerType
public interface ArticleModel {

    /**
     * Gets the image position.
     *
     * @return the image position
     */
    default String getImagePosition() {
        return StringUtils.EMPTY;
    }

    /**
     * Gets the asset type.
     *
     * @return the asset type
     */
    default String getAssetType() {
        return StringUtils.EMPTY;
    }

    /**
     * Gets the cta list.
     *
     * @return the cta list
     */
    default List<CTAPojo> getCtaList() {
        return new ArrayList<>();
    }

    /**
     * Gets the caption.
     *
     * @return the caption
     */
    default String getCaption() {
        return StringUtils.EMPTY;
    }
    default boolean getFirstPosition() throws RepositoryException { return false; }

}
