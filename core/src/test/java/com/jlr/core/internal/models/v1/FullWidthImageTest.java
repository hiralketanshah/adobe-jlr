package com.jlr.core.internal.models.v1;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.List;

import org.apache.sling.api.resource.Resource;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;

import com.jlr.core.models.FullWidthImageModel;
import com.jlr.core.pojos.CTAPojo;

import io.wcm.testing.mock.aem.junit5.AemContext;
import io.wcm.testing.mock.aem.junit5.AemContextExtension;

/**
 * The Class FullWidthImageTest.
 *
 * @author Adobe
 */
@ExtendWith(AemContextExtension.class)
public class FullWidthImageTest extends GlobalModelImplTest {

    /** The full width image model. */
    private FullWidthImageModel fullWidthImageModel;

    /**
     * Sets the up.
     *
     * @param context
     *            the new up
     */
    @BeforeEach
    public void setup(AemContext context) {
        context.load().json("/content/jlr/fullwidthimage/fullwidthimage.json", "/content/jlr/fullwidthimage.html");
        Resource resource = context.resourceResolver().getResource("/content/jlr/fullwidthimage.html");
        fullWidthImageModel = resource.adaptTo(FullWidthImageImpl.class);
    }

    /**
     * Test properties.
     */
    @Test
    void testProperties() {
        List<CTAPojo> list = fullWidthImageModel.getCtaList();
        assertEquals(1, list.size());
        list.forEach(item -> {
            assertEquals("test_text", item.getText());
            assertEquals("http://www.google.com", item.getLink());
            assertEquals("_self", item.getTarget());
            assertEquals("primary", item.getLinkType());
        });
    }

    /**
     * Test body copy.
     */
    @Test
    void testBodyCopy() {
        assertEquals("body_copy", fullWidthImageModel.getBodyCopy());
    }

}
