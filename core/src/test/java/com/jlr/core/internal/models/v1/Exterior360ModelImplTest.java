package com.jlr.core.internal.models.v1;

import io.wcm.testing.mock.aem.junit5.AemContext;
import io.wcm.testing.mock.aem.junit5.AemContextExtension;
import org.apache.sling.api.resource.Resource;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
/**
 * The Class Exterior360ModelImplTest.
 *
 */
@ExtendWith(AemContextExtension.class)
class Exterior360ModelImplTest {

    /** The Exterior360ModelImpl */
    private Exterior360ModelImpl exterior360Model;

    /**
     * Sets the up.
     *
     * @param context the new up
     * @throws Exception the exception
     */
    @BeforeEach
    public void setUp(AemContext context) throws Exception {
        context.load().json("/content/jlr/exterior360/exterior360.json", "/content/jlr/exterior360.html");
        Resource resource = context.resourceResolver().getResource("/content/jlr/exterior360.html");
        exterior360Model = resource.adaptTo(Exterior360ModelImpl.class);
    }
    /**
     * Test properties.
     */
    @Test
    void testProperties() {
       // assertEquals("/content/dam/landrover", exterior360Model.getFolderPath());

    }
    /**
     * Test column.
     */
    void testGetImageList() {

        List<String> imageList = new ArrayList<>();
        assertEquals(1, imageList.toString());

    }

}