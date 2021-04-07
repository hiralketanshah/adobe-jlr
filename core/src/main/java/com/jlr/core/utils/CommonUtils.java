package com.jlr.core.utils;

import java.security.Principal;
import java.util.Optional;
import javax.jcr.RepositoryException;
import javax.servlet.http.HttpServletRequest;
import org.apache.commons.lang3.StringUtils;
import org.apache.jackrabbit.api.security.user.UserManager;
import org.apache.sling.api.SlingHttpServletRequest;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import com.adobe.aem.formsndocuments.util.FMUtils;
import com.day.cq.wcm.api.Page;
import com.day.cq.wcm.api.Template;
import com.jlr.core.constants.ErrorUtilsConstants;


/**
 * The Class CommonUtils is used for commonly used utilities
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


}
