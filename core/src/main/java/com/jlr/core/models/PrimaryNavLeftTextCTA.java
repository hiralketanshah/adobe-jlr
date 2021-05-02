package com.jlr.core.models;

import javax.inject.Inject;
import org.apache.commons.lang3.StringUtils;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import com.jlr.core.constants.CommonConstants;
import com.jlr.core.utils.LinkUtils;

@Model(adaptables = Resource.class, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class PrimaryNavLeftTextCTA extends PrimaryNavigationModel {

    @Inject
    private ResourceResolver resourceResolver;

    @Inject
    private String leftPaneCopyCtaText;

    @Inject
    private String leftPaneCopyCtaLink;

    @Inject
    private String leftPaneCopyCtaIcon;

    @Inject
    private String leftPaneCopyCtaLinkType;

    @Inject
    private String leftPaneCopyCtaAriaLabel;

    @Inject
    private String leftPaneCopyCtaTarget;

    public String getLeftPaneCopyCtaText() {
        return leftPaneCopyCtaText;
    }

    public String getLeftPaneCopyCtaLink() {
        return LinkUtils.appendLinkExtension(leftPaneCopyCtaLink, resourceResolver);
    }

    public String getLeftPaneCopyCtaIcon() {
        return leftPaneCopyCtaIcon;
    }

    public String getLeftPaneCopyCtaLinkType() {
        return leftPaneCopyCtaLinkType;
    }

    public String getLeftPaneCopyCtaAriaLabel() {
        if (!StringUtils.isBlank(leftPaneCopyCtaAriaLabel) && !StringUtils.isBlank(super.getLeftPaneHeaderCopy())) {
            return super.getLeftPaneHeaderCopy().concat(CommonConstants.COLON).concat(leftPaneCopyCtaText);
        }
        return leftPaneCopyCtaAriaLabel;
    }

    public String getLeftPaneCopyCtaTarget() {
        return leftPaneCopyCtaTarget;
    }

}
