package com.jlr.core.internal.models.v1;

import com.jlr.core.models.VehicleFamilyModel;
import io.wcm.testing.mock.aem.junit5.AemContext;
import io.wcm.testing.mock.aem.junit5.AemContextExtension;
import org.apache.sling.api.resource.Resource;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

/**
 * The Class VehicleCategoryModelImplTest.
 *
 * @author Adobe
 */
@ExtendWith(AemContextExtension.class)
class VehicleCategoryModelImplTest {

    /** The hero item model. */
    @InjectMocks
    private VehicleCategoryModelImpl vehicleCategoryModel;

    /**
     * Sets the up.
     *
     * @param context the new up
     * @throws Exception the exception
     */
    @BeforeEach
    public void setUp(AemContext context) throws Exception {
        context.load().json("/content/jlr/vehiclecategory/vehiclecategory.json", "/content/jlr/vehiclecategory.html");
        Resource resource = context.resourceResolver().getResource("/content/jlr/vehiclecategory.html");
        vehicleCategoryModel = resource.adaptTo(VehicleCategoryModelImpl.class);
    }
    /**
     * Test properties.
     */
    @Test
    void testProperties() {
        List<VehicleFamilyModel> vehicleFamilyModels = vehicleCategoryModel.getVehicleFamily();
        assertEquals("arial_text", vehicleCategoryModel.getCompareAriaLabel());
        assertEquals("/content/landrover/au", vehicleCategoryModel.getCompareLink());
        assertEquals("target",vehicleCategoryModel.getCompareTarget());
        assertEquals("text",vehicleCategoryModel.getCompareText());
        assertEquals("tab_name",vehicleCategoryModel.getVehicleTabName());
    }

}