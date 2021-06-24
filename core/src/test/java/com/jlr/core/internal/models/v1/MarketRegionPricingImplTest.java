package com.jlr.core.internal.models.v1;

import com.jlr.core.models.MarketRegionPricingModel;
import com.jlr.core.pojos.StatePojo;
import io.wcm.testing.mock.aem.junit5.AemContext;
import io.wcm.testing.mock.aem.junit5.AemContextExtension;
import org.apache.sling.api.resource.Resource;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

/**
 * The Class MarketRegionPricingImplTest.
 *
 */
@ExtendWith(AemContextExtension.class)
public class MarketRegionPricingImplTest extends GlobalModelImplTest {

    private MarketRegionPricingModel marketRegionPricingModel;

    /**
     * Sets the up.
     *
     * @param context the new up
     * @throws Exception the exception
     */
    @BeforeEach
    public void setUp(AemContext context) throws Exception {
        context.load().json("/content/jlr/marketregionpricing/marketregionpricing.json", "/content/jlr/marketregionpricing.html");
        Resource resource = context.resourceResolver().getResource("/content/jlr/marketregionpricing.html");
        marketRegionPricingModel = resource.adaptTo(MarketRegionPricingImpl.class);
    }

    @Test
    void testStateList() {
        List<StatePojo> listState = marketRegionPricingModel.getStateList();
        assertEquals(2, listState.size());
    }
}
