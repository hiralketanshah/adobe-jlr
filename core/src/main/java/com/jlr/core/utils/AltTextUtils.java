package com.jlr.core.utils;

import javax.jcr.Node;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.api.resource.ValueMap;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class AltTextUtils {

	private AltTextUtils() {

	}

	private static final Logger LOGGER = LoggerFactory.getLogger(AltTextUtils.class);


	public static String getAltTextFromDAM(String imagePath, ResourceResolver resolver) {
		LOGGER.info("getAltTextFromDAM Utils");
		String imageAltText = "";
		try {
			String medataDataNode = imagePath + "/jcr:content/metadata";
			Resource resource = resolver.getResource(medataDataNode);
			if (resource != null) {
				Node node = resource.adaptTo(Node.class);
				imageAltText = node.getProperty("alttext").getString();
			} else {
				LOGGER.info("Resouerce Not Found ::: " + imagePath);
			}

		} catch (Exception e) {
			LOGGER.error("Getting an Exception While Getting AltText from DAM ::: " + e.getMessage());

		}
		return imageAltText;

	}
}