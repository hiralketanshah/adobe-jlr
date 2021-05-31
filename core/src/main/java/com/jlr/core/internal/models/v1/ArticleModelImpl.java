package com.jlr.core.internal.models.v1;

import java.util.ArrayList;
import java.util.List;
import javax.inject.Inject;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.Optional;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;
import com.jlr.core.models.ArticleModel;
import com.jlr.core.pojos.CTAPojo;
import com.jlr.core.utils.CtaUtils;

/**
 * The Class ArticleModelImpl.
 *
 * @author Adobe
 */
@Model(adaptables = Resource.class, adapters = {ArticleModel.class}, resourceType = ArticleModelImpl.RESOURCE_TYPE)
public class ArticleModelImpl extends GlobalModelImpl implements ArticleModel {

    /** The Constant RESOURCE_TYPE. */
    public static final String RESOURCE_TYPE = "jlr/components/article/v1/article";

    /** The resource resolver. */
    @Inject
    private ResourceResolver resourceResolver;

    /** The image position. */
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String imagePosition;

    /** The content type. */
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String assetType;

    /** The video type. */
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String videoType;

    /** The caption. */
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String caption;

    /** The cta list. */
    @Inject
    @Optional
    private Resource ctaList;

    /** The list. */
    List<CTAPojo> list = new ArrayList<>();

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
    public String getAssetType() {
        return assetType;
    }

    /**
     * Gets the cta list.
     *
     * @return the cta list
     */
    @Override
    public List<CTAPojo> getCtaList() {
        if (null != ctaList && ctaList.hasChildren()) {
            list = CtaUtils.createCtaList(ctaList, super.getHeaderCopy(), resourceResolver);
        }
        return list;
    }

    /**
     * Gets the caption.
     *
     * @return the caption
     */
    @Override
    public String getCaption() {
        return caption;
    }
}
