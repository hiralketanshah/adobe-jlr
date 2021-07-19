package com.jlr.core.internal.models.v1;

import com.jlr.core.models.PrimaryNavLeftCTAModel;
import io.wcm.testing.mock.aem.junit5.AemContext;
import io.wcm.testing.mock.aem.junit5.AemContextExtension;
import org.apache.sling.api.resource.Resource;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;

import static org.junit.jupiter.api.Assertions.assertEquals;

@ExtendWith(AemContextExtension.class)
public class PrimaryNavLeftCTAModelImplTest {

    private PrimaryNavLeftCTAModel primaryNavLeftCTAModel;

    /**
     * Sets the up.
     *
     * @param context the new up
     * @throws Exception the exception
     */
    @BeforeEach
    public void setUp(AemContext context) throws Exception {
        context.load().json("/content/jlr/primaryNav/primaryNavLeftCta.json", "/content/jlr/primaryNavLeftCta.html");
        Resource resource = context.resourceResolver().getResource("/content/jlr/primaryNavLeftCta.html");
        primaryNavLeftCTAModel = resource.adaptTo(PrimaryNavLeftCTAModelImpl.class);
    }

    /**
     * Test properties.
     */
    @Test
    void testProperties() {
        assertEquals("Leftpane_cta_arialabel", primaryNavLeftCTAModel.getLeftPaneCtaAriaLabelOne());
        assertEquals("https://ctalink", primaryNavLeftCTAModel.getLeftPaneCtaLinkOne());
        assertEquals("Leftpane_cta_target",primaryNavLeftCTAModel.getLeftPaneCtaTargetOne());
        assertEquals("Leftpane_cta_text", primaryNavLeftCTAModel.getLeftPaneCtaTextOne());
    }
}
