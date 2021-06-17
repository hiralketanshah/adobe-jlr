package com.jlr.core.internal.models.v1;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.List;

import org.apache.sling.api.resource.Resource;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;

import com.jlr.core.models.GalleryCategoryModel;
import com.jlr.core.pojos.GalleryCategory;

import io.wcm.testing.mock.aem.junit5.AemContext;
import io.wcm.testing.mock.aem.junit5.AemContextExtension;

/**
 * The Class GalleryCategoryModelImplTest.
 *
 * @author Adobe
 */
@ExtendWith(AemContextExtension.class)
class GalleryCategoryModelImplTest extends GlobalModelImplTest {

    private GalleryCategoryModel galleryCategoryModel;

    /**
     * Sets the up.
     *
     * @param context
     *            the new up
     * @throws Exception
     *             the exception
     */
    @BeforeEach
    void setUp(AemContext context) {
        context.load().json("/content/jlr/gallery/gallerycategory.json", "/content/jlr/gallerycategory.html");
        Resource resource = context.resourceResolver().getResource("/content/jlr/gallerycategory.html");
        galleryCategoryModel = resource.adaptTo(GalleryCategoryModelImpl.class);
    }

    @Override
    @Test
    void testGeneralProperties() {
        assertEquals("/content/landrover/global/exitpage", galleryCategoryModel.getExitPageLink());
        assertEquals(3, galleryCategoryModel.getCategoriesCount());
    }

    @Test
    void testGalleryCategory() {
        List<GalleryCategory> listOfGalleryCategories = galleryCategoryModel.getCategoryList();
        assertEquals(3, listOfGalleryCategories.size());
    }
}
