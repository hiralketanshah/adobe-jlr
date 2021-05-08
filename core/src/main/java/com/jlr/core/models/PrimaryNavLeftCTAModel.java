package com.jlr.core.models;

import javax.inject.Inject;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import com.jlr.core.utils.LinkUtils;

/**
 * The Class PrimaryNavLeftCTAModel.
 *
 * @author Adobe
 */
@Model(adaptables = Resource.class, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class PrimaryNavLeftCTAModel {

    /** The resource resolver. */
    @Inject
    private ResourceResolver resourceResolver;

    /** The left pane cta text. */
    @Inject
    private String leftPaneCtaText;

    /** The left pane cta link. */
    @Inject
    private String leftPaneCtaLink;

    /** The left pane cta aria label. */
    @Inject
    private String leftPaneCtaAriaLabel;

    /** The left pane cta target. */
    @Inject
    private String leftPaneCtaTarget;

    /**
     * Gets the left pane cta text.
     *
     * @return the left pane cta text
     */
    public String getLeftPaneCtaText() {
        return leftPaneCtaText;
    }

    /**
     * Gets the left pane cta link.
     *
     * @return the left pane cta link
     */
    public String getLeftPaneCtaLink() {
        return LinkUtils.appendLinkExtension(leftPaneCtaLink, resourceResolver);
    }

    /**
     * Gets the left pane cta aria label.
     *
     * @return the left pane cta aria label
     */
    public String getLeftPaneCtaAriaLabel() {
        return leftPaneCtaAriaLabel;
    }

    /**
     * Gets the left pane cta target.
     *
     * @return the left pane cta target
     */
    public String getLeftPaneCtaTarget() {
        return leftPaneCtaTarget;
    }
}
