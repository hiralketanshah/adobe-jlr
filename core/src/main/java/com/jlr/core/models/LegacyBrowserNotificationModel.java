package com.jlr.core.models;

import org.apache.sling.models.annotations.Model;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import javax.inject.Inject;

@Model(adaptables = Resource.class, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class LegacyBrowserNotificationModel {

    /** The headerCopy. */
    @Inject

    private String headerCopy;

    /** The copy. */
    @Inject

    private String copy;

    /**
     *  Gets headerCopy
     *  @return
     */
    public String getHeaderCopy() {
        return headerCopy;
    }

    /**
     *  Gets copy
     *  @return
     */

    public String getCopy() {
        return copy;
    }

}
