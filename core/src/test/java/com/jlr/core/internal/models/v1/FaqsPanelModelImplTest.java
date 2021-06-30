package com.jlr.core.internal.models.v1;


import com.jlr.core.models.FaqsPanelModel;
import com.jlr.core.pojos.FAQsPanel;
import io.wcm.testing.mock.aem.junit5.AemContext;
import io.wcm.testing.mock.aem.junit5.AemContextExtension;
import org.apache.sling.api.resource.Resource;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

/**
 * The Class FaqsPanelModelImplTest.
 *
 * @author Adobe
 */
@ExtendWith(AemContextExtension.class)
public class FaqsPanelModelImplTest {

    private FaqsPanelModel faqsPanelModel;

    /**
     * Sets the up.
     *
     * @param context the new up
     * @throws Exception the exception
     */
    @BeforeEach
    public void setUp(AemContext context) throws Exception {
        context.load().json("/content/jlr/faqpanel/faqpanel.json", "/content/jlr/faqpanel.html");
        Resource resource = context.resourceResolver().getResource("/content/jlr/faqpanel.html");
        faqsPanelModel = resource.adaptTo(FaqsPanelModelImpl.class);
    }

    @Test
    void testFaq() {
        List<FAQsPanel> listFaqs = faqsPanelModel.getFaqs();
        assertEquals(3, listFaqs.size());
    }
}
