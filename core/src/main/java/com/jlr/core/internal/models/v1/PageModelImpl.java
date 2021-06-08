package com.jlr.core.internal.models.v1;

import static com.jlr.core.constants.CommonConstants.JLR_LOCALE_PRICING;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Locale;
import java.util.Map;

import javax.annotation.Nullable;
import javax.annotation.PostConstruct;
import javax.inject.Inject;

import org.apache.commons.lang3.StringUtils;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.api.resource.ValueMap;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.ScriptVariable;
import org.apache.sling.models.annotations.injectorspecific.SlingObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.adobe.acs.commons.models.injectors.annotation.HierarchicalPageProperty;
import com.adobe.aemds.guide.utils.JcrResourceConstants;
import com.adobe.cq.wcm.core.components.util.ComponentUtils;
import com.day.cq.commons.jcr.JcrConstants;
import com.day.cq.wcm.api.components.ComponentContext;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;
import com.jlr.core.constants.CommonConstants;
import com.jlr.core.constants.DerivativeConstants;
import com.jlr.core.constants.ErrorUtilsConstants;
import com.jlr.core.models.PageModel;
import com.jlr.core.utils.CommonUtils;
import com.jlr.core.utils.DerivativeUtils;
import com.jlr.core.utils.ErrorUtils;
import com.jlr.core.utils.NavigationUtils;

/**
 * The Class PageModelImpl.
 *
 * @author Adobe
 */
@Model(adaptables = SlingHttpServletRequest.class, adapters = PageModel.class, resourceType = "jlr/components/page", defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class PageModelImpl implements PageModel {

    private final String AU_LOCALE = "en_AU";
    private final String DE_LOCALE = "de_DE";

    private final String AU_RETAILER_NAAS_URL = "content/nav/naasconfig/en_au.html";
    private final String DE_RETAILER_NAAS_URL = "content/nav/naasconfig/de_de.html";

    private static final String RT_CAROUSEL = "jlr/components/carousel/v1/carousel";
    private static final String RT_HERO_COMPONENT = "jlr/components/heroitem/v1/heroitem";
    private static final String RT_HERO_TITLE_BANNER_COMPONENT = "jlr/components/herotitlebanner/v1/herotitlebanner";

    List<String> imageSchemaAsJson = new ArrayList<>();
    String metaTitle;
    String metaDescription;

    /** The current page. */
    @ScriptVariable
    protected com.day.cq.wcm.api.Page currentPage;

    @Inject
    private ResourceResolver resourceResolver;

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
    
    /** The legacy browser notification. */
    @HierarchicalPageProperty("legacyBrowser")
    private String legacyBrowser;

    /** The cookie notification config page path. */
    @HierarchicalPageProperty("cookieNotificationPath")
    private String cookieNotificationPath;

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
        getDomainUrl();
        getMetaDetails();
    }

    private void getMetaDetails() {
        String selector = request.getRequestPathInfo().getSelectorString();
        if (StringUtils.isNotBlank(selector) && selector.contains(DerivativeConstants.DYNAMIC_STATIC_PATH)) {
            Resource pageContainer = resourceResolver
                    .getResource(currentPage.getPath().concat(CommonConstants.CONTAINER_NODE));
            if (null != pageContainer) {
                Iterator<Resource> childResources = pageContainer.listChildren();
                while (childResources.hasNext()) {
                    Resource child = childResources.next();
                    ValueMap properties = child.adaptTo(ValueMap.class);
                    if (StringUtils.equals(DerivativeConstants.RT_DERIVATIVE,
                            properties.get(JcrResourceConstants.SLING_RESOURCE_TYPE_PROPERTY, String.class))) {
                        fetchMetaDetailsFromTab(child.getChild(DerivativeConstants.NN_TAB_LIST), selector);
                    }
                }
            }
        }
    }

    private void fetchMetaDetailsFromTab(Resource tabListResource, String selector) {
        if (null != tabListResource) {
            Iterator<Resource> tabResources = tabListResource.listChildren();
            while (tabResources.hasNext()) {
                Resource tab = tabResources.next();
                ValueMap tabProperties = tab.adaptTo(ValueMap.class);
                String dynamicUrlPath = tabProperties.containsKey(DerivativeConstants.PN_URL_PATH)
                        ? DerivativeUtils
                                .getDynamicUrlPath(tabProperties.get(DerivativeConstants.PN_URL_PATH, String.class))
                        : DerivativeUtils
                                .getDynamicUrlPath(tabProperties.get(DerivativeConstants.PN_TAB_HEADING, String.class));
                if (selector.equalsIgnoreCase(dynamicUrlPath)) {
                    metaTitle = tabProperties.get(DerivativeConstants.PN_META_TITLE, String.class);
                    metaDescription = tabProperties.get(DerivativeConstants.PN_META_DESCRIPTION, String.class);
                }
            }
        }
    }

    public String getMetaTitle() {
        return metaTitle;
    }

    public String getMetaDescription() {
        return metaDescription;
    }

    public List<String> getImageSchema() {

        if (pageProperties.get("enableImageSchema", CommonConstants.FALSE).equalsIgnoreCase(CommonConstants.TRUE)) {

            Resource pageContainer = resourceResolver
                    .getResource(currentPage.getPath().concat("/jcr:content/root/container"));
            if (null != pageContainer) {

                Iterator<Resource> childResources = pageContainer.listChildren();
                while (childResources.hasNext()) {
                    Resource child = childResources.next();
                    ValueMap properties = child.adaptTo(ValueMap.class);
                    if (StringUtils.compare(RT_CAROUSEL,
                            properties.get(JcrResourceConstants.SLING_RESOURCE_TYPE_PROPERTY, String.class)) == 0) {
                        Iterator<Resource> heroItemChildResources = child.listChildren();
                        List<String> heroImageList = new ArrayList<>();
                        while (heroItemChildResources.hasNext()) {
                            Resource heroItems = heroItemChildResources.next();
                            ValueMap heroItemProperties = heroItems.adaptTo(ValueMap.class);
                            if (StringUtils.compare(RT_HERO_COMPONENT,
                                    heroItemProperties.get(JcrResourceConstants.SLING_RESOURCE_TYPE_PROPERTY,
                                            String.class)) == 0
                                    || StringUtils.compare(RT_HERO_TITLE_BANNER_COMPONENT, heroItemProperties.get(
                                            JcrResourceConstants.SLING_RESOURCE_TYPE_PROPERTY, String.class)) == 0) {
                                String image = heroItemProperties.get("fileReference", String.class);
                                if (StringUtils.isNotBlank(image)) {
                                    heroImageList.add(image);
                                    buildImageSchemaJSON(heroImageList);
                                    heroImageList.clear();
                                    break;
                                }
                            }
                        }

                    }
                    // Break here to get only the first node of carousel
                    break;
                }
            }
        }
        return imageSchemaAsJson;

    }

    private void buildImageSchemaJSON(List<String> heroImageList) {
        JsonObject root = new JsonObject();
        root.addProperty("@type", "http://schema.org/ImageObject");

        JsonObject context = new JsonObject();
        context.addProperty("contentUrl", "http://schema.org/contentUrl");
        context.addProperty("uploadDate", "http://schema.org/uploadDate");
        context.addProperty("author", "http://schema.org/author");
        context.addProperty("name", "http://schema.org/name");
        context.addProperty("description", "http://schema.org/description");
        root.add("@context", context);

        root.addProperty("name", pageProperties.get(JcrConstants.JCR_TITLE, String.class));
        root.addProperty("description", pageProperties.get(JcrConstants.JCR_DESCRIPTION, String.class));

        JsonObject author = new JsonObject();
        author.addProperty("@type", "Brand");
        author.addProperty("name", "landrover");

        root.add("@author", author);

        JsonArray imgArray = new JsonArray();
        heroImageList.stream()
                .forEach((c) -> imgArray.add(NavigationUtils.getBaseUrl(resourceResolver).concat(c.substring(1))));

        root.addProperty("uploadDate", getCreatedDate(heroImageList.get(0)));
        root.add("contentUrl", imgArray);

        imageSchemaAsJson.add(root.toString());
    }

    private String getCreatedDate(String damAssetPath) {
        Resource damAssetResource = resourceResolver.getResource(damAssetPath);
        ValueMap assetProperties = damAssetResource.adaptTo(ValueMap.class);
        return assetProperties.get(JcrConstants.JCR_CREATED, StringUtils.EMPTY);
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

    public String getDomainUrl() {
        return NavigationUtils.getBaseUrl(resourceResolver);
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
     * Gets the legacy browser notification.
     * 
     * @return the legacy browser notification
     */
    public String getLegacyBrowser() {
		return legacyBrowser;
	}

    /**
     * Gets the cookie notification config page path.
     *
     * @return the cookie notification config page path
     */
    public String getCookieNotificationPath() {
        return cookieNotificationPath;
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
        String state = null != request.getCookie(JLR_LOCALE_PRICING)
                ? request.getCookie(JLR_LOCALE_PRICING).getValue().toUpperCase()
                : StringUtils.EMPTY;
        return state;

    }

    /**
     * Gets the header path.
     *
     * @return the header path
     */
    public String getHeaderPath() {
        String headerPathValue = CommonUtils.getSiteRootPath(currentPage);
        return StringUtils.isBlank(headerPathValue) ? StringUtils.EMPTY
                : headerPathValue.concat(CommonConstants.PATH_HEADER);
    }

    /**
     * Gets the footer path.
     *
     * @return the footer path
     */
    public String getFooterPath() {
        String footerPathValue = CommonUtils.getSiteRootPath(currentPage);
        return StringUtils.isBlank(footerPathValue) ? StringUtils.EMPTY
                : footerPathValue.concat(CommonConstants.PATH_FOOTER);
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
        return currentPage == null ? Locale.getDefault().toLanguageTag()
                : currentPage.getLanguage(false).toLanguageTag();
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
                getMarket() != null ? StringUtils.substringAfterLast(getMarket(), CommonConstants.FORWARD_SLASH)
                        : CommonConstants.BLANK_SPACE);
        dataLayerProperties.put(CommonConstants.DL_LANGUAGE, getLanguage());
        dataLayerProperties.put(CommonConstants.DL_NAMEPLATE_CODE,
                pageProperties.get(CommonConstants.PN_NAMEPLATE_CODE, String.class) != null ? StringUtils
                        .substringAfterLast(pageProperties.get(CommonConstants.PN_NAMEPLATE_CODE, String.class),
                                CommonConstants.FORWARD_SLASH)
                        : CommonConstants.BLANK_SPACE);
        dataLayerProperties.put(CommonConstants.DL_MODELYEAR,
                pageProperties.get(CommonConstants.PN_MODELYEAR, String.class) != null
                        ? StringUtils.substringAfterLast(pageProperties.get(CommonConstants.PN_MODELYEAR, String.class),
                                CommonConstants.FORWARD_SLASH)
                        : CommonConstants.BLANK_SPACE);

        try {
            return String.format("{\"%s\":%s}",
                    ComponentUtils.getId(this.resource, this.currentPage, this.componentContext),
                    new ObjectMapper().writeValueAsString(dataLayerProperties));
        } catch (JsonProcessingException e) {
            LOGGER.error(ErrorUtils.createErrorMessage(ErrorUtilsConstants.AEM_JSON_EXCEPTION,
                    ErrorUtilsConstants.TECHNICAL, ErrorUtilsConstants.AEM_SITE, ErrorUtilsConstants.MODULE_SERVICE,
                    this.getClass().getSimpleName(), e));
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
