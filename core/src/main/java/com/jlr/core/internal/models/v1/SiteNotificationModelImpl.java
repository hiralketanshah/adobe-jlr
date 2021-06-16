package com.jlr.core.internal.models.v1;

import java.util.Random;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

import com.jlr.core.models.SiteNotificationModel;

/**
 * The Class SiteNotificationModelImpl.
 */
@Model(adaptables = Resource.class, adapters = {SiteNotificationModel.class}, resourceType = SiteNotificationModelImpl.RESOURCE_TYPE)
public class SiteNotificationModelImpl extends GlobalModelImpl implements SiteNotificationModel {
	
	/** The Constant RESOURCE_TYPE. */
	public static final String RESOURCE_TYPE = "jlr/components/sitenotification/v1/sitenotification";
	
	/** The close button copy. */
	@ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String closeButtonCopy;
	
	/** The close button arialabel. */
	@ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String closeButtonArialabel;
	
	/** The id. */
	@ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String id;
	
	/** The component URL. */
	@ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String componentURL;

	/**
	 * Gets the id.
	 *
	 * @return the id
	 */
	@Override
	public String getId() {
		if(id==null) {
			Random rnd = new Random();
		    int uniqueID = rnd.nextInt(999999);
		    return String.format("%06d", uniqueID);
		}
		return id;
	}

	/**
	 * Gets the close button copy.
	 *
	 * @return the close button copy
	 */
	@Override
	public String getCloseButtonCopy() {
		return closeButtonCopy;
	}

	/**
	 * Gets the close button arialabel.
	 *
	 * @return the close button arialabel
	 */
	@Override
	public String getCloseButtonArialabel() {
		return closeButtonArialabel;
	}
	
	/**
	 * Gets the component URL.
	 *
	 * @return the component URL
	 */
	@Override
	public String getComponentURL() {
		return componentURL;
	}

}
