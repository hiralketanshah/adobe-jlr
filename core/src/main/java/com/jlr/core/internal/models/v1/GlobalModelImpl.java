package com.jlr.core.internal.models.v1;

import java.text.SimpleDateFormat;
import java.util.Calendar;

import javax.inject.Inject;

import org.apache.commons.lang.StringUtils;
import org.apache.log4j.Logger;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

import com.adobe.acs.commons.models.injectors.annotation.HierarchicalPageProperty;
import com.jlr.core.constants.CommonConstants;
import com.jlr.core.models.GlobalModel;
import com.jlr.core.utils.AltTextUtils;
import com.jlr.core.utils.CtaUtils;
import com.jlr.core.utils.LinkUtils;
import com.jlr.core.utils.TcoUtils;

/**
 * The Class GlobalModelImpl.
 *
 * @author Adobe
 */
@Model(adaptables = Resource.class, adapters = { GlobalModel.class })
public class GlobalModelImpl implements GlobalModel {

	Logger logger = Logger.getLogger(GlobalModelImpl.class);

	/** The id. */
	@ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
	private String id;

	/** The date. */
	@ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
	private Calendar date;

	/** The date format. */
	@HierarchicalPageProperty(injectionStrategy = InjectionStrategy.OPTIONAL)
	private String dateFormat;

    /** The header title. */
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String headerTitle;

    /** The header copy. */
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String headerCopy;

    /** The header icon. */
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String headerIcon;

    /** The copy. */
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String copy;

    /** The logo image. */
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String logoImage;

    /** The file reference. */
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String fileReference;

    /** The image alt. */
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String imageAlt;
    
    /** To get altTextFromDAM when user checked the check box */
	@ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
	private Boolean altTextFromDAM;

    /** The image link. */
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String imageLink;

    /** The is decorative. */
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private boolean isDecorative;

    /** The text. */
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String text;

    /** The link. */
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String link;

    /** The link type. */
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String linkType;

    /** The target. */
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String target;

    /** The aria label. */
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String ariaLabel;

    /** The logo path. */
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String logoPath;

    /** The video id. */
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String videoId;

    /** The video path. */
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String videoPath;

    /** The poster image. */
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String posterImage;

    /** The video title. */
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String videoTitle;

    /** The icon. */
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String icon;

    /** The asset type. */
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String assetType;

    /** The price. */
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String price;

    /** The resource resolver. */
    @Inject
    private ResourceResolver resourceResolver;

    private Boolean isStaticPrice;

    /*
     * (non-Javadoc)
     * 
     * @see com.jlr.core.models.GlobalModel#getId()
     */
    @Override
    public String getId() {
        return id;
    }

    /*
     * (non-Javadoc)
     * 
     * @see com.jlr.core.models.GlobalModel#getDate()
     */
    @Override
    public String getDate() {
        String formattedDate = StringUtils.EMPTY;
        dateFormat = (null == dateFormat) ? CommonConstants.PN_REVISED_DATE_FORMAT : dateFormat;
        if (null != date) {
            SimpleDateFormat formatter = new SimpleDateFormat(dateFormat);
            formattedDate = formatter.format(date.getTime());
        }
        return formattedDate;
    }

    /*
     * (non-Javadoc)
     * 
     * @see com.jlr.core.models.GlobalModel#getHeaderTitle()
     */
    @Override
    public String getHeaderTitle() {
        return headerTitle;
    }

    /*
     * (non-Javadoc)
     * 
     * @see com.jlr.core.models.GlobalModel#getHeaderCopy()
     */
    @Override
    public String getHeaderCopy() {
        return headerCopy;
    }

    /*
     * (non-Javadoc)
     * 
     * @see com.jlr.core.models.GlobalModel#getHeaderIcon()
     */
    @Override
    public String getHeaderIcon() {
        return headerIcon;
    }

    /*
     * (non-Javadoc)
     * 
     * @see com.jlr.core.models.GlobalModel#getCopy()
     */
    @Override
    public String getCopy() {
        return copy;
    }

    /*
     * (non-Javadoc)
     * 
     * @see com.jlr.core.models.GlobalModel#getLogoImage()
     */
    @Override
    public String getLogoImage() {
        return logoImage;
    }

    /*
     * (non-Javadoc)
     * 
     * @see com.jlr.core.models.GlobalModel#getFileReference()
     */
    @Override
    public String getFileReference() {
        return fileReference;
    }

	@Override
	public String getAltTextFromDAM() {
		String damAltText = "";
		if (resourceResolver != null) {
			damAltText = AltTextUtils.getAltTextFromDAM(fileReference, resourceResolver);
		}
		return damAltText;

	}

    /*
     * (non-Javadoc)
     * 
     * @see com.jlr.core.models.GlobalModel#getImageAlt()
     */
    @Override
	public String getImageAlt() {
		String altDAMText = "";
		String damAltText = getAltTextFromDAM();
		if (isDecorative) {
			return null;
		} else {
			if (imageAlt != null && !imageAlt.isEmpty() && altTextFromDAM == true) {
				altDAMText = damAltText;
			} else if (imageAlt != null && !imageAlt.isEmpty() && altTextFromDAM == false) {
				altDAMText = imageAlt;
			} else if (imageAlt != null && imageAlt.isEmpty() && altTextFromDAM == false) {
				altDAMText = StringUtils.EMPTY;
			} else if (altTextFromDAM == true) {
				altDAMText = damAltText;
			}
		}
		return altDAMText;
	}

    /*
     * (non-Javadoc)
     * 
     * @see com.jlr.core.models.GlobalModel#getImageLink()
     */
    @Override
    public String getImageLink() {
        if (isDecorative) {
            return null;
        }
        return LinkUtils.appendLinkExtension(imageLink, resourceResolver);
    }

    /*
     * (non-Javadoc)
     * 
     * @see com.jlr.core.models.GlobalModel#getText()
     */
    @Override
    public String getText() {
        return text;
    }

    /*
     * (non-Javadoc)
     * 
     * @see com.jlr.core.models.GlobalModel#getLink()
     */
    @Override
    public String getLink() {
        return LinkUtils.appendLinkExtension(link, resourceResolver);
    }

    /*
     * (non-Javadoc)
     * 
     * @see com.jlr.core.models.GlobalModel#getLinkType()
     */
    @Override
    public String getLinkType() {
        return linkType;
    }

    /*
     * (non-Javadoc)
     * 
     * @see com.jlr.core.models.GlobalModel#getTarget()
     */
    @Override
    public String getTarget() {
        return target;
    }

    /*
     * (non-Javadoc)
     * 
     * @see com.jlr.core.models.GlobalModel#getAriaLabel()
     */
    @Override
    public String getAriaLabel() {
        if (null == ariaLabel) {
            if (null != headerCopy) {
                ariaLabel = CtaUtils.getAriaLabel(headerCopy, text);
            } else if (null != headerTitle) {
                ariaLabel = CtaUtils.getAriaLabel(headerTitle, text);
            }
        }
        return ariaLabel;
    }

    /*
     * (non-Javadoc)
     * 
     * @see com.jlr.core.models.GlobalModel#getVideoId()
     */
    @Override
    public String getVideoId() {
        return (CommonConstants.YOUTUBE_EMBED_URL).concat(videoId);
    }

    /*
     * (non-Javadoc)
     * 
     * @see com.jlr.core.models.GlobalModel#getVideoPath()
     */
    @Override
    public String getVideoPath() {
        return videoPath;
    }

    /*
     * (non-Javadoc)
     * 
     * @see com.jlr.core.models.GlobalModel#getPosterImage()
     */
    @Override
    public String getPosterImage() {
        return posterImage;
    }

    /*
     * (non-Javadoc)
     * 
     * @see com.jlr.core.models.GlobalModel#getVideoTitle()
     */
    @Override
    public String getVideoTitle() {
        return videoTitle;
    }

    /*
     * (non-Javadoc)
     * 
     * @see com.jlr.core.models.GlobalModel#getIcon()
     */
    @Override
    public String getIcon() {
        return CtaUtils.getIcon(icon, linkType);
    }

    /*
     * (non-Javadoc)
     * 
     * @see com.jlr.core.models.GlobalModel#getAssetType()
     */
    @Override
    public String getAssetType() {
        return assetType;
    }

    /*
     * (non-Javadoc)
     * 
     * @see com.jlr.core.models.GlobalModel#getPrice()
     */
    @Override
    public String getPrice() {
        return price;
    }

    @Override
    public Boolean getIsStaticPrice() {
        if (!StringUtils.isBlank(price)) {
            isStaticPrice = TcoUtils.isStaticPrice(price);
        }
        return isStaticPrice;
    }
}
