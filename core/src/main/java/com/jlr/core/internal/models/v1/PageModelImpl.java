package com.jlr.core.internal.models.v1;

import java.util.HashMap;
import java.util.ListIterator;
import java.util.Locale;
import java.util.Map;
import javax.annotation.Nullable;
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
import com.jlr.core.utils.ErrorUtils;



/**
 * The Class PageModelImpl.
 */
@Model(adaptables = SlingHttpServletRequest.class, adapters = PageModel.class, resourceType = "jlr/components/page",
                defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class PageModelImpl implements PageModel {

    /** The current page. */
    @ScriptVariable
    protected com.day.cq.wcm.api.Page currentPage;

    /** The page properties. */
    @ScriptVariable
    protected ValueMap pageProperties;


    @HierarchicalPageProperty("applicationCode")
    private String applicationCode;

    @HierarchicalPageProperty("market")
    private String market;

    /**
     * @return the applicationCode
     */
    public String getApplicationCode() {
        return applicationCode;
    }

    /**
     * @return the market
     */
    public String getMarket() {
        return market;
    }

    /**
     * The current resource.
     */
    @SlingObject
    protected Resource resource;

    private String getBluePrintPropertyValue() {
        if (StringUtils.isBlank(getApplicationCode())) {
            LOGGER.debug("not null");
            ListIterator<String> listIterator = CommonConstants.homePageList.listIterator();
            while (listIterator.hasNext()) {
                String homepagePath = listIterator.next();
                LOGGER.debug("Homepage is {}", homepagePath);
                if (StringUtils.contains(homepagePath, currentPage.getPath())) {
                    LOGGER.debug("Match found: {}", homepagePath);
                    return homepagePath;
                }
            }
        } else {
            LOGGER.debug("getApplicationCode is NOT blank");
            return getApplicationCode();
        }
        LOGGER.debug("Match NOT found");
        return getApplicationCode();
    }


    /**
     * The component context.
     */
    @ScriptVariable(injectionStrategy = InjectionStrategy.OPTIONAL)
    @Nullable
    protected ComponentContext componentContext;

    /** The logger. */
    private static Logger LOGGER = LoggerFactory.getLogger(PageModelImpl.class);

    /*
     * (non-Javadoc)
     * 
     * @see com.adobe.cq.wcm.core.components.models.Page#getLanguage()
     */
    @Override
    public String getLanguage() {
        return currentPage == null ? Locale.getDefault().toLanguageTag() : currentPage.getLanguage(false).toLanguageTag();
    }

    /*
     * (non-Javadoc)
     * 
     * @see com.jlr.core.models.PageModel#getPageData()
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

        return null;
    }



}
