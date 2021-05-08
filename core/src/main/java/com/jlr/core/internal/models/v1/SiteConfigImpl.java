package com.jlr.core.internal.models.v1;

import java.util.Arrays;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import javax.annotation.PostConstruct;
import javax.inject.Inject;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.api.resource.ValueMap;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.Optional;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.OSGiService;
import org.apache.sling.models.annotations.injectorspecific.RequestAttribute;
import org.apache.sling.models.annotations.injectorspecific.ScriptVariable;
import com.jlr.core.constants.CommonConstants;
import com.jlr.core.models.SiteConfigModel;
import com.jlr.core.services.Dictionary;
import com.jlr.core.utils.CommonUtils;

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
        if (null == resource || null == resource.getChild(CommonConstants.NN_CHILD_NODE)) {
            String siteRootPath = CommonUtils.getSiteRootPath(currentPage);

            String dictPath = dictionary.getPath();
            if (null != siteRootPath) {
                dictPath = siteRootPath + CommonConstants.JLR_DICTIONARY;
                if (null == resourceResolver.getResource(dictPath)) {
                    dictPath = dictionary.getPath();
                }
            }
            Resource siteConfigRes = getConfigResource(dictPath);
            if (null != siteConfigRes) {
                configMap = buildConfigMap(siteConfigRes);
            }
        } else {
            configMap = buildConfigMap(resource);
        }
    }

    /**
     * Build Configuration map Based on Configuration Resource.
     *
     * @param configRes the config res
     * @return the map
     */
    private Map<String, String> buildConfigMap(Resource configRes) {

        Map<String, String> configurationsMap = new HashMap<>();
        Resource configList = configRes.getChild(CommonConstants.NN_CHILD_NODE);
        if (null != configList) {
            Iterator<Resource> childResItr = configList.listChildren();
            while (childResItr.hasNext()) {
                Resource childRes = childResItr.next();
                ValueMap childPropMap = childRes.adaptTo(ValueMap.class);
                if (null != childPropMap) {
                    String configKey = childPropMap.get(CommonConstants.PN_CONFIG_KEY, String.class);
                    String configValue = childPropMap.get(CommonConstants.PN_CONFIG_VALUE, String.class);
                    configurationsMap.put(configKey, configValue);
                }
            }
        }
        return configurationsMap;
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
        Map<String, String> keyMap = new HashMap<>();
        for (String configKey : listOfKeys) {
            if (null != configMap.get(configKey)) {
                keyMap.put(configKey, configMap.get(configKey));
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

    /**
     * Gets the config resource.
     *
     * @param dictPath the dict path
     * @return the config resource
     */
    private Resource getConfigResource(String dictPath) {
        String rootNodePath = dictPath + CommonConstants.CONTAINER_NODE;
        Resource rootRes = resourceResolver.getResource(rootNodePath);
        if (null != rootRes) {
            Iterator<Resource> childItems = rootRes.getChildren().iterator();
            while (childItems.hasNext()) {
                Resource childItem = childItems.next();
                if (childItem.getResourceType().equalsIgnoreCase(RESOURCE_TYPE)) {
                    return childItem;
                }
            }
        }
        return null;
    }
}
