package com.jlr.core.internal.models.v1;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

import com.jlr.core.models.QuoteModel;

/**
 * The Class QuoteModelImpl.
 */
@Model(adaptables = Resource.class, adapters = {QuoteModel.class}, resourceType = QuoteModelImpl.RESOURCE_TYPE,
defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class QuoteModelImpl extends GlobalModelImpl implements QuoteModel{
	
	/** The Constant RESOURCE_TYPE. */
	public static final String RESOURCE_TYPE = "jlr/components/quote/v1/quote";
	
	/** The quote. */
	@ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String quote;
	
	/** The quote author name. */
	@ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String quoteAuthorName;
	
	/** The quote title name. */
	@ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String quoteTitleName;

	/**
	 * Gets the quote.
	 *
	 * @return the quote
	 */
	@Override
	public String getQuote() {
		return quote;
	}

	/**
	 * Gets the quote author name.
	 *
	 * @return the quote author name
	 */
	@Override
	public String getQuoteAuthorName() {
		return quoteAuthorName;
	}

	/**
	 * Gets the quote title name.
	 *
	 * @return the quote title name
	 */
	@Override
	public String getQuoteTitleName() {
		return quoteTitleName;
	}

}
