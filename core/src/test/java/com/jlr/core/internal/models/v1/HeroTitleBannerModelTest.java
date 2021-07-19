package com.jlr.core.internal.models.v1;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

import java.util.List;

import com.day.cq.wcm.api.Page;
import com.jlr.core.pojos.FooterPojo;
import com.jlr.core.utils.ComponentPositionUtils;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;

import com.jlr.core.pojos.CTAPojo;

import io.wcm.testing.mock.aem.junit5.AemContext;
import io.wcm.testing.mock.aem.junit5.AemContextExtension;
import org.mockito.Mock;
import org.mockito.MockedStatic;
import org.mockito.Mockito;

import javax.jcr.Node;
import javax.jcr.RepositoryException;

/**
 * The Class HeroTitleBannerModelTest.
 *
 * @author Adobe
 */
@ExtendWith(AemContextExtension.class)
class HeroTitleBannerModelTest extends GlobalModelImplTest {

    /** The hero title banner model. */
    @InjectMocks
    private HeroTitleBannerImpl heroTitleBannerModel;

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
    public void setup(AemContext context) {
        context.registerService(Page.class, currentPage);
        context.registerService(Node.class, currentNode);
        context.load().json("/content/jlr/herotitlebanner/herotitlebanner.json", "/content/jlr/herotitlebanner.html");
        Resource resource = context.resourceResolver().getResource("/content/jlr/herotitlebanner.html");
        context.currentResource(resource);
        heroTitleBannerModel = context.request().adaptTo(HeroTitleBannerImpl.class);
    }

    @Test
    void testProperties() throws RepositoryException {
        assertEquals("caveatText",heroTitleBannerModel.getCaveat());
        when(currentPage.getPath()).thenReturn("/content/jlr/page");
        try (MockedStatic<ComponentPositionUtils> mock = Mockito.mockStatic(ComponentPositionUtils.class)) {
            mock.when(() -> {
                ComponentPositionUtils.getComponentPosition(Mockito.any(String.class), Mockito.any(Node.class),Mockito.any(ResourceResolver.class));
            }).thenReturn(true);
            assertEquals(true,heroTitleBannerModel.getFirstPosition());
        }
    }
    /**
     * Test properties.
     */
    @Test
    void testCtaProperties() {
        List<CTAPojo> list = heroTitleBannerModel.getCtaList();
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
        List<FooterPojo> list = heroTitleBannerModel.getFooterList();
        assertEquals(1, list.size());
        list.forEach(item -> {
            assertEquals("Copy", item.getCopy());
            assertEquals("Header", item.getHeader());
        });
    }

}
