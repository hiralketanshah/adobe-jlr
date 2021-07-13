package com.jlr.core.internal.models.v1;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.List;

import com.day.cq.wcm.api.Page;
import org.apache.sling.api.resource.Resource;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;

import com.jlr.core.pojos.GalleryCategory;

import io.wcm.testing.mock.aem.junit5.AemContext;
import io.wcm.testing.mock.aem.junit5.AemContextExtension;
import org.mockito.Mock;

import javax.jcr.Node;

/**
 * The Class GalleryCategoryModelImplTest.
 *
 * @author Adobe
 */
@ExtendWith(AemContextExtension.class)
class GalleryCategoryModelImplTest extends GlobalModelImplTest {

    private GalleryCategoryModelImpl galleryCategoryModel;

    @Mock
    private Page currentPage;

    @Mock
    private Node currentNode;

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
        context.registerService(Page.class, currentPage);
        context.registerService(Node.class, currentNode);
        context.load().json("/content/jlr/gallery/gallerycategory.json", "/content/jlr/gallerycategory.html");
        Resource resource = context.resourceResolver().getResource("/content/jlr/gallerycategory.html");
        context.currentResource(resource);
        galleryCategoryModel = context.request().adaptTo(GalleryCategoryModelImpl.class);
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
