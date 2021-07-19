package com.jlr.core.internal.models.v1;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

import java.util.List;

import com.day.cq.wcm.api.Page;
import com.jlr.core.utils.ComponentPositionUtils;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockedStatic;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;

import com.jlr.core.models.OffersList;
import com.jlr.core.pojos.CTAPojo;

import io.wcm.testing.mock.aem.junit5.AemContext;
import io.wcm.testing.mock.aem.junit5.AemContextExtension;

import javax.jcr.Node;
import javax.jcr.RepositoryException;

/**
 * The Class OfferModelImplTest.
 *
 */
@ExtendWith({ AemContextExtension.class, MockitoExtension.class })
public class OfferModelImplTest extends GlobalModelImplTest {

    /** The OfferModel */
    @InjectMocks
    private OffersModelImpl offersModel;


     @Mock
     private Page currentPage;

     @Mock
     private Node currentNode;
    /*
     * @Mock private InheritanceValueMap pageProperties;
     * 
     * @Mock private TcoService tcoService;
     */

    /**
     * Sets the up.
     *
     * @param context
     *            the new up
     * @throws Exception
     *             the exception
     */
    @BeforeEach
    public void setUp(AemContext context) throws Exception {
        context.registerService(Page.class, currentPage);
        context.registerService(Node.class, currentNode);
        context.load().json("/content/jlr/offers/offers.json", "/content/jlr/offers.html");
        Resource resource = context.resourceResolver().getResource("/content/jlr/offers.html");
        context.currentResource(resource);
        offersModel = context.request().adaptTo(OffersModelImpl.class);
    }

    /**
     * Test properties.
     */
    @Test
    void testProperties() throws RepositoryException {
        assertEquals("test_header_copy", offersModel.getOffersHeaderCopy());
        assertEquals("test_image_reference", offersModel.getOffersImageFileReference());
        when(currentPage.getPath()).thenReturn("/content/jlr/page");
        try (MockedStatic<ComponentPositionUtils> mock = Mockito.mockStatic(ComponentPositionUtils.class)) {
            mock.when(() -> {
                ComponentPositionUtils.getComponentPosition(Mockito.any(String.class), Mockito.any(Node.class),Mockito.any(ResourceResolver.class));
            }).thenReturn(true);
            assertEquals(true,offersModel.getFirstPosition());
        }
    }

    /**
     * Test cta properties.
     */
    @Override
    @Test
    void testCtaProperties() {
        List<CTAPojo> list = offersModel.getCtaList();
        assertEquals(1, list.size());
        list.forEach(item -> {
            assertEquals("test_cta_text", item.getText());
            assertEquals("/content/jlr/au", item.getLink());
            assertEquals("_self", item.getTarget());
            assertEquals("primary", item.getLinkType());
            assertEquals("test_aria_label", item.getAriaLabel());
        });
    }

    @Test
    void testOfferList() {
        List<OffersList> listOffer = offersModel.getOfferList();
        assertEquals(1, listOffer.size());
    }
}
