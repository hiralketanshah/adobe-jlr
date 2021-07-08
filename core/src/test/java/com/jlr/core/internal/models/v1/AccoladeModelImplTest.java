package com.jlr.core.internal.models.v1;

import static org.junit.jupiter.api.Assertions.assertEquals;

import com.day.cq.wcm.api.Page;
import org.apache.sling.api.resource.Resource;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;

import com.jlr.core.models.AccoladeModel;

import io.wcm.testing.mock.aem.junit5.AemContext;
import io.wcm.testing.mock.aem.junit5.AemContextExtension;
import org.mockito.Mock;

import javax.jcr.Node;

/**
 * The Class AccoladeModelImplTest.
 *
 * @author Adobe
 */
@ExtendWith(AemContextExtension.class)
class AccoladeModelImplTest extends GlobalModelImplTest {

    /** The accolade model. */
    private AccoladeModel accoladeModel;

    @Mock
    private Page currentPage;

    @Mock
    private Node currentNode;

    /**
     * Sets the up.
     *
     * @param context the new up
     * @throws Exception the exception
     */
    @BeforeEach
    void setUp(AemContext context) throws Exception {
        context.registerService(Page.class, currentPage);
        context.registerService(Node.class, currentNode);
        context.load().json("/content/jlr/accolade/accolade.json", "/content/jlr/accolade.html");
        Resource resource = context.resourceResolver().getResource("/content/jlr/accolade.html");
        context.currentResource(resource);
        accoladeModel = context.request().adaptTo(AccoladeModelImpl.class);
    }

    /* (non-Javadoc)
     * @see com.jlr.core.internal.models.v1.GlobalModelImplTest#testImageProperties()
     */
    @Override
    @Test
    void testImageProperties() {
        assertEquals("/content/dam/test.png", accoladeModel.getBackgroundImage());
    }
}
