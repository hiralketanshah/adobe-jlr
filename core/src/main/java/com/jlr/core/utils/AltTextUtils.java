package com.jlr.core.utils;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.day.cq.dam.api.Asset;

public class AltTextUtils {

	private static final Logger LOGGER = LoggerFactory.getLogger(AltTextUtils.class);


	public static String getAltTextFromDAM(String imagePath, ResourceResolver resolver) {
		LOGGER.info("getAltTextFromDAM Utils");

			Resource resource = resolver.getResource(imagePath);

			String property = "";

			if (resource != null) {

			Asset asset = resource.adaptTo(Asset.class);

			property = asset.getMetadataValue("dc:description");

			}

			return property;

			}
	}
