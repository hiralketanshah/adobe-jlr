package com.jlr.core.models;

import java.util.ArrayList;

import java.util.Iterator;
import java.util.List;

import javax.inject.Inject;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.Optional;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

import com.jlr.core.internal.models.v1.GlobalModelImpl;
import com.jlr.core.internal.models.v1.SeatSliderItem;

/**
 * Implementation class for SeatSliderModel
 * @author Adobe
 *
 */
@Model(adaptables = Resource.class, adapters = {SeatSliderModel.class}, resourceType = SeatSliderModelImpl.RESOURCE_TYPE)
public class SeatSliderModelImpl extends GlobalModelImpl implements SeatSliderModel {
	
    public static final String RESOURCE_TYPE = "jlr/components/seatslider/v1/seatslider";

	@ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String folderPath;

    @Inject
    @Optional
    private Resource seatSliderList;
    
    /**
     * Return list of Seat Items
     */
	@Override
	public List<SeatSliderItem> getSeatSliderItems() {
		List<SeatSliderItem> itemList = new ArrayList<>();
        if (null != seatSliderList && seatSliderList.hasChildren()) {
            Iterator<Resource> iterator = seatSliderList.getChildren().iterator();
            while (iterator.hasNext()) {
                Resource item = iterator.next();
                SeatSliderItem vsItem = item.adaptTo(SeatSliderItem.class);
                itemList.add(vsItem);
            }
        }
        return itemList;
    }

    /**
     * Return list of folder path of seat images
     */
	@Override
	public String getFolderPath() {
		return folderPath;
	}
}
