package com.jlr.core.utils;

import static com.jlr.core.utils.CommonUtils.getExternalizerDomainByLocale;
import java.util.Calendar;
import java.util.Date;
import org.apache.commons.lang.StringUtils;
import org.apache.http.HttpHeaders;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.SlingHttpServletResponse;
import org.apache.sling.api.resource.ResourceResolver;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import com.day.cq.commons.Externalizer;

public class NavigationUtils {

    private static final Logger LOGGER = LoggerFactory.getLogger(NavigationUtils.class);

    public static void changeAttributeValue(String attributeKey, String attributeValue, Elements header) {
        if (StringUtils.isNotEmpty(attributeValue)) {
            header.attr(attributeKey, attributeValue);
        } else {
            header.removeAttr(attributeKey);
        }
    }

    public static void setCacheHeaderResponse(SlingHttpServletRequest request, SlingHttpServletResponse response, Boolean cache, Elements header) {
        response.setHeader("Access-Control-Allow-Methods", "GET");
        response.setHeader("Access-Control-Allow-Headers", "Content-Type");
        if (cache) {
            Calendar cal = Calendar.getInstance();
            cal.setTime(new Date());
            cal.add(Calendar.MINUTE, 15);
            header.attr("data-web-app-cache-time", cal.getTime().toString());
            response.setHeader(HttpHeaders.CACHE_CONTROL, "max-age=900");
            response.setDateHeader("Expires", cal.getTime().getTime());
            response.setHeader("Access-Control-Max-Age", "900");
        } else {
            header.attr("data-web-app-cache-time", new Date().toString());
            response.setHeader(HttpHeaders.CACHE_CONTROL, "max-age=0");
            response.setDateHeader("Expires", new Date().getTime());
            response.setHeader("Access-Control-Max-Age", "0");
        }

        String clientOrigin = request.getHeader("Origin");

        if (null != clientOrigin) {
            if (clientOrigin.contains("landrover.com") || clientOrigin.contains("jlr-dev.com")
                            || clientOrigin.contains("retailers_landrover_com_au.yextpages.net") || clientOrigin.contains("retailers.landrover.com.au")
                            || clientOrigin.contains("retailers.landrover.com.au.yextpages.net") || clientOrigin.contains("landrover.com.au")
                            || clientOrigin.contains("landrover.de")) {
                LOGGER.debug("Origin Match found: {}", clientOrigin);
                response.setHeader("Access-Control-Allow-Origin", clientOrigin);
                response.setHeader("Access-Control-Allow-Credentials", "true");
            } else {
                LOGGER.debug("Origin No Match found: {}", clientOrigin);
                response.setHeader("Access-Control-Allow-Origin", "*");
            }
        } else {
            LOGGER.trace("Origin No Match found: {}", clientOrigin);
            response.setHeader("Access-Control-Allow-Origin", "*");
        }
    }

    public static void processUrls(Document document) {
        Elements anchorLink = document.select("a");
        iterateElements(anchorLink, "href");

        Elements link = document.select("link");
        iterateElements(link, "href");

        Elements divEle = document.select("div");
        iterateElements(divEle, "href");

        Elements liEle = document.select("li");
        iterateElements(liEle, "data-search-results-url");

        Elements img = document.getElementsByTag("img");
        iterateElements(img, "src");

        Elements span = document.getElementsByTag("span");
        iterateElements(span, "style");

        Elements script = document.select("script[type='application/json']");
        iterateElements(script, "type");
    }

    private static void iterateElements(Elements elements, String key) {
        for (Element el : elements) {
            if ("style".equals(key) && el.attr("style").contains("background-image: url(")) {
                String backgroundImage = el.attr("style");
                String[] array = backgroundImage.split("\\(/");
                String appendBaseUrl = array[0] + "(" + el.baseUri() + array[1];
                el.attr(key, appendBaseUrl);
            } else if ("type".equals(key)) {
                String updated = el.html().replaceAll("/content/", el.baseUri() + "content/");
                el.html(updated);
            } else {
                el.attr(key, el.absUrl(key));
            }
        }
    }

    public static void removeAttribute(Document document, String elementName) {
        Element element = document.select(elementName).first();
        if (element != null) {
            element.remove();
        }
    }

    public static void removeAttributes(Document document, String elementName) {
        Elements elements = document.select(elementName);
        for (Element element : elements) {
            if (element != null) {
                element.remove();
            }
        }
    }

    public static String getBaseUrl(ResourceResolver resourceResolver) {
        Externalizer externalizer = resourceResolver.adaptTo(Externalizer.class);
        return externalizer.publishLink(resourceResolver, StringUtils.EMPTY);
    }

    public static String getExternalLink(String link, String locale, ResourceResolver resolver) {
        Externalizer externalizer = resolver.adaptTo(Externalizer.class);
        String externalizerDomain = getExternalizerDomainByLocale(locale);
        String externalPath = StringUtils.EMPTY;
        try {
            externalPath = externalizer.externalLink(resolver, externalizerDomain, link);
        } catch (IllegalArgumentException e) {
            externalPath = externalizer.publishLink(resolver, StringUtils.EMPTY).replaceFirst("/", StringUtils.EMPTY);
        }
        return externalPath;
    }
}
