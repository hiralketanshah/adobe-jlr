package com.jlr.core.internal.models.v1;

import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import javax.annotation.PostConstruct;
import javax.inject.Inject;

import org.apache.commons.lang.StringUtils;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.api.resource.ValueMap;
import org.apache.sling.models.annotations.Default;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.Optional;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.OSGiService;
import org.apache.sling.models.annotations.injectorspecific.RequestAttribute;

import com.jlr.core.constants.CommonConstants;
import com.jlr.core.models.SiteConfigModel;
import com.jlr.core.services.Dictionary;

/**
 * Model for locale based configurations for website
 * @author Adobe
 *
 */
@Model(adaptables = {SlingHttpServletRequest.class, Resource.class}, adapters = { SiteConfigModel.class })
public class SiteConfigImpl implements SiteConfigModel {

	/** Request Parameter - locale */
	@RequestAttribute(injectionStrategy=InjectionStrategy.OPTIONAL)
	@Default(values=CommonConstants.DEFAULT_LOCALE)
	String locale;

	/** Request Parameter - List of Keys */
	@RequestAttribute(injectionStrategy=InjectionStrategy.OPTIONAL)
	List<String> keys;

	/** Request Parameter - if fallback en locale to be used?*/
	@Default(booleanValues=true)
	@RequestAttribute(injectionStrategy=InjectionStrategy.OPTIONAL)
	boolean fallback;

	/** The resource resolver. */
	@Inject
	private ResourceResolver resourceResolver;

	@OSGiService
	private Dictionary dictionary;

	@Inject
	@Optional
	Resource resource;

	Map<String, String> configMap = new HashMap<>();
	Map<String, String> fallbackMap = new HashMap<>();

	@PostConstruct
	public void init() {
		if(null == resource || null == resource.getChild(CommonConstants.NN_CHILD_NODE) ) {
			if(StringUtils.isEmpty(locale)) {
				locale = CommonConstants.DEFAULT_LOCALE;
			}
			String configPath = CommonConstants.JLR_CONTENT_PATH + locale + dictionary.getPath();

			Resource siteConfigRes  = resourceResolver.getResource(configPath);
			if(siteConfigRes!= null) {
				configMap = buildConfigMap(siteConfigRes);
			}
			// build fallback configuration map if local is not en and fallback is true
			if(fallback && !locale.equals(CommonConstants.DEFAULT_LOCALE)) {
				String defaultPath = CommonConstants.JLR_CONTENT_PATH + CommonConstants.DEFAULT_LOCALE + dictionary.getPath();
				Resource defaultConfigRes = resourceResolver.getResource(defaultPath);
				if(defaultConfigRes != null) {
					fallbackMap = buildConfigMap(siteConfigRes);
				}
			}

		} else {
			configMap = buildConfigMap(resource);
		}	
	}

	/**
	 * Build Configuration map Based on Configuration Resource
	 * @param configRes
	 * @return
	 */
	private Map<String, String> buildConfigMap(Resource configRes) {

		Map<String, String> configMap = new HashMap<>();
		Resource configList = configRes.getChild(CommonConstants.NN_CHILD_NODE);
		if(configList!= null) {
			Iterator<Resource> childResItr = configList.listChildren();
			while (childResItr.hasNext()) {
				Resource childRes = childResItr.next();
				ValueMap childPropMap = childRes.adaptTo(ValueMap.class);
				if(childPropMap != null) {
					String key = childPropMap.get(CommonConstants.PN_CONFIG_KEY, String.class);
					String value = childPropMap.get(CommonConstants.PN_CONFIG_VALUE, String.class);
					configMap.put(key, value);
				}
			}
		}
		return configMap;
	}

	/**
	 * Return Configuration Map for List of Key passed in parameter
	 */
	@Override
	public Map<String, String> getConfigMap() {
		if(keys != null && keys.size()>0) {
			Map<String, String> keyMap = new HashMap<>();
			for(String key : keys) {
				keyMap.put(key, configMap.get(key));
			}
			return keyMap;
		}
		return configMap;
	}

	/**
	 * Return Configuration value for Single Key
	 */
	@Override
	public String getConfigValue() {
		if(keys!= null && keys.size() == 1) {
			if(null == configMap.get(keys.get(0)) && fallback) {
				return fallbackMap.get(keys.get(0));
			} else {
				return configMap.get(keys.get(0));
			}
		}
		return null;	
	}
}
