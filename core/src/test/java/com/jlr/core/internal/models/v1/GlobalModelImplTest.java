package com.jlr.core.internal.models.v1;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.spi.Injector;
import org.apache.sling.models.spi.injectorspecific.StaticInjectAnnotationProcessorFactory;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.MockitoAnnotations;

import com.adobe.acs.commons.models.injectors.annotation.impl.HierarchicalPagePropertyAnnotationProcessorFactory;
import com.adobe.acs.commons.models.injectors.impl.HierarchicalPagePropertyInjector;
import com.jlr.core.models.GlobalModel;

import io.wcm.testing.mock.aem.junit5.AemContext;
import io.wcm.testing.mock.aem.junit5.AemContextExtension;

/**
 * The Class GlobalModelImplTest.
 *
 * @author Adobe
 */
@ExtendWith(AemContextExtension.class)
class GlobalModelImplTest {

    /** The context. */
    private final AemContext context = new AemContext();

    /** The global model. */
    private GlobalModel globalModel;

    /** The injector. */
    @InjectMocks
    private HierarchicalPagePropertyInjector injector;

    /**
     * Sets the up.
     *
     * @throws Exception the exception
     */
    @BeforeEach
    void setUp() throws Exception {
        MockitoAnnotations.initMocks(this);
        context.registerService(Injector.class, injector);
        context.registerService(StaticInjectAnnotationProcessorFactory.class,
                new HierarchicalPagePropertyAnnotationProcessorFactory());
        context.load().json("/content/jlr/global/global.json", "/content/jlr/global.html");
        Resource resource = context.resourceResolver().getResource("/content/jlr/global.html");
        globalModel = resource.adaptTo(GlobalModelImpl.class);
    }

    /**
     * Test general properties.
     */
    @Test
    void testGeneralProperties() {
        assertEquals("12345", globalModel.getId());
        assertEquals("test_header_title", globalModel.getHeaderTitle());
        assertEquals("test_header_Copy", globalModel.getHeaderCopy());
        assertEquals("test_body_copy", globalModel.getCopy());
    }

    /**
     * Test image properties.
     */
    @Test
    void testImageProperties() {
        assertEquals("/content/dam/test.png", globalModel.getLogoImage());
        assertEquals("/content/dam/test.png", globalModel.getFileReference());
        assertEquals("test_imageAlt", globalModel.getImageAlt());
        assertEquals("/content/jlr/au", globalModel.getImageLink());
    }

    /**
     * Test cta properties.
     */
    @Test
    void testCtaProperties() {
        assertEquals("test_cta_text", globalModel.getText());
        assertEquals("/content/jlr/au", globalModel.getLink());
        assertEquals("primary", globalModel.getLinkType());
        assertEquals("_self", globalModel.getTarget());
    }
}
