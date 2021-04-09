package com.jlr.core.models;

import java.util.ArrayList;
import java.util.List;

import org.apache.commons.lang.StringUtils;
import org.osgi.annotation.versioning.ConsumerType;

/**
 * The Interface ContentCardModel.
 */
@ConsumerType
public interface ContentCardModel {

    /**
     * Gets the cta list.
     *
     * @return the cta list
     */
    default List<ContentCardListModel> getContentCardList() {
        return new ArrayList<>();
    }

    default String getColumn() {
        return StringUtils.EMPTY;
    }

}
