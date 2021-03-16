package com.jlr.core.internal.models.v1;

import java.util.Collection;

import javax.inject.Inject;

import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.Optional;
import org.apache.sling.models.annotations.Via;
import com.adobe.cq.wcm.core.components.models.List;
import com.adobe.cq.wcm.core.components.models.ListItem;
import com.jlr.core.models.FooterLinksModel;

import org.apache.sling.models.annotations.injectorspecific.Self;
import org.apache.sling.models.annotations.via.ResourceSuperType;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;


// TODO: Auto-generated Javadoc
/**
 * The Class FooterLinksImpl.
 */
@Model(adaptables = {SlingHttpServletRequest.class,Resource.class}, 
adapters = {FooterLinksModel.class,List.class}, 
resourceType = FooterLinksImpl.RESOURCE_TYPE,
defaultInjectionStrategy=DefaultInjectionStrategy.OPTIONAL)
public class FooterLinksImpl extends GlobalModelImpl implements List,FooterLinksModel{
	
	
	/** The logger. */
	private final Logger logger = LoggerFactory.getLogger(this.getClass());
	
	/** The Constant RESOURCE_TYPE. */
	public static final String RESOURCE_TYPE = "jlr/components/footerlinks/v1/footerlinks";
	
	/** The delegate. */
	@Self @Via(type=ResourceSuperType.class)
	private List delegate;
	
	/** The header title. */
	@Inject
	@Optional
	@Via("resource")
    private String headerTitle;
	
	/**
	 * Gets the header title.
	 *
	 * @return the header title
	 */
	@Override
	public String getHeaderTitle() {
		logger.debug("headerTitle-- ",headerTitle);
		return headerTitle;
	}
	
	/**
	 * Gets the list items.
	 *
	 * @return the list items
	 */
	@Override
	public Collection<ListItem> getListItems(){
		return delegate.getListItems();
	}
	
	/**
	 * Link items.
	 *
	 * @return true, if successful
	 */
	@Override
	public boolean linkItems() {
		return delegate.linkItems();
	}
	
	
}
