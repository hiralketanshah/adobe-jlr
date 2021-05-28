package com.jlr.core.internal.services;

import org.apache.commons.lang3.StringUtils;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.api.resource.ResourceResolverFactory;
import org.apache.sling.api.resource.ValueMap;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.Reference;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.day.cq.commons.jcr.JcrConstants;
import com.jlr.core.constants.CommonConstants;
import com.jlr.core.services.Derivative;

@Component(service = Derivative.class)
public class DerivativeImpl implements Derivative {

    /** LOGGER */
    private static final Logger LOGGER = LoggerFactory.getLogger(DerivativeImpl.class);

    @Reference
    private ResourceResolverFactory resourceResolverFactory;

    @Override
    public String getListOfDerivativeDropdown(SlingHttpServletRequest request, String path) {
        ResourceResolver resolver = null;
        String dropdownName = StringUtils.EMPTY;
        resolver = request.getResourceResolver();
        Resource derivativeCardResource = resolver.getResource(path);
        if (null != derivativeCardResource) {
            Resource container = derivativeCardResource
                    .getChild(JcrConstants.JCR_CONTENT + CommonConstants.FORWARD_SLASH + CommonConstants.JLR_ROOT
                            + CommonConstants.FORWARD_SLASH + CommonConstants.JLR_CONTAINER);
            if (null != container) {
                Resource derivativeCardContainerResource = container.getChild("derivativecardcontainer");
                if (null != derivativeCardContainerResource) {
                    ValueMap prop = derivativeCardContainerResource.adaptTo(ValueMap.class);
                    if (null != prop && prop.containsKey("dropdownName")) {
                        dropdownName = prop.get("dropdownName", String.class);
                    }
                }
            }
        }

        return dropdownName;
    }
}
