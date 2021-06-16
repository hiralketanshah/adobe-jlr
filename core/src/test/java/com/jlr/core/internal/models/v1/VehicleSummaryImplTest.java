package com.jlr.core.internal.models.v1;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.lenient;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.sling.api.resource.Resource;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import com.day.cq.commons.inherit.InheritanceValueMap;
import com.day.cq.wcm.api.Page;
import com.jlr.core.pojos.CTAPojo;
import com.jlr.core.services.TcoService;

import io.wcm.testing.mock.aem.junit5.AemContext;
import io.wcm.testing.mock.aem.junit5.AemContextExtension;

/**
 * The Class VehicleSummaryImplTest.
 *
 * @author Adobe
 */
@ExtendWith(AemContextExtension.class)
class VehicleSummaryImplTest extends GlobalModelImplTest {

    /** The vehicle summary model. */
    @InjectMocks
    private VehicleSummaryImpl vehicleSummaryModel;

    @Mock
    private Page currentPage;

    @Mock
    private InheritanceValueMap pageProperties;

    @Mock
    private TcoService tcoService;

    /**
     * Sets the up.
     *
     * @param context
     *            the new up
     * @throws Exception
     *             the exception
     */
    @BeforeEach
    void setUp(AemContext context) throws Exception {
        MockitoAnnotations.initMocks(this);
        context.registerService(TcoService.class, tcoService);
        context.registerService(InheritanceValueMap.class, pageProperties);
        context.registerService(Page.class, currentPage);

        Map<String, String> priceMap = new HashMap<>();
        lenient().when(tcoService.getModelPrice(context.resourceResolver(), context.request(), currentPage,
                pageProperties, "12345", "test")).thenReturn(priceMap);

        context.request().setAttribute("key", "test");
        context.addModelsForClasses(VehicleSummaryImpl.class);
        context.load().json("/content/jlr/vehiclesummary/vehiclesummary.json", "/content/jlr/vehiclesummary.html");
        Resource resource = context.resourceResolver().getResource("/content/jlr/vehiclesummary.html");
        context.currentResource(resource);
        vehicleSummaryModel = context.request().adaptTo(VehicleSummaryImpl.class);
    }

    /**
     * Test cta properties.
     */
    @Override
    @Test
    void testCtaProperties() {
        List<CTAPojo> list = vehicleSummaryModel.getCtaList();
        assertEquals("pricing_value", vehicleSummaryModel.getPrice());
        assertEquals(1, list.size());
        list.forEach(item -> {
            assertEquals("test_cta_text", item.getText());
            assertEquals("/content/jlr/au", item.getLink());
            assertEquals("_self", item.getTarget());
            assertEquals("primary", item.getLinkType());
        });

    }

}
