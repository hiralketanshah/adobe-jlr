package com.jlr.core.internal.models.v1;

import com.jlr.core.models.VehiclePageLinkListModel;
import io.wcm.testing.mock.aem.junit5.AemContext;
import io.wcm.testing.mock.aem.junit5.AemContextExtension;
import org.apache.sling.api.resource.Resource;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

/**
 * The Class VehicleFamilyModelImplTest.
 *
 * @author Adobe
 */
@ExtendWith(AemContextExtension.class)
class VehicleFamilyModelImplTest {

    /** The vehicle family  model. */
    private VehicleFamilyModelImpl vehicleFamilyModel;

    /**
     * Sets the up.
     *
     * @param context
     *            the new up
     */
    @BeforeEach
    public void setup(AemContext context) {
        context.load().json("/content/jlr/vehiclefamily/vehiclefamily.json", "/content/jlr/vehiclefamily.html");
        Resource resource = context.resourceResolver().getResource("/content/jlr/vehiclefamily.html");
        vehicleFamilyModel = resource.adaptTo(VehicleFamilyModelImpl.class);
    }

    /**
     * Test rtgb properties.
     */
    @Test
    void testProperties() {
        assertEquals("name", vehicleFamilyModel.getVehicleFamilyName());
        List<VehiclePageLinkListModel> vehiclesList = vehicleFamilyModel.getVehiclesList();

    }

}