package com.jlr.core.internal.models.v1;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import javax.inject.Inject;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.api.resource.ValueMap;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.Optional;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

import com.jlr.core.constants.CommonConstants;
import com.jlr.core.models.GalleryListModel;
import com.jlr.core.pojos.GalleryItem;
import com.jlr.core.utils.LinkUtils;

/**
 * The Class GalleryListModelImpl.
 */
@Model(adaptables = Resource.class, adapters = {
        GalleryListModel.class }, resourceType = GalleryListModelImpl.RESOURCE_TYPE)
public class GalleryListModelImpl extends GlobalModelImpl implements GalleryListModel {

    /**
     * The Constant RESOURCE_TYPE.
     */
    public static final String RESOURCE_TYPE = "jlr/components/gallery/v1/gallerylist";

    /** The resource resolver. */
    @Inject
    private ResourceResolver resourceResolver;

    /** The previousPageLink. */
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String previousPageLink;

    /** The exitPageLink. */
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String exitPageLink;

    @Inject
    @Optional
    private Resource galleryList;

    List<GalleryItem> listOfGalleryItems = new ArrayList<>();

    @Override
    public String getPreviousPageLink() {
        return LinkUtils.appendLinkExtension(previousPageLink, resourceResolver);
    }

    @Override
    public String getExitPageLink() {
        return LinkUtils.appendLinkExtension(exitPageLink, resourceResolver);
    }

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
                            properties.get(CommonConstants.PN_CTA_TEXT, String.class),
                            LinkUtils.appendLinkExtension(properties.get(CommonConstants.PN_CTA_LINK, String.class),
                                    resourceResolver),
                            properties.get(CommonConstants.PN_ICON, String.class),
                            properties.get(CommonConstants.PN_CTA_LINK_TYPE, String.class),
                            properties.get(CommonConstants.PN_CTA_ARIALABEL, String.class),
                            properties.get(CommonConstants.PN_CTA_TARGET, String.class)));
                }

            }
        }
        return listOfGalleryItems;
    }
}
