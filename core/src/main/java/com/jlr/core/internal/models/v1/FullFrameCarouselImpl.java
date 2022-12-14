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
import com.jlr.core.models.FullFrameCarouselModel;
import com.jlr.core.pojos.CTAPojo;
import com.jlr.core.utils.CtaUtils;

/**
 * The Class FullFrameCarouselImpl.
 *
 * @author Adobe
 */
@Model(adaptables = Resource.class, adapters = {FullFrameCarouselModel.class}, resourceType = FullFrameCarouselImpl.RESOURCE_TYPE)
public class FullFrameCarouselImpl extends GlobalModelImpl implements FullFrameCarouselModel {

    /** The Constant RESOURCE_TYPE. */
    public static final String RESOURCE_TYPE = "jlr/components/fullframecarousel/v1/fullframecarousel";

    /** The resource resolver. */
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
