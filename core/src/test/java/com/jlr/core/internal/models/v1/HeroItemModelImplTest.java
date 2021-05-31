package com.jlr.core.internal.models.v1;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.lenient;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.day.cq.commons.inherit.InheritanceValueMap;
import com.day.cq.wcm.api.Page;
import com.jlr.core.services.TcoService;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.injectorspecific.OSGiService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;

import com.jlr.core.models.HeroItemModel;
import com.jlr.core.pojos.CTAPojo;

import io.wcm.testing.mock.aem.junit5.AemContext;
import io.wcm.testing.mock.aem.junit5.AemContextExtension;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import javax.inject.Inject;

/**
 * The Class HeroCarouselModelImplTest.
 *
 * @author Adobe
 */
@ExtendWith({AemContextExtension.class, MockitoExtension.class})
class HeroItemModelImplTest extends GlobalModelImplTest {

    /** The hero item model. */
    @InjectMocks
    private HeroItemModelImpl heroItemModel;

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
        context.addModelsForClasses(HeroItemModelImpl.class);
        context.load().json("/content/jlr/herocarousel/herocarousel.json", "/content/jlr/herocarousel.html");
        Resource resource = context.resourceResolver().getResource("/content/jlr/herocarousel.html");
        context.currentResource(resource);
        heroItemModel = context.request().adaptTo(HeroItemModelImpl.class);
    }

    /**
     * Test properties.
     */
    @Test
    void testProperties() {
        List<CTAPojo> list = heroItemModel.getCtaList();
        assertEquals(1, list.size());
        list.forEach(item -> {
            assertEquals("test_text", item.getText());
            assertEquals("http://www.google.com", item.getLink());
            assertEquals("_self", item.getTarget());
            assertEquals("primary", item.getLinkType());
        });

    }

}
