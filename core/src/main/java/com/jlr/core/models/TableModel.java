package com.jlr.core.models;


import java.util.ArrayList;
import java.util.List;
import org.apache.commons.lang.StringUtils;
import com.jlr.core.pojos.CTAPojo;

public interface TableModel {

    /**
     * Gets the cta list.
     *
     * @return the cta list
     */
    default List<CTAPojo> getCtaList() {
        return new ArrayList<>();
    }

    /**
     * Gets the table HTML
     *
     * @return the table HTML
     */
    default String getTableHtml() {
        return StringUtils.EMPTY;
    }

}
