package com.jlr.core.internal.models.v1;

import com.jlr.core.constants.CommonConstants;
import com.jlr.core.models.SearchConfigModel;
import org.apache.commons.lang.StringUtils;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ValueMap;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.Optional;

import javax.inject.Inject;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;

/**
 * The type Search config model.
 */
@Model(adaptables = Resource.class, adapters = {
        SearchConfigModel.class }, resourceType = SearchConfigModelImpl.RESOURCE_TYPE)
public class SearchConfigModelImpl implements SearchConfigModel {

    /**
     * The constant RESOURCE_TYPE.
     */
    public static final String RESOURCE_TYPE = "jlr/components/searchconfig/v1/searchconfig";

    /** The exclusion. */
    @Inject
    @Optional
    private Resource exclusion;

    /** The priority. */
    @Inject
    @Optional
    private Resource priority;

    @Override
    public Map<String, String> getExclusion() {
        return getResourceMap(exclusion, CommonConstants.PN_PATHS_TO_EXCLUDE, CommonConstants.PN_INCLUDE_CHILD_PAGES);
    }

    @Override
    public Map<String, String> getPriority() {
        return getResourceMap(priority, CommonConstants.PN_PRIORITY_PATHS, CommonConstants.PN_PRIORITY);
    }

    /** Gets resource map. */
    private Map<String, String> getResourceMap(Resource resource, String pathProperty, String otherProperty) {
        Map<String, String> finalMap = new HashMap<>();
        Iterator<Resource> pathResources = resource.listChildren();
        while (pathResources.hasNext()) {
            Resource child = pathResources.next();
            ValueMap properties = child.adaptTo(ValueMap.class);
            if(null!=properties){
                String pathValue = properties.get(pathProperty, String.class);
                String otherValue = properties.get(otherProperty, String.class);
                if(StringUtils.isNotEmpty(pathValue)) {
                    finalMap.put(pathValue, otherValue);
                }
            }
        }
        return finalMap;
    }

}
