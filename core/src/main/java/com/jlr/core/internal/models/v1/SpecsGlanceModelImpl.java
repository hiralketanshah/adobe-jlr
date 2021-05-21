package com.jlr.core.internal.models.v1;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import javax.inject.Inject;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.Optional;

import com.jlr.core.models.SpecsGlanceModel;
import com.jlr.core.pojos.CTAPojo;
import com.jlr.core.utils.CtaUtils;


/**
 * The Class SpecsGlanceModelImpl.
 *
 * @author Adobe
 */
@Model(adaptables = Resource.class, adapters = {SpecsGlanceModel.class}, resourceType = SpecsGlanceModelImpl.RESOURCE_TYPE)
public class SpecsGlanceModelImpl extends GlobalModelImpl implements SpecsGlanceModel {

    /** The Constant RESOURCE_TYPE. */
    public static final String RESOURCE_TYPE = "jlr/components/specsglance/v1/specsglance";
    
    /** The resource resolver. */
    @Inject
    private ResourceResolver resourceResolver;
    
    /** The cta list. */
    @Inject
    @Optional
    private Resource ctaList;

    /** The list. */
    List<CTAPojo> list = new ArrayList<>();

    /** The Specs At A Glance Data item list. */
    @Inject
    @Optional
    private Resource dataItems;

	 List<SpecsGlanceItem> specsGlanceItems = new ArrayList<>();

    /**
     * 
     * /** Specs At A Glance Data item list.
     *
     * @return the Specs Glance Data item list
     */
    @Override
    public List<SpecsGlanceItem> getDataItems() {
    	specsGlanceItems = new ArrayList<>();
        if (null != dataItems && dataItems.hasChildren()) {
            Iterator<Resource> iterator = dataItems.getChildren().iterator();
            while (iterator.hasNext()) {
                Resource item = iterator.next();
                SpecsGlanceItem vsItem = item.adaptTo(SpecsGlanceItem.class);
                specsGlanceItems.add(vsItem);
            }
        }
        return specsGlanceItems;
    }


    /**
     * 
     * /** Gets the cta list.
     *
     * @return the cta list
     */
    public List<CTAPojo> getCtaList() {
        if (null != ctaList && ctaList.hasChildren()) {
            list = CtaUtils.createCtaList(ctaList, super.getHeaderCopy(), resourceResolver);
        }
        return list;
    }
    public int getCount() {
    	return specsGlanceItems.size();
    }
}
