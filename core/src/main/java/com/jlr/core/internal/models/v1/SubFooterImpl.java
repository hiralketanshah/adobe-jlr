package com.jlr.core.internal.models.v1;

import java.util.Collection;

import javax.inject.Inject;

import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.Optional;
import org.apache.sling.models.annotations.Via;
import org.apache.sling.models.annotations.injectorspecific.Self;
import org.apache.sling.models.annotations.via.ResourceSuperType;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.adobe.cq.wcm.core.components.models.List;
import com.adobe.cq.wcm.core.components.models.ListItem;
import com.jlr.core.models.SubFooterModel;

/**
 * The Class SubFooterImpl.
 */
@Model(adaptables = {SlingHttpServletRequest.class,Resource.class}, 
adapters = {SubFooterModel.class,List.class}, 
resourceType = SubFooterImpl.RESOURCE_TYPE,
defaultInjectionStrategy=DefaultInjectionStrategy.OPTIONAL)
public class SubFooterImpl extends GlobalModelImpl implements List,SubFooterModel{
	
	
	/** The logger. */
	private final Logger logger = LoggerFactory.getLogger(this.getClass());
	
	/** The Constant RESOURCE_TYPE. */
	public static final String RESOURCE_TYPE = "jlr/components/subfooter/v1/subfooter";
	
	/** The delegate. */
	@Self @Via(type=ResourceSuperType.class)
	private List delegate;

	/**
	 * Gets the list items.
	 *
	 * @return the list items
	 */
	@Override
	public Collection<ListItem> getListItems(){
		logger.debug("listitems", delegate.getListItems());
		return delegate.getListItems();
	}
	
	/**
	 * Link items.
	 *
	 * @return true, if successful
	 */
	@Override
	public boolean linkItems() {
		logger.debug("linkItems", delegate.linkItems());
		return delegate.linkItems();
	}
	
	
}
