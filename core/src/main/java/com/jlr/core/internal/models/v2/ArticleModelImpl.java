package com.jlr.core.internal.models.v2;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

import com.jlr.core.models.ArticleModel;

/**
 * The Class ArticleModelImpl.
 */
@Model(adaptables = Resource.class, adapters = { ArticleModel.class }, resourceType = ArticleModelImpl.RESOURCE_TYPE)
public class ArticleModelImpl extends com.jlr.core.internal.models.v1.ArticleModelImpl implements ArticleModel {

    /** The Constant RESOURCE_TYPE. */
    public static final String RESOURCE_TYPE = "jlr/components/article/v2/article";

    /** The hide image. */
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private boolean hideImage;

    /**
     * Gets the hide image.
     *
     * @return the hide image
     */
    @Override
    public boolean getHideImage() {
        return hideImage;
    }
}
