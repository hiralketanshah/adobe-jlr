package com.jlr.core.models;

import com.jlr.core.pojos.CTAPojo;
import org.apache.commons.lang.StringUtils;

import java.util.ArrayList;
import java.util.List;

/**
 * The Interface CookieNotificationModel.
 *
 * @author Adobe
 */
public interface CookieNotificationModel {

    /**
     * Gets Header.
     *
     * @return the Header
     */
    public default String getHeader() { return StringUtils.EMPTY; }

    /**
     * Gets Summary.
     *
     * @return the Summary
     */
    public default String getSummary() {return StringUtils.EMPTY; };

    /**
     * Gets the cta list.
     *
     * @return the cta list
     */
    default List<CTAPojo> getCtaList() {
        return new ArrayList<>();
    }

    /**
     * Gets the Expiry.
     *
     * @return the Expiry
     */
    public default Integer getExpiry() { return null ;}
}
