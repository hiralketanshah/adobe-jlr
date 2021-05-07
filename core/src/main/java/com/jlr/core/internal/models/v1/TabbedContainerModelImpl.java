package com.jlr.core.internal.models.v1;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ValueMap;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.Self;

import com.jlr.core.constants.CommonConstants;
import com.jlr.core.models.TabbedContainerModel;

/**
 * The Class TabbedContainerModelImpl.
 */
@Model(adaptables = Resource.class, adapters = {
        TabbedContainerModel.class }, resourceType = TabbedContainerModelImpl.RESOURCE_TYPE)
public class TabbedContainerModelImpl extends GlobalModelImpl implements TabbedContainerModel {

    /**
     * The Constant RESOURCE_TYPE.
     */
    public static final String RESOURCE_TYPE = "jlr/components/tabbedcontainer/v1/tabbedcontainer";

    @Self
    protected Resource resource;

    List<String> listOfTabHeading = new ArrayList<>();

    @Override
    public List<String> getTabHeading() {

        Iterator<Resource> childResources = resource.listChildren();
        while (childResources.hasNext()) {
            Resource child = childResources.next();
            ValueMap properties = child.adaptTo(ValueMap.class);
            if (null != properties) {
                String tabHeading = properties.get(CommonConstants.PN_TAB_HEADING, String.class);
                listOfTabHeading.add(tabHeading);
            }
        }
        return listOfTabHeading;
    }

}