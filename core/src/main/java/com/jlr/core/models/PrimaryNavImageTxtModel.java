package com.jlr.core.models;

import javax.inject.Inject;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import com.jlr.core.utils.LinkUtils;


/**
 * The Class PrimaryNavImageTxtModel.
 *
 * @author Adobe
 */
@Model(adaptables = Resource.class, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class PrimaryNavImageTxtModel {

    /** The resource resolver. */
    @Inject
    private ResourceResolver resourceResolver;

    /** The file reference image txt. */
    @Inject
    private String fileReferenceImageTxt;

    /** The right pane image text alt. */
    @Inject
    private String rightPaneImageTextAlt;

    /** The right pane header copy. */
    @Inject
    private String rightPaneHeaderCopy;

    /** The right pane body copy. */
    @Inject
    private String rightPaneBodyCopy;

    /** The right pane copy cta text. */
    @Inject
    private String rightPaneCopyCtaText;

    /** The right pane copy cta link. */
    @Inject
    private String rightPaneCopyCtaLink;

    /** The right pane copy cta icon. */
    @Inject
    private String rightPaneCopyCtaIcon;

    /** The right pane copy cta link type. */
    @Inject
    private String rightPaneCopyCtaLinkType;

    /** The right pane copy cta aria label. */
    @Inject
    private String rightPaneCopyCtaAriaLabel;

    /** The right pane copy cta target. */
    @Inject
    private String rightPaneCopyCtaTarget;

    /**
     * Gets the file reference image txt.
     *
     * @return the file reference image txt
     */
    public String getFileReferenceImageTxt() {
        return fileReferenceImageTxt;
    }

    /**
     * Gets the right pane image text alt.
     *
     * @return the right pane image text alt
     */
    public String getRightPaneImageTextAlt() {
        return rightPaneImageTextAlt;
    }

    /**
     * Gets the right pane header copy.
     *
     * @return the right pane header copy
     */
    public String getRightPaneHeaderCopy() {
        return rightPaneHeaderCopy;
    }

    /**
     * Gets the right pane body copy.
     *
     * @return the right pane body copy
     */
    public String getRightPaneBodyCopy() {
        return rightPaneBodyCopy;
    }

    /**
     * Gets the right pane copy cta text.
     *
     * @return the right pane copy cta text
     */
    public String getRightPaneCopyCtaText() {
        return rightPaneCopyCtaText;
    }

    /**
     * Gets the right pane copy cta link.
     *
     * @return the right pane copy cta link
     */
    public String getRightPaneCopyCtaLink() {
        return LinkUtils.appendLinkExtension(rightPaneCopyCtaLink, resourceResolver);
    }

    /**
     * Gets the right pane copy cta icon.
     *
     * @return the right pane copy cta icon
     */
    public String getRightPaneCopyCtaIcon() {
        return rightPaneCopyCtaIcon;
    }

    /**
     * Gets the right pane copy cta link type.
     *
     * @return the right pane copy cta link type
     */
    public String getRightPaneCopyCtaLinkType() {
        return rightPaneCopyCtaLinkType;
    }

    /**
     * Gets the right pane copy cta aria label.
     *
     * @return the right pane copy cta aria label
     */
    public String getRightPaneCopyCtaAriaLabel() {
        return rightPaneCopyCtaAriaLabel;
    }

    /**
     * Gets the right pane copy cta target.
     *
     * @return the right pane copy cta target
     */
    public String getRightPaneCopyCtaTarget() {
        return rightPaneCopyCtaTarget;
    }
}
