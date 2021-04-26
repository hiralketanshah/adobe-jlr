package com.jlr.core.utils;

import java.security.Principal;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import javax.jcr.RepositoryException;
import javax.servlet.http.HttpServletRequest;

import org.apache.commons.lang3.StringUtils;
import org.apache.jackrabbit.api.security.user.UserManager;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.LoginException;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.api.resource.ResourceResolverFactory;
import org.apache.sling.api.resource.ValueMap;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.adobe.aem.formsndocuments.util.FMUtils;
import com.day.cq.wcm.api.Page;
import com.day.cq.wcm.api.Template;
import com.jlr.core.constants.CommonConstants;
import com.jlr.core.constants.ErrorUtilsConstants;
import com.jlr.core.pojos.FooterPojo;

/**
 * The Class CommonUtils is used for commonly used utilities.
 */
/**
 * @author Adobe
 * @desc CommonUtils
 * @date 05/04/2021
 */
public final class CommonUtils {

    /** The Constant PAGE_PROPERTIES. */
    private static final String PAGE_PROPERTIES = "wcm/core/content/sites/properties";

    /** The Constant PAGE_CREATE_WIZARD. */
    private static final String PAGE_CREATE_WIZARD = "wcm/core/content/sites/createpagewizard";

    /** The logger. */
    private static Logger LOGGER = LoggerFactory.getLogger(CommonUtils.class);

    /**
     * Checks if is user part of group.
     *
     * @param user the user
     * @param um the um
     * @param group the group
     * @return the boolean
     */
    public Boolean isUserPartOfGroup(Principal user, UserManager um, String group) {
        try {
            return FMUtils.isUserPartOfGroup(user, um, group);
        } catch (RepositoryException e) {

            LOGGER.error(ErrorUtils.createErrorMessage(ErrorUtilsConstants.AEM_REPOSITORY_EXCEPTION, ErrorUtilsConstants.TECHNICAL,
                            ErrorUtilsConstants.AEM_SITE, ErrorUtilsConstants.MODULE_SERVICE, this.getClass().getSimpleName(), e));
        }
        return false;
    }

    /**
     * Checks if is template.
     *
     * @param slingHttpServletRequest the sling http servlet request
     * @param httpServletRequest the http servlet request
     * @param templatePath the template path
     * @return true, if is template
     */
    public static boolean isTemplate(SlingHttpServletRequest slingHttpServletRequest, HttpServletRequest httpServletRequest, String templatePath) {

        // error if any of the passed params is null.
        if (slingHttpServletRequest == null || httpServletRequest == null || StringUtils.isBlank(templatePath)) {
            throw new IllegalArgumentException("One of the passed parameters is null.");
        }

        if (StringUtils.contains(httpServletRequest.getPathInfo(), PAGE_PROPERTIES)
                        || StringUtils.contains(httpServletRequest.getPathInfo(), PAGE_CREATE_WIZARD)) {
            String pagePath = httpServletRequest.getParameter("item");

            return Optional.ofNullable(slingHttpServletRequest.getResourceResolver()).map(resourceResolver -> resourceResolver.getResource(pagePath))
                            .map(pageResource -> pageResource.adaptTo(Page.class)).map(Page::getTemplate).map(Template::getPath)
                            .map(path -> StringUtils.contains(path, templatePath)).orElse(false);
        }
        return false;
    }

    /**
     * Retrieves the service user resolver.
     *
     * @param resolverFactory - resource resolver factory.
     * @param subServiceName - configured service user subservice name
     * @return - service user resolver
     * @throws LoginException - error.
     */
    public static ResourceResolver getServiceResolver(final ResourceResolverFactory resolverFactory, final String subServiceName) throws LoginException {
        Map<String, Object> subServiceAuthInfo = Collections.singletonMap(ResourceResolverFactory.SUBSERVICE, (Object) subServiceName);
        return resolverFactory.getServiceResourceResolver(subServiceAuthInfo);
    }

    /**
     * Retrieves the root page path based on current page.
     * @param currentPage
     * @return
     */
    public static String getSiteRootPath(Page currentPage) {
        if (null == currentPage) {
            return null;
        }
        String path = currentPage.getPath();
        int level = 0;
        Page rootPath = null;
        if (path.startsWith(CommonConstants.JLR_CONTENT_PATH)) {
            if (path.contains(CommonConstants.JLR_LANGUAGE_MASTER)) {
                level = 6;
            } else if (path.contains(CommonConstants.JLR_GLOBAL_MASTER) || path.contains(CommonConstants.JLR_GLOBAL_PUBLISHED)) {
                level = 4;
            } else {
                level = 5;

            }
            rootPath = currentPage.getAbsoluteParent(level);
            if (null == rootPath) {
                return null;
            }
            return rootPath.getPath();
        }
        return null;
    }

    public static String getWebImagePath(String path) {
        if (path != null) {
            return path + CommonConstants.THUMB_1280_1280_PNG;
        }
        return null;
    }

    public static String getSmallImagePath(String path) {
        if (path != null) {
            return path + CommonConstants.THUMB_319_319_PNG;
        }
        return null;
    }


    public static String getTinyImagePath(String path) {
        if (path != null) {
            return path + CommonConstants.THUMB_140_100_PNG;
        }
        return null;
    }

    public static String getOnlyTextFromHTML(String text) {
        if (!StringUtils.isEmpty(text)) {
            Pattern removeTags = Pattern.compile("<.+?>");

            Matcher m = removeTags.matcher(text);
            String onlyText = m.replaceAll("");
            return onlyText.replaceAll("(\\n|\\r)", "");
        } else {
            return StringUtils.EMPTY;
        }
    }
    public static List<FooterPojo> createFooterList(Resource footerList) {
        List<FooterPojo> list = new ArrayList<>();
        Iterator<Resource> childResources = footerList.listChildren();
        while (childResources.hasNext()) {
            Resource child = childResources.next();
            ValueMap properties = child.adaptTo(ValueMap.class);
            if (null != properties) {
                list.add(new FooterPojo(properties.get("header", String.class), properties.get("copy", String.class)));
            }
        }
        return list;
    }

}
