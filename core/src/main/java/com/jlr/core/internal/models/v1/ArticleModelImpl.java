package com.jlr.core.internal.models.v1;

import java.util.ArrayList;
import java.util.List;

import javax.annotation.PostConstruct;
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
 */
@Model(adaptables = Resource.class, adapters = { ArticleModel.class }, resourceType = ArticleModelImpl.RESOURCE_TYPE)
public class ArticleModelImpl extends GlobalModelImpl implements ArticleModel {

    /** The Constant RESOURCE_TYPE. */
    public static final String RESOURCE_TYPE = "jlr/components/article/v1/article";

    /** The title. */
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String title;

    /** The subtitle. */
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String subtitle;

    /** The cta list. */
    @Inject
    @Optional
    private Resource ctaList;

    /** The resource resolver. */
    @Inject
    private ResourceResolver resourceResolver;

    /** The list. */
    List<CTAPojo> list = new ArrayList<>();

    /**
     * Inits the Article Model.
     */
    @PostConstruct
    public void init() {
        if (null != ctaList && ctaList.hasChildren()) {
            list =  CtaUtils.createCtaList(ctaList, resourceResolver);
            }
    }

    /**
     * Gets the cta list.
     *
     * @return the cta list
     */
    @Override
    public List<CTAPojo> getCtaList() {
        return list;
    }

    /**
     * Gets title.
     *
     * @return the title
     */
    @Override
    public String getTitle() {
        return title;
    }

    /**
     * Gets subtitle.
     *
     * @return the subtitle
     */
    @Override
    public String getSubtitle() {
        return subtitle;
    }
}
