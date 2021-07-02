package com.jlr.core.internal.models.v1;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.List;

import org.apache.sling.api.resource.Resource;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;

import com.jlr.core.models.ReadyToGoBarModel;
import com.jlr.core.pojos.CTAPojo;

import io.wcm.testing.mock.aem.junit5.AemContext;
import io.wcm.testing.mock.aem.junit5.AemContextExtension;

/**
 * The Class ReadyToGoBarTest.
 *
 * @author Adobe
 */
@ExtendWith(AemContextExtension.class)
class ReadyToGoBarTest extends GlobalModelImplTest {

    /** The ready to go bar model. */
    private ReadyToGoBarModel readyToGoBarModel;

    /**
     * Sets the up.
     *
     * @param context
     *            the new up
     */
    @BeforeEach
    public void setup(AemContext context) {
        context.load().json("/content/jlr/readytogobar/readytogobar.json", "/content/jlr/readytogobar.html");
        Resource resource = context.resourceResolver().getResource("/content/jlr/readytogobar.html");
        readyToGoBarModel = resource.adaptTo(ReadyToGoBarImpl.class);
    }

    @Test
    void testProperties(){
        assertEquals("true",readyToGoBarModel.getEnableFAB());
        assertEquals("true",readyToGoBarModel.getHideDesktop());
        assertEquals("true",readyToGoBarModel.getHideMobile());
        assertEquals("true",readyToGoBarModel.getHideTablet());
        assertEquals("listdefault",readyToGoBarModel.getListType());
    }
    /**
     * Test rtgb properties.
     */
    @Test
    void testRtgbProperties() {
        List<CTAPojo> list = readyToGoBarModel.getRtgb();
        assertEquals(1, list.size());
        list.forEach(item -> {
            assertEquals("/content/jlr/au", item.getLink());
            assertEquals("_blank", item.getTarget());
            assertEquals("description", item.getCopy());
            assertEquals("link text", item.getText());
            assertEquals("icon", item.getIcon());
            assertEquals("primary", item.getLinkType());
        });
    }
    @Test
    void testFabOverride() {
        List<CTAPojo> list = readyToGoBarModel.getFaboverride();
        assertEquals(1, list.size());
        list.forEach(item -> {
            assertEquals("/content/jlr/au", item.getLink());
            assertEquals("_blank", item.getTarget());
            assertEquals("description", item.getCopy());
            assertEquals("link text", item.getText());
            assertEquals("icon", item.getIcon());
            assertEquals("primary", item.getLinkType());
        });
    }

}
