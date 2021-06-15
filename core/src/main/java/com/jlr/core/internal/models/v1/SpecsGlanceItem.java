package com.jlr.core.internal.models.v1;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

/**
 * The Class SpecsGlanceItem.
 *
 * @author Adobe
 */
@Model(adaptables = Resource.class, adapters = {SpecsGlanceItem.class})
public class SpecsGlanceItem extends GlobalModelImpl {
    /** Data prefix. */
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String prefix;
    
    /** Data suffix. */
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String suffix;

    /** Data value. */
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String value;

	public String getPrefix() {
		return prefix;
	}

	public String getSuffix() {
		return suffix;
	}

	public String getValue() {
		return value;
	}
    
    
}
