package com.jlr.core.models;

import org.apache.commons.lang.StringUtils;
import com.adobe.cq.wcm.core.components.models.Page;

public interface PageModel extends Page {

    default String getPageData() {
        return StringUtils.EMPTY;
    }

}
