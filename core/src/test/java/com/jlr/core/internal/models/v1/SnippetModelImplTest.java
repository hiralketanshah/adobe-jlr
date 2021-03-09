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

@ExtendWith(AemContextExtension.class)
class SnippetModelImplTest {
	

	SnippetModelImpl snippetModel;
	
	private Resource resource;
	
	@BeforeEach
    void setUp(AemContext context) throws Exception {
		context.load().json("/content/jlr/snippet/snippet.json", "/content/jlr/snippet.html");
        resource = context.resourceResolver().getResource("/content/jlr/snippet.html");
        snippetModel = resource.adaptTo(SnippetModelImpl.class);
    }


	@Test
	void testGetLinks() {
		List<CTAPojo> ctaList = snippetModel.getCtaList();
        assertEquals(1, ctaList.size());
        ctaList.forEach(item -> {
            assertEquals("Find out more", item.getText());
            assertEquals("/content/jlr/au", item.getLink());
            assertEquals("_blank", item.getTarget());
            assertEquals("primary", item.getLinkType());
        });

	}
}
