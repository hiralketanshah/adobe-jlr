package com.jlr.core.internal.models.v1;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.List;

import org.apache.sling.api.resource.Resource;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;

import com.jlr.core.pojos.CTAPojo;

import io.wcm.testing.mock.aem.junit5.AemContext;
import io.wcm.testing.mock.aem.junit5.AemContextExtension;

/**
 * The Class SpecsGlanceModelImplTest.
 */
@ExtendWith(AemContextExtension.class)
class SpecsGlanceModelImplTest extends GlobalModelImplTest {

	/** The specs glance model. */
	SpecsGlanceModelImpl specsGlanceModel;

    /** The resource. */
    private Resource resource;

    /**
     * Sets the up.
     *
     * @param context
     *            the new up
     * @throws Exception
     *             the exception
     */
    @BeforeEach
    void setUp(AemContext context) throws Exception {
        context.load().json("/content/jlr/specsglance/specsglance.json", "/content/jlr/specsglance.html");
        resource = context.resourceResolver().getResource("/content/jlr/specsglance.html");
        specsGlanceModel = resource.adaptTo(SpecsGlanceModelImpl.class);
    }

    /**
     * Test get data items.
     */
    @Test
    void testGetDataItems() {
        List<SpecsGlanceItem> specsGlance = specsGlanceModel.getDataItems();
        assertEquals(1, specsGlance.size());
        specsGlance.forEach(item -> {
            assertEquals("prefix", item.getPrefix());
            assertEquals("suffix", item.getSuffix());
            assertEquals("777", item.getValue());
            assertEquals("headerCopy", item.getHeaderCopy());
            assertEquals("copy", item.getCopy());
        });

    }
    
    /**
     * Test get cta list.
     */
    @Test
    void testGetCtaList() {
    	List<CTAPojo> ctaList = specsGlanceModel.getCtaList();
        assertEquals(1, ctaList.size());
        ctaList.forEach(item -> {
            assertEquals("Find out more", item.getText());
            assertEquals("/content/jlr/au", item.getLink());
            assertEquals("_blank", item.getTarget());
            assertEquals("primary", item.getLinkType());
            assertEquals("icon-360-view", item.getIcon());
        });
    }
}
