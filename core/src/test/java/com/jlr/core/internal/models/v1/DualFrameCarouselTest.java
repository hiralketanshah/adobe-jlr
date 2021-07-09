package com.jlr.core.internal.models.v1;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.List;

import org.apache.sling.api.resource.Resource;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;

import com.jlr.core.models.DualFrameCarouselModel;
import com.jlr.core.pojos.CTAPojo;

import io.wcm.testing.mock.aem.junit5.AemContext;
import io.wcm.testing.mock.aem.junit5.AemContextExtension;

/**
 * The Class DualFrameCarouselTest.
 *
 * @author Adobe
 */
@ExtendWith(AemContextExtension.class)
class DualFrameCarouselTest extends GlobalModelImplTest {

    /** The dual frame model. */
    private DualFrameCarouselModel dualFrameModel;

    /**
     * Sets the up.
     *
     * @param context the new up
     * @throws Exception the exception
     */
    @BeforeEach
    void setUp(AemContext context) throws Exception {
        context.load().json("/content/jlr/dualframecarousel/dualframecarousel.json",
                "/content/jlr/duelframecarousel.html");
        Resource resource = context.resourceResolver().getResource("/content/jlr/duelframecarousel.html");
        dualFrameModel = resource.adaptTo(DualFrameCarouselImpl.class);
    }

    @Test
    void testProperties(){
        assertEquals("image",dualFrameModel.getAssetType());
    }
    /* (non-Javadoc)
     * @see com.jlr.core.internal.models.v1.GlobalModelImplTest#testCtaProperties()
     */
    @Override
    @Test
    void testCtaProperties() {
        List<CTAPojo> list = dualFrameModel.getCtaList();
        assertEquals(1, list.size());
        list.forEach(item -> {
            assertEquals("test_cta_text", item.getText());
            assertEquals("/content/jlr/au", item.getLink());
            assertEquals("_self", item.getTarget());
            assertEquals("primary", item.getLinkType());
        });

    }

}
