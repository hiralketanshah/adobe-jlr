package com.jlr.core.internal.models.v1;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import javax.annotation.PostConstruct;
import javax.inject.Inject;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.api.resource.ValueMap;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.Optional;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

import com.jlr.core.constants.CommonConstants;
import com.jlr.core.models.FullWidthImageModel;
import com.jlr.core.pojos.CTAPojo;
import com.jlr.core.utils.CtaUtils;
import com.jlr.core.utils.LinkUtils;

/**
 * The Class FullWidthImageImpl.
 */
@Model(adaptables = Resource.class, adapters = {
		FullWidthImageModel.class }, resourceType = FullWidthImageImpl.RESOURCE_TYPE)
public class FullWidthImageImpl extends GlobalModelImpl implements FullWidthImageModel {
	
	/** The Constant RESOURCE_TYPE. */
	public static final String RESOURCE_TYPE = "jlr/components/fullwidthimage/v1/fullwidthimage";
	
	/** The cta list. */
    @Inject
    @Optional
    private Resource ctaList;

    /** The resource resolver. */
    @Inject
    private ResourceResolver resourceResolver;

    /** The list. */
    List<CTAPojo> list = new ArrayList<>();
    
    /** The body copy. */
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String bodyCopy;



	/**
     * Inits the.
     */
    @PostConstruct
    public void init() {
        if (null != ctaList && ctaList.hasChildren()) {
            list =  CtaUtils.createCtaList(ctaList, resourceResolver);
            }
    }

   
    /**
     * Gets the cta list.
     *
     * @return the cta list
     */
    @Override
    public List<CTAPojo> getCtaList() {
        return list;
    }
    
    /**
     * Gets the body copy.
     *
     * @return the body copy
     */
    @Override
    public String getBodyCopy() {
		return bodyCopy;
	}

}
