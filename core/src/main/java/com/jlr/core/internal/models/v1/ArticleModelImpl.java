package com.jlr.core.internal.models.v1;

import java.util.ArrayList;
import java.util.List;
import javax.inject.Inject;
import javax.jcr.Node;
import javax.jcr.RepositoryException;

import com.day.cq.wcm.api.Page;
import com.jlr.core.utils.ComponentPositionUtils;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.Optional;
import org.apache.sling.models.annotations.Via;
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
@Model(adaptables = {Resource.class, SlingHttpServletRequest.class}, adapters = {ArticleModel.class}, resourceType = ArticleModelImpl.RESOURCE_TYPE)
public class ArticleModelImpl extends GlobalModelImpl implements ArticleModel {

    /** The Constant RESOURCE_TYPE. */
    public static final String RESOURCE_TYPE = "jlr/components/article/v1/article";

    /** The resource resolver. */
    @Inject
    private ResourceResolver resourceResolver;

    /** The current page. */
    @Inject
    private Page currentPage;

    @Inject
    private Node currentNode;

    /** The image position. */
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    @Via("resource")
    private String imagePosition;

    /** The content type. */
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    @Via("resource")
    private String assetType;

    /** The video type. */
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    @Via("resource")
    private String videoType;

    /** The caption. */
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    @Via("resource")
    private String caption;

    /** The cta list. */
    @Inject
    @Optional
    @Via("resource")
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

    @Override
    public boolean getFirstPosition() throws RepositoryException {
        String pagecontainerPath = currentPage.getPath().concat("/jcr:content/root/container");
        return ComponentPositionUtils.getComponentPosition(pagecontainerPath, currentNode, resourceResolver);
    }
}
