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
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.jlr.core.constants.CommonConstants;
import com.jlr.core.models.GlobalModel;
import com.jlr.core.models.SnippetModel;
import com.jlr.core.pojos.CTAPojo;
import com.jlr.core.utils.LinkUtils;


/**
 * The Class SnippetModelImpl.
 */
@Model(adaptables = Resource.class,
adapters = {SnippetModel.class, GlobalModel.class},
resourceType = SnippetModelImpl.RESOURCE_TYPE,
defaultInjectionStrategy=DefaultInjectionStrategy.OPTIONAL)
public class SnippetModelImpl implements SnippetModel, GlobalModel {
	
	/** The logger. */
	private final Logger logger = LoggerFactory.getLogger(this.getClass());
	
	/** The Constant RESOURCE_TYPE. */
    public static final String RESOURCE_TYPE = "jlr/components/Snippet/v1/snippet";
	
	/** The list. */
	List<CTAPojo> list=new ArrayList<>();
	
	/** The id. */
	@Inject
    private String id;

	/** The headerTitle. */
	@Inject
	private String headerTitle;
	
	/** The resource resolver. */
	@Inject
    private ResourceResolver resourceResolver;
	
	/** The cta list. */
	@Inject
    private Resource ctaList;
	
	/** The copy. */
	@Inject
	String copy;
	
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
								properties.get(CommonConstants.PN_CTA_TARGET, String.class),
								properties.get(CommonConstants.PN_CTA_LINK_TYPE, String.class)));
			}
		}
	}

	/**
	 * Gets the headerTitle.
	 *
	 * @return the headerTitle
	 */
	@Override
	public String getHeaderTitle() {
		return headerTitle;
	}

	/**
	 * Gets the copy.
	 *
	 * @return the copy
	 */
	@Override
	public String getCopy() {
		return copy;
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
	
	/**
	 * Gets the id.
	 *
	 * @return the id
	 */
	@Override
	public String getId() {
		return id;
	}


}
