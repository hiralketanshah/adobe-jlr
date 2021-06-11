package com.jlr.core.internal.models.v1;

import com.jlr.core.models.CookieNotificationModel;
import com.jlr.core.pojos.CTAPojo;
import io.wcm.testing.mock.aem.junit5.AemContext;
import io.wcm.testing.mock.aem.junit5.AemContextExtension;
import org.apache.sling.api.resource.Resource;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

/**
 * The Class CookieNotificationModelImplTest.
 *
 */
@ExtendWith(AemContextExtension.class)
class CookieNotificationModelImplTest extends GlobalModelImplTest {

    /** The CookieNotificationModel */
    private CookieNotificationModel cookieNotificationModel;

    /**
     * Sets the up.
     *
     * @param context the new up
     * @throws Exception the exception
     */
    @BeforeEach
    public void setUp(AemContext context) throws Exception {
        context.load().json("/content/jlr/cookienotification/cookienotification.json", "/content/jlr/cookienotification.html");
        Resource resource = context.resourceResolver().getResource("/content/jlr/cookienotification.html");
        cookieNotificationModel = resource.adaptTo(CookieNotificationModelImpl.class);
    }

    /**
     * Test properties.
     */
    @Test
    void testProperties() {
        assertEquals("HEADER", cookieNotificationModel.getHeader());
        assertEquals("Summary", cookieNotificationModel.getSummary());
        assertEquals(1,cookieNotificationModel.getExpiry());
    }

    /**
     * Test cta properties.
     */
    @Override
    @Test
    void testCtaProperties() {
        List<CTAPojo> list = cookieNotificationModel.getCtaList();
        assertEquals(1, list.size());
        list.forEach(item -> {
            assertEquals("test_cta_text", item.getText());
            assertEquals("test_aria_label", item.getAriaLabel());
        });
    }
}
