package com.jlr.core.internal.models.v1;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.apache.sling.api.resource.Resource;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;

import com.jlr.core.models.TabbedContainerModel;

import io.wcm.testing.mock.aem.junit5.AemContext;
import io.wcm.testing.mock.aem.junit5.AemContextExtension;

/**
 * The Class QuoteModelImplTest.
 */
@ExtendWith(AemContextExtension.class)
class TabbedContainerModelTest extends GlobalModelImplTest {

	private TabbedContainerModelImpl tabbedContainerModel;
	
    /**
     * Sets the up.
     *
     * @param context the new up
     */
    @BeforeEach
    public void setup(AemContext context) {
        context.load().json("/content/jlr/tabbedcontainer/tabbedcontainer.json", "/content/jlr/tabbedcontainer.html");
        Resource resource = context.resourceResolver().getResource("/content/jlr/tabbedcontainer.html");
        tabbedContainerModel = resource.adaptTo(TabbedContainerModelImpl.class);
    }
    
    @Test
    void testGetId() {
    	assertEquals("1234", tabbedContainerModel.getId());
    }
    
}
