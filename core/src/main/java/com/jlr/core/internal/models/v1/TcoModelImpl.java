package com.jlr.core.internal.models.v1;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import javax.inject.Inject;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ValueMap;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.Optional;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

import com.jlr.core.constants.CommonConstants;
import com.jlr.core.models.TcoModel;

/**
 * The Class TcoModelImpl.
 */
@Model(adaptables = Resource.class, adapters = { TcoModel.class }, resourceType = TcoModelImpl.RESOURCE_TYPE)
public class TcoModelImpl extends GlobalModelImpl implements TcoModel {

    /** The Constant RESOURCE_TYPE. */
    public static final String RESOURCE_TYPE = "jlr/components/tco/v1/tco";

    /** The price. */
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String price;

    /** The price desc symbol. */
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String priceDescSymbol;
    
    /** The price suffix. */
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String priceSuffix;
    
    /** The view type. */
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String viewType;
    
    /** The emission head. */
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String emissionHead;
    
    /** The emission body. */
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String emissionBody;
    
    /** The lease label. */
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String leaseLabel;
    
    /** The lease price. */
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String leasePrice;
    
    /** The caveat list. */
    @Inject
    @Optional
    private Resource caveatList;

    /** The list. */
    List<String> caveats = new ArrayList<>();

    /**
     * Gets the price.
     *
     * @return the price
     */
    @Override
	public String getPrice() {
		return price;
	}
    
    /**
     * Gets the price desc symbol.
     *
     * @return the price desc symbol
     */
    @Override
	public String getPriceDescSymbol() {
		return priceDescSymbol;
	}
    
    /**
     * Gets the price suffix.
     *
     * @return the price suffix
     */
    @Override
	public String getPriceSuffix() {
		return priceSuffix;
	}
    
    /**
     * Gets the view type.
     *
     * @return the view type
     */
    @Override
	public String getViewType() {
		return viewType;
	}
    
    /**
     * Gets the emission head.
     *
     * @return the emission head
     */
    @Override
	public String getEmissionHead() {
		return emissionHead;
	}
    
    /**
     * Gets the emission body.
     *
     * @return the emission body
     */
    @Override
	public String getEmissionBody() {
		return emissionBody;
	}
    
    /**
     * Gets the lease label.
     *
     * @return the lease label
     */
    @Override
	public String getLeaseLabel() {
		return leaseLabel;
	}
    
    /**
     * Gets the lease price.
     *
     * @return the lease price
     */
    @Override
	public String getLeasePrice() {
		return leasePrice;
	}
    
    /**
     * Gets the caveats.
     *
     * @return the caveats
     */
    @Override
	public List<String> getCaveats() {
    	List<String> list = new ArrayList<>();
        if (null != caveatList && caveatList.hasChildren()) {
            Iterator<Resource> childResources = caveatList.listChildren();
            while (childResources.hasNext()) {
                Resource child = childResources.next();
                ValueMap properties = child.adaptTo(ValueMap.class);
                list.add(properties.get(CommonConstants.PN_CTA_TEXT, String.class));
            }
        }
		return list;
	}
}
