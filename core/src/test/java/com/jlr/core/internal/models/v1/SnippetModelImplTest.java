package com.jlr.core.internal.models.v1;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

import java.util.List;

import com.day.cq.wcm.api.Page;
import com.jlr.core.utils.AltTextUtils;
import com.jlr.core.utils.ComponentPositionUtils;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;

import com.jlr.core.pojos.CTAPojo;

import io.wcm.testing.mock.aem.junit5.AemContext;
import io.wcm.testing.mock.aem.junit5.AemContextExtension;
import org.mockito.Mock;
import org.mockito.MockedStatic;
import org.mockito.Mockito;

import javax.jcr.Node;
import javax.jcr.RepositoryException;

/**
 * The Class SnippetModelImplTest.
 *
 * @author Adobe
 */
@ExtendWith(AemContextExtension.class)
class SnippetModelImplTest extends GlobalModelImplTest {

    /** The snippet model. */
    SnippetModelImpl snippetModel;

    @Mock
    private Page currentPage;

    @Mock
    private Node currentNode;

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
        context.registerService(Page.class, currentPage);
        context.registerService(Node.class, currentNode);
        context.load().json("/content/jlr/snippet/snippet.json", "/content/jlr/snippet.html");
        resource = context.resourceResolver().getResource("/content/jlr/snippet.html");
        context.currentResource(resource);
        snippetModel = context.request().adaptTo(SnippetModelImpl.class);
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
    void testGetEnablePricing() throws RepositoryException {
        assertEquals("true", snippetModel.getEnablePricing());
        assertEquals("/content/jlr/au",snippetModel.getMarketRegionPath());
        when(currentPage.getPath()).thenReturn("/content/jlr/page");
        try (MockedStatic<ComponentPositionUtils> mock = Mockito.mockStatic(ComponentPositionUtils.class)) {
            mock.when(() -> {
                ComponentPositionUtils.getComponentPosition(Mockito.any(String.class), Mockito.any(Node.class),Mockito.any(ResourceResolver.class));
            }).thenReturn(true);
            assertEquals(true,snippetModel.getFirstPosition());
        }
    }
}
