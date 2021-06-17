package com.jlr.core.internal.services;

import com.day.cq.search.PredicateGroup;
import com.day.cq.search.Query;
import com.day.cq.search.QueryBuilder;
import com.day.cq.search.result.Hit;
import com.day.cq.search.result.SearchResult;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.jlr.core.config.SearchConfig;
import com.jlr.core.constants.CommonConstants;
import com.jlr.core.pojos.LinkPojo;
import com.jlr.core.pojos.ResultPojo;
import com.jlr.core.pojos.SearchPojo;
import com.jlr.core.services.SearchService;
import org.apache.commons.collections.MapUtils;
import org.apache.commons.lang.StringUtils;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.api.resource.ValueMap;
import org.osgi.service.component.annotations.Activate;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.Reference;
import org.osgi.service.metatype.annotations.Designate;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.jcr.RepositoryException;
import javax.jcr.Session;
import java.util.*;

import static com.day.cq.search.eval.FulltextPredicateEvaluator.FULLTEXT;
import static com.jlr.core.constants.CommonConstants.PN_PRIORITY;
import static com.jlr.core.utils.CommonUtils.getOnlyTextFromHTML;

@Component(immediate = true, service = SearchService.class)
@Designate(ocd = SearchConfig.class)
public class SearchServiceImpl implements SearchService {

    private static final Logger log = LoggerFactory.getLogger(SearchServiceImpl.class);

    @Reference
    private QueryBuilder queryBuilder;

    /**
     * The config.
     */
    private SearchConfig config;

    @Activate
    public void activate(SearchConfig config) {
        this.config = config;
    }

    @Override
    public String getFullJson(String searchText, ResourceResolver resolver) {
        log.trace("Entering method getFullJson");
        List<ResultPojo> results = new ArrayList<>();
        Long resultPerPage = 20l;
        Query query = queryBuilder.createQuery(createQueryPredicate(config.searchRootPath(), searchText),
                resolver.adaptTo(Session.class));
        SearchResult result = query.getResult();
        GsonBuilder gsonBuilder = new GsonBuilder();
        Gson gson = gsonBuilder.create();
        SearchPojo searchPojo = new SearchPojo();
        searchPojo.setQuery(searchText);
        searchPojo.setNoResultsText("Sorry, no results containing '" + searchText + "'");
        searchPojo.setResultsTitleText(result.getHits().size() + " results found for " + searchText);
        searchPojo.setMaxPage(result.getHits().size() / resultPerPage);
        try {
            for (final Hit hit : result.getHits()) {
                if (null != hit.getResource()) {
                    LinkPojo linkPojo = new LinkPojo();
                    linkPojo.setUrl(hit.getPath());
                    ResultPojo resultPojo = new ResultPojo();
                    resultPojo.setLink(linkPojo);
                    resultPojo.setTitle(getOnlyTextFromHTML(hit.getTitle()));
                    //TODO: get description from page for summary
                    resultPojo.setSummary(hit.getResource().getName());
                    results.add(resultPojo);
                }
            }
            searchPojo.setResults(results);
        } catch (RepositoryException e) {
            log.error("Error during search results");
        }
        return gson.toJson(searchPojo);
    }

    private PredicateGroup createQueryPredicate(String searchRoot, String searchText) {
        log.debug("Entering method getQueryPredicateData");
        final Map<String, String> predicate = new HashMap<>();
        //search the pages with fulltext
        predicate.put("path", searchRoot);
        predicate.put("type", "cq:Page");
        predicate.put(FULLTEXT, searchText);
        return PredicateGroup.create(predicate);
    }

    @Override
    public String processResultsByRules(SearchPojo searchPojo, ResourceResolver resolver) {

        Map<String, ResultPojo> resultsPojoMap = new HashMap<String, ResultPojo>();
        searchPojo.getResults().stream().forEach(resultPojo -> {
            resultsPojoMap.put(resultPojo.getLink().getUrl(), resultPojo);
        });

        Map<String, String> exclusionMap = getExclusion(resolver, searchPojo.getLocale());
        Map<String, String> priorityMap = getPriority(resolver, searchPojo.getLocale());

        List<ResultPojo> filteredResults = new LinkedList<>();
        if (MapUtils.isNotEmpty(exclusionMap)) {
            exclusionMap.keySet().stream().forEach(key -> {
                String excludeChildPages = exclusionMap.get(key);
                Iterator resultsIterator = resultsPojoMap.entrySet().iterator();
                while (resultsIterator.hasNext()) {
                    Map.Entry<String, ResultPojo> result = (Map.Entry<String, ResultPojo>) resultsIterator.next();
                    if (Boolean.valueOf(excludeChildPages) && result.getKey().startsWith(key)) {
                        resultsIterator.remove();
                    } else if (result.getKey().equals(key)) {
                        resultsIterator.remove();
                    }
                }
            });

        }

        resultsPojoMap.entrySet().stream().forEach(resultPojoEntry -> {
            if (MapUtils.isNotEmpty(priorityMap) && priorityMap.containsKey(resultPojoEntry.getKey())) {
                String order = priorityMap.get(resultPojoEntry.getKey());
                filteredResults.add(0, resultPojoEntry.getValue());
            } else {
                filteredResults.add(resultPojoEntry.getValue());
            }
        });

        List<ResultPojo> finalResultsForPage = getPaginationResults(searchPojo, filteredResults);
        searchPojo.setResults(finalResultsForPage);
        return new Gson().toJson(searchPojo);
    }

    private List<ResultPojo> getPaginationResults(SearchPojo searchPojo, List<ResultPojo> filteredResults) {
        int page = searchPojo.getPage().intValue();
        int PAGE_SIZE = 20;
        int total = filteredResults.size();
        int maxPages = filteredResults.size() / PAGE_SIZE;
        searchPojo.setMaxPage((long) maxPages);
        searchPojo.setResultsTitleText(filteredResults.size() + " results found for " + searchPojo.getQuery());
        if (page <= 0 ) {
            return null;
        }
        if (total <= PAGE_SIZE) {
            searchPojo.setMaxPage(1l);
            if (page == 1) {
                return filteredResults;
            }
        } else {
            int startIndex = (page - 1) * PAGE_SIZE;
            int endIndex = startIndex + PAGE_SIZE;
            if (filteredResults.size() >= startIndex) {
                return filteredResults.subList(startIndex, endIndex);
            }
        }
        return null;
    }

    private Map<String, String> getExclusion(ResourceResolver resolver, String locale) {
        String searchConfigPath = config.defaultSearchConfigPath();
        if(locale.equalsIgnoreCase("en_AU")) {
            searchConfigPath = config.auSearchConfigPath();
        } else if(locale.equalsIgnoreCase("de_DE")) {
            searchConfigPath = config.deSearchConfigPath();
        }
        Resource exclusion = resolver.getResource(searchConfigPath+"/jcr:content/root/container/searchconfig/exclusion");
        if (null != exclusion) {
            return getResourceMap(exclusion, CommonConstants.PN_PATHS_TO_EXCLUDE, CommonConstants.PN_EXCLUDE_CHILD_PAGES);
        }
        return null;
    }

    public Map<String, String> getPriority(ResourceResolver resolver, String locale) {
        String searchConfigPath = config.deSearchConfigPath();
        if(locale.equalsIgnoreCase("en_AU")) {
            searchConfigPath = config.auSearchConfigPath();
        } else if(locale.equalsIgnoreCase("de_DE")) {
            searchConfigPath = config.deSearchConfigPath();
        }
        Resource priority = resolver.getResource(searchConfigPath + "/jcr:content/root/container/searchconfig/priority");
        if (null != priority) {
            return getResourceMap(priority, CommonConstants.PN_PRIORITY_PATHS, PN_PRIORITY);
        }
        return null;
    }

    private Map<String, String> getResourceMap(Resource resource, String pathProperty, String otherProperty) {
        Map<String, String> finalMap = new HashMap<>();
        Iterator<Resource> pathResources = resource.listChildren();
        while (pathResources.hasNext()) {
            Resource child = pathResources.next();
            ValueMap properties = child.adaptTo(ValueMap.class);
            if (null != properties) {
                String pathValue = properties.get(pathProperty, String.class);
                String otherValue = properties.get(otherProperty, String.class);
                if (StringUtils.isNotEmpty(pathValue)) {
                    finalMap.put(pathValue, otherValue);
                }
            }
        }
        return finalMap;
    }

}
