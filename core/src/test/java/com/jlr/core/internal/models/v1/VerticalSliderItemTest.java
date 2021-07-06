package com.jlr.core.internal.models.v1;

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
 * The Class VerticalSliderItemTest.
 *
 */
@ExtendWith(AemContextExtension.class)
public class VerticalSliderItemTest extends GlobalModelImplTest {

    /** The VerticalSliderItem */
    private VerticalSliderItem verticalSliderItem;

    /**
     * Sets the up.
     *
     * @param context the new up
     * @throws Exception the exception
     */
    @BeforeEach
    public void setUp(AemContext context) throws Exception {
        context.load().json("/content/jlr/verticalslider/verticalslideritem.json", "/content/jlr/verticalslideritem.html");
        Resource resource = context.resourceResolver().getResource("/content/jlr/verticalslideritem.html");
        verticalSliderItem = resource.adaptTo(VerticalSliderItem.class);
    }

    /**
     * Test cta properties.
     */
    @Override
    @Test
    void testCtaProperties() {
        List<CTAPojo> list = verticalSliderItem.getCtaList();
        assertEquals(1, list.size());
    }
}
