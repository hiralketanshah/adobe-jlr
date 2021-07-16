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

import com.jlr.core.models.ArticleModel;
import com.jlr.core.pojos.CTAPojo;

import io.wcm.testing.mock.aem.junit5.AemContext;
import io.wcm.testing.mock.aem.junit5.AemContextExtension;
import org.mockito.Mock;
import org.mockito.MockedStatic;
import org.mockito.Mockito;

import javax.jcr.Node;
import javax.jcr.RepositoryException;

/**
 * Simple JUnit test verifying the ArticleModelImpl.
 *
 * @author Adobe
 */
@ExtendWith(AemContextExtension.class)
class ArticleModelImplTest extends GlobalModelImplTest {

    /** The article model. */
    private ArticleModel articleModel;

    @Mock
    private Page currentPage;

    @Mock
    private Node currentNode;

    /**
     * Sets the up.
     *
     * @param context
     *            the new up
     */
    @BeforeEach
    public void setup(AemContext context){
        context.registerService(Page.class, currentPage);
        context.registerService(Node.class, currentNode);
        context.load().json("/content/jlr/article/article.json", "/content/jlr/article.html");
        Resource resource = context.resourceResolver().getResource("/content/jlr/article.html");
        context.currentResource(resource);
        articleModel = context.request().adaptTo(ArticleModelImpl.class);
    }

    /**
     * Test properties.
     */
    @Test
    void testProperties() throws RepositoryException {
        assertEquals("above", articleModel.getImagePosition());
        assertEquals("image", articleModel.getAssetType());
        when(currentPage.getPath()).thenReturn("/content/jlr/page");
        try (MockedStatic<ComponentPositionUtils> mock = Mockito.mockStatic(ComponentPositionUtils.class)) {
            mock.when(() -> {
                ComponentPositionUtils.getComponentPosition(Mockito.any(String.class), Mockito.any(Node.class),Mockito.any(ResourceResolver.class));
            }).thenReturn(true);
            assertEquals(true,articleModel.getFirstPosition());
        }
    }

    /**
     * Test cta properties.
     */
    @Override
    @Test
    void testCtaProperties() {
        List<CTAPojo> list = articleModel.getCtaList();
        assertEquals(1, list.size());
        list.forEach(item -> {
            assertEquals("test_cta_text", item.getText());
            assertEquals("/content/jlr/au", item.getLink());
            assertEquals("_self", item.getTarget());
            assertEquals("primary", item.getLinkType());
        });
    }
}
