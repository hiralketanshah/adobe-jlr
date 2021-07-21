package com.jlr.core.internal.models.v1;

import com.jlr.core.models.PrimaryNavImageTxtModel;
import io.wcm.testing.mock.aem.junit5.AemContext;
import io.wcm.testing.mock.aem.junit5.AemContextExtension;
import org.apache.sling.api.resource.Resource;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;

import static org.junit.jupiter.api.Assertions.assertEquals;

/**
 * The Class PrimaryNavImageTxtModelImplTest.
 *
 */
@ExtendWith(AemContextExtension.class)
public class PrimaryNavImageTxtModelImplTest {

    private PrimaryNavImageTxtModel primaryNavImageTxtModel;

    /**
     * Sets the up.
     *
     * @param context the new up
     * @throws Exception the exception
     */
    @BeforeEach
    public void setUp(AemContext context) throws Exception {
        context.load().json("/content/jlr/primaryNav/primaryNavImageText.json", "/content/jlr/primaryNavImageText.html");
        Resource resource = context.resourceResolver().getResource("/content/jlr/primaryNavImageText.html");
        primaryNavImageTxtModel = resource.adaptTo(PrimaryNavImageTxtModelImpl.class);
    }

    /**
     * Test properties.
     */
    @Test
    void testProperties() {
        assertEquals("fileReferance_Img_Text", primaryNavImageTxtModel.getFileReferenceImageTxt());
        assertEquals("Rightpane_body_copy", primaryNavImageTxtModel.getRightPaneBodyCopy());
        assertEquals("Rightpane_cta_arialabel",primaryNavImageTxtModel.getRightPaneCopyCtaAriaLabel());
        assertEquals("https://ctalink", primaryNavImageTxtModel.getRightPaneCopyCtaLink());
        assertEquals("Rightpane_cta_target", primaryNavImageTxtModel.getRightPaneCopyCtaTarget());
        assertEquals("Rightpane_cta_text", primaryNavImageTxtModel.getRightPaneCopyCtaText());
        assertEquals("Rightpane_heade_copy", primaryNavImageTxtModel.getRightPaneHeaderCopy());
        assertEquals("Rightpane_image_text", primaryNavImageTxtModel.getRightPaneImageTextAlt());
    }
}
