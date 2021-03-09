package com.jlr.core.internal.models.v1;

import javax.inject.Inject;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

import com.jlr.core.models.FullFrameCarouselModel;
import com.jlr.core.models.GlobalModel;
import com.jlr.core.utils.LinkUtils;

/**
 * The Class FullFrameCarouselImpl.
 */
@Model(adaptables = Resource.class, adapters = { GlobalModel.class, FullFrameCarouselModel.class }, resourceType = FullFrameCarouselImpl.RESOURCE_TYPE)
public class FullFrameCarouselImpl implements GlobalModel, FullFrameCarouselModel {

    /** The Constant RESOURCE_TYPE. */
    public static final String RESOURCE_TYPE = "jlr/components/fullframecarousel/v1/fullframecarousel";

    /** The id. */
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String id;

    /** The header title. */
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String headerTitle;

    /** The copy. */
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String copy;

    /** The background image. */
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String backgroundImage;

    /** The text. */
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String text;

    /** The link. */
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String link;

    /** The link type. */
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String linkType;
    
    /** The target. */
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String target;

    /** The resource resolver. */
    @Inject
    private ResourceResolver resourceResolver;

    /**
     * Gets the id.
     *
     * @return the id
     */
    @Override
    public String getId() {
        return id;
    }

    /**
     * Gets the header title.
     *
     * @return the header title
     */
    @Override
    public String getHeaderTitle() {
        return headerTitle;
    }

    /**
     * Gets the copy.
     *
     * @return the copy
     */
    @Override
    public String getCopy() {
        return copy;
    }

    /**
     * Gets the background image.
     *
     * @return the background image
     */
    @Override
    public String getBackgroundImage() {
        return backgroundImage;
    }

    /**
     * Gets the text.
     *
     * @return the text
     */
    @Override
    public String getText() {
        return text;
    }

    /**
     * Gets the link.
     *
     * @return the link
     */
    @Override
    public String getLink() {
        return LinkUtils.appendLinkExtension(link, resourceResolver);
    }
    
    /**
     * Gets the link type.
     *
     * @return the link type
     */
    @Override
    public String getLinkType() {
        return linkType;
    }

    /**
     * Gets the target.
     *
     * @return the target
     */
    @Override
    public String getTarget() {
        return target;
    }
}