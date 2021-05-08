package com.jlr.core.internal.models.v1;

import java.util.ArrayList;
import java.util.List;
import javax.inject.Inject;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.Optional;
import com.jlr.core.pojos.CTAPojo;
import com.jlr.core.utils.CtaUtils;

/**
 * The Class VerticalSliderItem.
 *
 * @author Adobe
 */
@Model(adaptables = Resource.class, adapters = {VerticalSliderItem.class})
public class VerticalSliderItem extends GlobalModelImpl {

    /** The resource resolver. */
    @Inject
    private ResourceResolver resourceResolver;

    /** The cta list. */
    @Inject
    @Optional
    private Resource ctaList;

    /** The list. */
    List<CTAPojo> list = new ArrayList<>();

    /**
     * 
     * /** Gets the cta list.
     *
     * @return the cta list
     */
    public List<CTAPojo> getCtaList() {
        if (null != ctaList && ctaList.hasChildren()) {
            list = CtaUtils.createCtaList(ctaList, super.getHeaderCopy(), resourceResolver);
        }
        return list;
    }


}
