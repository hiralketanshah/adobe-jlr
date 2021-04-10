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
     * Gets the content card list.
     *
     * @return the content card list
     */
    default List<ContentCardListModel> getContentCardList() {
        return new ArrayList<>();
    }

    /**
     * Gets the column.
     *
     * @return the column
     */
    default String getColumn() {
        return StringUtils.EMPTY;
    }

}
