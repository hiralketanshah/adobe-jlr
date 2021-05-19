package com.jlr.core.internal.models.v1;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.apache.sling.api.resource.Resource;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;

import com.jlr.core.models.QuoteModel;

import io.wcm.testing.mock.aem.junit5.AemContext;
import io.wcm.testing.mock.aem.junit5.AemContextExtension;

/**
 * The Class QuoteModelImplTest.
 */
@ExtendWith(AemContextExtension.class)
class QuoteModelImplTest extends GlobalModelImplTest {

	/** The quote model. */
	private QuoteModel quoteModel;
	
    /**
     * Sets the up.
     *
     * @param context the new up
     */
    @BeforeEach
    public void setup(AemContext context) {
        context.load().json("/content/jlr/quote/quote.json", "/content/jlr/quote.html");
        Resource resource = context.resourceResolver().getResource("/content/jlr/quote.html");
        quoteModel = resource.adaptTo(QuoteModelImpl.class);
    }
    
    /**
     * Test get quote.
     */
    @Test
    void testGetQuote() {
        assertEquals("quote", quoteModel.getQuote());
    }
    
    /**
     * Test get quote author name.
     */
    @Test
    void testGetQuoteAuthorName() {
        assertEquals("name", quoteModel.getQuoteAuthorName());
    }
    
    /**
     * Test get quote title name.
     */
    @Test
    void testGetQuoteTitleName() {
        assertEquals("title", quoteModel.getQuoteTitleName());
    }

}
