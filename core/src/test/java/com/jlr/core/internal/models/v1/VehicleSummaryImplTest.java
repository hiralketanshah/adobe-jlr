package com.jlr.core.internal.models.v1;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.List;

import org.apache.sling.api.resource.Resource;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.extension.ExtendWith;

import com.jlr.core.models.VehicleSummaryModel;
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
    private VehicleSummaryModel vehicleSummaryModel;

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
        context.load().json("/content/jlr/vehiclesummary/vehiclesummary.json", "/content/jlr/vehiclesummary.html");
        Resource resource = context.resourceResolver().getResource("/content/jlr/vehiclesummary.html");
        vehicleSummaryModel = resource.adaptTo(VehicleSummaryImpl.class);
    }

    /**
     * Test cta properties.
     */
    @Override
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
