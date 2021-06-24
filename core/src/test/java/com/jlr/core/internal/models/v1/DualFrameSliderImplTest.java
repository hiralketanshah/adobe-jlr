package com.jlr.core.internal.models.v1;

import com.jlr.core.models.DualFrameSliderModel;
import com.jlr.core.pojos.CTAPojo;
import io.wcm.testing.mock.aem.junit5.AemContext;
import io.wcm.testing.mock.aem.junit5.AemContextExtension;
import org.apache.sling.api.resource.Resource;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;


/**
 * The Class DualFrameSliderImplTest.
 *
 */
@ExtendWith(AemContextExtension.class)
public class DualFrameSliderImplTest extends GlobalModelImplTest {

    private DualFrameSliderModel dualFrameSliderModel;

    /**
     * Sets the up.
     *
     * @param context the new up
     * @throws Exception the exception
     */
    @BeforeEach
    public void setUp(AemContext context) throws Exception {
        context.load().json("/content/jlr/dualframeslider/dualframeslider.json", "/content/jlr/dualframeslider.html");
        Resource resource = context.resourceResolver().getResource("/content/jlr/dualframeslider.html");
        context.load().json("/content/jlr/dualframeslider/image.json", "/content/dam/landrover");
        dualFrameSliderModel = resource.adaptTo(DualFrameSliderImpl.class);
    }

    /**
     * Test properties.
     */
    @Test
    void testProperties() {
        assertEquals("/content/dam/landrover/", dualFrameSliderModel.getFramePath());
        assertEquals("jpg", dualFrameSliderModel.getImageType());
        assertEquals(2, dualFrameSliderModel.getImageCount());
    }

    /**
     * Test cta properties.
     */
    @Override
    @Test
    void testCtaProperties() {
        List<CTAPojo> list = dualFrameSliderModel.getCtaList();
        assertEquals(1, list.size());
        list.forEach(item -> {
            assertEquals("test_cta_text", item.getText());
            assertEquals("/content/jlr/au", item.getLink());
            assertEquals("_self", item.getTarget());
            assertEquals("primary", item.getLinkType());
            assertEquals("test_aria_label", item.getAriaLabel());
        });
    }

    @Test
    void testImageList() {
        List<String> listImage = dualFrameSliderModel.getImageList();
        assertEquals(2, listImage.size());
    }
}
