package com.jlr.core.internal.models.v1;

import static org.junit.jupiter.api.Assertions.*;

import java.util.List;

import org.apache.sling.api.resource.Resource;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;


import com.jlr.core.models.ReadyToGoBarModel;
import com.jlr.core.pojos.ReadyToGoBar;

import io.wcm.testing.mock.aem.junit5.AemContext;
import io.wcm.testing.mock.aem.junit5.AemContextExtension;

@ExtendWith(AemContextExtension.class)
class ReadyToGoBarTest {
	
	private ReadyToGoBarModel readyToGoBarModel;

	@BeforeEach
    public void setup(AemContext context) {
        context.load().json("/content/jlr/readytogobar/readytogobar.json", "/content/jlr/readytogobar.html");
        Resource resource = context.resourceResolver().getResource("/content/jlr/readytogobar.html");
        readyToGoBarModel = resource.adaptTo(ReadyToGoBarImpl.class);
    }
	
	@Test
    void testRtgbProperties() {
        List<ReadyToGoBar> list = readyToGoBarModel.getRtgb();
        assertEquals(1, list.size());
        list.forEach(item -> {
            assertEquals("/content/jlr/au", item.getLink());
            assertEquals("_blank", item.getTarget());
            assertEquals("description", item.getDescription());
            assertEquals("link text", item.getText());
            assertEquals("alternate text", item.getImgAltText());
            assertEquals("/content/dam/core-components-examples/library/sample-assets/lava-into-ocean.jpg", item.getFileReference());
        });
    }

}
