package com.jlr.core.servlets;

import static org.mockito.Mockito.when;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.jcr.Node;
import javax.jcr.Property;
import javax.jcr.RepositoryException;
import javax.jcr.Session;

import org.apache.commons.httpclient.HttpClient;
import org.apache.jackrabbit.commons.JcrUtils;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.SlingHttpServletResponse;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.api.resource.ResourceResolverFactory;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockedStatic;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.mockito.Spy;

import com.adobe.acs.commons.fam.ThrottledTaskRunner;
import com.adobe.granite.crypto.CryptoSupport;
import com.day.cq.replication.Replicator;
import com.day.cq.search.Query;
import com.day.cq.search.QueryBuilder;
import com.day.cq.search.result.Hit;
import com.day.cq.search.result.SearchResult;
import com.google.gson.JsonArray;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import com.jlr.core.internal.services.FetchPriceImpl;
import com.jlr.core.services.FetchPrice;
import com.jlr.core.utils.CommonUtils;
import com.jlr.core.utils.PricingUtils;

import io.wcm.testing.mock.aem.junit5.AemContext;
import io.wcm.testing.mock.aem.junit5.AemContextExtension;

/**
 * The Class FetchPrieServletTest.
 *
 * @author Adobe
 */
@ExtendWith(AemContextExtension.class)
class FetchPrieServletTest {

    private final AemContext context = new AemContext();

    @InjectMocks
    private FetchPriceServlet fetchPriceServlet;

    @Mock
    ResourceResolver resourceResolver;

    @Mock
    Session session;

    @Mock
    private SlingHttpServletRequest request;

    @Mock
    private SlingHttpServletResponse response;

    @InjectMocks
    FetchPrice fetchPrice = new FetchPriceImpl();

    @Mock
    PrintWriter printWriter;

    @Mock
    Query query;

    @Mock
    QueryBuilder builder;

    @Mock
    SearchResult result;

    @Mock
    Hit hit;

    @Mock
    CryptoSupport cryptoSupport;

    @Mock
    ResourceResolverFactory resourceResolverFactory;

    @Mock
    Replicator replicator;

    @Mock
    ThrottledTaskRunner throttledTaskRunner;

    @Mock
    HttpClient httpClient;

    @Spy
    Node createdNode;

    @Mock
    Property property;
    List<String> listOfEndpoints = new ArrayList<>();
    JsonObject responseObject = new JsonObject();

    @BeforeEach
    void setUp() throws IOException, RepositoryException {
        MockitoAnnotations.initMocks(this);
        context.runMode("author");
        getJsonResponse();
        context.registerService(QueryBuilder.class, builder);
        context.registerService(CryptoSupport.class, cryptoSupport);
        context.registerService(ResourceResolverFactory.class, resourceResolverFactory);
        context.registerService(Replicator.class, replicator);
        context.registerService(ThrottledTaskRunner.class, throttledTaskRunner);
        context.registerInjectActivateService(fetchPrice);

        when(response.getWriter()).thenReturn(printWriter);
        when(resourceResolver.adaptTo(Session.class)).thenReturn(session);
        when(builder.createQuery(Mockito.any(), Mockito.any())).thenReturn(query);
        when(query.getResult()).thenReturn(result);
        List<Hit> hits = new ArrayList<>();
        hits.add(hit);
        when(result.getHits()).thenReturn(hits);
        when(hit.getPath()).thenReturn("userPath");
        listOfEndpoints.add("de|https://google.com/");
        listOfEndpoints.add("en_au|http://dummypathforaustralia");

        request = context.request();
        response = context.response();
        context.registerInjectActivateService(fetchPriceServlet);
    }

    private void getJsonResponse() {
        JsonElement id = new JsonParser().parse("123");
        JsonElement grossValue = new JsonParser().parse("108100.00");
        JsonElement netValue = new JsonParser().parse("108100.00");
        JsonObject vehicle = new JsonObject();
        vehicle.add("id", id);

        JsonObject gross = new JsonObject();
        gross.add("value", grossValue);

        JsonObject net = new JsonObject();
        net.add("value", netValue);
        JsonObject price = new JsonObject();
        price.add("GROSS", gross);
        price.add("NET", net);

        JsonObject productObject = new JsonObject();
        productObject.add("price", price);

        JsonArray productList = new JsonArray();
        productList.add(productObject);

        JsonObject featureObject = new JsonObject();
        featureObject.add("feature", productList);

        JsonArray featureList = new JsonArray();
        featureList.add(featureObject);

        JsonObject featureDictionary = new JsonObject();
        featureDictionary.add("feature-list", featureList);
        featureDictionary.add("vehicle", vehicle);

        responseObject.add("feature-dictionary", featureDictionary);
    }

    @Test
    void testDoGet() {

        try (MockedStatic<JcrUtils> mock = Mockito.mockStatic(JcrUtils.class);
                MockedStatic<PricingUtils> pricingUtils = Mockito.mockStatic(PricingUtils.class);
                MockedStatic<CommonUtils> commonUtils = Mockito.mockStatic(CommonUtils.class);) {
            mock.when(() -> {
                JcrUtils.getOrCreateByPath(Mockito.anyString(), Mockito.anyString(), Mockito.any(Session.class));
            }).thenReturn(createdNode);

            commonUtils.when(() -> {
                CommonUtils.getServiceResolver(Mockito.any(ResourceResolverFactory.class), Mockito.anyString());
            }).thenReturn(resourceResolver);

            pricingUtils.when(() -> {
                PricingUtils.formEndpointURLs(Mockito.any(ResourceResolver.class), Mockito.any(Map.class),
                        Mockito.any(Map.class), Mockito.any(Map.class), Mockito.anyString());
            }).thenReturn(listOfEndpoints);

            pricingUtils.when(() -> {
                PricingUtils.getJsonObjectFromResponse(Mockito.any());
            }).thenReturn(responseObject);

            fetchPriceServlet.doGet(request, response);
        }
    }
}
