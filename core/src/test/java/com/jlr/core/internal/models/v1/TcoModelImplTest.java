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
import org.apache.sling.api.resource.ResourceResolver;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;

import com.jlr.core.models.TcoModel;

import io.wcm.testing.mock.aem.junit5.AemContext;
import io.wcm.testing.mock.aem.junit5.AemContextExtension;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.mockito.junit.jupiter.MockitoExtension;

/**
 * The Class TcoModelImplTest.
 *
 * @author Adobe
 */
@ExtendWith({AemContextExtension.class, MockitoExtension.class})
class TcoModelImplTest extends GlobalModelImplTest {

    /** The tco model. */
    @InjectMocks
    private TcoModelImpl tcoModel;

    @Mock
    private Page currentPage;

    @Mock
    private TcoService tcoService;

    @Mock
    private InheritanceValueMap pageProperties;

    @InjectMocks
    private String priceMacro;

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
        Map<String, String> modelPriceMap = new HashMap<>();
        modelPriceMap.put("testPrice","1234");
        lenient().when(tcoService.getModelPrice(context.resourceResolver(), context.request(), currentPage,
                pageProperties, "testPrice",null)).thenReturn(modelPriceMap);
        context.addModelsForClasses(TcoModelImpl.class);
        context.load().json("/content/jlr/tco/tco.json", "/content/jlr/tco.html");
        Resource resource = context.resourceResolver().getResource("/content/jlr/tco.html");
        context.currentResource(resource);
        tcoModel = context.request().adaptTo(TcoModelImpl.class);
    }

    /**
     * Test properties.
     */
    @Test
    void testProperties() {
        assertEquals(null,tcoModel.getModelPrice());
    }

}
