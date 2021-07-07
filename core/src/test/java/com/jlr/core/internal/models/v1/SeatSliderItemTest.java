package com.jlr.core.internal.models.v1;

import io.wcm.testing.mock.aem.junit5.AemContext;
import io.wcm.testing.mock.aem.junit5.AemContextExtension;
import org.apache.sling.api.resource.Resource;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;

import static org.junit.jupiter.api.Assertions.assertEquals;

/**
 * The Class SeatSliderItemTest.
 *
 */
@ExtendWith(AemContextExtension.class)
public class SeatSliderItemTest extends GlobalModelImplTest {

    private SeatSliderItem seatSliderItem;


    /**
     * Sets the up.
     *
     * @param context the new up
     * @throws Exception the exception
     */
    @BeforeEach
    public void setUp(AemContext context) throws Exception {
        context.load().json("/content/jlr/seatslideritem/seatslideritem.json", "/content/jlr/seatslideritem.html");
        Resource resource = context.resourceResolver().getResource("/content/jlr/seatslideritem.html");
        seatSliderItem = resource.adaptTo(SeatSliderItem.class);
    }

    /**
     * Test properties.
     */
    @Test
    void testProperties() {
        assertEquals("Title", seatSliderItem.getTitle());
        assertEquals("Value", seatSliderItem.getValue());
    }

}
