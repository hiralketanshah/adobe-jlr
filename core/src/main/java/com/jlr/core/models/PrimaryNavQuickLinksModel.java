package com.jlr.core.models;

import javax.inject.Inject;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import com.jlr.core.utils.LinkUtils;

/**
 * The Class PrimaryNavQuickLinksModel.
 *
 * @author Adobe
 */
@Model(adaptables = Resource.class, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class PrimaryNavQuickLinksModel {

    /** The resource resolver. */
    @Inject
    private ResourceResolver resourceResolver;

    /** The quick links cta text. */
    @Inject
    private String quickLinksCtaText;

    /** The quick links copy cta link. */
    @Inject
    private String quickLinksCopyCtaLink;

    /** The quick links copy cta icon. */
    @Inject
    private String quickLinksCopyCtaIcon;

    /** The quick links copy cta aria label. */
    @Inject
    private String quickLinksCopyCtaAriaLabel;

    /** The quick links copy cta target. */
    @Inject
    private String quickLinksCopyCtaTarget;

    /**
     * Gets the quick links cta text.
     *
     * @return the quick links cta text
     */
    public String getQuickLinksCtaText() {
        return quickLinksCtaText;
    }

    /**
     * Gets the quick links copy cta link.
     *
     * @return the quick links copy cta link
     */
    public String getQuickLinksCopyCtaLink() {
        return LinkUtils.appendLinkExtension(quickLinksCopyCtaLink, resourceResolver);
    }

    /**
     * Gets the quick links copy cta icon.
     *
     * @return the quick links copy cta icon
     */
    public String getQuickLinksCopyCtaIcon() {
        return quickLinksCopyCtaIcon;
    }

    /**
     * Gets the quick links copy cta aria label.
     *
     * @return the quick links copy cta aria label
     */
    public String getQuickLinksCopyCtaAriaLabel() {
        return quickLinksCopyCtaAriaLabel;
    }

    /**
     * Gets the quick links copy cta target.
     *
     * @return the quick links copy cta target
     */
    public String getQuickLinksCopyCtaTarget() {
        return quickLinksCopyCtaTarget;
    }

}
