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

    /**
     * Gets the image position.
     *
     * @return the image position
     */
    @Override
    public String getImagePosition() {
        return imagePosition;
    }
}
