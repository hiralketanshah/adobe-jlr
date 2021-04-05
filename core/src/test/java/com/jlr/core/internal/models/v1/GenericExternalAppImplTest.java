package com.jlr.core.internal.models.v1;

import static org.junit.jupiter.api.Assertions.*;

import java.util.List;

import org.apache.sling.api.resource.Resource;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;

import com.jlr.core.models.GenericExternalAppModel;
import io.wcm.testing.mock.aem.junit5.AemContext;
import io.wcm.testing.mock.aem.junit5.AemContextExtension;

/**
 * The Class GenericExternalAppImplTest.
 */
@ExtendWith(AemContextExtension.class)
class GenericExternalAppImplTest {
	
	/** The generic external app model. */
	private GenericExternalAppModel genericExternalAppModel;
	
	/** The resource. */
	private Resource resource;
	
	/**
	 * Sets the up.
	 *
	 * @param context the new up
	 * @throws Exception the exception
	 */
	@BeforeEach
    void setUp(AemContext context) throws Exception {
		context.load().json("/content/jlr/genericexternalapp/genericexternalapp.json", "/content/jlr/genericexternalapp.html");
        resource = context.resourceResolver().getResource("/content/jlr/genericexternalapp.html");
        genericExternalAppModel = resource.adaptTo(GenericExternalAppImpl.class);
    }

	/**
	 * Test get container id.
	 */
	@Test
	void testGetContainerId() {
		assertEquals("GenericExternalApplicationScript",genericExternalAppModel.getContainerId());
	}

	/**
	 * Test get script URL.
	 */
	@Test
	void testGetScriptURL() {
		assertEquals("tpGEA.js",genericExternalAppModel.getScriptURL());
	}

	/**
	 * Test get unconsented header.
	 */
	@Test
	void testGetUnconsentedHeader() {
		assertEquals("INACTIVE COMPONENT",genericExternalAppModel.getUnconsentedHeader());
	}

	/**
	 * Test get unconsented message.
	 */
	@Test
	void testGetUnconsentedMessage() {
		assertEquals("message",genericExternalAppModel.getUnconsentedMessage());
	}

	/**
	 * Test get cta text.
	 */
	@Test
	void testGetCtaText() {
		assertEquals("MANAGE SETTING",genericExternalAppModel.getCtaText());
	}

	/**
	 * Test get supress caveat.
	 */
	@Test
	void testGetSupressCaveat() {
		assertEquals("yes",genericExternalAppModel.getSupressCaveat());
	}
	
	/**
	 * Test get consent category data.
	 */
	@Test
	void testGetConsentCategoryData() {
		List<String> category=genericExternalAppModel.getConsentCategoryData();
		assertEquals(1, category.size());
		category.forEach(item -> {
            assertEquals("\"functional\"", item);
        });
	}
	
	/**
	 * Test get script param.
	 */
	@Test
	void testGetScriptParam() {
		assertEquals("{\"key\":\"value\"}", genericExternalAppModel.getScriptParam());
	}

}
