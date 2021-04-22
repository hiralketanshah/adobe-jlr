package com.jlr.core.internal.models.v1;

import java.util.ArrayList;
import java.util.List;

import javax.inject.Inject;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.Optional;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

import com.jlr.core.models.DualFrameCarouselModel;
import com.jlr.core.pojos.CTAPojo;
import com.jlr.core.utils.CtaUtils;

@Model(adaptables = Resource.class, adapters = {
        DualFrameCarouselModel.class }, resourceType = DualFrameCarouselImpl.RESOURCE_TYPE)
public class DualFrameCarouselImpl extends GlobalModelImpl implements DualFrameCarouselModel {

    public static final String RESOURCE_TYPE = "jlr/components/dualfullframeitem/v1/dualfullframeitem";

    @Inject
    private ResourceResolver resourceResolver;

    /** The cta list. */
    @Inject
    @Optional
    private Resource ctaList;

    /** The content type. */
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String assetType;

    /** The list. */
    List<CTAPojo> list = new ArrayList<>();

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
     * Gets the content type.
     *
     * @return the content type
     */
    @Override
    public String getAssetType() {
        return assetType;
    }
}