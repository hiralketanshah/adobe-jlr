package com.jlr.core.internal.models.v1;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import javax.annotation.PostConstruct;
import javax.inject.Inject;

import org.apache.commons.lang.StringUtils;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.api.resource.ValueMap;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.Optional;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

import com.jlr.core.constants.CommonConstants;
import com.jlr.core.models.PrimaryNavImageTxtModel;
import com.jlr.core.models.PrimaryNavigationModel;
import com.jlr.core.pojos.CTAPojo;
import com.jlr.core.pojos.HygieneLinks;
import com.jlr.core.utils.CtaUtils;
import com.jlr.core.utils.LinkUtils;

@Model(adaptables = Resource.class, adapters = { PrimaryNavigationModel.class }, resourceType = PrimaryNavigationModelImpl.RESOURCE_TYPE)
public class PrimaryNavigationModelImpl implements PrimaryNavigationModel{
	
	public static final String RESOURCE_TYPE = "jlr/components/primarynavigation/v1/primarynavigation";

    /** The resource resolver. */
    @Inject
    private ResourceResolver resourceResolver;

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String mmTemplate;

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String leftPaneHeaderCopy;
    
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String leftPaneBodyCopy;
    
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String fileReference;
    
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String rightPaneImageAlt;
    
    @Inject
    @Optional
    private Resource leftCta;
    
    @Inject
    @Optional
    private Resource leftTextCta;

    /** The list. */
    List<CTAPojo> list = new ArrayList<>();
    
    List<PrimaryNavImageTxtModel> rightCta;

    @Override
	public String getMmTemplate() {
		return mmTemplate;
	}

	@Override
	public String getLeftPaneHeaderCopy() {
		return leftPaneHeaderCopy;
	}

	@Override
	public String getLeftPaneBodyCopy() {
		return leftPaneBodyCopy;
	}

	@Override
	public String getFileReference() {
		return fileReference;
	}

	@Override
	public String getRightPaneImageAlt() {
		return rightPaneImageAlt;
	}

	@Override
	public List<CTAPojo> getLeftCta() {
		if (null != leftCta && leftCta.hasChildren()) {
            list = CtaUtils.createCtaList(leftCta, leftPaneHeaderCopy, resourceResolver);
        }
        return list;
	}
	
	@PostConstruct
	 public void init() {
		 if (leftCta != null && leftCta.hasChildren()) {
			 Iterator<Resource> childResources = leftCta.listChildren();
	            while (childResources.hasNext()) {
	                Resource child = childResources.next();
	                ValueMap properties = child.adaptTo(ValueMap.class);
	                list.add(new CTAPojo(properties.get(CommonConstants.PN_CTA_TEXT, String.class),
	                        LinkUtils.appendLinkExtension(properties.get(CommonConstants.PN_CTA_LINK, String.class),
	                                resourceResolver),
	                        properties.get(CommonConstants.PN_CTA_TARGET, String.class), linkType, getIcon(icon, linkType),
	                        getComputedAriaLabel(properties, leftPaneHeaderCopy),properties.get(CommonConstants.PN_DESCRIPTION, String.class)));
	            }
	        }
	    }
	
	/**
	 * Gets the computed aria label.
	 *
	 * @param properties the properties
	 * @param header the header
	 * @return the computed aria label
	 */
	private static String getComputedAriaLabel(ValueMap properties, String header) {
       if (null != properties.get(CommonConstants.PN_CTA_ARIALABEL, String.class)) {
           return properties.get(CommonConstants.PN_CTA_ARIALABEL, String.class);
       }
       return getAriaLabel(header, properties.get(CommonConstants.PN_CTA_TEXT, String.class));
   }

   /**
    * Gets the aria label.
    *
    * @param header the header
    * @param text the text
    * @return the aria label
    */
   public static String getAriaLabel(String header, String text) {
       if (null != header) {
           return header.concat(CommonConstants.COLON).concat(text);
       }
       return StringUtils.EMPTY;
   }

	@Override
	public List<CTAPojo> getLeftTextCta() {
		if (null != leftTextCta && leftTextCta.hasChildren()) {
            list = CtaUtils.createCtaList(leftTextCta, leftPaneHeaderCopy, resourceResolver);
        }
        return list;
	}

	@Override
	public List<PrimaryNavImageTxtModel> getRightCta() {
		return rightCta;
	}

}
