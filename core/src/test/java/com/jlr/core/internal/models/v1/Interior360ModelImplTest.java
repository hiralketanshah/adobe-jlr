package com.jlr.core.internal.models.v1;

import com.jlr.core.models.Interior360Model;
import com.jlr.core.pojos.CTAPojo;
import io.wcm.testing.mock.aem.junit5.AemContext;
import io.wcm.testing.mock.aem.junit5.AemContextExtension;
import org.apache.sling.api.resource.Resource;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

/**
 * The Class Interior360ModelImplTest.
 *
 */
@ExtendWith(AemContextExtension.class)
class Interior360ModelImplTest extends GlobalModelImplTest{

    /** The Interior360ModelImpl */
    private Interior360Model interior360Model;
    /**
     * Sets the up.
     *
     * @param context the new up
     * @throws Exception the exception
     */
    @BeforeEach
    public void setUp(AemContext context) throws Exception {
        context.load().json("/content/jlr/interior360/interior360.json", "/content/jlr/interior360.html");
        Resource resource = context.resourceResolver().getResource("/content/jlr/interior360.html");
        interior360Model = resource.adaptTo(Interior360ModelImpl.class);
    }

    /**
     * Test properties.
     */
    @Test
    void testProperties() {
        assertEquals("/content/dam/landrover", interior360Model.getFolderPath());
    }

    /**
     * Test cta properties.
     */
    @Override
    @Test
    void testCtaProperties() {
        List<CTAPojo> list = interior360Model.getCtaList();
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