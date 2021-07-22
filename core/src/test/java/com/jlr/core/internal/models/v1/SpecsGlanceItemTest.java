package com.jlr.core.internal.models.v1;

import io.wcm.testing.mock.aem.junit5.AemContext;
import io.wcm.testing.mock.aem.junit5.AemContextExtension;
import org.apache.sling.api.resource.Resource;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;

import static org.junit.jupiter.api.Assertions.*;

/**
 * The Class SpecsGlanceItemTest.
 *
 * @author Adobe
 */
@ExtendWith(AemContextExtension.class)
class SpecsGlanceItemTest extends GlobalModelImplTest {

    /** The content card model. */
    @InjectMocks
    private SpecsGlanceItem specsGlanceItem;

    /**
     * Sets the up.
     *
     * @param context the new up
     * @throws Exception the exception
     */
    @BeforeEach
    public void setUp(AemContext context) throws Exception {
        context.load().json("/content/jlr/specsglanceitem/specsglanceitem.json", "/content/jlr/specsglanceitem.html");
        Resource resource = context.resourceResolver().getResource("/content/jlr/specsglanceitem.html");
        specsGlanceItem = resource.adaptTo(SpecsGlanceItem.class);
    }
    /**
     * Test properties.
     */
    @Test
    void testProperties() {
        assertEquals("Prefix", specsGlanceItem.getPrefix());
        assertEquals("Suffix", specsGlanceItem.getSuffix());
        assertEquals("77",specsGlanceItem.getValue());
    }
}