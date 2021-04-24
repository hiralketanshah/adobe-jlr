package com.jlr.core.models;

import java.util.List;

import javax.inject.Inject;
import javax.inject.Named;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;

import com.jlr.core.constants.CommonConstants;
import com.jlr.core.utils.LinkUtils;
@Model(adaptables = Resource.class, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class PrimaryNavigationModel {
	
	public static final String RESOURCE_TYPE = "jlr/components/primarynavigation/v1/primarynavigation";

    /** The resource resolver. */
    @Inject
    private ResourceResolver resourceResolver;
    
    @Inject
    private String id;

    @Inject
    private String mmTemplate;

    @Inject
    private String leftPaneHeaderCopy;
    
    @Inject
    private String leftPaneBodyCopy;
    
    @Inject
    private String fileReferenceImage;
    
    @Inject
    private String rightPaneImageLink;
    
    @Inject
    private String rightPaneImageAlt;
    
    @Inject
    private String rightPaneImageTarget;
    
    @Inject
    private String isImageDecorative;
    
    @Inject
    private String primaryNavAriaLabel;

	@Inject
    private String primaryNavTitle;

	@Inject
    @Named("leftCta/.")
    List<PrimaryNavLeftCTA> leftCta;
    
    @Inject
    @Named("leftTextCta/.")
    List<PrimaryNavLeftTextCTA> leftTextCta;
   
    @Inject
    @Named("rightCta/.")
    List<PrimaryNavImageTxtModel> rightCta;
    
    @Inject
    @Named("quickLinks/.")
	public List<PrimaryNavQuickLinks> quickLinks;
    
    @Inject
    public String tabName;
    
    public String getId() {
        return id;
    }

	public String getMmTemplate() {
		return mmTemplate;
	}

	public String getLeftPaneHeaderCopy() {
		return leftPaneHeaderCopy;
	}

	public String getLeftPaneBodyCopy() {
		return leftPaneBodyCopy;
	}

	public String getFileReferenceImage() {
		return fileReferenceImage;
	}

	public String getRightPaneImageAlt() {
		return rightPaneImageAlt;
	}
	
	public String getIsImageDecorative() {
		return isImageDecorative;
	}

	public String getPrimaryNavAriaLabel() {
		if(null==primaryNavAriaLabel) {
			primaryNavAriaLabel=CommonConstants.EXPLORE.concat(CommonConstants.COLON).concat(primaryNavTitle);
		}
		return primaryNavAriaLabel;
	}

	public String getRightPaneImageLink() {
		return LinkUtils.appendLinkExtension(rightPaneImageLink, resourceResolver);
	}

	public String getRightPaneImageTarget() {
		return rightPaneImageTarget;
	}

	public List<PrimaryNavLeftCTA> getLeftCta() {
		return leftCta;
	}

	public List<PrimaryNavLeftTextCTA> getLeftTextCta() {
        return leftTextCta;
	}

	public List<PrimaryNavImageTxtModel> getRightCta() {
		return rightCta;
	}

	public List<PrimaryNavQuickLinks> getQuickLinks() {
		return quickLinks;
	}
	
	public String getTabName() {
		return tabName;
	}
	
	public String getPrimarNavTitle() {
		return primaryNavTitle;
	}

}
