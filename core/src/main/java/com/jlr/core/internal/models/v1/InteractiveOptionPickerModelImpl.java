package com.jlr.core.internal.models.v1;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import javax.inject.Inject;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.api.resource.ValueMap;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.Optional;
import com.jlr.core.models.InteractiveOptionPickerModel;
import com.jlr.core.pojos.InteractiveOptionPickerItemPojo;

/**
 * The Class InteractiveOptionPickerModel.
 */
@Model(adaptables = Resource.class, adapters = {InteractiveOptionPickerModel.class}, resourceType = InteractiveOptionPickerModelImpl.RESOURCE_TYPE)
public class InteractiveOptionPickerModelImpl extends GlobalModelImpl implements InteractiveOptionPickerModel {

    /** The Constant RESOURCE_TYPE. */
    public static final String RESOURCE_TYPE = "jlr/components/optionpicker/v1/optionpicker";

    /** The list. */
    List<InteractiveOptionPickerItemPojo> optionItemlist = new ArrayList<>();

    /** The resource resolver. */
    @Inject
    private ResourceResolver resourceResolver;

    /** The optionItem . */
    @Inject
    @Optional
    private Resource optionPickerList;

    @Override
    public List<String> getOptionImageList() {
        if (null != optionPickerList && optionPickerList.hasChildren()) {
            optionItemlist = assembleData(optionPickerList);
        }
        return null;
    }

    protected List<InteractiveOptionPickerItemPojo> assembleData(Resource optionItem) {
        List<InteractiveOptionPickerItemPojo> list = new ArrayList<>();
        Iterator<Resource> childResources = optionItem.listChildren();
        while (childResources.hasNext()) {
            Resource child = childResources.next();
            ValueMap properties = child.adaptTo(ValueMap.class);
            if (null != properties) {

            }

        }
        return list;

    }
}
