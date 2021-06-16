package com.jlr.core.internal.models.v1;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;
/*
 * Seat Slider Item Class - Hold the configuration of Seat
 */
@Model(adaptables = Resource.class, adapters = {SeatSliderItem.class})
public class SeatSliderItem extends GlobalModelImpl {
	
	@ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String title;
    
	@ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String value;

	@ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
	private boolean format;

	/*
	 * Return the title of Seat tab
	 */
	public String getTitle() {
		return title;
	}

	/*
	 * Return the Seat Configuration value
	 */
	public String getValue() {
		return value;
	}

	public boolean getFormat() {
		return format;
	}

}
