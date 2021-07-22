package com.jlr.core.internal.models.v1;

import com.jlr.core.models.PrimaryNavLeftCTATwoModel;
import io.wcm.testing.mock.aem.junit5.AemContext;
import io.wcm.testing.mock.aem.junit5.AemContextExtension;
import org.apache.sling.api.resource.Resource;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;

import static org.junit.jupiter.api.Assertions.assertEquals;

@ExtendWith(AemContextExtension.class)
public class PrimaryNavLeftCTATwoModelImplTest {

    private PrimaryNavLeftCTATwoModel primaryNavLeftCTATwoModel;

    /**
     * Sets the up.
     *
     * @param context the new up
     * @throws Exception the exception
     */
    @BeforeEach
    public void setUp(AemContext context) throws Exception {
        context.load().json("/content/jlr/primaryNav/primaryNavLeftCTATwo.json", "/content/jlr/primaryNavLeftCTATwo.html");
        Resource resource = context.resourceResolver().getResource("/content/jlr/primaryNavLeftCTATwo.html");
        primaryNavLeftCTATwoModel = resource.adaptTo(PrimaryNavLeftCTATwoModelImpl.class);
    }

    /**
     * Test properties.
     */
    @Test
    void testProperties() {
        assertEquals("Leftpane_cta_arialabel", primaryNavLeftCTATwoModel.getLeftPaneCtaAriaLabelTwo());
        assertEquals("https://ctalink", primaryNavLeftCTATwoModel.getLeftPaneCtaLinkTwo());
        assertEquals("Leftpane_cta_target",primaryNavLeftCTATwoModel.getLeftPaneCtaTargetTwo());
        assertEquals("Leftpane_cta_text", primaryNavLeftCTATwoModel.getLeftPaneCtaTextTwo());
    }
}
