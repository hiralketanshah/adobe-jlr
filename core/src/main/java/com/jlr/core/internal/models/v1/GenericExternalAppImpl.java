package com.jlr.core.internal.models.v1;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import javax.annotation.PostConstruct;
import javax.inject.Inject;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.api.resource.ValueMap;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.Optional;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

import com.jlr.core.models.GenericExternalAppModel;
import com.jlr.core.pojos.ScriptParam;
import com.jlr.core.utils.LinkUtils;

@Model(adaptables = Resource.class, adapters = {
		GenericExternalAppModel.class }, resourceType = GenericExternalAppImpl.RESOURCE_TYPE)
public class GenericExternalAppImpl extends GlobalModelImpl implements GenericExternalAppModel {
	
	public static final String RESOURCE_TYPE = "jlr/components/genericexternalapp/v1/genericexternalapp";
	
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
	List<ScriptParam> list= new ArrayList<>();
	
	@Inject
    @Optional
    private Resource scriptParam;
	
	@Inject
    private ResourceResolver resourceResolver;
	
	@PostConstruct
	 public void init() {
		 if (scriptParam != null && scriptParam.hasChildren()) {
			 Iterator<Resource> childResources = scriptParam.listChildren();
	            while (childResources.hasNext()) {
	                Resource child = childResources.next();
	                ValueMap properties = child.adaptTo(ValueMap.class);
	                list.add(new ScriptParam(properties.get("keyParam", String.class),
	                		properties.get("valueParam", String.class)));
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
	public String getCtaLink() {
		return LinkUtils.appendLinkExtension(ctaLink, resourceResolver);
	}

	@Override
	public String getTarget() {
		return target;
	}

	@Override
	public List<ScriptParam> getScriptParam() {
		return list;
	}
}
