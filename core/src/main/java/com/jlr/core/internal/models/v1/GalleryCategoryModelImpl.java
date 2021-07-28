package com.jlr.core.internal.models.v1;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import javax.annotation.PostConstruct;
import javax.inject.Inject;
import javax.jcr.Node;
import javax.jcr.RepositoryException;

import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.api.resource.ValueMap;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.Optional;
import org.apache.sling.models.annotations.Via;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

import com.day.cq.commons.jcr.JcrConstants;
import com.day.cq.wcm.api.Page;
import com.google.common.collect.Iterators;
import com.jlr.core.constants.CommonConstants;
import com.jlr.core.models.GalleryCategoryModel;
import com.jlr.core.pojos.GalleryCategory;
import com.jlr.core.utils.ComponentPositionUtils;
import com.jlr.core.utils.LinkUtils;

/**
 * The Class GalleryCategoryModelImpl.
 */
@Model(adaptables = { Resource.class, SlingHttpServletRequest.class }, adapters = {
        GalleryCategoryModel.class }, resourceType = GalleryCategoryModelImpl.RESOURCE_TYPE)
public class GalleryCategoryModelImpl extends GlobalModelImpl implements GalleryCategoryModel {

    /**
     * The Constant RESOURCE_TYPE.
     */
    public static final String RESOURCE_TYPE = "jlr/components/gallery/v1/gallerycategories";

    /** The resource resolver. */
    @Inject
    private ResourceResolver resourceResolver;

    /** The current page. */
    @Inject
    private Page currentPage;

    @Inject
    private Node currentNode;

    /** The exitPageLink. */
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    @Via("resource")
    private String exitPageLink;

    @Inject
    @Optional
    @Via("resource")
    private Resource categoryList;

    List<GalleryCategory> listOfCategoryItems = new ArrayList<>();

    /**
     * Inits the.
     */
    @PostConstruct
    public void init() {
        if (null != categoryList && categoryList.hasChildren()) {
            Iterator<Resource> childResources = categoryList.listChildren();
            while (childResources.hasNext()) {
                Resource child = childResources.next();
                ValueMap properties = child.adaptTo(ValueMap.class);
                String categoryPath = properties.get(CommonConstants.PN_CTA_LINK, String.class);
                int count = (null != categoryPath) ? getCount(categoryPath) : 0;
                if (null != properties) {
                    listOfCategoryItems
                            .add(new GalleryCategory(properties.get(CommonConstants.PN_BG_IMAGE, String.class),
                                    properties.get(CommonConstants.PN_IMAGE_ALT, String.class),
                                    properties.get(CommonConstants.PN_IS_DECORATIVE, Boolean.class),
                                    LinkUtils.appendLinkExtension(categoryPath, resourceResolver),
                                    properties.get(CommonConstants.PN_CATEGORY_NAME, String.class), count));
                }

            }
        }
    }

    @Override
    public String getExitPageLink() {
        return LinkUtils.appendLinkExtension(exitPageLink, resourceResolver);
    }

    @Override
    public int getCategoriesCount() {
        return listOfCategoryItems.size();
    }

    @Override
    public List<GalleryCategory> getCategoryList() {
        return listOfCategoryItems;
    }

    private int getCount(String galleryPath) {
        int count = 0;
        if (galleryPath.contains(".html")) {
            galleryPath = galleryPath.substring(0, galleryPath.indexOf("."));
        }
        Resource galleryResource = resourceResolver.getResource(galleryPath);
        if (null != galleryResource) {
            Resource galleryContainerComp = galleryResource
                    .getChild(JcrConstants.JCR_CONTENT + CommonConstants.FORWARD_SLASH + CommonConstants.JLR_ROOT
                            + CommonConstants.FORWARD_SLASH + CommonConstants.JLR_CONTAINER);
            Resource galleryComp = null;
            Iterator<Resource> childResources = galleryContainerComp.listChildren();
            while (childResources.hasNext()) {
                Resource child = childResources.next();
                if (child.getName().startsWith(CommonConstants.JLR_GALLERY_LIST)) {
                    galleryComp = child.getChild(CommonConstants.JLR_GALLERY_CHILD_LIST);
                    break;
                }
            }
            if (null != galleryComp) {
                Iterator<Resource> childGalleryResources = galleryComp.listChildren();
                count = Iterators.size(childGalleryResources);
            }
        }

        return count;
    }

    @Override
    public boolean getFirstPosition() throws RepositoryException {
        String pageContainerPath = currentPage.getPath().concat("/jcr:content/root/container");
        return ComponentPositionUtils.getComponentPosition(pageContainerPath, currentNode, resourceResolver);
    }
}
