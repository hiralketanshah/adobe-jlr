package com.jlr.core.internal.models.v1;

import static org.junit.jupiter.api.Assertions.*;

import java.util.List;

import org.apache.sling.api.resource.Resource;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;

import com.jlr.core.models.HeroTitleBannerModel;
import com.jlr.core.pojos.CTAPojo;

import io.wcm.testing.mock.aem.junit5.AemContext;
import io.wcm.testing.mock.aem.junit5.AemContextExtension;

/**
 * The Class HeroTitleBannerModelTest.
 */
@ExtendWith(AemContextExtension.class)
class HeroTitleBannerModelTest {
	
	/** The hero title banner model. */
	private HeroTitleBannerModel heroTitleBannerModel;
	
	/**
	 * Sets the up.
	 *
	 * @param context the new up
	 */
	@BeforeEach
    public void setup(AemContext context) {
        context.load().json("/content/jlr/heroTitleBanner/heroTitleBanner.json", "/content/jlr/heroTitleBanner.html");
        Resource resource = context.resourceResolver().getResource("/content/jlr/heroTitleBanner.html");
        heroTitleBannerModel = resource.adaptTo(HeroTitleBannerImpl.class);
    }
	
	/**
	 * Test properties.
	 */
	@Test
    void testProperties() {
		List<CTAPojo> list = heroTitleBannerModel.getCtaList();
        assertEquals(1, list.size());
        list.forEach(item -> {
            assertEquals("test_text", item.getText());
            assertEquals("http://www.google.com", item.getLink());
            assertEquals("_self", item.getTarget());
            assertEquals("primary",item.getLinkType());
        });
    }

}
