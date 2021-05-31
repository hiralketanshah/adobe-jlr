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
import com.jlr.core.internal.models.v1.DerivativeCardModelImpl;
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
        DerivativeCardModelImpl card;
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
                    Resource parsys = derivativeCardContainerResource.getChild("parsys");
                    if (null != parsys) {
                        Resource derivativecard = parsys.getChild("derivativecard");
                        if (null != derivativecard) {
                            card = derivativecard.adaptTo(DerivativeCardModelImpl.class);
                        }
                    }
                }
            }
        }

        return dropdownName;
    }

    @Override
    public DerivativeCardModelImpl getDerivativeCard(SlingHttpServletRequest request, String path) {
        ResourceResolver resolver = request.getResourceResolver();
        DerivativeCardModelImpl card = new DerivativeCardModelImpl();
        Resource derivativeCardResource = resolver.getResource(path);
        if (null != derivativeCardResource) {
            Resource cardResource = derivativeCardResource
                    .getChild(JcrConstants.JCR_CONTENT + CommonConstants.FORWARD_SLASH + CommonConstants.JLR_ROOT
                            + CommonConstants.FORWARD_SLASH + CommonConstants.JLR_CONTAINER
                            + CommonConstants.FORWARD_SLASH + "derivativecardcontainer/parsys/derivativecard");

            if (null != cardResource) {
                card = cardResource.adaptTo(DerivativeCardModelImpl.class);
            }

        }
        return card;
    }

}
