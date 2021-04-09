package com.jlr.core.internal.models.v1;

import java.util.List;

import javax.inject.Inject;
import javax.inject.Named;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import com.jlr.core.models.ContentCardListModel;
import com.jlr.core.models.ContentCardModel;

/**
 * The Class ContentCardImpl.
 */
@Model(adaptables = Resource.class, adapters = { ContentCardModel.class }, resourceType = ContentCardImpl.RESOURCE_TYPE, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class ContentCardImpl extends GlobalModelImpl implements ContentCardModel {

    /** The Constant RESOURCE_TYPE. */
    public static final String RESOURCE_TYPE = "jlr/components/contentcard/v1/contentcard";

    /** The content type. */
    @Inject
    private String column;
    
    @Inject
    @Named("contentCardList/.")
    public List<ContentCardListModel> contentCardList;

    @Override
	public String getColumn() {
		return column;
	}

	@Override
	public List<ContentCardListModel> getContentCardList() {
		return contentCardList;
	}

  
   
}
