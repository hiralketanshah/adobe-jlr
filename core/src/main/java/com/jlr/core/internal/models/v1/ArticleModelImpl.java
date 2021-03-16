package com.jlr.core.internal.models.v1;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

import com.jlr.core.models.ArticleModel;

/**
 * The Class ArticleModelImpl.
 */
@Model(adaptables = Resource.class, adapters = { ArticleModel.class }, resourceType = ArticleModelImpl.RESOURCE_TYPE)
public class ArticleModelImpl extends GlobalModelImpl implements ArticleModel {

    /** The Constant RESOURCE_TYPE. */
    public static final String RESOURCE_TYPE = "jlr/components/article/v1/article";

    /** The image position. */
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String imagePosition;

    /** The content type. */
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String assestType;

    /** The video type. */
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String videoType;

    /**
     * Gets the image position.
     *
     * @return the image position
     */
    @Override
    public String getImagePosition() {
        return imagePosition;
    }

    /**
     * Gets the content type.
     *
     * @return the content type
     */
    @Override
    public String getAssestType() {
        return assestType;
    }

    /**
     * Gets the video type.
     *
     * @return the video type
     */
    @Override
    public String getVideoType() {
        return videoType;
    }
}
