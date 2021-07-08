package com.jlr.core.internal.models.v1;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.List;

import com.jlr.core.pojos.FooterPojo;
import org.apache.sling.api.resource.Resource;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import com.day.cq.commons.inherit.InheritanceValueMap;
import com.day.cq.wcm.api.Page;
import com.jlr.core.pojos.CTAPojo;
import com.jlr.core.services.TcoService;

import io.wcm.testing.mock.aem.junit5.AemContext;
import io.wcm.testing.mock.aem.junit5.AemContextExtension;

import javax.jcr.Node;

/**
 * The Class HeroCarouselModelImplTest.
 *
 * @author Adobe
 */
@ExtendWith(AemContextExtension.class)
class HeroItemModelImplTest extends GlobalModelImplTest {

    /** The hero item model. */
    @InjectMocks
    private HeroItemModelImpl heroItemModel;

    @Mock
    private Page currentPage;

    @Mock
    private Node currentNode;

    @Mock
    private InheritanceValueMap pageProperties;

    @Mock
    private TcoService tcoService;

    /**
     * Sets the up.
     *
     * @param context
     *            the new up
     */
    @BeforeEach
    public void setup(AemContext context) {
        MockitoAnnotations.initMocks(this);
        context.registerService(Page.class, currentPage);
        context.registerService(Node.class, currentNode);
        context.load().json("/content/jlr/herocarousel/herocarousel.json", "/content/jlr/herocarousel.html");
        Resource resource = context.resourceResolver().getResource("/content/jlr/herocarousel.html");
        context.currentResource(resource);
        heroItemModel = context.request().adaptTo(HeroItemModelImpl.class);
    }

    @Test
    void testProperties(){
        assertEquals("caveatText",heroItemModel.getCaveat());
    }

    /**
     * Test properties.
     */
    @Test
    void testCtaProperties() {
        List<CTAPojo> list = heroItemModel.getCtaList();
        assertEquals(1, list.size());
        list.forEach(item -> {
            assertEquals("test_text", item.getText());
            assertEquals("http://www.google.com", item.getLink());
            assertEquals("_self", item.getTarget());
            assertEquals("primary", item.getLinkType());
        });

    }

    @Test
    void testFooterList() {
        List<FooterPojo> list = heroItemModel.getFooterList();
        assertEquals(1, list.size());
        list.forEach(item -> {
            assertEquals("Copy", item.getCopy());
            assertEquals("Header", item.getHeader());
        });
    }
}
