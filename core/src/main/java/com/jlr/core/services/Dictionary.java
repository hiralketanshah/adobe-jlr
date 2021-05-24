package com.jlr.core.services;

import com.day.cq.wcm.api.Page;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;

import java.util.Map;

/**
 * Service Interface for Dictionary Service.
 *
 * @author Adobe
 */
public interface Dictionary {

	/**
	 * Get path for dictionary configuration node.
	 *
	 * @return the path
	 */
	public String getPath();

	/**
	 * Gets config map.
	 *
	 * @param resourceResolver the resource resolver
	 * @param resource         the resource
	 * @param currentPage
	 * @return the config map
	 */
	public Map<String, String> getConfigMap(ResourceResolver resourceResolver, Resource resource,
											Page currentPage);
}
