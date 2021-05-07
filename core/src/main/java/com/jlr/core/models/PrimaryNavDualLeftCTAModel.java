package com.jlr.core.models;

import javax.inject.Inject;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import com.jlr.core.utils.LinkUtils;


/**
 * The Class PrimaryNavDualLeftCTAModel.
 *
 * @author Adobe
 */
@Model(adaptables = Resource.class, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class PrimaryNavDualLeftCTAModel {

    /** The resource resolver. */
    @Inject
    private ResourceResolver resourceResolver;

    /** The left pane dual cta text. */
    @Inject
    private String leftPaneDualCtaText;

    /** The left pane dual cta link. */
    @Inject
    private String leftPaneDualCtaLink;

    /** The left pane dual cta aria label. */
    @Inject
    private String leftPaneDualCtaAriaLabel;

    /** The left pane dual cta target. */
    @Inject
    private String leftPaneDualCtaTarget;

    /**
     * Gets the left pane dual cta text.
     *
     * @return the left pane dual cta text
     */
    public String getLeftPaneDualCtaText() {
        return leftPaneDualCtaText;
    }

    /**
     * Gets the left pane dual cta link.
     *
     * @return the left pane dual cta link
     */
    public String getLeftPaneDualCtaLink() {
        return LinkUtils.appendLinkExtension(leftPaneDualCtaLink, resourceResolver);
    }

    /**
     * Gets the left pane dual cta aria label.
     *
     * @return the left pane dual cta aria label
     */
    public String getLeftPaneDualCtaAriaLabel() {
        return leftPaneDualCtaAriaLabel;
    }

    /**
     * Gets the left pane dual cta target.
     *
     * @return the left pane dual cta target
     */
    public String getLeftPaneDualCtaTarget() {
        return leftPaneDualCtaTarget;
    }

}
