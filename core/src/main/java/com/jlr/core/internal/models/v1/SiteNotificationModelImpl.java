package com.jlr.core.internal.models.v1;

import java.security.SecureRandom;

import javax.annotation.PostConstruct;
import javax.inject.Inject;

import org.apache.commons.lang3.StringUtils;
import org.apache.sling.api.resource.ModifiableValueMap;
import org.apache.sling.api.resource.PersistenceException;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.SlingObject;
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
	
	/** The cookie rentention. */
	@ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String cookieRentention;
	
	/** The component URL. */
	@ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String componentURL;
	
	/** The resource resolver. */
	@Inject
    private ResourceResolver resourceResolver;
	
	/** The Generatedunique ID. */
	private String GenerateduniqueID;
	
	/** The resource. */
	@SlingObject
	private Resource resource;
	
	/**
	 * Inits the.
	 *
	 * @throws PersistenceException the persistence exception
	 */
	@PostConstruct
    public void init() throws PersistenceException {
		if(StringUtils.isEmpty(id)) {
		ModifiableValueMap valuemap= resource.adaptTo(ModifiableValueMap.class);
		SecureRandom rnd = new SecureRandom();
		int uniqueID = rnd.nextInt(999999);
		GenerateduniqueID= String.format("%06d", uniqueID);
		if(valuemap!= null) {
			valuemap.put("id", GenerateduniqueID);
		}
		resourceResolver.commit();
		}
	}

	/**
	 * Gets the id.
	 *
	 * @return the id
	 */
	@Override
	public String getId() {
		if(StringUtils.isEmpty(id)) {
			return GenerateduniqueID;
		}
		return id;
	}
	
	/**
	 * Gets the cookie rentention.
	 *
	 * @return the cookie rentention
	 */
	@Override
	public String getCookieRentention() {
		return cookieRentention;
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
