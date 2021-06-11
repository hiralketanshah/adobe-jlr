package com.jlr.core.internal.models.v1;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.List;

import org.apache.sling.api.resource.Resource;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;

import com.jlr.core.models.GalleryListModel;
import com.jlr.core.pojos.GalleryItem;

import io.wcm.testing.mock.aem.junit5.AemContext;
import io.wcm.testing.mock.aem.junit5.AemContextExtension;

/**
 * The Class GalleryListModelImplTest.
 *
 * @author Adobe
 */
@ExtendWith(AemContextExtension.class)
class GalleryListModelImplTest extends GlobalModelImplTest {

    private GalleryListModel galleryListModelImpl;

    /**
     * Sets the up.
     *
     * @param context
     *            the new up
     * @throws Exception
     *             the exception
     */
    @BeforeEach
    void setUp(AemContext context) throws Exception {
        context.load().json("/content/jlr/gallery/gallerylist.json", "/content/jlr/gallerylist.html");
        Resource resource = context.resourceResolver().getResource("/content/jlr/gallerylist.html");
        galleryListModelImpl = resource.adaptTo(GalleryListModelImpl.class);
    }

    @Override
    @Test
    void testGeneralProperties() {
        assertEquals("/content/landrover/global/test", galleryListModelImpl.getPreviousPageLink());
        assertEquals("/content/landrover/global/exitpage", galleryListModelImpl.getExitPageLink());
        assertEquals("Main Header Copy", galleryListModelImpl.getMainHeaderCopy());
    }

    @Test
    void testGalleryList() {
        List<GalleryItem> listOfGalleryItems = galleryListModelImpl.getGalleryList();
        assertEquals(3, listOfGalleryItems.size());
    }
}
