package com.jlr.core.internal.models.v1;

import static org.junit.jupiter.api.Assertions.*;

import java.util.List;

import org.apache.sling.api.resource.Resource;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;

import com.jlr.core.pojos.HygieneLinks;
import io.wcm.testing.mock.aem.junit5.AemContext;
import io.wcm.testing.mock.aem.junit5.AemContextExtension;

@ExtendWith(AemContextExtension.class)
class HygieneLinkListImplTest {

	HygieneLinkListImpl hygienelinksModel;
	
	private Resource resource;
	
	@BeforeEach
    void setUp(AemContext context) throws Exception {
		context.load().json("/content/jlr/hygienelinks/hygienelinks.json", "/content/jlr/hygienelinks.html");
        resource = context.resourceResolver().getResource("/content/jlr/hygienelinks.html");
        hygienelinksModel = resource.adaptTo(HygieneLinkListImpl.class);
    }


	@Test
	void testGetLinks() {
		List<HygieneLinks> hygienelinksList = hygienelinksModel.getHygienelinksList();
        assertEquals(1, hygienelinksList.size());
        hygienelinksList.forEach(item -> {
            assertEquals("Facebook", item.getText());
            assertEquals("https://www.google.com", item.getLink());
            assertEquals("_self", item.getTarget());
        });

	}

}
