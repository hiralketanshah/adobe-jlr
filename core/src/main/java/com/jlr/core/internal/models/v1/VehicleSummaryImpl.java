package com.jlr.core.internal.models.v1;

import java.util.ArrayList;
import java.util.List;

import javax.inject.Inject;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.Optional;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

import com.jlr.core.models.VehicleSummaryModel;
import com.jlr.core.pojos.CTAPojo;
import com.jlr.core.utils.CtaUtils;

/**
 * The Class VehicleSummaryImpl.
 */
@Model(adaptables = Resource.class, adapters = {
        VehicleSummaryModel.class }, resourceType = VehicleSummaryImpl.RESOURCE_TYPE)
public class VehicleSummaryImpl extends GlobalModelImpl implements VehicleSummaryModel {

    /** The Constant RESOURCE_TYPE. */
    public static final String RESOURCE_TYPE = "jlr/components/vehiclesummary/v1/vehiclesummary";

    /** The resource resolver. */
    @Inject
    private ResourceResolver resourceResolver;

    /** The header copy. */
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String headerCopy;

    /** The cta list. */
    @Inject
    @Optional
    private Resource ctaList;

    /** The price. */
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String price;

    /** The list. */
    List<CTAPojo> list = new ArrayList<>();

    /**
     * Gets the cta list.
     *
     * @return the cta list
     */
    @Override
    public List<CTAPojo> getCtaList() {
        if (null != ctaList && ctaList.hasChildren()) {
            list = CtaUtils.createCtaList(ctaList, resourceResolver);
        }
        return list;
    }

    /**
     * Gets the price.
     *
     * @return the price
     */
    @Override
    public String getPrice() {
        return price;
    }
}