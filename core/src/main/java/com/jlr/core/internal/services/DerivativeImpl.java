package com.jlr.core.internal.services;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.apache.commons.lang3.StringUtils;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolverFactory;
import org.apache.sling.api.resource.ValueMap;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.Reference;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.jlr.core.constants.DerivativeConstants;
import com.jlr.core.internal.models.v1.DerivativeCardModelImpl;
import com.jlr.core.services.Derivative;
import com.jlr.core.utils.DerivativeUtils;

@Component(service = Derivative.class)
public class DerivativeImpl implements Derivative {

    /** LOGGER */
    private static final Logger LOGGER = LoggerFactory.getLogger(DerivativeImpl.class);

    @Reference
    private ResourceResolverFactory resourceResolverFactory;

    @Override
    public String getListOfDerivativeDropdown(SlingHttpServletRequest request, String path) {
        String dropdownName = StringUtils.EMPTY;
        Resource container = DerivativeUtils.getCardContainerResource(request, path);
        if (null != container) {
            ValueMap prop = container.adaptTo(ValueMap.class);
            if (null != prop && prop.containsKey(DerivativeConstants.PN_DROPDOWN_NAME)) {
                dropdownName = prop.get(DerivativeConstants.PN_DROPDOWN_NAME, String.class);
            }
        }
        return dropdownName;
    }

    @Override
    public List<DerivativeCardModelImpl> getDerivativeCard(SlingHttpServletRequest request, String path) {
        Resource container = DerivativeUtils.getCardContainerResource(request, path);
        List<DerivativeCardModelImpl> listOfCards = new ArrayList<>();
        if (null != container) {
            Resource parsysResource = container.getChild(DerivativeConstants.NN_PARSYS);
            if (null != parsysResource) {
                Iterator<Resource> containerResourceIterator = parsysResource.listChildren();
                while (containerResourceIterator.hasNext()) {
                    Resource cardResource = containerResourceIterator.next();
                    if (null != cardResource) {
                        DerivativeCardModelImpl card = cardResource.adaptTo(DerivativeCardModelImpl.class);
                        listOfCards.add(card);
                    }
                }
            }
        }
        return listOfCards;
    }

}
