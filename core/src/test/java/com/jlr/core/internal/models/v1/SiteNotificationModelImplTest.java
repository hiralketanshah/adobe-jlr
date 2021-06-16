package com.jlr.core.internal.models.v1;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.apache.sling.api.resource.Resource;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;

import com.jlr.core.models.SiteNotificationModel;

import io.wcm.testing.mock.aem.junit5.AemContext;
import io.wcm.testing.mock.aem.junit5.AemContextExtension;

/**
 * The Class SiteNotificationModelImplTest.
 */
@ExtendWith(AemContextExtension.class)
class SiteNotificationModelImplTest extends GlobalModelImplTest {

	/** The site notification model. */
	private SiteNotificationModel siteNotificationModel;
	
    /**
     * Sets the up.
     *
     * @param context the new up
     */
    @BeforeEach
    public void setup(AemContext context) {
        context.load().json("/content/jlr/sitenotification/sitenotification.json", "/content/jlr/sitenotification.html");
        Resource resource = context.resourceResolver().getResource("/content/jlr/sitenotification.html");
        siteNotificationModel = resource.adaptTo(SiteNotificationModelImpl.class);
    }
    
    /**
     * Test get id.
     */
    @Test
    void testGetId() {
        assertEquals("667667", siteNotificationModel.getId());
    }

    /**
     * Test get close button copy.
     */
    @Test
    void testGetCloseButtonCopy() {
        assertEquals("close", siteNotificationModel.getCloseButtonCopy());
    }

    /**
     * Test get close button arialabel.
     */
    @Test
    void testGetCloseButtonArialabel() {
        assertEquals("close-aria", siteNotificationModel.getCloseButtonArialabel());
    }
    
    /**
     * Test get component URL.
     */
    @Test
    void testGetComponentURL() {
        assertEquals("google.com", siteNotificationModel.getComponentURL());
    }

}
