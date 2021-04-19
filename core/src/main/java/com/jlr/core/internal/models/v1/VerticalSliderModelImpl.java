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
import com.jlr.core.models.VerticalSliderModel;
import com.jlr.core.pojos.CTAPojo;
import com.jlr.core.utils.CtaUtils;


/**
 * The Class VerticalSliderModelImpl.
 */
@Model(adaptables = Resource.class, adapters = {VerticalSliderModel.class}, resourceType = VerticalSliderModelImpl.RESOURCE_TYPE)
public class VerticalSliderModelImpl extends GlobalModelImpl implements VerticalSliderModel {

    /** The Constant RESOURCE_TYPE. */
    public static final String RESOURCE_TYPE = "jlr/components/verticalslider/v1/verticalslider";

    /** The resource resolver. */
    @Inject
    private ResourceResolver resourceResolver;

    /** The pip Icon. */
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String pipIcon;

    /** The carousel delay. */
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private Long delay;

    /** The carousel delay. */
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private Boolean autopauseDisabled;

    /** The cta list. */
    @Inject
    @Optional
    private Resource ctaList;

    /** The list. */
    List<CTAPojo> list = new ArrayList<>();

    /**
     * 
     * /** Gets the cta list.
     *
     * @return the cta list
     */
    @Override
    public List<CTAPojo> getCtaList() {
        if (null != ctaList && ctaList.hasChildren()) {
            list = CtaUtils.createCtaList(ctaList, super.getHeaderCopy(), resourceResolver);
        }
        return list;
    }


    /*
     * Gets the delay between transitions
     * 
     * @return the delay timer
     */
    @Override
    public Long getDelay() {
        return delay;
    }


    /*
     * Gets the autopause state
     * 
     * @return autopausedisabled state
     */
    @Override
    public boolean getAutopauseDisabled() {
        return autopauseDisabled;
    }


    /*
     * Gets the icon type - Default to number
     * 
     * @return the icon type
     */
    @Override
    public String getPipicon() {
        return pipIcon;
    }


}
