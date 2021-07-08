package com.jlr.core.models;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import javax.inject.Inject;
import javax.jcr.Node;
import javax.jcr.RepositoryException;

import com.day.cq.wcm.api.Page;
import com.jlr.core.utils.ComponentPositionUtils;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.Optional;
import org.apache.sling.models.annotations.Via;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

import com.google.gson.JsonArray;
import com.jlr.core.internal.models.v1.GlobalModelImpl;
import com.jlr.core.internal.models.v1.SeatSliderItem;
import com.jlr.core.utils.CommonUtils;
import com.jlr.core.utils.DAMFolderUtils;

/**
 * Implementation class for SeatSliderModel
 * @author Adobe
 *
 */
@Model(adaptables = {Resource.class, SlingHttpServletRequest.class}, adapters = {SeatSliderModel.class}, resourceType = SeatSliderModelImpl.RESOURCE_TYPE)
public class SeatSliderModelImpl extends GlobalModelImpl implements SeatSliderModel {

	public static final String RESOURCE_TYPE = "jlr/components/seatslider/v1/seatslider";

	/**
	 * The current page.
	 */
	@Inject
	private Page currentPage;

	@Inject
	private Node currentNode;

	@ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
	@Via("resource")
	private String folderPath;

	@Inject
	@Optional
	@Via("resource")
	private Resource seatSliderList;

	@Inject
	@Via("resource")
	private ResourceResolver resourceResolver;


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

	@Override
	public List<String> getImageList() {
		return DAMFolderUtils.getImageList(folderPath, resourceResolver);
	}

	/**
	 * Return list of folder path of seat images
	 */
	@Override
	public String getFolderPath() {
		return folderPath;
	}
	@Override
	public String getDesktopFrames() {
        JsonArray imageArr = new JsonArray();
        for (String string : getImageList()) {
        	imageArr.add(string);
        }
        return imageArr.toString();
	}
	@Override
	public String getMobileFrames() {
        JsonArray imageArr = new JsonArray();
        for (String string : getImageList()) {
        	imageArr.add(CommonUtils.getSmallImagePath(string));
        }
        return imageArr.toString();
	}
	
	@Override
	public String getCoverImage() {
		List<String> imageList = getImageList();
		if(!imageList.isEmpty()) {
			return getImageList().get(0);
		}
		return null;
	}

	@Override
	public boolean getFirstPosition() throws RepositoryException {
		String pagecontainerPath = currentPage.getPath().concat("/jcr:content/root/container");
		return ComponentPositionUtils.getComponentPosition(pagecontainerPath, currentNode, resourceResolver);

	}
}
