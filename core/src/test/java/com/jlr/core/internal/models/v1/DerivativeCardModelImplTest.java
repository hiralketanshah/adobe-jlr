package com.jlr.core.internal.models.v1;

import com.jlr.core.models.DerivativeCardModel;
import com.jlr.core.pojos.CTAPojo;
import com.jlr.core.pojos.DerivativeEnginePojo;
import io.wcm.testing.mock.aem.junit5.AemContext;
import io.wcm.testing.mock.aem.junit5.AemContextExtension;
import org.apache.sling.api.resource.Resource;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

/**
 * The Class DerivativeCardModelImplTest.
 *
 * @author Adobe
 */
@ExtendWith(AemContextExtension.class)
public class DerivativeCardModelImplTest extends GlobalModelImplTest{

    private DerivativeCardModel derivativeCardModel;

    /**
     * Sets the up.
     *
     * @param context the new up
     * @throws Exception the exception
     */
    @BeforeEach
    void setUp(AemContext context) {
        context.load().json("/content/jlr/derivativeCard/derivativeCard.json", "/content/jlr/derivativeCard.html");
        Resource resource = context.resourceResolver().getResource("/content/jlr/derivativeCard.html");
        derivativeCardModel = resource.adaptTo(DerivativeCardModelImpl.class);
    }

    /**
     * Test properties.
     */
    @Test
    void testProperties() {
        assertEquals("test_caveat", derivativeCardModel.getCaveat());
        assertEquals("test_feature_label", derivativeCardModel.getFeatureLabel());
        assertEquals("test_left_column", derivativeCardModel.getLeftColumn());
        derivativeCardModel.setPrice("test_price");
        assertEquals("test_price", derivativeCardModel.getPrice());
        derivativeCardModel.setPriceConfigValue("test_price_config_value");
        assertEquals("test_price_config_value", derivativeCardModel.getPriceConfigValue());
        assertEquals("test_right_column", derivativeCardModel.getRightColumn());
        assertEquals("test_specs_at_glance_heading", derivativeCardModel.getSpecsAtaGlanceHeading());
        assertEquals(true, derivativeCardModel.getOverride());
    }

    /**
     * Test cta properties.
     */
    @Override
    @Test
    void testCtaProperties() {
        List<CTAPojo> list = derivativeCardModel.getCtaList();
        assertEquals(1, list.size());
        list.forEach(item -> {
            assertEquals("test_cta_text", item.getText());
            assertEquals("/content/jlr/au", item.getLink());
            assertEquals("_self", item.getTarget());
            assertEquals("primary", item.getLinkType());
            assertEquals("test_aria_label", item.getAriaLabel());
        });
    }

    @Test
    void testEngineNames() {
        List<String> listEngineNames = derivativeCardModel.getEngineNames();
        assertEquals(2, listEngineNames.size());
    }

    @Test
    void testEngineDataList() {
        List<DerivativeEnginePojo> listEngineNames = derivativeCardModel.getEngineDataList();
        assertEquals(2, listEngineNames.size());
    }
}
