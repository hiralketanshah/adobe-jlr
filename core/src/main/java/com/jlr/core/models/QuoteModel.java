package com.jlr.core.models;

import org.apache.commons.lang.StringUtils;

/**
 * The Interface QuoteModel.
 */
public interface QuoteModel {
	
	/**
	 * Gets the quote.
	 *
	 * @return the quote
	 */
	default String getQuote() {
        return StringUtils.EMPTY;
    }
	
	/**
	 * Gets the quote author name.
	 *
	 * @return the quote author name
	 */
	default String getQuoteAuthorName() {
        return StringUtils.EMPTY;
    }
	
	/**
	 * Gets the quote title name.
	 *
	 * @return the quote title name
	 */
	default String getQuoteTitleName() {
        return StringUtils.EMPTY;
    }

}
