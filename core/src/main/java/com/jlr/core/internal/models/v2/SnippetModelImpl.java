package com.jlr.core.internal.models.v2;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import javax.annotation.PostConstruct;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;

import javax.inject.Inject;

import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.ValueMap;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.Via;
import org.apache.sling.models.annotations.injectorspecific.Self;
import org.apache.sling.models.annotations.via.ResourceSuperType;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.adobe.cq.wcm.core.components.models.Teaser;
import com.jlr.core.pojos.CTAPojo;
import com.jlr.core.constants.CommonConstants;
import com.jlr.core.models.SnippetModel;
import com.jlr.core.utils.LinkUtils;

// TODO: Auto-generated Javadoc
/**
 * The Class SnippetModelImpl.
 */
@Model(adaptables = {SlingHttpServletRequest.class,Resource.class}, 
adapters = {SnippetModel.class,Teaser.class}, 
resourceType = "jlr/components/Snippet/v2/snippet",
defaultInjectionStrategy=DefaultInjectionStrategy.OPTIONAL)
public class SnippetModelImpl implements Teaser,SnippetModel{
	
	
	/** The logger. */
	private final Logger logger = LoggerFactory.getLogger(this.getClass());
	
	/** The delegate. */
	@Self @Via(type=ResourceSuperType.class)
	private Teaser delegate;
	
	/** The cta list. */
	@Inject @Via("resource")
    private Resource ctaList;
	
	/** The resource resolver. */
	@Inject
    private ResourceResolver resourceResolver;
	
	

	/** The list. */
	List<CTAPojo> list=new ArrayList<>();
	
	/**
	 * Inits the.
	 */
	@PostConstruct
	public void init() {
		if (ctaList != null && ctaList.hasChildren()) {
			Iterator<Resource> childResources = ctaList.listChildren();
			while (childResources.hasNext()) {
				Resource child = childResources.next();
				ValueMap properties = child.adaptTo(ValueMap.class);
				list.add(
						new CTAPojo(properties.get(CommonConstants.PN_CTA_TEXT, String.class),
								LinkUtils.appendLinkExtension(properties.get(CommonConstants.PN_CTA_LINK, String.class),
										resourceResolver),
								properties.get(CommonConstants.PN_CTA_TARGET, String.class)));
			}
		}
	}
	
	/**
	 * Gets the title.
	 *
	 * @return the title
	 */
	@Override
    public String getTitle() {
        return delegate.getTitle();
    }

    /**
     * Gets the description.
     *
     * @return the description
     */
    @Override
    public String getDescription() {
        return delegate.getDescription();
    }
    
    /**
     * Gets the cta list.
     *
     * @return the cta list
     */
    @Override
    public List<CTAPojo> getCtaList() {
		return list;
	}

}
