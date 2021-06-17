package com.jlr.core.httpcache.key;

import org.apache.sling.api.SlingHttpServletRequest;

import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;


public class RequestKeyValueMapBuilder {
    private final Set<String> allowedParameters;
    private final Set<String> allowedParameterValues;
    private final RequestKeyValueMap keyValueMap = new RequestKeyValueMap("RequestKeyValueMap");
    private final Map<String, String[]> allowedKeyValueMap = new HashMap<>();
    private final SlingHttpServletRequest slingHttpServletRequest;

    public RequestKeyValueMapBuilder(Set<String> allowedParameters, Set<String> allowedParameterValues, SlingHttpServletRequest slingHttpServletRequest) {
        this.allowedParameters = new HashSet<>(allowedParameters);
        this.allowedParameterValues = new HashSet<>(allowedParameterValues);
        this.slingHttpServletRequest = slingHttpServletRequest;
    }

    public Map<String, String[]> getAllowedParameterValues() {

        allowedParameterValues.stream().forEach(paramValue -> {
            String[] values = paramValue.split("=");
            String[] subValues = values[1].split(";");
            allowedKeyValueMap.put(values[0], subValues);
        });

        return allowedKeyValueMap;
    }

    public RequestKeyValueMap build() {

        Set<String> requestParameterList = slingHttpServletRequest.getParameterMap().keySet();

        requestParameterList.stream().forEach(requestParam -> {
            if (allowedParameters.contains(requestParam)) {
                keyValueMap.put(requestParam, slingHttpServletRequest.getParameter(requestParam));
            }
        });

        return keyValueMap;
    }
}