package com.jlr.core.models;

import javax.inject.Inject;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import com.jlr.core.utils.LinkUtils;

/**
 * The Class PrimaryNavLeftTextCTAModel.
 *
 * @author Adobe
 */
@Model(adaptables = Resource.class, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class PrimaryNavLeftTextCTAModel {

    /** The resource resolver. */
    @Inject
    private ResourceResolver resourceResolver;

    /** The left pane copy cta text. */
    @Inject
    private String leftPaneCopyCtaText;

    /** The left pane copy cta link. */
    @Inject
    private String leftPaneCopyCtaLink;

    /** The left pane copy cta icon. */
    @Inject
    private String leftPaneCopyCtaIcon;

    /** The left pane copy cta link type. */
    @Inject
    private String leftPaneCopyCtaLinkType;

    /** The left pane copy cta aria label. */
    @Inject
    private String leftPaneCopyCtaAriaLabel;

    /** The left pane copy cta target. */
    @Inject
    private String leftPaneCopyCtaTarget;

    /**
     * Gets the left pane copy cta text.
     *
     * @return the left pane copy cta text
     */
    public String getLeftPaneCopyCtaText() {
        return leftPaneCopyCtaText;
    }

    /**
     * Gets the left pane copy cta link.
     *
     * @return the left pane copy cta link
     */
    public String getLeftPaneCopyCtaLink() {
        return LinkUtils.appendLinkExtension(leftPaneCopyCtaLink, resourceResolver);
    }

    /**
     * Gets the left pane copy cta icon.
     *
     * @return the left pane copy cta icon
     */
    public String getLeftPaneCopyCtaIcon() {
        return leftPaneCopyCtaIcon;
    }

    /**
     * Gets the left pane copy cta link type.
     *
     * @return the left pane copy cta link type
     */
    public String getLeftPaneCopyCtaLinkType() {
        return leftPaneCopyCtaLinkType;
    }

    /**
     * Gets the left pane copy cta aria label.
     *
     * @return the left pane copy cta aria label
     */
    public String getLeftPaneCopyCtaAriaLabel() {
        return leftPaneCopyCtaAriaLabel;
    }

    /**
     * Gets the left pane copy cta target.
     *
     * @return the left pane copy cta target
     */
    public String getLeftPaneCopyCtaTarget() {
        return leftPaneCopyCtaTarget;
    }

}
