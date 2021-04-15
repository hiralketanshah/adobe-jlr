package com.jlr.core.models;

import java.util.List;

import javax.inject.Inject;
import javax.inject.Named;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.Optional;

import com.jlr.core.pojos.CTAPojo;
import com.jlr.core.utils.CtaUtils;

@Model(adaptables = Resource.class, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class PrimaryNavImageTxtModel {
	
	@Inject
    private ResourceResolver resourceResolver;
	
	@Inject
    private String fileReference;
	
	@Inject
    private String rightPaneImageAlt;
	
	@Inject
    private String rightPaneHeaderCopy;
	
	@Inject
    private String rightPaneBodyCopy;
	
	@Inject
    private String rightPaneCopyCtaText;
	
	@Inject
    private String rightPaneCopyCtaLink;
	
	@Inject
    private String rightPaneCopyCtaIcon;
	
	@Inject
    private String rightPaneCopyCtaLinkType;
	
	@Inject
    private String rightPaneCopyCtaAriaLabel;
	
	@Inject
    private String rightPaneCopyCtaTarget;
	
	@Inject
    private Resource quicklinks;
	
	@Inject
    @Named("quickLinks/.")
	public List<CTAPojo> list;
	
	public String getFileReference() {
		return fileReference;
	}

	public String getRightPaneImageAlt() {
		return rightPaneImageAlt;
	}

	public String getRightPaneHeaderCopy() {
		return rightPaneHeaderCopy;
	}

	public String getRightPaneBodyCopy() {
		return rightPaneBodyCopy;
	}

	public String getRightPaneCopyCtaText() {
		return rightPaneCopyCtaText;
	}

	public String getRightPaneCopyCtaLink() {
		return rightPaneCopyCtaLink;
	}

	public String getRightPaneCopyCtaIcon() {
		return rightPaneCopyCtaIcon;
	}

	public String getRightPaneCopyCtaLinkType() {
		return rightPaneCopyCtaLinkType;
	}

	public String getRightPaneCopyCtaAriaLabel() {
		return rightPaneCopyCtaAriaLabel;
	}

	public String getRightPaneCopyCtaTarget() {
		return rightPaneCopyCtaTarget;
	}

	public List<CTAPojo> getQuicklinks() {
		if (null != quicklinks && quicklinks.hasChildren()) {
            list = CtaUtils.createCtaList(quicklinks, rightPaneHeaderCopy, resourceResolver);
        }
        return list;
	}


}
