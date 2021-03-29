package com.jlr.core.internal.models.v1;

import java.util.ArrayList;
import java.util.List;

import javax.inject.Inject;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.Optional;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.jlr.core.models.SnippetModel;
import com.jlr.core.pojos.CTAPojo;
import com.jlr.core.utils.CtaUtils;

/**
 * The Class SnippetModelImpl.
 */
@Model(adaptables = Resource.class, adapters = {
        SnippetModel.class }, resourceType = SnippetModelImpl.RESOURCE_TYPE, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class SnippetModelImpl extends GlobalModelImpl implements SnippetModel {

    /** The logger. */
    private final Logger logger = LoggerFactory.getLogger(this.getClass());

    /** The Constant RESOURCE_TYPE. */
    public static final String RESOURCE_TYPE = "jlr/components/snippet/v1/snippet";

    /** The list. */
    List<CTAPojo> list = new ArrayList<>();

    @Inject
    private ResourceResolver resourceResolver;

    /** The cta list. */
    @Inject
    @Optional
    private Resource ctaList;

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

}
