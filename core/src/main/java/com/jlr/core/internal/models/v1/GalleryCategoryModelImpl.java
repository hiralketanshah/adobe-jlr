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
import com.jlr.core.models.GalleryCategoryModel;
import com.jlr.core.pojos.GalleryCategory;
import com.jlr.core.utils.LinkUtils;

/**
 * The Class GalleryCategoryModelImpl.
 */
@Model(adaptables = Resource.class, adapters = {
        GalleryCategoryModel.class }, resourceType = GalleryCategoryModelImpl.RESOURCE_TYPE)
public class GalleryCategoryModelImpl extends GlobalModelImpl implements GalleryCategoryModel {

    /**
     * The Constant RESOURCE_TYPE.
     */
    public static final String RESOURCE_TYPE = "jlr/components/gallery/v1/gallerycategories";

    /** The resource resolver. */
    @Inject
    private ResourceResolver resourceResolver;

    /** The imageLink. */
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String imageLink;

    /** The headerCopy. */
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String headerCopy;

    /** The previousPageLink. */
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String previousPageLink;

    @Inject
    @Optional
    private Resource categoryList;

    List<GalleryCategory> listOfCategoryItems = new ArrayList<>();

    @Override
    public String getImageLink() {
        return imageLink;
    }

    @Override
    public String getHeaderCopy() {
        return headerCopy;
    }

    @Override
    public String getPreviousPageLink() {
        return LinkUtils.appendLinkExtension(previousPageLink, resourceResolver);
    }

    @Override
    public List<GalleryCategory> getCategoryList() {
        if (null != categoryList && categoryList.hasChildren()) {
            Iterator<Resource> childResources = categoryList.listChildren();
            while (childResources.hasNext()) {
                Resource child = childResources.next();
                ValueMap properties = child.adaptTo(ValueMap.class);
                if (null != properties) {
                    listOfCategoryItems.add(new GalleryCategory(
                            properties.get(CommonConstants.PN_PORTRAIT_LARGE_IMAGE, String.class),
                            properties.get(CommonConstants.PN_PORTRAIT_SMALL_IMAGE, String.class),
                            properties.get(CommonConstants.PN_LANDSCAPE_LARGE_IMAGE, String.class),
                            properties.get(CommonConstants.PN_IMAGE_ALT, String.class),
                            properties.get(CommonConstants.PN_IS_DECORATIVE, Boolean.class),
                            LinkUtils.appendLinkExtension(properties.get(CommonConstants.PN_CTA_LINK, String.class),
                                    resourceResolver),
                            properties.get(CommonConstants.PN_CATEGORY_NAME, String.class)));
                }

            }
        }
        return listOfCategoryItems;
    }
}
