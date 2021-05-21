package com.jlr.core.internal.models.v1;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.annotation.PostConstruct;
import javax.inject.Inject;

import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.OSGiService;
import org.apache.sling.models.annotations.injectorspecific.RequestAttribute;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

import com.day.cq.commons.inherit.InheritanceValueMap;
import com.day.cq.wcm.api.Page;
import com.jlr.core.models.ContentCardListModel;
import com.jlr.core.models.ContentCardModel;
import com.jlr.core.pojos.CTAPojo;
import com.jlr.core.services.TcoService;
import com.jlr.core.utils.CtaUtils;

/**
 * The Class ContentCardImpl.
 *
 * @author Adobe
 */
@Model(adaptables = { Resource.class, SlingHttpServletRequest.class }, adapters = {
        ContentCardModel.class }, resourceType = ContentCardImpl.RESOURCE_TYPE, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class ContentCardImpl extends GlobalModelImpl implements ContentCardModel {

    /** The Constant RESOURCE_TYPE. */
    public static final String RESOURCE_TYPE = "jlr/components/contentcard/v1/contentcard";

    /**
     * The Key.
     */
    @RequestAttribute(injectionStrategy = InjectionStrategy.OPTIONAL)
    String key;

    /** The request. */
    @Inject
    private SlingHttpServletRequest request;

    /** The current page. */
    @Inject
    private Page currentPage;

    /** The page properties. */
    @Inject
    private InheritanceValueMap pageProperties;

    /** The tco service. */
    @OSGiService
    private TcoService tcoService;

    /** The resource resolver. */
    @Inject
    private ResourceResolver resourceResolver;

    /** The content type. */
    @Inject
    private String column;

    /** The enable stacking. */
    @Inject
    private String enableStacking;

    /** The content card list. */
    @Inject
    public List<ContentCardListModel> contentCardList;

    /** The cta list. */
    @Inject
    private Resource ctaList;

    /** The price. */
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String price;

    /** The lists. */
    List<CTAPojo> lists = new ArrayList<>();

    /** The price config value. */
    private String priceConfigValue;

    /**
     * Inits the.
     */
    @PostConstruct
    public void init() {

        Map<String, String> modelPriceMap = tcoService.getModelPrice(resourceResolver, request, currentPage,
                pageProperties, price, key);
        modelPriceMap.entrySet().iterator().forEachRemaining(entry -> {
            priceConfigValue = entry.getKey();
            price = entry.getValue();
        });

    }

    /**
     * Gets the cta list.
     *
     * @return the cta list
     */
    @Override
    public List<CTAPojo> getCtaList() {
        if (null != ctaList && ctaList.hasChildren()) {
            lists = CtaUtils.createCtaList(ctaList, super.getHeaderCopy(), resourceResolver);
        }
        return lists;
    }

    /**
     * Gets the column.
     *
     * @return the column
     */
    @Override
    public String getColumn() {
        return column;
    }

    /**
     * Gets the enable stacking.
     *
     * @return the enable stacking
     */
    @Override
    public String getEnableStacking() {
        return enableStacking;
    }

    /**
     * Gets the content card list.
     *
     * @return the content card list
     */
    @Override
    public List<ContentCardListModel> getContentCardList() {
        return contentCardList;
    }

    /**
     * Gets price.
     *
     * @return the price
     */
    @Override
    public String getPrice() {
        return price;
    }

    /**
     * Gets the price config value.
     *
     * @return the price config value
     */
    @Override
    public String getPriceConfigValue() {
        return priceConfigValue;
    }
}
