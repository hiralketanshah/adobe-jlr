package com.jlr.core.internal.models.v1;

import javax.inject.Inject;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

import com.jlr.core.constants.CommonConstants;
import com.jlr.core.models.GlobalModel;
import com.jlr.core.utils.CtaUtils;
import com.jlr.core.utils.LinkUtils;

@Model(adaptables = Resource.class, adapters = { GlobalModel.class })
public class GlobalModelImpl implements GlobalModel {

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String id;

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String headerTitle;

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String headerCopy;

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String copy;

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String logoImage;

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String fileReference;

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String imageAlt;

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String imageLink;

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private boolean isDecorative;

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String text;

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String link;

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String linkType;

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String target;

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String ariaLabel;

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String videoId;

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String videoPath;

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String videoTitle;

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String icon;

    @Inject
    private ResourceResolver resourceResolver;

    @Override
    public String getId() {
        return id;
    }

    @Override
    public String getHeaderTitle() {
        return headerTitle;
    }

    @Override
    public String getHeaderCopy() {
        return headerCopy;
    }

    @Override
    public String getCopy() {
        return copy;
    }

    @Override
    public String getLogoImage() {
        return logoImage;
    }

    @Override
    public String getFileReference() {
        return fileReference;
    }

    @Override
    public String getImageAlt() {
        if (isDecorative) {
            return null;
        }
        return imageAlt;
    }

    @Override
    public String getImageLink() {
        if (isDecorative) {
            return null;
        }
        return LinkUtils.appendLinkExtension(imageLink, resourceResolver);
    }

    @Override
    public String getText() {
        return text;
    }

    @Override
    public String getLink() {
        return LinkUtils.appendLinkExtension(link, resourceResolver);
    }

    @Override
    public String getLinkType() {
        return linkType;
    }

    @Override
    public String getTarget() {
        return target;
    }

    @Override
    public String getAriaLabel() {
        if (null == ariaLabel) {
            if (null != headerCopy) {
                ariaLabel = CtaUtils.getAriaLabel(headerCopy, text);
            } else if (null != headerTitle) {
                ariaLabel = CtaUtils.getAriaLabel(headerTitle, text);
            }
        }
        return ariaLabel;
    }

    @Override
    public String getVideoId() {
        return (CommonConstants.YOUTUBE_EMBED_URL).concat(videoId);
    }

    @Override
    public String getVideoPath() {
        return videoPath;
    }

    @Override
    public String getVideoTitle() {
        return videoTitle;
    }

    @Override
    public String getIcon() {
        return CtaUtils.getIcon(icon, linkType);
    }
}
