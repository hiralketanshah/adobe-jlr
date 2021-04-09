package com.jlr.core.internal.models.v1;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.List;

import org.apache.sling.api.resource.Resource;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;

import com.jlr.core.models.ContentBlockContainerModel;
import com.jlr.core.pojos.CTAPojo;

import io.wcm.testing.mock.aem.junit5.AemContext;
import io.wcm.testing.mock.aem.junit5.AemContextExtension;

/**
 * The Class ContentBlockContainerImplTest.
 */
@ExtendWith(AemContextExtension.class)
class ContentBlockContainerImplTest extends GlobalModelImplTest {

    /** The content block container model. */
    private ContentBlockContainerModel contentBlockContainerModel;

    /**
     * Sets the up.
     *
     * @param context
     *            the new up
     */
    @BeforeEach
    public void setup(AemContext context) {
        context.load().json("/content/jlr/contentblockcontainer/contentblockcontainer.json",
                "/content/jlr/contentblockcontainer.html");
        Resource resource = context.resourceResolver().getResource("/content/jlr/contentblockcontainer.html");
        contentBlockContainerModel = resource.adaptTo(ContentBlockContainerImpl.class);
    }

    /**
     * Test properties.
     */
    @Test
    void testProperties() {
        List<CTAPojo> list = contentBlockContainerModel.getCtaList();
        assertEquals(1, list.size());
        list.forEach(item -> {
            assertEquals("test_text", item.getText());
            assertEquals("http://www.google.com", item.getLink());
            assertEquals("_self", item.getTarget());
            assertEquals("primary", item.getLinkType());
        });
    }

    /**
     * Test body copy.
     */
    @Test
    void testBodyCopy() {
        assertEquals("body_copy", contentBlockContainerModel.getBodyCopy());
    }

    /**
     * Test column.
     */
    @Test
    void testColumn() {
        assertEquals("1", contentBlockContainerModel.getColumn());
    }

}
