package com.jlr.core.internal.models.v1;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import javax.inject.Inject;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ValueMap;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.Optional;

import com.jlr.core.constants.CommonConstants;
import com.jlr.core.constants.PricingConstants;
import com.jlr.core.models.PriceConfigModel;
import com.jlr.core.pojos.PriceConfigPojo;

/**
 * The Class PriceConfigModelImpl.
 *
 * @author Adobe
 */
@Model(adaptables = Resource.class, adapters = {
        PriceConfigModel.class }, resourceType = PriceConfigModelImpl.RESOURCE_TYPE)
public class PriceConfigModelImpl implements PriceConfigModel {

    public static final String RESOURCE_TYPE = "jlr/components/pricing/v1/priceconfig";

    @Inject
    @Optional
    private Resource nameplateList;

    /** The list. */
    List<PriceConfigPojo> list = new ArrayList<>();

    @Override
    public List<PriceConfigPojo> getNameplates() {
        if (null != nameplateList && nameplateList.hasChildren()) {
            // get list of nameplates
            Iterator<Resource> childResources = nameplateList.listChildren();
            while (childResources.hasNext()) {
                Resource child = childResources.next();
                ValueMap properties = child.adaptTo(ValueMap.class);
                if (null != properties) {

                    list.add(new PriceConfigPojo(properties.get(PricingConstants.PN_NAMEPLATEID, String.class),
                            properties.get(CommonConstants.PN_MODELYEAR, String.class)));
                }
            }
        }
        return list;
    }

}
