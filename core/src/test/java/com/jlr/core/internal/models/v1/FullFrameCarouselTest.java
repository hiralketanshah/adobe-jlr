package com.jlr.core.internal.models.v1;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.List;

import org.apache.sling.api.resource.Resource;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;

import com.jlr.core.models.FullFrameCarouselModel;
import com.jlr.core.pojos.CTAPojo;

import io.wcm.testing.mock.aem.junit5.AemContext;
import io.wcm.testing.mock.aem.junit5.AemContextExtension;

/**
 * The Class FullFrameCarouselTest.
 */
@ExtendWith(AemContextExtension.class)
class FullFrameCarouselTest extends GlobalModelImplTest {

    /** The full frame carousel model. */
    private FullFrameCarouselModel fullFrameCarouselModel;

    /**
     * Sets the up.
     *
     * @param context
     *            the new up
     */
    @BeforeEach
    public void setup(AemContext context) {
        context.load().json("/content/jlr/fullFrameCarousel/fullFrameCarousel.json",
                "/content/jlr/fullFrameCarousel.html");
        Resource resource = context.resourceResolver().getResource("/content/jlr/fullFrameCarousel.html");
        fullFrameCarouselModel = resource.adaptTo(FullFrameCarouselImpl.class);
    }

    @Override
    @Test
    void testCtaProperties() {
        List<CTAPojo> list = fullFrameCarouselModel.getCtaList();
        assertEquals(1, list.size());
        list.forEach(item -> {
            assertEquals("test_cta_text", item.getText());
            assertEquals("/content/jlr/au", item.getLink());
            assertEquals("_self", item.getTarget());
            assertEquals("primary", item.getLinkType());
        });

    }
}
