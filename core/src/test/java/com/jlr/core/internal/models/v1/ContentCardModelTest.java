package com.jlr.core.internal.models.v1;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

import java.util.List;

import javax.jcr.Node;
import javax.jcr.RepositoryException;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockedStatic;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;

import com.day.cq.wcm.api.Page;
import com.jlr.core.models.ContentCardListModel;
import com.jlr.core.pojos.CTAPojo;
import com.jlr.core.utils.ComponentPositionUtils;

import io.wcm.testing.mock.aem.junit5.AemContext;
import io.wcm.testing.mock.aem.junit5.AemContextExtension;

/**
 * The Class ContentCardModelTest.
 *
 * @author Adobe
 */
@ExtendWith(AemContextExtension.class)
class ContentCardModelTest extends GlobalModelImplTest {

    /** The content card model. */
    @InjectMocks
    private ContentCardImpl contentCardModel;

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
        MockitoAnnotations.initMocks(this);
        context.registerService(Page.class, currentPage);
        context.registerService(Node.class, currentNode);
        context.load().json("/content/jlr/contentcard/contentcard.json", "/content/jlr/contentcard.html");
        Resource resource = context.resourceResolver().getResource("/content/jlr/contentcard.html");
        context.currentResource(resource);
        contentCardModel = context.request().adaptTo(ContentCardImpl.class);
    }

    /**
     * Test properties.
     */
    void testProperties() throws RepositoryException {
        List<ContentCardListModel> list = contentCardModel.getContentCardList();
        assertEquals("2", contentCardModel.getColumn());
        when(currentPage.getPath()).thenReturn("/content/jlr/page");
        try (MockedStatic<ComponentPositionUtils> mock = Mockito.mockStatic(ComponentPositionUtils.class)) {
            mock.when(() -> {
                ComponentPositionUtils.getComponentPosition(Mockito.any(String.class), Mockito.any(Node.class),
                        Mockito.any(ResourceResolver.class));
            }).thenReturn(true);
            assertEquals(true, contentCardModel.getFirstPosition());
        }
        assertEquals(1, list.size());
        list.forEach(item -> {
            assertEquals("https://google.com", item.getImageLink());
            // assertEquals("imageAlt", item.getImageAlt());
            assertEquals("$98.05", item.getPrice());
            assertEquals("headerCopy", item.getHeaderCopy());
            assertEquals("copy", item.getCopy());
            assertEquals("video", item.getAssestType());
            List<CTAPojo> cta = item.getCtaList();
            assertEquals(1, list.size());
            cta.forEach(item1 -> {
                assertEquals("text", item1.getText());
                assertEquals("https://google.com", item1.getLink());
                assertEquals("_blank", item1.getTarget());
                assertEquals("primary", item1.getLinkType());
            });
        });
    }

    /**
     * Test contentcontainer CTA.
     */
    void testContentcontainerCTA() {
        List<CTAPojo> list = contentCardModel.getCtaList();
        assertEquals(1, list.size());
        list.forEach(item -> {
            assertEquals("text", item.getText());
            assertEquals("https://google.com", item.getLink());
            assertEquals("_blank", item.getTarget());
            assertEquals("primary", item.getLinkType());
        });
    }

    /**
     * Test cta properties.
     */
    @Override
    void testCtaProperties() {
        List<CTAPojo> list = contentCardModel.getCtaList();
        assertEquals(1, list.size());
        list.forEach(item -> {
            assertEquals("text", item.getText());
            assertEquals("https://google.com", item.getLink());
            assertEquals("_blank", item.getTarget());
            assertEquals("primary", item.getLinkType());
        });
    }

}
