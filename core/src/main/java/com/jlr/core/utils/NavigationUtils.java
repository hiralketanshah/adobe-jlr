package com.jlr.core.utils;

import com.day.cq.commons.Externalizer;
import org.apache.commons.lang.StringUtils;
import org.apache.http.HttpHeaders;
import org.apache.sling.api.SlingHttpServletResponse;
import org.apache.sling.api.resource.ResourceResolver;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
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

    public static void processUrls(Document document) {
        Elements anchorLink = document.select("a");
        iterateElements(anchorLink, "href");

        Elements link = document.select("link");
        iterateElements(link, "href");

        Elements img = document.getElementsByTag("img");
        iterateElements(img, "src");

        Elements span = document.getElementsByTag("span");
        iterateElements(span, "style");
    }

    private static void iterateElements(Elements elements, String key) {
        for (Element el : elements) {
            if("style".equals(key) && el.attr("style").contains("background-image: url(")) {
                String backgroundImage = el.attr("style");
                String[] array = backgroundImage.split("\\(/");
                String appendBaseUrl = array[0]+"("+el.baseUri()+array[1];
                el.attr(key, appendBaseUrl);
            } else {
                el.attr(key, el.absUrl(key));
            }
        }
    }

    public static void removeAttribute(Document document, String elementName) {
        Element element = document.select(elementName).first();
        if(element != null) {
            element.remove();
        }
    }

    public static String getBaseUrl(ResourceResolver resourceResolver) {
        Externalizer externalizer = resourceResolver.adaptTo(Externalizer.class);
        return externalizer.publishLink(resourceResolver, StringUtils.EMPTY);
    }
}
