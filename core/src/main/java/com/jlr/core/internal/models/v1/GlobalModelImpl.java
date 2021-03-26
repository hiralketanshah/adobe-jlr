package com.jlr.core.internal.models.v1;

import javax.inject.Inject;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

import com.jlr.core.constants.CommonConstants;
import com.jlr.core.models.GlobalModel;
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
    private String text;

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String link;

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String imageCaptionText;

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String imageCaptionLink;

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String linkType;

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String target;

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
        return imageAlt;
    }

    @Override
    public String getImageLink() {
        return LinkUtils.appendLinkExtension(imageLink, resourceResolver);
    }

    @Override
    public String getImageCaptionText() {
        return imageCaptionText;
    }

    @Override
    public String getImageCaptionLink() {
        return LinkUtils.appendLinkExtension(imageCaptionLink, resourceResolver);
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
        return icon;
    }
}
