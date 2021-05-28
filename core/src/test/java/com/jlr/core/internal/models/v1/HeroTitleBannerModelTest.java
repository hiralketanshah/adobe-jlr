package com.jlr.core.internal.models.v1;

import com.day.cq.commons.inherit.InheritanceValueMap;
import com.day.cq.wcm.api.Page;
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
 * The Class HeroTitleBannerModelTest.
 *
 * @author Adobe
 */
@ExtendWith({AemContextExtension.class, MockitoExtension.class})
class HeroTitleBannerModelTest extends GlobalModelImplTest {

    /** The hero title banner model. */
    @InjectMocks
    private HeroTitleBannerImpl heroTitleBannerModel;

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
        context.addModelsForClasses(HeroTitleBannerImpl.class);
        context.load().json("/content/jlr/herotitlebanner/herotitlebanner.json", "/content/jlr/herotitlebanner.html");
        Resource resource = context.resourceResolver().getResource("/content/jlr/herotitlebanner.html");
        context.currentResource(resource);
        heroTitleBannerModel = context.request().adaptTo(HeroTitleBannerImpl.class);
    }

    /**
     * Test properties.
     */
    @Test
    void testProperties() {
        List<CTAPojo> list = heroTitleBannerModel.getCtaList();
        assertEquals(1, list.size());
        list.forEach(item -> {
            assertEquals("test_text", item.getText());
            assertEquals("http://www.google.com", item.getLink());
            assertEquals("_self", item.getTarget());
            assertEquals("primary", item.getLinkType());
        });
    }

}
