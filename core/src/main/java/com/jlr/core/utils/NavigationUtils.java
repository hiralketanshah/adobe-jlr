package com.jlr.core.utils;

import org.apache.commons.lang.StringUtils;
import org.apache.http.HttpHeaders;
import org.apache.sling.api.SlingHttpServletResponse;
import org.jsoup.select.Elements;

import java.util.Calendar;
import java.util.Date;

public class NavigationUtils {
    public static void changeAttributeValue(String attributeKey, String attributeValue, Elements header) {
        if(StringUtils.isNotEmpty(attributeValue)){
            header.attr(attributeKey, attributeValue);
        } else {
            header.removeAttr(attributeKey);
        }
    }

    public static void setCacheHeaderResponse(SlingHttpServletResponse response, Boolean cache, Elements header) {
        if(cache){
            Calendar cal = Calendar.getInstance();
            cal.setTime(new Date());
            cal.add(Calendar.MINUTE, 15);
            header.attr("data-web-app-cache-time", cal.getTime().toString());
            response.setHeader(HttpHeaders.CACHE_CONTROL, "max-age=900");
            response.setDateHeader("Expires", cal.getTime().getTime());
        } else {
            header.attr("data-web-app-cache-time", new Date().toString());
            response.setHeader(HttpHeaders.CACHE_CONTROL, "max-age=0");
            response.setDateHeader("Expires", new Date().getTime());
        }
    }
}
