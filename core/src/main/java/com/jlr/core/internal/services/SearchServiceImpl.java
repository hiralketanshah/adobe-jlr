package com.jlr.core.internal.services;

import com.day.cq.commons.Externalizer;
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
import org.apache.commons.collections.CollectionUtils;
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
import java.util.stream.Collectors;

import static com.day.cq.commons.jcr.JcrConstants.JCR_CONTENT;
import static com.day.cq.commons.jcr.JcrConstants.JCR_DESCRIPTION;
import static com.day.cq.search.eval.FulltextPredicateEvaluator.FULLTEXT;
import static com.day.cq.wcm.api.NameConstants.NT_PAGE;
import static com.jlr.core.constants.CommonConstants.*;
import static com.jlr.core.utils.CommonUtils.getExternalizerDomainByLocale;
import static com.jlr.core.utils.CommonUtils.getOnlyTextFromHTML;

@Component(immediate = true, service = SearchService.class)
@Designate(ocd = SearchConfig.class)
public class SearchServiceImpl implements SearchService {

    private static final Logger log = LoggerFactory.getLogger(SearchServiceImpl.class);

    @Reference
    private QueryBuilder queryBuilder;

    @Reference
    private Externalizer externalizer;

    /**
     * The config.
     */
    private SearchConfig config;

    @Activate
    public void activate(SearchConfig config) {
        this.config = config;
    }

    @Override
    public String getFullJson(String searchText, String locale, ResourceResolver resolver) {
        log.trace("Entering method getFullJson");
        List<ResultPojo> results = new ArrayList<>();
        Query query = queryBuilder.createQuery(createQueryPredicate(searchText, locale),
                resolver.adaptTo(Session.class));
        SearchResult result = query.getResult();
        GsonBuilder gsonBuilder = new GsonBuilder();
        Gson gson = gsonBuilder.excludeFieldsWithoutExposeAnnotation().create();
        SearchPojo searchPojo = new SearchPojo();
        searchPojo.setQuery(searchText);
        searchPojo.setNoResultsText("Sorry, no results containing '" + searchText + "'");
        searchPojo.setResultsTitleText(result.getHits().size() + " results found for " + searchText);
        try {
            for (final Hit hit : result.getHits()) {
                if (null != hit.getResource()) {
                    LinkPojo linkPojo = new LinkPojo();
                    linkPojo.setUrl(hit.getPath());
                    ResultPojo resultPojo = new ResultPojo();
                    resultPojo.setLink(linkPojo);
                    resultPojo.setTitle(getOnlyTextFromHTML(hit.getTitle()));
                    resultPojo.setSummary(getDescription(hit.getResource()));
                    results.add(resultPojo);
                }
            }
            searchPojo.setResults(results);
        } catch (RepositoryException e) {
            log.error("Error during search results");
        }
        return gson.toJson(searchPojo);
    }

    private String getDescription(Resource resource) {
        if(resource.getChild(JCR_CONTENT) != null) {
            ValueMap valueMap = resource.getChild(JCR_CONTENT).getValueMap();
            if(valueMap != null) {
                return valueMap.get(JCR_DESCRIPTION, String.class);
            }
        }
        return StringUtils.EMPTY;
    }

    private String getExternalUrl(String path, String locale, ResourceResolver resolver) {
        String externalizerDomain = getExternalizerDomainByLocale(locale);
        String externalPath = externalizer.externalLink(resolver, externalizerDomain, path);
        return externalPath + ".html";
    }

    private PredicateGroup createQueryPredicate(String searchText, String locale) {
        log.debug("Entering method getQueryPredicateData of SearchService");
        final Map<String, String> predicate = new HashMap<>();
        String searchRoot = StringUtils.EMPTY;
        if(locale.equalsIgnoreCase(LOCALE_AU)) {
            searchRoot = config.auSearchRootPath();
        } else if(locale.equalsIgnoreCase(LOCALE_DE)) {
            searchRoot = config.deSearchRootPath();
        }
        //search the pages with fulltext
        predicate.put("path", searchRoot);
        predicate.put("type", NT_PAGE);
        predicate.put(FULLTEXT, searchText);
        predicate.put("p.limit", "-1");
        return PredicateGroup.create(predicate);
    }

    @Override
    public String processResultsByRules(SearchPojo searchPojo, ResourceResolver resolver) {

        Map<String, ResultPojo> resultsPojoMap = new TreeMap<>();
        Map<String, String> exclusionMap = getExclusion(resolver, searchPojo.getLocale());
        Map<String, String> priorityMap = getPriority(resolver, searchPojo.getLocale());


        searchPojo.getResults().stream().forEach(resultPojo -> {
            if(resultPojo.getLink() != null) {
                String path = resultPojo.getLink().getUrl();
                if(MapUtils.isNotEmpty(priorityMap) && priorityMap.containsKey(path)) {
                    String priority = priorityMap.get(path);
                    resultPojo.setPriority(Integer.parseInt(priority));
                }
                if(!path.contains("/config/")) {
                    resultsPojoMap.put(path, resultPojo);
                }
            }
        });

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

        List<ResultPojo> filteredResults = resultsPojoMap.values().stream().sorted().collect(Collectors.toList());
        List<ResultPojo> finalResultsForPage = getPaginationResults(searchPojo, filteredResults);
        if(CollectionUtils.isNotEmpty(finalResultsForPage)) {
            finalResultsForPage.stream().forEach(result -> {
                LinkPojo linkPojo = result.getLink();
                linkPojo.setUrl(getExternalUrl(linkPojo.getUrl(), searchPojo.getLocale(), resolver));
            });
        }
        searchPojo.setResults(finalResultsForPage);
        Gson gson = new GsonBuilder().excludeFieldsWithoutExposeAnnotation().create();
        return gson.toJson(searchPojo);
    }

    private List<ResultPojo> getPaginationResults(SearchPojo searchPojo, List<ResultPojo> filteredResults) {
        int page = searchPojo.getPage().intValue();
        int PAGE_SIZE = config.resultsPerPage();
        int total = filteredResults.size();
        int maxPages = filteredResults.size() / PAGE_SIZE;
        if(filteredResults.size() % PAGE_SIZE != 0) {
            maxPages = maxPages+1;
        }
        searchPojo.setMaxPage((long) maxPages);
        searchPojo.setResultsTitleText(filteredResults.size() + " results found for " + searchPojo.getQuery());
        if (page <= 0 || total <= 0) {
            searchPojo.setMaxPage(0l);
            return new ArrayList<>();
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
                if(filteredResults.size() <= endIndex) {
                    return filteredResults.subList(startIndex, filteredResults.size());
                } else {
                    return filteredResults.subList(startIndex, endIndex);
                }
            }
        }
        return null;
    }

    private Map<String, String> getExclusion(ResourceResolver resolver, String locale) {
        String searchConfigPath = getSearchConfigPath(locale);
        Resource exclusion = resolver.getResource(searchConfigPath+"/jcr:content/root/container/searchconfig/exclusion");
        if (null != exclusion) {
            return getResourceMap(exclusion, CommonConstants.PN_PATHS_TO_EXCLUDE, CommonConstants.PN_EXCLUDE_CHILD_PAGES);
        }
        return new HashMap<>();
    }

    private String getSearchConfigPath(String locale) {
        String searchConfigPath = StringUtils.EMPTY;
        if (locale.equalsIgnoreCase(LOCALE_AU)) {
            searchConfigPath = config.auSearchConfigPath();
        } else if (locale.equalsIgnoreCase(LOCALE_DE)) {
            searchConfigPath = config.deSearchConfigPath();
        }
        return searchConfigPath;
    }

    public Map<String, String> getPriority(ResourceResolver resolver, String locale) {
        String searchConfigPath = getSearchConfigPath(locale);
        Resource priority = resolver.getResource(searchConfigPath + "/jcr:content/root/container/searchconfig/priority");
        if (null != priority) {
            return getResourceMap(priority, CommonConstants.PN_PRIORITY_PATHS, PN_PRIORITY);
        }
        return new HashMap<>();
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
