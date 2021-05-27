package com.jlr.core.internal.models.v1;

import com.day.cq.commons.inherit.InheritanceValueMap;
import com.day.cq.wcm.api.Page;
import com.jlr.core.models.ContentCardListModel;
import com.jlr.core.pojos.CTAPojo;
import com.jlr.core.services.TcoService;
import io.wcm.testing.mock.aem.junit5.AemContext;
import io.wcm.testing.mock.aem.junit5.AemContextExtension;
import org.apache.sling.api.resource.Resource;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.lenient;

/**
 * The Class ContentCardModelTest.
 *
 * @author Adobe
 */
@ExtendWith({AemContextExtension.class, MockitoExtension.class})
class ContentCardModelTest extends GlobalModelImplTest {

    /** The content card model. */
    @InjectMocks
    private ContentCardImpl contentCardModel;

    @Mock
    private Page currentPage;

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
        context.registerService(TcoService.class, tcoService);
        context.registerService(InheritanceValueMap.class, pageProperties);
        context.registerService(Page.class, currentPage);

        Map<String, String> priceMap = new HashMap<>();
        lenient().when(tcoService.getModelPrice(context.resourceResolver(), context.request(), currentPage, pageProperties, "12345", "test")).thenReturn(priceMap);

        context.request().setAttribute("key", "test");
        context.addModelsForClasses(ContentCardImpl.class);
        context.load().json("/content/jlr/contentcard/contentcard.json", "/content/jlr/contentcard.html");
        Resource resource = context.resourceResolver().getResource("/content/jlr/contentcard.html");
        context.currentResource(resource);
        contentCardModel = context.request().adaptTo(ContentCardImpl.class);
    }

    /**
     * Test properties.
     */
    @Test
    void testProperties() {
        List<ContentCardListModel> list = contentCardModel.getContentCardList();
        assertEquals(1, list.size());
        list.forEach(item -> {
            assertEquals("https://google.com", item.getImageLink());
            assertEquals("imageAlt", item.getImageAlt());
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
     * Test column.
     */
    void testColumn() {
        assertEquals("2", contentCardModel.getColumn());
    }

}
