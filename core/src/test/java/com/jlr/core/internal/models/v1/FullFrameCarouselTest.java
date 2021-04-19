package com.jlr.core.internal.models.v1;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.apache.sling.api.resource.Resource;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;

import com.jlr.core.models.FullFrameCarouselModel;

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

    /**
     * Test properties.
     */
    @Test
    void testBackGroundImgProperty() {
        assertEquals("/content/dam/core-components-examples/library/sample-assets/mountain-range.jpg",
                fullFrameCarouselModel.getBackgroundImage());
    }

}
