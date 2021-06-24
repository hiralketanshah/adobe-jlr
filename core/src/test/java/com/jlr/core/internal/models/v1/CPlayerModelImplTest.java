package com.jlr.core.internal.models.v1;

import com.jlr.core.models.CPlayerModel;
import com.jlr.core.pojos.CTAPojo;
import io.wcm.testing.mock.aem.junit5.AemContext;
import io.wcm.testing.mock.aem.junit5.AemContextExtension;
import org.apache.sling.api.resource.Resource;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

/**
 * The Class CPlayerModelImplTest.
 *
 */
@ExtendWith(AemContextExtension.class)
public class CPlayerModelImplTest extends GlobalModelImplTest{

    /** The CPlayerModel */
    private CPlayerModel cPlayerModel;

    /**
     * Sets the up.
     *
     * @param context the new up
     * @throws Exception the exception
     */
    @BeforeEach
    public void setUp(AemContext context) throws Exception {
        context.load().json("/content/jlr/cplayer/cplayer.json", "/content/jlr/cplayer.html");
        Resource resource = context.resourceResolver().getResource("/content/jlr/cplayer.html");
        cPlayerModel = resource.adaptTo(CPlayerModelImpl.class);
    }

    /**
     * Test properties.
     */
    @Test
    void testProperties() {
        assertEquals("l1405", cPlayerModel.getNameplateId());
        assertEquals("k22", cPlayerModel.getModelyear());
    }

    /**
     * Test cta properties.
     */
    @Override
    @Test
    void testCtaProperties() {
        List<CTAPojo> list = cPlayerModel.getCtaList();
        assertEquals(1, list.size());
        list.forEach(item -> {
            assertEquals("test_cta_text", item.getText());
            assertEquals("/content/jlr/au", item.getLink());
            assertEquals("_self", item.getTarget());
            assertEquals("primary", item.getLinkType());
            assertEquals("test_aria_label", item.getAriaLabel());
        });
    }
}
