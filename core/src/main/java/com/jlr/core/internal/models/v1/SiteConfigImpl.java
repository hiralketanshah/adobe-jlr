package com.jlr.core.internal.models.v1;

import static com.jlr.core.constants.CommonConstants.JLR_LOCALE_PRICING;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import javax.annotation.PostConstruct;
import javax.inject.Inject;
import javax.servlet.http.Cookie;
import org.apache.commons.lang3.StringUtils;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.Optional;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.OSGiService;
import org.apache.sling.models.annotations.injectorspecific.RequestAttribute;
import org.apache.sling.models.annotations.injectorspecific.ScriptVariable;
import com.jlr.core.constants.CommonConstants;
import com.jlr.core.models.SiteConfigModel;
import com.jlr.core.services.Dictionary;

/**
 * Model for locale based configurations for website.
 *
 * @author Adobe
 */
@Model(adaptables = {SlingHttpServletRequest.class, Resource.class}, adapters = {SiteConfigModel.class})
public class SiteConfigImpl implements SiteConfigModel {

    /** The Constant RESOURCE_TYPE. */
    private static final String RESOURCE_TYPE = "jlr/components/siteconfig/v1/siteconfig";

    /** Request Parameter - List of Keys. */
    @RequestAttribute(injectionStrategy = InjectionStrategy.OPTIONAL)
    List<String> keys;

    /** Request Parameter -Single Key. */
    @RequestAttribute(injectionStrategy = InjectionStrategy.OPTIONAL)
    String key;

    /** The resource resolver. */
    @Inject
    private ResourceResolver resourceResolver;

    @Inject
    private SlingHttpServletRequest request;

    /** The dictionary. */
    @OSGiService
    private Dictionary dictionary;

    /** The current page. */
    @ScriptVariable
    protected com.day.cq.wcm.api.Page currentPage;

    /** The resource. */
    @Inject
    @Optional
    Resource resource;

    /** The config map. */
    Map<String, String> configMap = new HashMap<>();

    /**
     * Inits the.
     */
    @PostConstruct
    public void init() {
        configMap = dictionary.getConfigMap(resourceResolver, resource, currentPage);
    }

    /**
     * Return Configuration Map for List of Key passed in parameter.
     *
     * @return the config map
     */
    @Override
    public Map<String, String> getConfigMap() {
        Map<String, String> keyMap = new HashMap<>();
        if (null != keys || null != key) {
            if (null != keys && keys.isEmpty()) {
                keyMap = getMap(keys);
            }
            if (null != key) {
                List<String> list = Arrays.asList(key.split(CommonConstants.COMMA));
                keyMap = getMap(list);
            }
            return keyMap;
        }
        return configMap;
    }

    /**
     * Gets the map.
     *
     * @param listOfKeys the list of keys
     * @return the map
     */
    private Map<String, String> getMap(List<String> listOfKeys) {
        Cookie stateCookie = request.getCookie(CommonConstants.JLR_LOCALE_PRICING);
        String state = StringUtils.EMPTY;
        if (null != stateCookie) {
            state = stateCookie.getValue();
        }

        if (null == state) {
            state = null != request.getAttribute(JLR_LOCALE_PRICING) ? request.getAttribute(JLR_LOCALE_PRICING).toString() : StringUtils.EMPTY;
        }
        Map<String, String> keyMap = new HashMap<>();
        for (String configKey : listOfKeys) {
            if (null != configMap.get(configKey)) {
                if ((currentPage.getPath().contains("aus/") || currentPage.getPath().contains("en_au")) && StringUtils.isNotBlank(state)) {
                    if (configKey.equalsIgnoreCase("marketregionpricing.dxnav.selectregion")) {
                        keyMap.put(configKey, configMap.get("marketregionpricing.dxnav.changeregion").replace("{state}", state.toUpperCase()));
                    } else {
                        keyMap.put(configKey, configMap.get(configKey).replace("{state}", state.toUpperCase()));
                    }
                } else {
                    keyMap.put(configKey, configMap.get(configKey));
                }
            }
        }
        return keyMap;
    }

    /**
     * Return Configuration value for Single Key.
     *
     * @return the config value
     */
    @Override
    public String getConfigValue() {

        if (null != configMap.get(key)) {
            return configMap.get(key);
        }

        return null;
    }

}

