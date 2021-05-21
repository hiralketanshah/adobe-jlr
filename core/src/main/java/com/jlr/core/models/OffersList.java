package com.jlr.core.models;

import javax.inject.Inject;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;

/**
 * The Class OffersList.
 */
@Model(adaptables = Resource.class, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class OffersList {
	
	/** The offer copy. */
	@Inject
    private String offerCopy;
	
	/** The offer prefix. */
	@Inject
    private String offerPrefix;
	
	/** The offer value. */
	@Inject
    private String offerValue;
	
	/** The offer suffix. */
	@Inject
    private String offerSuffix;
	
	/** The offer label. */
	@Inject
    private String offerLabel;
	
	/** The offer details button. */
	@Inject
    private String offerDetailsButton;
	
	/** The offer overlay header. */
	@Inject
    private String offerOverlayHeader;
	
	/** The offer overlay summary. */
	@Inject
    private String offerOverlaySummary;

	/**
	 * Gets the offer copy.
	 *
	 * @return the offer copy
	 */
	public String getOfferCopy() {
		return offerCopy;
	}

	/**
	 * Gets the offer prefix.
	 *
	 * @return the offer prefix
	 */
	public String getOfferPrefix() {
		return offerPrefix;
	}

	/**
	 * Gets the offer value.
	 *
	 * @return the offer value
	 */
	public String getOfferValue() {
		return offerValue;
	}

	/**
	 * Gets the offer suffix.
	 *
	 * @return the offer suffix
	 */
	public String getOfferSuffix() {
		return offerSuffix;
	}

	/**
	 * Gets the offer label.
	 *
	 * @return the offer label
	 */
	public String getOfferLabel() {
		return offerLabel;
	}

	/**
	 * Gets the offer details button.
	 *
	 * @return the offer details button
	 */
	public String getOfferDetailsButton() {
		return offerDetailsButton;
	}

	/**
	 * Gets the offer overlay header.
	 *
	 * @return the offer overlay header
	 */
	public String getOfferOverlayHeader() {
		return offerOverlayHeader;
	}

	/**
	 * Gets the offer overlay summary.
	 *
	 * @return the offer overlay summary
	 */
	public String getOfferOverlaySummary() {
		return offerOverlaySummary;
	}

}
