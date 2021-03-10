package com.jlr.core.internal.models.v2;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.apache.sling.api.resource.Resource;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;

import io.wcm.testing.mock.aem.junit5.AemContext;
import io.wcm.testing.mock.aem.junit5.AemContextExtension;

/**
 * Simple JUnit test verifying the ArticleModelImpl.
 */
@ExtendWith(AemContextExtension.class)
class ArticleModelImplTest {

    /** The article model. */
    private ArticleModelImpl articleModel;

    /**
     * Sets the up.
     *
     * @param context
     *            the new up
     */
    @BeforeEach
    public void setup(AemContext context) {
        context.load().json("/content/jlr/article/article.json", "/content/jlr/article.html");
        Resource resource = context.resourceResolver().getResource("/content/jlr/article.html");
        articleModel = resource.adaptTo(ArticleModelImpl.class);
    }

    /**
     * Test hide image.
     */
    @Test
    void testHideImage() {
        assertEquals(false, articleModel.getHideImage());
    }
}
