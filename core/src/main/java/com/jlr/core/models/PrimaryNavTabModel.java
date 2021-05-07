package com.jlr.core.models;

import java.util.List;
import javax.inject.Inject;
import javax.inject.Named;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import com.jlr.core.utils.LinkUtils;

/**
 * The Class PrimaryNavTabModel.
 *
 * @author Adobe
 */
@Model(adaptables = Resource.class, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class PrimaryNavTabModel {

    /** The Constant RESOURCE_TYPE. */
    public static final String RESOURCE_TYPE = "jlr/components/primarynavigation/v1/megadropdown";

    /** The resource resolver. */
    @Inject
    private ResourceResolver resourceResolver;

    /** The id. */
    @Inject
    private String id;

    /** The mm template. */
    @Inject
    private String mmTemplate;

    /** The left pane header copy. */
    @Inject
    private String leftPaneHeaderCopy;

    /** The left pane body copy. */
    @Inject
    private String leftPaneBodyCopy;

    /** The file reference image. */
    @Inject
    private String fileReferenceImage;

    /** The right pane image link. */
    @Inject
    private String rightPaneImageLink;

    /** The right pane image alt. */
    @Inject
    private String rightPaneImageAlt;

    /** The right pane image target. */
    @Inject
    private String rightPaneImageTarget;

    /** The is image decorative. */
    @Inject
    private String isImageDecorative;

    /** The primary nav aria label. */
    @Inject
    private String primaryNavAriaLabel;

    /** The primary nav title. */
    @Inject
    private String primaryNavTitle;

    /** The tab name. */
    @Inject
    public String tabName;

    /** The left cta. */
    @Inject
    @Named("leftCta/.")
    List<PrimaryNavLeftCTAModel> leftCta;

    /** The left dual column cta. */
    @Inject
    @Named("leftDualColumnCta/.")
    List<PrimaryNavDualLeftCTAModel> leftDualColumnCta;

    /** The left text cta. */
    @Inject
    @Named("leftTextCta/.")
    List<PrimaryNavLeftTextCTAModel> leftTextCta;

    /** The right cta. */
    @Inject
    @Named("rightCta/.")
    List<PrimaryNavImageTxtModel> rightCta;

    /** The quick links. */
    @Inject
    @Named("quickLinks/.")
    public List<PrimaryNavQuickLinksModel> quickLinks;

    /**
     * Gets the id.
     *
     * @return the id
     */
    public String getId() {
        return id;
    }

    /**
     * Gets the mm template.
     *
     * @return the mm template
     */
    public String getMmTemplate() {
        return mmTemplate;
    }

    /**
     * Gets the left pane header copy.
     *
     * @return the left pane header copy
     */
    public String getLeftPaneHeaderCopy() {
        return leftPaneHeaderCopy;
    }

    /**
     * Gets the left pane body copy.
     *
     * @return the left pane body copy
     */
    public String getLeftPaneBodyCopy() {
        return leftPaneBodyCopy;
    }

    /**
     * Gets the file reference image.
     *
     * @return the file reference image
     */
    public String getFileReferenceImage() {
        return fileReferenceImage;
    }

    /**
     * Gets the right pane image alt.
     *
     * @return the right pane image alt
     */
    public String getRightPaneImageAlt() {
        return rightPaneImageAlt;
    }

    /**
     * Gets the checks if is image decorative.
     *
     * @return the checks if is image decorative
     */
    public String getIsImageDecorative() {
        return isImageDecorative;
    }

    /**
     * Gets the primary nav aria label.
     *
     * @return the primary nav aria label
     */
    public String getPrimaryNavAriaLabel() {
        return primaryNavAriaLabel;
    }

    /**
     * Gets the right pane image link.
     *
     * @return the right pane image link
     */
    public String getRightPaneImageLink() {
        return LinkUtils.appendLinkExtension(rightPaneImageLink, resourceResolver);
    }

    /**
     * Gets the right pane image target.
     *
     * @return the right pane image target
     */
    public String getRightPaneImageTarget() {
        return rightPaneImageTarget;
    }

    /**
     * Gets the left cta.
     *
     * @return the left cta
     */
    public List<PrimaryNavLeftCTAModel> getLeftCta() {
        return leftCta;
    }

    /**
     * Gets the left text cta.
     *
     * @return the left text cta
     */
    public List<PrimaryNavLeftTextCTAModel> getLeftTextCta() {
        return leftTextCta;
    }

    /**
     * Gets the right cta.
     *
     * @return the right cta
     */
    public List<PrimaryNavImageTxtModel> getRightCta() {
        return rightCta;
    }

    /**
     * Gets the quick links.
     *
     * @return the quick links
     */
    public List<PrimaryNavQuickLinksModel> getQuickLinks() {
        return quickLinks;
    }

    /**
     * Gets the left dual column cta.
     *
     * @return the left dual column cta
     */
    public List<PrimaryNavDualLeftCTAModel> getLeftDualColumnCta() {
        return leftDualColumnCta;
    }

    /**
     * Gets the primar nav title.
     *
     * @return the primar nav title
     */
    public String getPrimarNavTitle() {
        return primaryNavTitle;
    }

    /**
     * Gets the tab name.
     *
     * @return the tab name
     */
    public String getTabName() {
        return tabName;
    }

}
