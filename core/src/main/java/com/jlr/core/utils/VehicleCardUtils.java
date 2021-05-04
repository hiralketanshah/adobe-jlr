package com.jlr.core.utils;

import com.jlr.core.constants.CommonConstants;
import com.jlr.core.pojos.*;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ValueMap;

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
        publishedImages.add(fileReference);
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
        empty.setInternalLink(null);
        empty.setExternalLink(null);
        empty.setHref(null);
        empty.setIcon(null);
        empty.setText(null);
        empty.setTargetKeyword("same_window");
        empty.setAccessibleText(null);
        return empty;
    }

    /**
     * Map links to vehicle card.
     *
     * @param ctaPojo        the cta pojo
     * @param vehicleCard    the vehicle card
     * @param secondaryLinks the secondary links
     */
    public static void mapLinksToVehicleCard(CTAPojo ctaPojo, VehicleCard vehicleCard, List<VehicleLink> secondaryLinks) {
        if ("Primary".equals(ctaPojo.getLinkType())) {
            vehicleCard.setPrimaryLink(setCtaToVehicleLink(ctaPojo));
        } else {
            secondaryLinks.add(setCtaToVehicleLink(ctaPojo));
        }

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
        vehicleLink.setAccessibleText(null);
        vehicleLink.setInternalLink(null);
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
                    feature.setLabel(properties.get("copy", String.class));
                    featureList.add(feature);
                }
            }
        }
        return featureList;
    }
}
