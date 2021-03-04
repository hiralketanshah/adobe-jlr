package com.jlr.core.internal.models.v1;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import javax.annotation.PostConstruct;
import javax.inject.Inject;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.api.resource.ValueMap;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.Optional;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.jlr.core.constants.CommonConstants;
import com.jlr.core.models.SnippetModel;
import com.jlr.core.pojos.CTAPojo;
import com.jlr.core.utils.LinkUtils;

// TODO: Auto-generated Javadoc
/**
 * The Class SnippetModelImpl.
 */
@Model(adaptables = Resource.class,
adapters = {SnippetModel.class},
resourceType = "jlr/components/Snippet/v1/snippet",
defaultInjectionStrategy=DefaultInjectionStrategy.OPTIONAL)
public class SnippetModelImpl implements SnippetModel {
	
	/** The logger. */
	private final Logger logger = LoggerFactory.getLogger(this.getClass());
	
	
	/** The list. */
	List<CTAPojo> list;
	
	/** The title. */
	@Inject
	String title;
	
	/** The resource resolver. */
	@Inject
    private ResourceResolver resourceResolver;
	
	/** The cta list. */
	@Inject
    @Optional
    private Resource ctaList;
	
	/** The description. */
	@Inject
	String description;
	
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
		return title;
	}

	/**
	 * Gets the description.
	 *
	 * @return the description
	 */
	@Override
	public String getDescription() {
		return description;
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
