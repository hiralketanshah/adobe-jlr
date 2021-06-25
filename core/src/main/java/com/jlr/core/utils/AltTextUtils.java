package com.jlr.core.utils;

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
	}
