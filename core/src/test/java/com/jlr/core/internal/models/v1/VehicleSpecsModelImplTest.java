package com.jlr.core.internal.models.v1;

import com.day.cq.wcm.api.Page;
import com.jlr.core.models.VehicleSpecsModel;
import com.jlr.core.pojos.CTAPojo;
import io.wcm.testing.mock.aem.junit5.AemContext;
import io.wcm.testing.mock.aem.junit5.AemContextExtension;
import org.apache.sling.api.resource.Resource;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

/**
 * The Class VehicleSpecsModelImplTest.
 *
 */
@ExtendWith(AemContextExtension.class)
public class VehicleSpecsModelImplTest extends GlobalModelImplTest {

    /** The VehicleSpecsModel */
    private VehicleSpecsModel vehicleSpecsModel;

    @Mock
    private Page currentPage;

    /**
     * Sets the up.
     *
     * @param context the new up
     * @throws Exception the exception
     */
    @BeforeEach
    public void setUp(AemContext context) throws Exception {
        context.registerService(Page.class, currentPage);
        context.load().json("/content/jlr/vehiclespec/vehiclespec.json", "/content/jlr/vehiclespec.html");
        Resource resource = context.resourceResolver().getResource("/content/jlr/vehiclespec.html");
        context.currentResource(resource);
        vehicleSpecsModel = context.request().adaptTo(VehicleSpecsModelImpl.class);
    }

    /**
     * Test properties.
     */
    @Test
    void testProperties() {
        assertEquals("BODYSTYLEHEADER", vehicleSpecsModel.getBodyStyleHeader());
        assertEquals("MODELHEADER", vehicleSpecsModel.getModelHeader());
        assertEquals("ENGINEHEADER", vehicleSpecsModel.getEngineHeader());
        assertEquals("SPECHEADER", vehicleSpecsModel.getSpecHeader());
    }

    /**
     * Test cta properties.
     */
    @Override
    @Test
    void testCtaProperties() {
        List<CTAPojo> list = vehicleSpecsModel.getCtaList();
        assertEquals(1, list.size());
        list.forEach(item -> {
            assertEquals("test_cta_text", item.getText());
            assertEquals("/content/jlr/au", item.getLink());
            assertEquals("_self", item.getTarget());
            assertEquals("primary", item.getLinkType());
            assertEquals("test_aria_label", item.getAriaLabel());
        });
    }
}
