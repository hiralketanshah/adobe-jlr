package com.jlr.core.internal.models.v1;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.List;

import org.apache.sling.api.resource.Resource;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;

import com.jlr.core.pojos.CTAPojo;

import io.wcm.testing.mock.aem.junit5.AemContext;
import io.wcm.testing.mock.aem.junit5.AemContextExtension;

/**
 * The Class SnippetModelImplTest.
 *
 * @author Adobe
 */
@ExtendWith(AemContextExtension.class)
class SnippetModelImplTest extends GlobalModelImplTest {

    /** The snippet model. */
    SnippetModelImpl snippetModel;

    /** The resource. */
    private Resource resource;

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
        context.load().json("/content/jlr/snippet/snippet.json", "/content/jlr/snippet.html");
        resource = context.resourceResolver().getResource("/content/jlr/snippet.html");
        snippetModel = resource.adaptTo(SnippetModelImpl.class);
    }

    /**
     * Test get links.
     */
    @Test
    void testGetLinks() {
        List<CTAPojo> ctaList = snippetModel.getCtaList();
        assertEquals(1, ctaList.size());
        ctaList.forEach(item -> {
            assertEquals("Find out more", item.getText());
            assertEquals("/content/jlr/au", item.getLink());
            assertEquals("_blank", item.getTarget());
            assertEquals("primary", item.getLinkType());
        });

    }

    /**
     * Test get enable pricing.
     */
    @Test
    void testGetEnablePricing() {
        assertEquals("true", snippetModel.getEnablePricing());
        assertEquals("/content/jlr/au",snippetModel.getMarketRegionPath());
    }
}
