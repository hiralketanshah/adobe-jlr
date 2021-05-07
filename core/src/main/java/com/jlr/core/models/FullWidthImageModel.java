package com.jlr.core.models;

import java.util.ArrayList;
import java.util.List;
import org.apache.commons.lang.StringUtils;
import com.jlr.core.pojos.CTAPojo;


/**
 * The Interface FullWidthImageModel.
 *
 * @author Adobe
 */
public interface FullWidthImageModel {

    /**
     * Gets the cta list.
     *
     * @return the cta list
     */
    default List<CTAPojo> getCtaList() {
        return new ArrayList<>();
    }

    /**
     * Gets the body copy.
     *
     * @return the body copy
     */
    default String getBodyCopy() {
        return StringUtils.EMPTY;
    }

}
