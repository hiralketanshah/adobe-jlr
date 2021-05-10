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
 *
 * @author Adobe
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

    /** The vertical slider. */
    @Inject
    private Resource verticalSlider;

    /** The vertical slider list. */
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
     * (non-Javadoc)
     * 
     * @see com.jlr.core.models.VerticalSliderModel#getDelay()
     */
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
     * (non-Javadoc)
     * 
     * @see com.jlr.core.models.VerticalSliderModel#getAutopauseDisabled()
     */
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
     * (non-Javadoc)
     * 
     * @see com.jlr.core.models.VerticalSliderModel#getPipIcon()
     */
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
     * (non-Javadoc)
     * 
     * @see com.jlr.core.models.VerticalSliderModel#getName()
     */
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
