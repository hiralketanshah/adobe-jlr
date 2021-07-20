package com.jlr.core.internal.models.v1;

import com.jlr.core.models.PrimaryNavQuickLinksModel;
import io.wcm.testing.mock.aem.junit5.AemContext;
import io.wcm.testing.mock.aem.junit5.AemContextExtension;
import org.apache.sling.api.resource.Resource;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;

import static org.junit.jupiter.api.Assertions.assertEquals;

@ExtendWith(AemContextExtension.class)
public class PrimaryNavQuickLinksModelImplTest {

    private PrimaryNavQuickLinksModel primaryNavQuickLinksModel;

    /**
     * Sets the up.
     *
     * @param context the new up
     * @throws Exception the exception
     */
    @BeforeEach
    public void setUp(AemContext context) throws Exception {
        context.load().json("/content/jlr/primaryNav/primaryNavQuickLinks.json", "/content/jlr/primaryNavQuickLinks.html");
        Resource resource = context.resourceResolver().getResource("/content/jlr/primaryNavQuickLinks.html");
        primaryNavQuickLinksModel = resource.adaptTo(PrimaryNavQuickLinksModelImpl.class);
    }

    /**
     * Test properties.
     */
    @Test
    void testProperties() {
        assertEquals("Quick_cta_arialabel", primaryNavQuickLinksModel.getQuickLinksCopyCtaAriaLabel());
        assertEquals("icon-arrow-right", primaryNavQuickLinksModel.getQuickLinksCopyCtaIcon());
        assertEquals("https://ctalink",primaryNavQuickLinksModel.getQuickLinksCopyCtaLink());
        assertEquals("Quick_cta_target", primaryNavQuickLinksModel.getQuickLinksCopyCtaTarget());
        assertEquals("Quick_cta_text", primaryNavQuickLinksModel.getQuickLinksCtaText());
    }
}
