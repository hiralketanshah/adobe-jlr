package com.jlr.core.internal.models.v1;

import static com.jlr.core.constants.CommonConstants.JLR_LOCALE_PRICING;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Locale;
import java.util.Map;
import javax.annotation.Nullable;
import javax.annotation.PostConstruct;
import javax.inject.Inject;
import org.apache.commons.lang3.StringUtils;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ValueMap;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.ScriptVariable;
import org.apache.sling.models.annotations.injectorspecific.SlingObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import com.adobe.acs.commons.models.injectors.annotation.HierarchicalPageProperty;
import com.adobe.cq.wcm.core.components.util.ComponentUtils;
import com.day.cq.wcm.api.components.ComponentContext;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.jlr.core.constants.CommonConstants;
import com.jlr.core.constants.ErrorUtilsConstants;
import com.jlr.core.models.PageModel;
import com.jlr.core.utils.CommonUtils;
import com.jlr.core.utils.ErrorUtils;

/**
 * The Class PageModelImpl.
 *
 * @author Adobe
 */
@Model(adaptables = SlingHttpServletRequest.class, adapters = PageModel.class, resourceType = "jlr/components/page",
                defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class PageModelImpl implements PageModel {

    private final String AU_LOCALE = "en_AU";
    private final String DE_LOCALE = "de_DE";

    private final String AU_RETAILER_NAAS_URL = "/content/dam/naas/en_au.html";
    private final String DE_RETAILER_NAAS_URL = "/content/dam/naas/de_de.html";

    /** The current page. */
    @ScriptVariable
    protected com.day.cq.wcm.api.Page currentPage;

    /** The page properties. */
    @ScriptVariable
    protected ValueMap pageProperties;

    /** The request. */
    @Inject
    private SlingHttpServletRequest request;


    /** The application code. */
    @HierarchicalPageProperty("applicationCode")
    private String applicationCode;

    /** The skip to main title. */
    @HierarchicalPageProperty("skipToMainTitle")
    private String skipToMainTitle;

    /** The gtm tags. */
    @HierarchicalPageProperty("gtmTags")
    private String gtmTags;

    /** The market region path. */
    @HierarchicalPageProperty("marketRegionPath")
    private String marketRegionPath;

    /** The header path. */
    @HierarchicalPageProperty("headerPath")
    private String headerPath;

    /** The footer path. */
    @HierarchicalPageProperty("footerPath")
    private String footerPath;

    @HierarchicalPageProperty("includeHeaderFooter")
    private String includeHeaderFooter;

    /** The enable inline cookie js. */
    @HierarchicalPageProperty("enableInlineCookieJs")
    private String enableInlineCookieJs;

    @PostConstruct
    public void init() {
        getNaasUrl();
        getLocale();
        getState();
    }

    @Override
    public String getLocale() {
        if (!StringUtils.isBlank(getMarket())) {
            if (getMarket().contains("/market/au")) {
                return AU_LOCALE;
            } else if (getMarket().contains("/market/de")) {
                return DE_LOCALE;
            }
        }
        return StringUtils.EMPTY;
    }

    public String getNaasUrl() {
        if (!StringUtils.isBlank(getMarket())) {
            if (getMarket().contains("/market/au")) {
                return AU_RETAILER_NAAS_URL;
            } else if (getMarket().contains("/market/de")) {
                return DE_RETAILER_NAAS_URL;
            }
        }
        return StringUtils.EMPTY;
    }



    /**
     * Gets the enable inline cookie js.
     *
     * @return the enableInlineCookieJs
     */
    @Override
    public String getEnableInlineCookieJs() {
        return enableInlineCookieJs;
    }

    /**
     * Gets the market region path.
     *
     * @return the market region path
     */
    public String getMarketRegionPath() {
        return marketRegionPath;
    }

    /**
     * Gets the gtm tags.
     *
     * @return the gtmTags
     */

    public String getGtmTags() {
        return gtmTags;
    }

    /**
     * Gets the skip to main title.
     *
     * @return the skip to main title
     */
    public String getSkipToMainTitle() {
        return skipToMainTitle;
    }

    /** The market. */
    @HierarchicalPageProperty("market")
    private String market;


    /**
     * Gets the application code.
     *
     * @return the applicationCode
     */
    public String getApplicationCode() {
        return applicationCode;
    }

    /**
     * Gets the market.
     *
     * @return the market
     */
    public String getMarket() {
        return market;
    }

    public String getState() {
        String state = null != request.getCookie(JLR_LOCALE_PRICING) ? request.getCookie(JLR_LOCALE_PRICING).getValue().toUpperCase() : StringUtils.EMPTY;
        return state;

    }

    /**
     * Gets the header path.
     *
     * @return the header path
     */
    public String getHeaderPath() {
        String headerPathValue = CommonUtils.getSiteRootPath(currentPage);
        return StringUtils.isBlank(headerPathValue) ? StringUtils.EMPTY : headerPathValue.concat(CommonConstants.PATH_HEADER);
    }

    /**
     * Gets the footer path.
     *
     * @return the footer path
     */
    public String getFooterPath() {
        String footerPathValue = CommonUtils.getSiteRootPath(currentPage);
        return StringUtils.isBlank(footerPathValue) ? StringUtils.EMPTY : footerPathValue.concat(CommonConstants.PATH_FOOTER);
    }

    /**
     * The current resource.
     */
    @SlingObject
    protected Resource resource;



    /**
     * The component context.
     */
    @ScriptVariable(injectionStrategy = InjectionStrategy.OPTIONAL)
    @Nullable
    protected ComponentContext componentContext;

    /** The logger. */
    private static Logger LOGGER = LoggerFactory.getLogger(PageModelImpl.class);

    /**
     * Gets the Language of the site root.
     *
     * @return Language in ISO
     */
    @Override
    public String getLanguage() {
        return currentPage == null ? Locale.getDefault().toLanguageTag() : currentPage.getLanguage(false).toLanguageTag();
    }

    /**
     * Build Datalayer JSON Object.
     *
     * @return Datalayer JSON String
     */
    @Override
    public String getPageData() {

        // Create a map of properties we want to expose
        Map<String, Object> dataLayerProperties = new HashMap<String, Object>();
        dataLayerProperties.put(CommonConstants.DL_APPLICATION,
                        getApplicationCode() != null ? getApplicationCode() : CommonConstants.DL_APPLICATION_DEFAULT_VALUE);
        dataLayerProperties.put(CommonConstants.DL_MARKET,
                        getMarket() != null ? StringUtils.substringAfterLast(getMarket(), CommonConstants.FORWARD_SLASH) : CommonConstants.BLANK_SPACE);
        dataLayerProperties.put(CommonConstants.DL_LANGUAGE, getLanguage());
        dataLayerProperties.put(CommonConstants.DL_NAMEPLATE_CODE,
                        pageProperties.get(CommonConstants.PN_NAMEPLATE_CODE, String.class) != null
                                        ? StringUtils.substringAfterLast(pageProperties.get(CommonConstants.PN_NAMEPLATE_CODE, String.class),
                                                        CommonConstants.FORWARD_SLASH)
                                        : CommonConstants.BLANK_SPACE);
        dataLayerProperties.put(CommonConstants.DL_MODELYEAR,
                        pageProperties.get(CommonConstants.PN_MODELYEAR, String.class) != null ? StringUtils
                                        .substringAfterLast(pageProperties.get(CommonConstants.PN_MODELYEAR, String.class), CommonConstants.FORWARD_SLASH)
                                        : CommonConstants.BLANK_SPACE);

        try {
            return String.format("{\"%s\":%s}", ComponentUtils.getId(this.resource, this.currentPage, this.componentContext),
                            new ObjectMapper().writeValueAsString(dataLayerProperties));
        } catch (JsonProcessingException e) {
            LOGGER.error(ErrorUtils.createErrorMessage(ErrorUtilsConstants.AEM_JSON_EXCEPTION, ErrorUtilsConstants.TECHNICAL, ErrorUtilsConstants.AEM_SITE,
                            ErrorUtilsConstants.MODULE_SERVICE, this.getClass().getSimpleName(), e));
        }

        return StringUtils.EMPTY;
    }

    /**
     * Build GTM Tags from Page properties of root node.
     *
     * @return List of GTM Tags
     */
    @Override
    public List<String> getGtmTagsList() {
        if (!StringUtils.isBlank(getGtmTags())) {
            List<String> listOfGtmTags = Arrays.asList(getGtmTags().split(CommonConstants.COMMA));
            return listOfGtmTags;
        }
        return null;

    }

    /**
     * Build GTM Tags from Page properties of root node.
     *
     * @return String of GTML tags with quotes
     */
    @Override
    public String getCommaSeparatedGtmTagsListWithQuotes() {
        if (!StringUtils.isBlank(getGtmTags())) {
            StringBuilder sb = new StringBuilder(100);
            sb.append(String.join("','", getGtmTags().split(CommonConstants.COMMA)));
            return sb.toString();
        }
        return null;
    }

    public Boolean getIncludeHeaderFooter() {
        String template = currentPage.getTemplate().getName();
        if (template.equals(CommonConstants.TEMPLATE_EMPTY) || template.equals(CommonConstants.TEMPLATE_GALLERY)
                        || template.equals(CommonConstants.TEMPLATE_REDIRECT)) {
            return false;
        }
        return true;
    }

}
