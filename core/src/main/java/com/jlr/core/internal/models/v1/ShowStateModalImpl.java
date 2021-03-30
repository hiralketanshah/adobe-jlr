package com.jlr.core.internal.models.v1;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import javax.inject.Inject;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ValueMap;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.Optional;

import com.jlr.core.models.ShowStateModalModel;
import com.jlr.core.pojos.StatePojo;

/**
 * The Class ArticleModelImpl.
 */
@Model(adaptables = Resource.class, adapters = {
        ShowStateModalModel.class }, resourceType = ShowStateModalImpl.RESOURCE_TYPE)
public class ShowStateModalImpl extends GlobalModelImpl implements ShowStateModalModel {

    /** The Constant RESOURCE_TYPE. */
    public static final String RESOURCE_TYPE = "jlr/components/showstatemodal/v1/showstatemodal";

    /** The state list. */
    @Inject
    @Optional
    private Resource stateList;

    /**
     * Gets the state list.
     *
     * @return the state list
     */
    @Override
    public List<StatePojo> getStateList() {
        List<StatePojo> list = new ArrayList<>();
        if (null != stateList && stateList.hasChildren()) {
            Iterator<Resource> childResources = stateList.listChildren();
            while (childResources.hasNext()) {
                Resource child = childResources.next();
                ValueMap properties = child.adaptTo(ValueMap.class);
                if (null != properties) {
                    list.add(new StatePojo(properties.get("stateName", String.class),
                            properties.get("stateValue", String.class)));
                }
            }
        }
        return list;
    }
}
