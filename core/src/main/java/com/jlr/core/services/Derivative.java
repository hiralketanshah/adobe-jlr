package com.jlr.core.services;

import org.apache.sling.api.SlingHttpServletRequest;

/**
 * Service Interface for Derivative Service.
 *
 * @author Adobe
 */
public interface Derivative {

    public String getListOfDerivativeDropdown(SlingHttpServletRequest request, String path);
}