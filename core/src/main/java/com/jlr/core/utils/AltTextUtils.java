package com.jlr.core.utils;

import org.apache.commons.lang.StringUtils;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;

import com.day.cq.dam.api.Asset;

public class AltTextUtils {
	
	public static String getAltTextFromDAM(String imagePath, ResourceResolver resolver) {
		Resource resource = resolver.getResource(imagePath);
		String altTextDAMProperty = "";
		if (resource != null) {
			Asset asset = resource.adaptTo(Asset.class);
			altTextDAMProperty = asset.getMetadataValue("dam:altText");
			}
		return altTextDAMProperty;
		}
	
	public static String getAltTextFromDAMGallery(String imagePath, String imageAlt, Boolean isDecorative,Boolean altTextFromDAM, ResourceResolver resolver) {
		Resource resource = resolver.getResource(imagePath);
		String altTextDAMProperty = "";
		if (resource != null) {
			Asset asset = resource.adaptTo(Asset.class);
			altTextDAMProperty = asset.getMetadataValue("dam:altText");
			}
		if (isDecorative) {
            return null;
        } else {
            if (imageAlt != null && altTextFromDAM == Boolean.TRUE) {
            	return imageAlt;
            } else if (imageAlt != null && altTextFromDAM == Boolean.FALSE) {
            	return imageAlt;
            } else if (imageAlt == null && altTextFromDAM == Boolean.FALSE) {
                return StringUtils.EMPTY;
            } else if (imageAlt == null && altTextFromDAM != null && altTextFromDAM == Boolean.TRUE) {
            	imageAlt = altTextDAMProperty;
            }
        }
		return imageAlt;
		}
	}
