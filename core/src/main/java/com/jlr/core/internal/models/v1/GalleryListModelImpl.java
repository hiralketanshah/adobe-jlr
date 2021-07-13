package com.jlr.core.internal.models.v1;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import javax.annotation.PostConstruct;
import javax.inject.Inject;
import javax.jcr.Node;
import javax.jcr.RepositoryException;

import com.day.cq.wcm.api.Page;
import com.jlr.core.utils.ComponentPositionUtils;
import org.apache.commons.lang.StringUtils;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.api.resource.ValueMap;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.Optional;
import org.apache.sling.models.annotations.Via;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

import com.jlr.core.constants.CommonConstants;
import com.jlr.core.models.GalleryListModel;
import com.jlr.core.pojos.GalleryItem;
import com.jlr.core.utils.LinkUtils;

/**
 * The Class GalleryListModelImpl.
 */
@Model(adaptables = { Resource.class, SlingHttpServletRequest.class }, adapters = {
        GalleryListModel.class }, resourceType = GalleryListModelImpl.RESOURCE_TYPE)
public class GalleryListModelImpl extends GlobalModelImpl implements GalleryListModel {

    /**
     * The Constant RESOURCE_TYPE.
     */
    public static final String RESOURCE_TYPE = "jlr/components/gallery/v1/gallerylist";

    /** The request. */
    @Inject
    private SlingHttpServletRequest request;

     /** The resource resolver. */
    @Inject
    private ResourceResolver resourceResolver;

    /** The current page. */
    @Inject
    private Page currentPage;

    @Inject
    private Node currentNode;


    /** The previousPageLink. */
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String previousPageLink;

    /** The exitPageLink. */
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String exitPageLink;

    /** The main header copy. */
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String mainHeaderCopy;

    /** The gallery list. */
    @Inject
    @Optional
    @Via("resource")
    private Resource galleryList;

    /** The list of gallery items. */
    List<GalleryItem> listOfGalleryItems = new ArrayList<>();

    /**
     * Gets the previous page link.
     *
     * @return the previous page link
     */
    @Override
    public String getPreviousPageLink() {
        return LinkUtils.appendLinkExtension(previousPageLink, resourceResolver);
    }

    int startSlide;

    @PostConstruct
    public void init() {
        String selector = request.getRequestPathInfo().getSelectorString();
        if (StringUtils.isNotEmpty(selector) && !selector.startsWith("-")) {
            try {
                startSlide = Integer.parseInt(selector) - 1;
            } catch (NumberFormatException nfex) {
                startSlide = -1;
            }
        }
    }

    /**
     * Gets the exit page link.
     *
     * @return the exit page link
     */
    @Override
    public String getExitPageLink() {
    return LinkUtils.appendLinkExtension(exitPageLink, resourceResolver);
    }

    /**
     * Gets the main header copy.
     *
     * @return the main header copy
     */
    @Override
    public String getMainHeaderCopy() {
        return mainHeaderCopy;
    }

    /**
     * Gets the gallery list.
     *
     * @return the gallery list
     */
    @Override
    public List<GalleryItem> getGalleryList() {
        if (null != galleryList && galleryList.hasChildren()) {
            Iterator<Resource> childResources = galleryList.listChildren();
            while (childResources.hasNext()) {
                Resource child = childResources.next();
                ValueMap properties = child.adaptTo(ValueMap.class);
                if (null != properties) {
                    listOfGalleryItems.add(new GalleryItem(properties.get(CommonConstants.PN_TITLE, String.class),
                            properties.get(CommonConstants.PN_DESCRIPTION, String.class),
                            properties.get(CommonConstants.PN_ASSET_TYPE, String.class),
                            properties.get(CommonConstants.PN_FILE_REFERENCE, String.class),
                            properties.get(CommonConstants.PN_IMAGE_ALT, String.class),
                            properties.get(CommonConstants.PN_IS_DECORATIVE, Boolean.class),
                            properties.get(CommonConstants.PN_VIDEO_ID, String.class),
                            properties.get(CommonConstants.PN_POSTER_IMAGE, String.class),
                            properties.get(CommonConstants.PN_THUMBNAIL, String.class),
                            properties.get(CommonConstants.PN_CTA_TEXT, String.class),
                            LinkUtils.appendLinkExtension(properties.get(CommonConstants.PN_CTA_LINK, String.class),
                                    resourceResolver),
                            properties.get(CommonConstants.PN_ICON, String.class),
                            properties.get(CommonConstants.PN_CTA_ARIALABEL, String.class),
                            properties.get(CommonConstants.PN_CTA_TARGET, String.class)));
                }
            }
        }
        return listOfGalleryItems;
    }

    /**
     * Gets the number of slide to start.
     *
     * @return the slide number
     */
    public int getStartSlide() {
        return startSlide;
    }

    @Override
    public boolean getFirstPosition() throws RepositoryException {
        String pageContainerPath= currentPage.getPath().concat("/jcr:content/root/container");
        return ComponentPositionUtils.getComponentPosition(pageContainerPath,currentNode, resourceResolver);
    }
}
