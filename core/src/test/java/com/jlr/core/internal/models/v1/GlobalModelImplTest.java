package com.jlr.core.internal.models.v1;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.apache.sling.api.resource.Resource;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;

import com.jlr.core.models.GlobalModel;

import io.wcm.testing.mock.aem.junit5.AemContext;
import io.wcm.testing.mock.aem.junit5.AemContextExtension;

@ExtendWith(AemContextExtension.class)
class GlobalModelImplTest {

    private GlobalModel globalModel;

    @BeforeEach
    void setUp(AemContext context) throws Exception {
        context.load().json("/content/jlr/global/global.json", "/content/jlr/global.html");
        Resource resource = context.resourceResolver().getResource("/content/jlr/global.html");
        globalModel = resource.adaptTo(GlobalModelImpl.class);
    }

    @Test
    void testGeneralProperties() {
        assertEquals("12345", globalModel.getId());
        assertEquals("test_header_title", globalModel.getHeaderTitle());
        assertEquals("test_header_Copy", globalModel.getHeaderCopy());
        assertEquals("test_body_copy", globalModel.getCopy());
    }

    @Test
    void testImageProperties() {
        assertEquals("/content/dam/test.png", globalModel.getLogoImage());
        assertEquals("/content/dam/test.png", globalModel.getFileReference());
        assertEquals("test_imageAlt", globalModel.getImageAlt());
        assertEquals("/content/jlr/au", globalModel.getImageLink());
    }

    @Test
    void testCtaProperties() {
        assertEquals("test_cta_text", globalModel.getText());
        assertEquals("/content/jlr/au", globalModel.getLink());
        assertEquals("primary", globalModel.getLinkType());
        assertEquals("_self", globalModel.getTarget());
    }
}
