package com.jlr.core.utils;

import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.Map;

import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.api.resource.ValueMap;

import com.day.cq.commons.jcr.JcrConstants;
import com.jlr.core.constants.CommonConstants;
import com.jlr.core.constants.DerivativeConstants;

public class DerivativeUtils {

    private DerivativeUtils() {
    }

    public static Map<String, String> getDataMap(Resource engine) {
        Map<String, String> mapOfData = new LinkedHashMap<>();

        Resource dataListResource = engine.getChild(DerivativeConstants.NN_ENGINE_DATA_LIST);
        if (null != dataListResource) {
            Iterator<Resource> data = dataListResource.listChildren();
            while (data.hasNext()) {
                Resource dataResource = data.next();
                ValueMap properties = dataResource.adaptTo(ValueMap.class);
                mapOfData.put(properties.get(DerivativeConstants.PN_ENGINE_HEADING, String.class),
                        properties.get(DerivativeConstants.PN_ENGINE_DATA, String.class));
            }
        }

        return mapOfData;
    }

    public static Resource getCardContainerResource(SlingHttpServletRequest request, String path) {
        ResourceResolver resolver = request.getResourceResolver();
        Resource container = null;
        Resource derivativeCardResource = resolver.getResource(path);
        if (null != derivativeCardResource) {
            container = derivativeCardResource.getChild(JcrConstants.JCR_CONTENT + CommonConstants.FORWARD_SLASH
                    + CommonConstants.JLR_ROOT + CommonConstants.FORWARD_SLASH + CommonConstants.JLR_CONTAINER
                    + CommonConstants.FORWARD_SLASH + DerivativeConstants.NN_CARD_CONTAINER);
        }
        return container;
    }

    public static String getDynamicUrlPath(String dynamicPath) {
        StringBuilder builder = new StringBuilder();
        builder.append(DerivativeConstants.DYNAMIC_STATIC_PATH).append(CommonConstants.HYPHEN);
        if (null != dynamicPath && !dynamicPath.isEmpty()) {
            builder.append(
                    dynamicPath.replaceAll(DerivativeConstants.REGEX_REPLACE_DYNAMIC_URL, CommonConstants.HYPHEN));

        }
        return builder.toString().toLowerCase();
    }

}
