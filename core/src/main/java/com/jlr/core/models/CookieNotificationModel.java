package com.jlr.core.models;

import com.jlr.core.pojos.CTAPojo;

import java.util.ArrayList;
import java.util.List;

/**
 * The Interface CookieNotificationModel.
 *
 * @author Adobe
 */
public interface CookieNotificationModel {

    public String getHeader();
    public String getSummary();
    default List<CTAPojo> getCtaList() {
        return new ArrayList<>();
    }
}
