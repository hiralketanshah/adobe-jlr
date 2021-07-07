package com.jlr.core.internal.models.v1;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.List;

import org.apache.sling.api.resource.Resource;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.MockitoAnnotations;

import com.jlr.core.pojos.CTAPojo;

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
        assertEquals(1, list.size());
        list.forEach(item -> {
            assertEquals("test_cta_text", item.getText());
            assertEquals("/content/jlr/au", item.getLink());
            assertEquals("_self", item.getTarget());
            assertEquals("primary", item.getLinkType());
        });

    }

}
