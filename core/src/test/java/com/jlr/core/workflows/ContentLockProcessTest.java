package com.jlr.core.workflows;

import com.adobe.granite.workflow.exec.WorkItem;
import com.adobe.granite.workflow.exec.Workflow;
import com.day.cq.wcm.api.Page;
import io.wcm.testing.mock.aem.junit5.AemContext;
import io.wcm.testing.mock.aem.junit5.AemContextExtension;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.api.resource.ResourceResolverFactory;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import javax.jcr.Session;

import static org.mockito.ArgumentMatchers.anyMap;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.*;

@ExtendWith({AemContextExtension.class, MockitoExtension.class})
class ContentLockProcessTest {

    private static final String CONTENT_PATH = "/content/jlr/global/europe/test-masters/deu/de/vehicles.html";
    private static final String JSON_PATH = "/content/jlr/workflow/workflow.json";

    private final AemContext context = new AemContext();

    @InjectMocks
    private ContentLockProcess fixture = new ContentLockProcess();
    @Mock
    private ResourceResolverFactory resolverFactory;
    @Mock
    private ResourceResolver resourceResolver;
    @Mock
    private Session session;
    @Mock
    private WorkItem workItem;
    @Mock
    private Workflow workflow;
    @Mock
    private Page page;

    @BeforeEach
    void setUp() throws Exception {
        Resource resource = context.load().json(JSON_PATH, CONTENT_PATH);
        context.registerAdapter(ResourceResolver.class, Session.class, session);
        context.registerAdapter(Resource.class, Page.class, page);
        when(resolverFactory.getServiceResourceResolver(anyMap())).thenReturn(resourceResolver);
        when(resolverFactory.getAdministrativeResourceResolver(null)).thenReturn(resourceResolver);
        when(page.getPath()).thenReturn(CONTENT_PATH);
        when(resourceResolver.adaptTo(Session.class)).thenReturn(session);
        when(resourceResolver.resolve(anyString())).thenReturn(resource);
        when(resourceResolver.getResource(anyString())).thenReturn(resource);
        when(workItem.getContentPath()).thenReturn(CONTENT_PATH);
    }

    @Test
    void testExecute() throws Exception {
        fixture.execute(workItem, null, null);
        verify(page, times(1)).lock();
    }

}