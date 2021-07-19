package com.jlr.core.internal.models.v1;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

import java.util.List;

import com.day.cq.wcm.api.Page;
import com.jlr.core.utils.ComponentPositionUtils;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;

import com.jlr.core.pojos.GalleryCategory;

import io.wcm.testing.mock.aem.junit5.AemContext;
import io.wcm.testing.mock.aem.junit5.AemContextExtension;
import org.mockito.Mock;
import org.mockito.MockedStatic;
import org.mockito.Mockito;

import javax.jcr.Node;
import javax.jcr.RepositoryException;

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
    void testGeneralProperties() throws RepositoryException {
        assertEquals("/content/landrover/global/exitpage", galleryCategoryModel.getExitPageLink());
        assertEquals(3, galleryCategoryModel.getCategoriesCount());
        when(currentPage.getPath()).thenReturn("/content/jlr/page");
        try (MockedStatic<ComponentPositionUtils> mock = Mockito.mockStatic(ComponentPositionUtils.class)) {
            mock.when(() -> {
                ComponentPositionUtils.getComponentPosition(Mockito.any(String.class), Mockito.any(Node.class),Mockito.any(ResourceResolver.class));
            }).thenReturn(true);
            assertEquals(true,galleryCategoryModel.getFirstPosition());
        }
    }

    @Test
    void testGalleryCategory() {
        List<GalleryCategory> listOfGalleryCategories = galleryCategoryModel.getCategoryList();
        assertEquals(3, listOfGalleryCategories.size());
    }
}
