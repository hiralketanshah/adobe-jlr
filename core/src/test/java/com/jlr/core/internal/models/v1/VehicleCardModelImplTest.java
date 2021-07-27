package com.jlr.core.internal.models.v1;

import com.jlr.core.pojos.CTAPojo;
import io.wcm.testing.mock.aem.junit5.AemContext;
import io.wcm.testing.mock.aem.junit5.AemContextExtension;
import org.apache.sling.api.resource.Resource;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

/**
 * The Class VehicleCardModelImplTest.
 *
 * @author Adobe
 */
@ExtendWith(AemContextExtension.class)
class VehicleCardModelImplTest extends GlobalModelImplTest {

    /** The VehicleCardModelImpl model. */

    private VehicleCardModelImpl vehicleCardModel;

    /**
     * Sets the up.
     *
     * @param context the new up
     * @throws Exception the exception
     */
    @BeforeEach
    void setUp(AemContext context) throws Exception {
        context.load().json("/content/jlr/vehiclecard/vehiclecard.json",
                "/content/jlr/vehiclecard.html");
        Resource resource = context.resourceResolver().getResource("/content/jlr/vehiclecard.html");
        vehicleCardModel = resource.adaptTo(VehicleCardModelImpl.class);
    }

    /**
     * Test properties.
     */
    @Test
    void testProperties() {
        assertEquals("disc", vehicleCardModel.getDisclaimer());
        assertEquals("disc_link", vehicleCardModel.getDisclaimerLink());
        assertEquals("disc_text",vehicleCardModel.getDisclaimerText());
        assertEquals("https://image_link", vehicleCardModel.getImageLink());
        assertEquals("pricing_value", vehicleCardModel.getPrice());
        assertEquals("tab_name", vehicleCardModel.getTabName());

    }
    /**
     * Test cta properties.
     */
    @Override
    @Test
    void testCtaProperties() {
        List<CTAPojo> list = vehicleCardModel.getCtaList();
        assertEquals(1, list.size());
        list.forEach(item -> {
            assertEquals("test_cta_text", item.getText());
            assertEquals("/content/jlr/au", item.getLink());
            assertEquals("_blank", item.getTarget());
            assertEquals("primary", item.getLinkType());
            assertEquals("test_aria_label", item.getAriaLabel());
        });
    }

}