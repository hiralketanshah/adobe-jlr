package com.jlr.core.internal.services;

import com.day.cq.search.Predicate;
import com.day.cq.search.PredicateGroup;
import com.day.cq.search.Query;
import com.day.cq.search.QueryBuilder;
import com.day.cq.search.result.Hit;
import com.day.cq.search.result.SearchResult;
import com.jlr.core.services.SearchService;
import org.apache.sling.api.resource.ResourceResolver;
import org.osgi.service.component.annotations.Reference;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.jcr.RepositoryException;
import javax.jcr.Session;
import java.util.*;

import static com.day.cq.search.eval.FulltextPredicateEvaluator.FULLTEXT;

public class SearchServiceImpl implements SearchService {

    private static final Logger log = LoggerFactory.getLogger(SearchServiceImpl.class);

    @Reference
    private QueryBuilder queryBuilder;

    @Override
    public List<String> getRelatedPages(String searchRoot, String searchText, ResourceResolver resolver, Map<String, String> exclusions) {
        log.trace("Entering method getRelatedPages");
        List<String> results = new ArrayList<>();
        Query query = queryBuilder.createQuery(createQueryPredicate(searchRoot, searchText, exclusions),
                resolver.adaptTo(Session.class));
        SearchResult result = query.getResult();
        try {
            for (final Hit hit : result.getHits()) {
                String path = hit.getPath();
                log.debug("hit path: {}", path);
                if(null != path) {
                    results.add(path);
                }
            }
        } catch (RepositoryException e) {
            log.error("Error during search results");
        }
		return results;
    }

    private PredicateGroup createQueryPredicate(String searchRoot, String searchText, Map<String, String> exclusions) {
        log.debug("Entering method getQueryPredicateData");
        final Map<String, String> predicate = new HashMap<>();
        //search the pages with fulltext
        predicate.put("path",searchRoot);
        predicate.put("type","cq:Page");
        predicate.put(FULLTEXT,searchText);
        PredicateGroup predicateGroup = addExclusions(predicate, exclusions);
        predicateGroup.add(new Predicate("orderby").set("orderby", "@jcr:content/priority"));

        log.debug("final predicate map: {}", predicate);
        return predicateGroup;

    }

    private PredicateGroup addExclusions(Map<String, String> predicate, Map<String, String> exclusions) {
        StringBuilder exclusionBuilder = new StringBuilder("group");
        Iterator exclusionIterator = exclusions.keySet().iterator();

        final PredicateGroup combinedPredicate = new PredicateGroup();
        combinedPredicate.create(predicate);

        while(exclusionIterator.hasNext()){
            String pathExclusion = String.valueOf(exclusionIterator.next());
            PredicateGroup doNotSearchGroup = new PredicateGroup();
            doNotSearchGroup.setNegated(true);
            doNotSearchGroup.add(new Predicate("path").set("path", pathExclusion));
            combinedPredicate.add(doNotSearchGroup);
        }
        return combinedPredicate;
    }
}
