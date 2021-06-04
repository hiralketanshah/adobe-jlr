package com.jlr.core.services;

import java.util.List;

import org.apache.sling.api.SlingHttpServletRequest;

import com.jlr.core.internal.models.v1.DerivativeCardModelImpl;

/**
 * Service Interface for Derivative Service.
 *
 * @author Adobe
 */
public interface Derivative {

    public String getListOfDerivativeDropdown(SlingHttpServletRequest request, String path);

    public List<DerivativeCardModelImpl> getDerivativeCard(SlingHttpServletRequest request, String path);
}