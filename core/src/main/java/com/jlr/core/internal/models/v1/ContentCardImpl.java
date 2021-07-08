package com.jlr.core.internal.models.v1;

import java.util.ArrayList;
import java.util.List;

import javax.inject.Inject;

import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.Via;
import org.apache.sling.models.annotations.injectorspecific.ChildResource;

import com.jlr.core.models.ContentCardListModel;
import com.jlr.core.models.ContentCardModel;
import com.jlr.core.pojos.CTAPojo;
import com.jlr.core.utils.CtaUtils;

/**
 * The Class ContentCardImpl.
 *
 * @author Adobe
 */
@Model(adaptables = { Resource.class, SlingHttpServletRequest.class }, adapters = {
        ContentCardModel.class }, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class ContentCardImpl extends GlobalModelImpl implements ContentCardModel {

    /** The resource resolver. */
    @Inject
    private ResourceResolver resourceResolver;

    /** The content type. */
    @Inject
    @Via("resource")
    private String column;

    /** The enable stacking. */
    @Inject
    @Via("resource")
    private String enableStacking;

    /** The content card list. */
    @Inject
    @Via("resource")
    public List<ContentCardListModel> contentCardList;

    /** The cta list. */
    @ChildResource
    @Via("resource")
    private Resource ctaList;
    
    /** The enable pricing. */
    @Inject
    @Via("resource")
    private String enablePricing;

    /** The lists. */
    List<CTAPojo> lists = new ArrayList<>();

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
     * Gets the enable pricing.
     *
     * @return the enable pricing
     */
    @Override
    public String getEnablePricing() {
        return enablePricing;
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

}
