package com.jlr.core.internal.models.v1;

import static org.junit.jupiter.api.Assertions.*;

import java.util.List;

import org.apache.sling.api.resource.Resource;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;

import com.jlr.core.models.SocialLinksModel;
import com.jlr.core.pojos.SocialLinks;

import io.wcm.testing.mock.aem.junit5.AemContext;
import io.wcm.testing.mock.aem.junit5.AemContextExtension;

/**
 * The Class SocialLinksImplTest.
 *
 * @author Adobe
 */
@ExtendWith(AemContextExtension.class)
class SocialLinksImplTest extends GlobalModelImplTest {

	/** The sociallinks model. */
	SocialLinksModel sociallinksModel;
	
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
		context.load().json("/content/jlr/sociallinks/sociallinks.json", "/content/jlr/sociallinks.html");
        resource = context.resourceResolver().getResource("/content/jlr/sociallinks.html");
        sociallinksModel = resource.adaptTo(SocialLinksModel.class);
    }

	
	/**
	 * Test get social links.
	 */
	@Test
	void testGetSocialLinks() {
		List<SocialLinks> sociallinks = sociallinksModel.getSocialLinks();
        assertEquals(1, sociallinks.size());
        sociallinks.forEach(item -> {
            assertEquals("Facebook", item.getText());
            assertEquals("https://www.google.com", item.getLink());
            assertEquals("_self", item.getTarget());
            assertEquals("social_facebook", item.getSocialicon());
        });

	}

}
