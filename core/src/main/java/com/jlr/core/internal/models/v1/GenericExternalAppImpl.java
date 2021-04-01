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

@Model(adaptables = Resource.class, adapters = {
		GenericExternalAppModel.class }, resourceType = GenericExternalAppImpl.RESOURCE_TYPE)
public class GenericExternalAppImpl extends GlobalModelImpl implements GenericExternalAppModel {
	
	public static final String RESOURCE_TYPE = "jlr/components/genericexternalapp/v1/genericexternalapp";
	
	private final Logger logger = LoggerFactory.getLogger(this.getClass()); 
	
	@ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String containerId;
	
	@ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String scriptURL;
	
	@ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String[] consentCategory;
	
	@ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String unconsentedHeader;
	
	@ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String unconsentedMessage;
	
	@ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String ctaText;
	
	@ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String ctaLink;
	
	@ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String target;
	
	@ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
	List<ScriptParam> listed= new ArrayList<>();
	
	@Inject
    @Optional
    private Resource scriptParam;
	
	public String keyValueParam;
	
	public List<String> category=new ArrayList<>();
	
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
						e.printStackTrace();
					}
	                keyValueParam = keyValueJSON.toString();
	            }
	        }
	    }
	
	@Override
	public String getContainerId() {
		return containerId;
	}

	@Override
	public String getScriptURL() {
		return scriptURL;
	}
	
	@Override
	public String[] getConsentCategory() {
		return consentCategory;
	}
	
	@Override
	public List<String> getConsentCategoryData() {
		for(String consent:consentCategory) {
		category.add('"'+consent.toLowerCase()+'"');
		}
		return category;
	}

	@Override
	public String getUnconsentedHeader() {
		return unconsentedHeader;
	}

	@Override
	public String getUnconsentedMessage() {
		return unconsentedMessage;
	}

	@Override
	public String getCtaText() {
		return ctaText;
	}

	@Override
	public String getScriptParam() {
		return keyValueParam;
	}
}
