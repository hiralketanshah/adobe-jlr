package com.jlr.core.utils;

import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.Map;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ValueMap;

public class DerivativeUtils {

    private DerivativeUtils() {
    }

    public static Map<String, String> getDataMap(Resource engine) {
        Map<String, String> mapOfData = new LinkedHashMap<>();

        Resource dataListResource = engine.getChild("dataList");
        if (null != dataListResource) {
            Iterator<Resource> data = dataListResource.listChildren();
            while (data.hasNext()) {
                Resource dataResource = data.next();
                ValueMap properties = dataResource.adaptTo(ValueMap.class);
                mapOfData.put(properties.get("heading", String.class), properties.get("data", String.class));
            }
        }

        return mapOfData;

    }

}
