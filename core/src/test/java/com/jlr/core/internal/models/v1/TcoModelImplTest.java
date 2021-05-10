package com.jlr.core.internal.models.v1;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.List;

import org.apache.sling.api.resource.Resource;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;

import com.jlr.core.models.TcoModel;

import io.wcm.testing.mock.aem.junit5.AemContext;
import io.wcm.testing.mock.aem.junit5.AemContextExtension;

/**
 * The Class TcoModelImplTest.
 *
 * @author Adobe
 */
@ExtendWith(AemContextExtension.class)
class TcoModelImplTest extends GlobalModelImplTest {

    /** The tco model. */
    private TcoModel tcoModel;

    /**
     * Sets the up.
     *
     * @param context
     *            the new up
     */
    @BeforeEach
    public void setup(AemContext context) {
        context.load().json("/content/jlr/tco/tco.json", "/content/jlr/tco.html");
        Resource resource = context.resourceResolver().getResource("/content/jlr/tco.html");
        tcoModel = resource.adaptTo(TcoModelImpl.class);
    }

    /**
     * Test properties.
     */
    @Test
    void testProperties() {
        assertEquals("emission_body", tcoModel.getEmissionBody());
        assertEquals("emission_head", tcoModel.getEmissionHead());
        assertEquals("lease_label", tcoModel.getLeaseLabel());
        assertEquals("lease_price", tcoModel.getLeasePrice());
        assertEquals("test_price", tcoModel.getPrice());
        assertEquals("price_symbol", tcoModel.getPriceDescSymbol());
        assertEquals("price_suffix", tcoModel.getPriceSuffix());
        assertEquals("view_type", tcoModel.getViewType());
        List<String> list = tcoModel.getCaveats();
        assertEquals(1, list.size());
        list.forEach(item -> {
            assertEquals("test_text", item);
        });

    }

}
