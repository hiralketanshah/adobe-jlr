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

import com.jlr.core.models.ContentCardModel;
import com.jlr.core.pojos.CTAPojo;
import com.jlr.core.utils.CtaUtils;

/**
 * The Class ContentCardImpl.
 */
@Model(adaptables = Resource.class, adapters = { ContentCardModel.class }, resourceType = ContentCardImpl.RESOURCE_TYPE)
public class ContentCardImpl extends GlobalModelImpl implements ContentCardModel {

    /** The Constant RESOURCE_TYPE. */
    public static final String RESOURCE_TYPE = "jlr/components/contentcard/v1/contentcard";

    /** The body copy. */
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String bodyCopy;

    /** The date. */
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String date;

    /** The content type. */
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String assestType;

    /** The video type. */
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String videoType;

    /** The cta list. */
    @Inject
    @Optional
    private Resource ctaList;

    /** The resource resolver. */
    @Inject
    private ResourceResolver resourceResolver;

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
     * Gets the body copy.
     *
     * @return the body copy
     */
    @Override
    public String getBodyCopy() {
        return bodyCopy;
    }

    /**
     * Gets the content type.
     *
     * @return the content type
     */
    @Override
    public String getAssestType() {
        return assestType;
    }

    /**
     * Gets the video type.
     *
     * @return the video type
     */
    @Override
    public String getVideoType() {
        return videoType;
    }
}
