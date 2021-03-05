package com.jlr.core.internal.models.v1;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import javax.annotation.PostConstruct;
import javax.inject.Inject;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.api.resource.ValueMap;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.Optional;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

import com.jlr.core.constants.CommonConstants;
import com.jlr.core.models.ArticleModel;
import com.jlr.core.models.GlobalModel;
import com.jlr.core.pojos.CTAPojo;
import com.jlr.core.utils.LinkUtils;

/**
 * The Class ArticleModelImpl.
 */
@Model(adaptables = Resource.class, adapters = { GlobalModel.class,
        ArticleModel.class }, resourceType = ArticleModelImpl.RESOURCE_TYPE)
public class ArticleModelImpl implements ArticleModel, GlobalModel {

    /** The Constant RESOURCE_TYPE. */
    public static final String RESOURCE_TYPE = "jlr/components/article/v1/article";

    /** The id. */
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String id;

    /** The title. */
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String title;

    /** The subtitle. */
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String subtitle;

    /** The copy. */
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String copy;

    /** The file reference. */
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String fileReference;

    /** The image alt. */
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String imageAlt;

    /** The image link. */
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String imageLink;

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
        if (ctaList != null && ctaList.hasChildren()) {
            Iterator<Resource> childResources = ctaList.listChildren();
            while (childResources.hasNext()) {
                Resource child = childResources.next();
                ValueMap properties = child.adaptTo(ValueMap.class);
                list.add(
                        new CTAPojo(properties.get(CommonConstants.PN_CTA_TEXT, String.class),
                                LinkUtils.appendLinkExtension(properties.get(CommonConstants.PN_CTA_LINK, String.class),
                                        resourceResolver),
                                properties.get(CommonConstants.PN_CTA_TARGET, String.class)));
            }
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
     * Gets id.
     *
     * @return the id
     */
    @Override
    public String getId() {
        return id;
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

    /**
     * Gets copy.
     *
     * @return the copy
     */
    @Override
    public String getCopy() {
        return copy;
    }

    /**
     * Gets file reference.
     *
     * @return the file reference
     */
    @Override
    public String getFileReference() {
        return fileReference;
    }

    /**
     * Gets image alt.
     *
     * @return the image alt
     */
    @Override
    public String getImageAlt() {
        return imageAlt;
    }

    /**
     * Gets image link.
     *
     * @return the resolved image link
     */
    @Override
    public String getImageLink() {
        return LinkUtils.appendLinkExtension(imageLink, resourceResolver);
    }
}
