package com.jlr.core.internal.models.v1;

import java.util.Random;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

import com.jlr.core.models.SiteNotificationModel;

@Model(adaptables = Resource.class, adapters = {SiteNotificationModel.class}, resourceType = SiteNotificationModelImpl.RESOURCE_TYPE)
public class SiteNotificationModelImpl extends GlobalModelImpl implements SiteNotificationModel {
	
	public static final String RESOURCE_TYPE = "jlr/components/sitenotification/v1/sitenotification";
	
	@ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String closeButtonCopy;
	
	@ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String closeButtonArialabel;
	
	@ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String id;

	@Override
	public String getId() {
		if(id==null) {
			Random rnd = new Random();
		    int uniqueID = rnd.nextInt(999999);
		    return String.format("%06d", uniqueID);
		}
		return id;
	}

	@Override
	public String getCloseButtonCopy() {
		return closeButtonCopy;
	}

	@Override
	public String getCloseButtonArialabel() {
		return closeButtonArialabel;
	}

}
