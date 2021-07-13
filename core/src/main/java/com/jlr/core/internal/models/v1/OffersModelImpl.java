package com.jlr.core.internal.models.v1;

import java.util.ArrayList;
import java.util.List;

import javax.inject.Inject;
import javax.jcr.Node;
import javax.jcr.RepositoryException;

import com.day.cq.wcm.api.Page;
import com.jlr.core.utils.ComponentPositionUtils;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.Via;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

import com.jlr.core.models.OffersList;
import com.jlr.core.models.OffersModel;
import com.jlr.core.pojos.CTAPojo;
import com.jlr.core.utils.CtaUtils;

/**
 * The Class OffersModelImpl.
 */
@Model(adaptables = { Resource.class, SlingHttpServletRequest.class }, adapters = {
        OffersModel.class }, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class OffersModelImpl extends GlobalModelImpl implements OffersModel {

    /** The Constant RESOURCE_TYPE. */
    public static final String RESOURCE_TYPE = "jlr/components/offers/v1/offers";

    /** The current page. */
    @Inject
    private Page currentPage;

    @Inject
    private Node currentNode;

    /** The list. */
    List<CTAPojo> list = new ArrayList<>();

    /** The offer list. */
    @Inject
    @Via("resource")
    public List<OffersList> offerList = new ArrayList<>();

    /** The offers header copy. */
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String offersHeaderCopy;

    /** The offers image file reference. */
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String offersImageFileReference;

    /** The resource resolver. */
    @Inject
    private ResourceResolver resourceResolver;

    /** The cta list. */
    @Inject
    @Via("resource")
    private Resource ctaList;

    /** The price. */
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String price;

    /**
     * Gets the cta list.
     *
     * @return the cta list
     */
    @Override
    public List<CTAPojo> getCtaList() {
        if (null != ctaList && ctaList.hasChildren()) {
            list = CtaUtils.createCtaList(ctaList, super.getHeaderCopy(), resourceResolver);
        }
        return list;
    }

    /**
     * Gets the offer list.
     *
     * @return the offer list
     */
    @Override
    public List<OffersList> getOfferList() {
        return offerList;
    }

    /**
     * Gets the offers header copy.
     *
     * @return the offers header copy
     */
    @Override
    public String getOffersHeaderCopy() {
        return offersHeaderCopy;
    }

    /**
     * Gets the offers image file reference.
     *
     * @return the offers image file reference
     */
    @Override
    public String getOffersImageFileReference() {
        return offersImageFileReference;
    }

    @Override
    public boolean getFirstPosition() throws RepositoryException {
        String pageContainerPath= currentPage.getPath().concat("/jcr:content/root/container");
        return ComponentPositionUtils.getComponentPosition(pageContainerPath,currentNode, resourceResolver);
    }
}
