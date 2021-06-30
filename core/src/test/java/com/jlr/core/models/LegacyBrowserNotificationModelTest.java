package com.jlr.core.models;

import io.wcm.testing.mock.aem.junit5.AemContext;
import io.wcm.testing.mock.aem.junit5.AemContextExtension;
import org.apache.sling.api.resource.Resource;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;

import static org.junit.jupiter.api.Assertions.*;

/**
 * The Class LegacyBrowserNotificationModelTest.
 *
 */
@ExtendWith(AemContextExtension.class)
class LegacyBrowserNotificationModelTest {

    /** The LegacyBrowserNotificationModel */
    private LegacyBrowserNotificationModel legacyBrowserNotificationModel;

    /**
     * Sets the up.
     *
     * @param context the new up
     * @throws Exception the exception
     */
    @BeforeEach
    public void setUp(AemContext context) throws Exception {
        context.load().json("/content/jlr/legacybrowser/legacybrowser.json", "/content/jlr/legacybrowser.html");
        Resource resource = context.resourceResolver().getResource("/content/jlr/legacybrowser.html");
        legacyBrowserNotificationModel = resource.adaptTo(LegacyBrowserNotificationModel.class);
    }

    /**
     * Test properties.
     */
    @Test
    void testProperties(){
        assertEquals("headerCopy", legacyBrowserNotificationModel.getHeaderCopy());
        assertEquals("copy", legacyBrowserNotificationModel.getCopy());
    }

}