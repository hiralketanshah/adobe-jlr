package com.jlr.core.internal.models.v1;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.apache.sling.api.resource.Resource;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;

import io.wcm.testing.mock.aem.junit5.AemContext;
import io.wcm.testing.mock.aem.junit5.AemContextExtension;

@ExtendWith(AemContextExtension.class)
class AccoladeModelImplTest {

    private AccoladeModelImpl accoladeModel;

    @BeforeEach
    void setUp(AemContext context) throws Exception {
        context.load().json("/content/jlr/accolade/accolade.json", "/content/jlr/accolade.html");
        Resource resource = context.resourceResolver().getResource("/content/jlr/accolade.html");
        accoladeModel = resource.adaptTo(AccoladeModelImpl.class);
    }

    @Test
    void testGeneralProperties() {
        assertEquals("12345", accoladeModel.getId());
        assertEquals("test_header_Copy", accoladeModel.getHeaderCopy());
        assertEquals("test_body_copy", accoladeModel.getCopy());
        assertEquals("25/02/2021", accoladeModel.getDate());
    }

    @Test
    void testImageProperties() {
        assertEquals("/content/dam/test.png", accoladeModel.getBackgroundImage());
        assertEquals("/content/dam/test.png", accoladeModel.getLogoImage());
    }

    @Test
    void testCtaProperties() {
        assertEquals("test_cta_text", accoladeModel.getText());
        assertEquals("/content/jlr/au", accoladeModel.getLink());
        assertEquals("_self", accoladeModel.getTarget());
    }

}
