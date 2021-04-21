package com.jlr.core.models;

import java.util.ArrayList;
import java.util.List;
import org.apache.commons.lang.StringUtils;
import com.adobe.cq.wcm.core.components.models.Page;

public interface PageModel extends Page {

    default String getPageData() {
        return StringUtils.EMPTY;
    }

    default List<String> getGtmTagsList() {
        return new ArrayList<>();
    }

    default String getCommaSeparatedGtmTagsListWithQuotes() {
        return StringUtils.EMPTY;
    }


}
