package com.jlr.core.httpcache.key;

import java.util.HashMap;
import java.util.Map;
import java.util.Set;

public class RequestParameterKeyValueMapBuilder {

    private final Set<String> requestParameters;
    private final Set<String> requestParameterValues;
    private final Map<String, String[]> keyValueMap = new HashMap<>();

    public RequestParameterKeyValueMapBuilder(Set<String> requestParameters, Set<String> requestParameterValues) {

        this.requestParameters = requestParameters;
        this.requestParameterValues = requestParameterValues;
    }


    public Map<String, String[]> build() {

        requestParameterValues.stream().forEach(paramValue -> {
            String[] values = paramValue.split("=");
            String[] subValues = values[1].split(";");
            keyValueMap.put(values[0], subValues);
        });

        return keyValueMap;
    }

}
