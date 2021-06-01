package com.jlr.core.internal.models.v1;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Iterator;
import java.util.List;
import javax.inject.Inject;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;
import com.day.cq.commons.jcr.JcrConstants;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;
import com.jlr.core.constants.CommonConstants;
import com.jlr.core.models.Exterior360Model;

/**
 * Implementation class for Exterior360Model.
 *
 * @author Adobe
 */
@Model(adaptables = Resource.class, adapters = {Exterior360Model.class}, resourceType = Exterior360ModelImpl.RESOURCE_TYPE)
public class Exterior360ModelImpl extends Interior360ModelImpl implements Exterior360Model {

    /** The Constant RESOURCE_TYPE. */
    public static final String RESOURCE_TYPE = "jlr/components/exterior360/v1/exterior360";

    /** The resource resolver. */
    @Inject
    private ResourceResolver resourceResolver;

    /** The is slider. */
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private boolean isSlider;

    /** The folder path. */
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String folderPath;


    /**
     * Gets the checks if is slider.
     *
     * @return the checks if is slider
     */
    public boolean getIsSlider() {
        return isSlider;
    }

    /**
     * Return Image list.
     *
     * @return the image list
     */
    @Override
    public String getImageList() {
        List<String> imageList = new ArrayList<>();
        Resource folderRes = resourceResolver.getResource(folderPath);
        JsonObject list = new JsonObject();
        if (null != folderRes) {
            Iterator<Resource> childResItr = folderRes.listChildren();
            while (childResItr.hasNext()) {
                Resource childRes = childResItr.next();
                String imageName = childRes.getPath();
                if (!imageName.equals(JcrConstants.JCR_CONTENT) && imageName.contains(CommonConstants.DOT)) {
                    imageList.add(imageName);
                }
            }
            Collections.sort(imageList);
            JsonArray desktop = new JsonArray();
            JsonArray mobile = new JsonArray();
            for (String image : imageList) {
                desktop.add(image);
                mobile.add(image);
            }
            list.add("desktop", desktop);
            list.add("mobile", mobile);
            list.addProperty("isfull360", !isSlider);
            list.addProperty("showSlider", isSlider);

        }
        return list.toString();
    }

}
