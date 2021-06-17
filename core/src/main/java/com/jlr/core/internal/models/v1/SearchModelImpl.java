package com.jlr.core.internal.models.v1;

import com.jlr.core.models.SearchConfigModel;
import com.jlr.core.models.SearchModel;
import com.jlr.core.services.SearchService;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;
import org.osgi.service.component.annotations.Reference;

import javax.annotation.PostConstruct;
import javax.inject.Inject;
import java.util.List;
import java.util.Map;

/**
 * The type Search model.
 */
@Model(adaptables = {Resource.class, SlingHttpServletRequest.class}, adapters = {
        SearchModel.class}, resourceType = SearchModelImpl.RESOURCE_TYPE)
public class SearchModelImpl implements SearchModel {

    /**
     * The constant RESOURCE_TYPE.
     */
    public static final String RESOURCE_TYPE = "jlr/components/search/v1/search";

    /** The search root. */
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String searchRoot;

    /** The resource resolver. */
    @Inject
    private ResourceResolver resolver;

    @Inject
    private SlingHttpServletRequest request;

    @Reference
    private SearchConfigModel searchConfigModel;

    @Reference
    private SearchService searchService;
    private List<String> results;

    @PostConstruct
    public void init(){
        String searchText = request.getParameter("fulltext");
        Map<String, String> exclusions = searchConfigModel.getExclusion();
        searchService.getFullJson(searchText, resolver);
    }

    @Override
    public List<String> getResults() {
        return results;
    }

    @Override
    public String getRelativePath() {
        return "/content/landrover/en";
    }
}
