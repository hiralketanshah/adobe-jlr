package com.jlr.core.internal.models.v1;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import javax.inject.Inject;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.Optional;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;
import com.jlr.core.models.VerticalSliderModel;


/**
 * The Class VerticalSliderModelImpl.
 */
@Model(adaptables = Resource.class, adapters = {VerticalSliderModel.class}, resourceType = VerticalSliderModelImpl.RESOURCE_TYPE)
public class VerticalSliderModelImpl extends GlobalModelImpl implements VerticalSliderModel {

    /** The Constant RESOURCE_TYPE. */
    public static final String RESOURCE_TYPE = "jlr/components/verticalslider/v1/verticalslider";

    /** The pip Icon. */
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String pipIcon;

    /** The carousel delay. */
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private Long delay;

    /** The carousel delay. */
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private Boolean autopauseDisabled;

    @Inject
    private Resource verticalSlider;

    @Inject
    @Optional
    private Resource verticalSliderList;

    /** The list. */
    List<VerticalSliderItem> verticalSliderItems = new ArrayList<>();

    /**
     * 
     * /** Gets the cta list.
     *
     * @return the cta list
     */
    @Override
    public List<VerticalSliderItem> getVerticalSliderItems() {
        verticalSliderItems = new ArrayList<>();
        if (null != verticalSliderList && verticalSliderList.hasChildren()) {
            Iterator<Resource> iterator = verticalSliderList.getChildren().iterator();
            while (iterator.hasNext()) {
                Resource item = iterator.next();
                VerticalSliderItem vsItem = item.adaptTo(VerticalSliderItem.class);
                verticalSliderItems.add(vsItem);
            }
        }
        return verticalSliderItems;
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
    public String getPipIcon() {
        return pipIcon;
    }

    /*
     * Gets slider resource Node name
     * 
     * @return the resource name
     */
    @Override
    public String getName() {
        return verticalSlider.getName();
    }

}
