package com.jlr.core.utils;

import com.jlr.core.pojos.*;
import org.apache.commons.lang.StringUtils;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ValueMap;
import org.json.JSONObject;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

/**
 * The type Vehicle card utils.
 */
public class VehicleCardUtils {
    /**
     * Sets image to vehicle link.
     *
     * @param fileReference the file reference
     * @param altText       the alt text
     * @return the image to vehicle link
     */
    public static Image setImageToVehicleLink(String fileReference, String altText) {
        Image image = new Image();
        image.setWidestImage(fileReference);
        image.setAlt(altText);
        PublishedImage publishedImage = new PublishedImage();
        List<String> publishedImages = new ArrayList<>();
        publishedImages.add(CommonUtils.getSmallImagePath(fileReference));
        publishedImages.add(fileReference);
        publishedImage.setPublishedImages(publishedImages);
        image.setImage(publishedImage);
        return image;
    }

    /**
     * Gets empty vehicle link.
     *
     * @return the empty vehicle link
     */
    public static VehicleLink getEmptyVehicleLink() {
        VehicleLink empty = new VehicleLink();
        empty.setInternalLink(JSONObject.NULL+ StringUtils.EMPTY);
        empty.setExternalLink(JSONObject.NULL+ StringUtils.EMPTY);
        empty.setHref(null);
        empty.setIcon(null);
        empty.setText(null);
        empty.setTargetKeyword("same_window");
        empty.setAccessibleText(JSONObject.NULL+ StringUtils.EMPTY);
        return empty;
    }

    /**
     * Sets cta to vehicle link.
     *
     * @param ctaPojo the cta pojo
     * @return the cta to vehicle link
     */
    public static VehicleLink setCtaToVehicleLink(CTAPojo ctaPojo) {
        VehicleLink vehicleLink = new VehicleLink();
        vehicleLink.setText(ctaPojo.getText());
        vehicleLink.setIcon(ctaPojo.getIcon());
        vehicleLink.setHref(ctaPojo.getLink());
        vehicleLink.setExternalLink(ctaPojo.getLink());
        vehicleLink.setAccessibleText(JSONObject.NULL+ StringUtils.EMPTY);
        vehicleLink.setInternalLink(JSONObject.NULL+ StringUtils.EMPTY);
        return vehicleLink;
    }

    /**
     * Add features to vehicle card list.
     *
     * @param features the features
     * @return the list
     */
    public static List<Feature> addFeaturesToVehicleCard(Resource features) {
        List<Feature> featureList = new ArrayList<>();
        if (null != features && features.hasChildren()) {
            Iterator<Resource> childResources = features.listChildren();
            while (childResources.hasNext()) {
                Resource child = childResources.next();
                ValueMap properties = child.adaptTo(ValueMap.class);
                if (null != properties) {
                    Feature feature = new Feature();
                    feature.setIcon(properties.get("headerIcon", String.class));
                    feature.setLabel(CommonUtils.getOnlyTextFromHTML(properties.get("copy", String.class)));
                    featureList.add(feature);
                }
            }
        }
        return featureList;
    }
}
