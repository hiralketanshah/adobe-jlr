package com.jlr.core.internal.models.v1;

import javax.inject.Inject;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;

import com.jlr.core.models.PrimaryNavLeftCTATwoModel;
import com.jlr.core.utils.LinkUtils;

/**
 * The Class PrimaryNavDualLeftCTAModel.
 *
 * @author Adobe
 */
@Model(adaptables = Resource.class, adapters = {
		PrimaryNavLeftCTATwoModel.class }, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class PrimaryNavLeftCTATwoModelImpl implements PrimaryNavLeftCTATwoModel{

    /** The resource resolver. */
    @Inject
    private ResourceResolver resourceResolver;

    /** The left pane cta text two. */
    @Inject
    private String leftPaneCtaTextTwo;

    /** The left pane cta link two. */
    @Inject
    private String leftPaneCtaLinkTwo;

    /** The left pane cta aria label two. */
    @Inject
    private String leftPaneCtaAriaLabelTwo;

    /** The left pane cta target two. */
    @Inject
    private String leftPaneCtaTargetTwo;

    /**
     * Gets the left pane cta text two.
     *
     * @return the left pane cta text two
     */
    @Override
    public String getLeftPaneCtaTextTwo() {
        return leftPaneCtaTextTwo;
    }

    /**
     * Gets the left pane cta link two.
     *
     * @return the left pane cta link two
     */
    @Override
    public String getLeftPaneCtaLinkTwo() {
        return LinkUtils.appendLinkExtension(leftPaneCtaLinkTwo, resourceResolver);
    }

    /**
     * Gets the left pane cta aria label two.
     *
     * @return the left pane cta aria label two
     */
    @Override
    public String getLeftPaneCtaAriaLabelTwo() {
        return leftPaneCtaAriaLabelTwo;
    }

    /**
     * Gets the left pane cta target two.
     *
     * @return the left pane cta target two
     */
    @Override
    public String getLeftPaneCtaTargetTwo() {
        return leftPaneCtaTargetTwo;
    }

}
