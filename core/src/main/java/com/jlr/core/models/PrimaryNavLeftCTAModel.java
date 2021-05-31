package com.jlr.core.models;

import javax.inject.Inject;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import com.jlr.core.utils.LinkUtils;

/**
 * The Class PrimaryNavLeftCTAModel.
 *
 * @author Adobe
 */
@Model(adaptables = Resource.class, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class PrimaryNavLeftCTAModel {

    /** The resource resolver. */
    @Inject
    private ResourceResolver resourceResolver;

    /** The left pane cta text one. */
    @Inject
    private String leftPaneCtaTextOne;

    /** The left pane cta link one. */
    @Inject
    private String leftPaneCtaLinkOne;

    /** The left pane cta aria label one. */
    @Inject
    private String leftPaneCtaAriaLabelOne;

    /** The left pane cta target one. */
    @Inject
    private String leftPaneCtaTargetOne;

    /**
     * Gets the left pane cta text one.
     *
     * @return the left pane cta text one
     */
    public String getLeftPaneCtaTextOne() {
        return leftPaneCtaTextOne;
    }

    /**
     * Gets the left pane cta link one.
     *
     * @return the left pane cta link one
     */
    public String getLeftPaneCtaLinkOne() {
        return LinkUtils.appendLinkExtension(leftPaneCtaLinkOne, resourceResolver);
    }

    /**
     * Gets the left pane cta aria label one.
     *
     * @return the left pane cta aria label one
     */
    public String getLeftPaneCtaAriaLabelOne() {
        return leftPaneCtaAriaLabelOne;
    }

    /**
     * Gets the left pane cta target one.
     *
     * @return the left pane cta target one
     */
    public String getLeftPaneCtaTargetOne() {
        return leftPaneCtaTargetOne;
    }
}
