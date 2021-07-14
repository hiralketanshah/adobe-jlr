package com.jlr.core.internal.models.v1;

import javax.inject.Inject;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;

import com.jlr.core.constants.CommonConstants;
import com.jlr.core.models.PrimaryNavLeftTextCTAModel;
import com.jlr.core.utils.LinkUtils;

/**
 * The Class PrimaryNavLeftTextCTAModel.
 *
 * @author Adobe
 */
@Model(adaptables = Resource.class, adapters = {
		PrimaryNavLeftTextCTAModel.class }, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class PrimaryNavLeftTextCTAModelImpl implements PrimaryNavLeftTextCTAModel {

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
    @Override
    public String getLeftPaneCopyCtaText() {
        return leftPaneCopyCtaText;
    }

    /**
     * Gets the left pane copy cta link.
     *
     * @return the left pane copy cta link
     */
    @Override
    public String getLeftPaneCopyCtaLink() {
        return LinkUtils.appendLinkExtension(leftPaneCopyCtaLink, resourceResolver);
    }

    /**
     * Gets the left pane copy cta icon.
     *
     * @return the left pane copy cta icon
     */
    @Override
    public String getLeftPaneCopyCtaIcon() {
    	if (leftPaneCopyCtaLinkType.equals("primary") && leftPaneCopyCtaIcon.equals("None")) {
            return CommonConstants.DEFAULT_PRIMARY_ICON;
        }
        return leftPaneCopyCtaIcon;
    }

    /**
     * Gets the left pane copy cta link type.
     *
     * @return the left pane copy cta link type
     */
    @Override
    public String getLeftPaneCopyCtaLinkType() {
        return leftPaneCopyCtaLinkType;
    }

    /**
     * Gets the left pane copy cta aria label.
     *
     * @return the left pane copy cta aria label
     */
    @Override
    public String getLeftPaneCopyCtaAriaLabel() {
        return leftPaneCopyCtaAriaLabel;
    }

    /**
     * Gets the left pane copy cta target.
     *
     * @return the left pane copy cta target
     */
    @Override
    public String getLeftPaneCopyCtaTarget() {
        return leftPaneCopyCtaTarget;
    }

}
