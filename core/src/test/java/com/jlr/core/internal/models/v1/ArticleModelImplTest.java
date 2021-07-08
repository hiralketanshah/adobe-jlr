package com.jlr.core.internal.models.v1;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.List;

import com.day.cq.wcm.api.Page;
import org.apache.sling.api.resource.Resource;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;

import com.jlr.core.models.ArticleModel;
import com.jlr.core.pojos.CTAPojo;

import io.wcm.testing.mock.aem.junit5.AemContext;
import io.wcm.testing.mock.aem.junit5.AemContextExtension;
import org.mockito.Mock;

import javax.jcr.Node;

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
    void testProperties() {
        assertEquals("above", articleModel.getImagePosition());
        assertEquals("image", articleModel.getAssetType());
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
