package com.jlr.core.models;

import java.util.ArrayList;
import java.util.List;
import org.apache.commons.lang.StringUtils;
import com.adobe.cq.wcm.core.components.models.Page;


/**
 * The Interface PageModel.
 *
 * @author Adobe
 */
public interface PageModel extends Page {

    /**
     * Gets the page data.
     *
     * @return the page data
     */
    default String getPageData() {
        return StringUtils.EMPTY;
    }

    /**
     * Gets the gtm tags list.
     *
     * @return the gtm tags list
     */
    default List<String> getGtmTagsList() {
        return new ArrayList<>();
    }

    /**
     * Gets the enable inline cookie js.
     *
     * @return the enable inline cookie js
     */
    default String getEnableInlineCookieJs() {
        return StringUtils.EMPTY;
    }

    /**
     * Gets the comma separated gtm tags list with quotes.
     *
     * @return the comma separated gtm tags list with quotes
     */
    default String getCommaSeparatedGtmTagsListWithQuotes() {
        return StringUtils.EMPTY;
    }


}
