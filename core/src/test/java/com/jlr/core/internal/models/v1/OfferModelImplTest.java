package com.jlr.core.internal.models.v1;

import com.day.cq.commons.inherit.InheritanceValueMap;
import com.day.cq.wcm.api.Page;
import com.jlr.core.models.OffersList;
import com.jlr.core.models.OffersModel;
import com.jlr.core.pojos.CTAPojo;
import com.jlr.core.services.TcoService;
import io.wcm.testing.mock.aem.junit5.AemContext;
import io.wcm.testing.mock.aem.junit5.AemContextExtension;
import org.apache.sling.api.resource.Resource;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.*;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.lenient;

/**
 * The Class OfferModelImplTest.
 *
 */
@ExtendWith({AemContextExtension.class, MockitoExtension.class})
public class OfferModelImplTest extends GlobalModelImplTest {

    /** The OfferModel */
    @InjectMocks
    private OffersModelImpl offersModel;


   /* @Mock
    private Page currentPage;

    @Mock
    private InheritanceValueMap pageProperties;

    @Mock
    private TcoService tcoService;*/

    /**
     * Sets the up.
     *
     * @param context the new up
     * @throws Exception the exception
     */
    @BeforeEach
    public void setUp(AemContext context) throws Exception {

        context.load().json("/content/jlr/offers/offers.json", "/content/jlr/offers.html");
        Resource resource = context.resourceResolver().getResource("/content/jlr/offers.html");
        offersModel = resource.adaptTo(OffersModelImpl.class);
    }

    /**
     * Test properties.
     */
    @Test
    void testProperties() {
        assertEquals("test_header_copy", offersModel.getOffersHeaderCopy());
        assertEquals("test_image_reference", offersModel.getOffersImageFileReference());
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