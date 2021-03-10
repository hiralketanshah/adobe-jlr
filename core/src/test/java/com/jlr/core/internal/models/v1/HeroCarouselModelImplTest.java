package com.jlr.core.internal.models.v1;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.List;

import org.apache.sling.api.resource.Resource;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;

import com.jlr.core.models.HeroCarouselModel;
import com.jlr.core.pojos.CTAPojo;

import io.wcm.testing.mock.aem.junit5.AemContext;
import io.wcm.testing.mock.aem.junit5.AemContextExtension;

/**
 * The Class HeroCarouselModelImplTest.
 */
@ExtendWith(AemContextExtension.class)
class HeroCarouselModelImplTest {
	
	/** The hero carousel model. */
	private HeroCarouselModel heroCarouselModel;
	
	/**
	 * Sets the up.
	 *
	 * @param context the new up
	 */
	@BeforeEach
    public void setup(AemContext context) {
        context.load().json("/content/jlr/herocarousel/herocarousel.json", "/content/jlr/herocarousel.html");
        Resource resource = context.resourceResolver().getResource("/content/jlr/herocarousel.html");
        heroCarouselModel = resource.adaptTo(HeroCarouselModelImpl.class);
    }
	
	/**
	 * Test properties.
	 */
	@Test
    void testProperties() {
		assertEquals("description_test", heroCarouselModel.getDescription());
		assertEquals(true, heroCarouselModel.getEnableTco());
		List<CTAPojo> list = heroCarouselModel.getCtaList();
        assertEquals(1, list.size());
        list.forEach(item -> {
            assertEquals("test_text", item.getText());
            assertEquals("http://www.google.com", item.getLink());
            assertEquals("_self", item.getTarget());
            assertEquals("primary",item.getLinkType());
        });
        
    }

}
