package com.jlr.core.internal.models.v1;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.List;

import org.apache.sling.api.resource.Resource;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;

import com.jlr.core.models.GlobalModel;
import com.jlr.core.pojos.CTAPojo;

import io.wcm.testing.mock.aem.junit5.AemContext;
import io.wcm.testing.mock.aem.junit5.AemContextExtension;

@ExtendWith(AemContextExtension.class)
class DualFrameCarouselTest {

    private GlobalModel dualFrameModel;
    private DualFrameCarouselImpl dualFrameImpl;

    @BeforeEach
    void setUp(AemContext context) throws Exception {
        context.load().json("/content/jlr/dualframecarousel/dualframecarousel.json", "/content/jlr/duelframecarousel.html");
        Resource resource = context.resourceResolver().getResource("/content/jlr/duelframecarousel.html");
        dualFrameModel = resource.adaptTo(DualFrameCarouselImpl.class);
        dualFrameImpl = resource.adaptTo(DualFrameCarouselImpl.class);
    }

    @Test
    void testGeneralProperties() {
        assertEquals("12345", dualFrameModel.getId());
        assertEquals("test_header_Title", dualFrameModel.getHeaderTitle());
        assertEquals("test_body_copy", dualFrameModel.getCopy());
    }

    @Test
    void testImageProperties() {
        assertEquals("/content/dam/test.png", dualFrameModel.getFileReference());
        assertEquals("test_imageAlt", dualFrameModel.getImageAlt());
        assertEquals("/content/jlr/au", dualFrameModel.getImageLink());
    }

    @Test
    void testCtaProperties() {
		List<CTAPojo> list = dualFrameImpl.getCtaList();
        assertEquals(1, list.size());
        list.forEach(item -> { 
        assertEquals("test_cta_text", item.getText());
        assertEquals("/content/jlr/au", item.getLink());
        assertEquals("_self", item.getTarget());
        assertEquals("primary", item.getLinkType());
        });
    
    }

}
