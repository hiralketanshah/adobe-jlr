package com.jlr.core.utils;


import java.util.Optional;
import javax.servlet.http.HttpServletRequest;
import org.apache.commons.lang3.StringUtils;
import org.apache.sling.api.SlingHttpServletRequest;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import com.day.cq.wcm.api.Page;
import com.day.cq.wcm.api.Template;

public class TemplateRenderConditionUtil {
    private static final String PAGE_PROPERTIES = "wcm/core/content/sites/properties";
    private static final String PAGE_CREATE_WIZARD = "wcm/core/content/sites/createpagewizard";

    private static Logger LOGGER = LoggerFactory.getLogger(TemplateRenderConditionUtil.class);

    public static boolean isTemplate(SlingHttpServletRequest slingHttpServletRequest, HttpServletRequest httpServletRequest, String templatePath) {

        LOGGER.info("Is Template invoked!");

        // error if any of the passed params is null.
        if (slingHttpServletRequest == null || httpServletRequest == null || StringUtils.isBlank(templatePath)) {
            throw new IllegalArgumentException("One of the passed parameters is null.");
        }
        // the dialog is a page properties dialog
        if (StringUtils.contains(httpServletRequest.getPathInfo(), PAGE_PROPERTIES)
                        || StringUtils.contains(httpServletRequest.getPathInfo(), PAGE_CREATE_WIZARD)) {
            // get the actual page path
            String pagePath = httpServletRequest.getParameter("item");
            // get page template path and check it

            LOGGER.info("Validation in place.");

            return Optional.ofNullable(slingHttpServletRequest.getResourceResolver()).map(resourceResolver -> resourceResolver.getResource(pagePath))
                            .map(pageResource -> pageResource.adaptTo(Page.class)).map(Page::getTemplate).map(Template::getPath)
                            .map(path -> StringUtils.contains(path, templatePath)).orElse(false);
        }
        return false;
    }
}
