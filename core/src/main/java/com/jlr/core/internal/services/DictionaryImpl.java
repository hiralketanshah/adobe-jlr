package com.jlr.core.internal.services;

import com.day.cq.wcm.api.Page;
import com.jlr.core.constants.CommonConstants;
import com.jlr.core.utils.CommonUtils;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.api.resource.ValueMap;
import org.osgi.service.component.annotations.Activate;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.ConfigurationPolicy;
import org.osgi.service.metatype.annotations.Designate;
import com.jlr.core.config.DictionaryConfig;
import com.jlr.core.services.Dictionary;

import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;

/**
 * Service Implementation class for Dictionary service.
 *
 * @author Adobe
 */
@Component(service = Dictionary.class, configurationPolicy = ConfigurationPolicy.REQUIRE)
@Designate(ocd = DictionaryConfig.class)
public class DictionaryImpl implements Dictionary {

    public static final String RESOURCE_TYPE = "jlr/components/siteconfig/v1/siteconfig";

    /** The config. */
    private DictionaryConfig config;

    /**
     * Activate.
     *
     * @param config the config
     */
    @Activate
    public void activate(DictionaryConfig config) {
        if (null != config) {
            this.config = config;
        }
    }

    /**
     * Return the path for default dictionary node.
     *
     * @return the path
     */
    @Override
    public String getPath() {
        return config.getPath();
    }

    /**
     * Gets config map.
     *
     * @param resourceResolver the resource resolver
     * @param resource         the resource
     * @return the config map
     */
    @Override
    public Map<String, String> getConfigMap(ResourceResolver resourceResolver, Resource resource,
                                            Page currentPage) {
            Map<String, String> configMap = new HashMap<>();
            if (null == resource || null == resource.getChild(CommonConstants.NN_CHILD_NODE)) {
                String siteRootPath = CommonUtils.getSiteRootPath(currentPage);

                String dictPath = getPath();
                if (null != siteRootPath) {
                    dictPath = siteRootPath + CommonConstants.JLR_DICTIONARY;
                    if (null == resourceResolver.getResource(dictPath)) {
                        dictPath = getPath();
                    }
                }
                Resource siteConfigRes = getConfigResource(dictPath, resourceResolver);
                if (null != siteConfigRes) {
                    configMap = buildConfigMap(siteConfigRes);
                }
            } else {
                configMap = buildConfigMap(resource);
            }
            return configMap;
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
     * Gets the config resource.
     *
     * @param dictPath the dict path
     * @return the config resource
     */
    private Resource getConfigResource(String dictPath, ResourceResolver resourceResolver) {
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
