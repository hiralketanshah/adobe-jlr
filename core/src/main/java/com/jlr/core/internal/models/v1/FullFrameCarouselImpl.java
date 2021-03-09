package com.jlr.core.internal.models.v1;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

import com.jlr.core.models.FullFrameCarouselModel;

/**
 * The Class FullFrameCarouselImpl.
 */
@Model(adaptables = Resource.class, adapters = { FullFrameCarouselModel.class }, resourceType = FullFrameCarouselImpl.RESOURCE_TYPE)
public class FullFrameCarouselImpl extends GlobalModelImpl implements FullFrameCarouselModel {

    /** The Constant RESOURCE_TYPE. */
    public static final String RESOURCE_TYPE = "jlr/components/fullframecarousel/v1/fullframecarousel";

    /** The background image. */
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String backgroundImage;

    /**
     * Gets the background image.
     *
     * @return the background image
     */
    @Override
    public String getBackgroundImage() {
        return backgroundImage;
    }

}