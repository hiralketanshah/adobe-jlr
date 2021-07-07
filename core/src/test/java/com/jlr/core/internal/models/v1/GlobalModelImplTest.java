package com.jlr.core.internal.models.v1;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.models.spi.Injector;
import org.apache.sling.models.spi.injectorspecific.StaticInjectAnnotationProcessorFactory;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockedStatic;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;

import com.adobe.acs.commons.models.injectors.annotation.impl.HierarchicalPagePropertyAnnotationProcessorFactory;
import com.adobe.acs.commons.models.injectors.impl.HierarchicalPagePropertyInjector;
import com.jlr.core.models.GlobalModel;
import com.jlr.core.services.TcoService;
import com.jlr.core.utils.AltTextUtils;

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

    @Mock
    private TcoService tcoService;

    /**
     * Sets the up.
     *
     * @throws Exception
     *             the exception
     */
    @BeforeEach
    void setUp() {
        MockitoAnnotations.initMocks(this);
        context.registerService(TcoService.class, tcoService);
        context.registerService(Injector.class, injector);
        context.registerService(StaticInjectAnnotationProcessorFactory.class,
                new HierarchicalPagePropertyAnnotationProcessorFactory());
        context.load().json("/content/jlr/global/global.json", "/content/jlr/global.html");
        Resource resource = context.resourceResolver().getResource("/content/jlr/global.html");
        context.currentResource(resource);
        globalModel = context.request().adaptTo(GlobalModelImpl.class);
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
        assertEquals("$12345", globalModel.getPrice());
        assertEquals("25-02-2021", globalModel.getDate());
        assertEquals("icon-arrow-right", globalModel.getHeaderIcon());
    }

    /**
     * Test image properties.
     */
    @Test
    void testImageProperties() {
        assertEquals("/content/dam/test.png", globalModel.getLogoImage());
        assertEquals("/content/dam/test.png", globalModel.getFileReference());
        try (MockedStatic<AltTextUtils> mock = Mockito.mockStatic(AltTextUtils.class)) {
            mock.when(() -> {
                AltTextUtils.getAltTextFromDAM(Mockito.any(String.class), Mockito.any(ResourceResolver.class));
            }).thenReturn("test_imageAlt");

            assertEquals("test_imageAlt", globalModel.getImageAlt());
        }
        assertEquals("/content/jlr/au", globalModel.getImageLink());
    }

    /**
     * Test video properties.
     */
    @Test
    void testVideoProperties() {
        assertEquals("video", globalModel.getAssetType());
        assertEquals("https://youtube.com/embed/V1CZan9Tb34", globalModel.getVideoId());
        assertEquals("/content/dam/test.mp4", globalModel.getVideoPath());
        assertEquals("/content/dam/test.png", globalModel.getPosterImage());
        assertEquals("Test Video Title", globalModel.getVideoTitle());
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
        assertEquals("icon-arrow-right", globalModel.getIcon());
        assertEquals("test_header_Copy:test_cta_text", globalModel.getAriaLabel());
    }
}
