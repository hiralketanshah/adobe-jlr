package com.jlr.core.internal.models.v1;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import javax.annotation.PostConstruct;
import javax.inject.Inject;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ValueMap;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.Optional;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;
import org.json.JSONException;
import org.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.jlr.core.models.GenericExternalAppModel;
import com.jlr.core.pojos.ScriptParam;
import com.jlr.core.utils.ErrorUtils;
import com.jlr.core.constants.ErrorUtilsConstants;

/**
 * The Class GenericExternalAppImpl.
 */
@Model(adaptables = Resource.class, adapters = {
		GenericExternalAppModel.class }, resourceType = GenericExternalAppImpl.RESOURCE_TYPE)
public class GenericExternalAppImpl extends GlobalModelImpl implements GenericExternalAppModel {
	
	/** The Constant RESOURCE_TYPE. */
	public static final String RESOURCE_TYPE = "jlr/components/genericexternalapp/v1/genericexternalapp";
	
	/** The logger. */
	private final Logger LOGGER = LoggerFactory.getLogger(this.getClass()); 
	
	/** The container id. */
	@ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String containerId;
	
	/** The script URL. */
	@ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String scriptURL;
	
	/** The consent category. */
	@ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String[] consentCategory;
	
	/** The unconsented header. */
	@ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String unconsentedHeader;
	
	/** The unconsented message. */
	@ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String unconsentedMessage;
	
	/** The cta text. */
	@ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String ctaText;
	
	/** The cta link. */
	@ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String ctaLink;
	
	/** The target. */
	@ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String target;
	
	/** The listed. */
	@ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
	List<ScriptParam> listed= new ArrayList<>();
	
	/** The supress caveat. */
	@ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String supressCaveat;
	
	/** The script param. */
	@Inject
    @Optional
    private Resource scriptParam;
	
	/** The key value param. */
	public String keyValueParam;
	
	/** The category. */
	public List<String> category=new ArrayList<>();
	
	/**
	 * Inits the.
	 */
	@PostConstruct
	 public void init() {
		 if (scriptParam != null && scriptParam.hasChildren()) {
			 Iterator<Resource> childResources = scriptParam.listChildren();
			 JSONObject keyValueJSON = new JSONObject();
	            while (childResources.hasNext()) {
	                Resource child = childResources.next();
	                ValueMap properties = child.adaptTo(ValueMap.class);
	                try {
	                	keyValueJSON.put(properties.get("keyParam", String.class),properties.get("valueParam", String.class));
					} catch (JSONException e) {
						LOGGER.error(ErrorUtils.createErrorMessage(ErrorUtilsConstants.AEM_JSON_EXCEPTION, ErrorUtilsConstants.TECHNICAL, ErrorUtilsConstants.AEM_SITE,
                            ErrorUtilsConstants.MODULE_SERVICE, this.getClass().getSimpleName(), e));
					}
	                keyValueParam = keyValueJSON.toString();
	            }
	        }
	    }
	
	/**
	 * Gets the container id.
	 *
	 * @return the container id
	 */
	@Override
	public String getContainerId() {
		return containerId;
	}

	/**
	 * Gets the script URL.
	 *
	 * @return the script URL
	 */
	@Override
	public String getScriptURL() {
		return scriptURL;
	}
	
	/**
	 * Gets the consent category.
	 *
	 * @return the consent category
	 */
	@Override
	public String[] getConsentCategory() {
		return consentCategory;
	}
	
	/**
	 * Gets the consent category data.
	 *
	 * @return the consent category data
	 */
	@Override
	public List<String> getConsentCategoryData() {
		for(String consent:consentCategory) {
		category.add('"'+consent.toLowerCase()+'"');
		}
		return category;
	}

	/**
	 * Gets the unconsented header.
	 *
	 * @return the unconsented header
	 */
	@Override
	public String getUnconsentedHeader() {
		return unconsentedHeader;
	}

	/**
	 * Gets the unconsented message.
	 *
	 * @return the unconsented message
	 */
	@Override
	public String getUnconsentedMessage() {
		return unconsentedMessage;
	}

	/**
	 * Gets the cta text.
	 *
	 * @return the cta text
	 */
	@Override
	public String getCtaText() {
		return ctaText;
	}

	/**
	 * Gets the script param.
	 *
	 * @return the script param
	 */
	@Override
	public String getScriptParam() {
		return keyValueParam;
	}
	
	/**
	 * Gets the supress caveat.
	 *
	 * @return the supress caveat
	 */
	@Override
	public String getSupressCaveat() {
		return supressCaveat;
	}
}
