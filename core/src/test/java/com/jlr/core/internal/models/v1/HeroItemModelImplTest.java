package com.jlr.core.internal.models.v1;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

import java.util.List;

import com.jlr.core.pojos.FooterPojo;
import com.jlr.core.utils.ComponentPositionUtils;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.*;

import com.day.cq.commons.inherit.InheritanceValueMap;
import com.day.cq.wcm.api.Page;
import com.jlr.core.pojos.CTAPojo;
import com.jlr.core.services.TcoService;

import io.wcm.testing.mock.aem.junit5.AemContext;
import io.wcm.testing.mock.aem.junit5.AemContextExtension;

import javax.jcr.Node;
import javax.jcr.RepositoryException;

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
    void testProperties() throws RepositoryException {
        assertEquals("caveatText",heroItemModel.getCaveat());
        when(currentPage.getPath()).thenReturn("/content/jlr/page");
        try (MockedStatic<ComponentPositionUtils> mock = Mockito.mockStatic(ComponentPositionUtils.class)) {
            mock.when(() -> {
                ComponentPositionUtils.getComponentPosition(Mockito.any(String.class), Mockito.any(Node.class),Mockito.any(ResourceResolver.class));
            }).thenReturn(true);
            assertEquals(true,heroItemModel.getFirstPosition());
        }
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
