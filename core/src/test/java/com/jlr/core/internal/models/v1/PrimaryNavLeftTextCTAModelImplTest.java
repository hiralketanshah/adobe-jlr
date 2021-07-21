package com.jlr.core.internal.models.v1;

import com.jlr.core.models.PrimaryNavLeftTextCTAModel;
import io.wcm.testing.mock.aem.junit5.AemContext;
import io.wcm.testing.mock.aem.junit5.AemContextExtension;
import org.apache.sling.api.resource.Resource;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;

import static org.junit.jupiter.api.Assertions.assertEquals;

@ExtendWith(AemContextExtension.class)
public class PrimaryNavLeftTextCTAModelImplTest {

    private PrimaryNavLeftTextCTAModel primaryNavLeftTextCTAModel;

    /**
     * Sets the up.
     *
     * @param context the new up
     * @throws Exception the exception
     */
    @BeforeEach
    public void setUp(AemContext context) throws Exception {
        context.load().json("/content/jlr/primaryNav/primaryNavLeftTextCTA.json", "/content/jlr/primaryNavLeftTextCTA.html");
        Resource resource = context.resourceResolver().getResource("/content/jlr/primaryNavLeftTextCTA.html");
        primaryNavLeftTextCTAModel = resource.adaptTo(PrimaryNavLeftTextCTAModelImpl.class);
    }

    /**
     * Test properties.
     */
    @Test
    void testProperties() {
        assertEquals("Leftpane_cta_arialabel", primaryNavLeftTextCTAModel.getLeftPaneCopyCtaAriaLabel());
        assertEquals("icon-arrow-right", primaryNavLeftTextCTAModel.getLeftPaneCopyCtaIcon());
        assertEquals("https://ctalink",primaryNavLeftTextCTAModel.getLeftPaneCopyCtaLink());
        assertEquals("primary", primaryNavLeftTextCTAModel.getLeftPaneCopyCtaLinkType());
        assertEquals("Leftpane_cta_target", primaryNavLeftTextCTAModel.getLeftPaneCopyCtaTarget());
        assertEquals("Leftpane_cta_text", primaryNavLeftTextCTAModel.getLeftPaneCopyCtaText());
    }
}
