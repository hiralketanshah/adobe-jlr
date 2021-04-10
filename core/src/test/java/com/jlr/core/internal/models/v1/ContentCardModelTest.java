package com.jlr.core.internal.models.v1;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.List;

import org.apache.sling.api.resource.Resource;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;

import com.jlr.core.models.ContentCardListModel;
import com.jlr.core.models.ContentCardModel;
import com.jlr.core.pojos.CTAPojo;

import io.wcm.testing.mock.aem.junit5.AemContext;
import io.wcm.testing.mock.aem.junit5.AemContextExtension;

/**
 * The Class ContentCardModelTest.
 */
@ExtendWith(AemContextExtension.class)
class ContentCardModelTest extends GlobalModelImplTest {

    /** The content card model. */
    private ContentCardModel contentCardModel;

    /**
     * Sets the up.
     *
     * @param context
     *            the new up
     */
    @BeforeEach
    public void setup(AemContext context) {
        context.load().json("/content/jlr/contentcard/contentcard.json", "/content/jlr/contentcard.html");
        Resource resource = context.resourceResolver().getResource("/content/jlr/contentcard.html");
        contentCardModel = resource.adaptTo(ContentCardImpl.class);
    }

    /**
     * Test properties.
     */
    @Test
    void testProperties() {
        List<ContentCardListModel> list = contentCardModel.getContentCardList();
        assertEquals(1, list.size());
        list.forEach(item -> {
            assertEquals("https://google.com", item.getImageLink());
            assertEquals("imageAlt", item.getImageAlt());
            assertEquals("04-04-2021", item.getDate());
            assertEquals("$98.05", item.getPrice());
            assertEquals("headerCopy", item.getHeaderCopy());
            assertEquals("copy", item.getCopy());
            assertEquals("video", item.getAssestType());
            List<CTAPojo> cta = item.getCtaList();
            assertEquals(1, list.size());
            cta.forEach(item1 -> {
            	assertEquals("text", item1.getText());
            	assertEquals("https://google.com", item1.getLink());
            	assertEquals("_blank", item1.getTarget());
            	assertEquals("primary", item1.getLinkType());
            });
        });
    }
    
    /**
     * Test contentcontainer CTA.
     */
    @Test
    void testContentcontainerCTA() {
        List<CTAPojo> list = contentCardModel.getCtaList();
        assertEquals(1, list.size());
        list.forEach(item -> {
        	assertEquals("text", item.getText());
        	assertEquals("https://google.com", item.getLink());
        	assertEquals("_blank", item.getTarget());
        	assertEquals("primary", item.getLinkType());
        });
        }

    /**
     * Test column.
     */
    @Test
    void testColumn() {
        assertEquals("2", contentCardModel.getColumn());
    }

}
