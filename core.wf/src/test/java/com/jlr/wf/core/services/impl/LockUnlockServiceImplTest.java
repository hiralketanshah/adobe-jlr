package com.jlr.wf.core.services.impl;

import com.day.cq.wcm.api.Page;
import io.wcm.testing.mock.aem.junit5.AemContext;
import io.wcm.testing.mock.aem.junit5.AemContextExtension;
import org.apache.sling.api.resource.LoginException;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolverFactory;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.mockito.Mockito.when;

@ExtendWith({AemContextExtension.class, MockitoExtension.class})
class LockUnlockServiceImplTest {

    private static final String CONTENT_PATH = "/content/jlr/global/europe/test-masters/deu/de/vehicles.html";
    private static final String JSON_PATH = "/content/jlr/workflow/workflow.json";

    @InjectMocks
    private LockUnlockServiceImpl fixture = new LockUnlockServiceImpl();
    @Mock
    private ResourceResolverFactory resolverFactory;
    @Mock
    private Page page;

    @BeforeEach
    void setUp(AemContext context) throws LoginException {
        Resource resource = context.load().json(JSON_PATH, CONTENT_PATH);
        context.registerAdapter(Resource.class, Page.class, page);
        context.currentResource(resource);
        when(resolverFactory.getAdministrativeResourceResolver(null)).thenReturn(context.resourceResolver());
    }

    @Test
    void testLockUnlock() throws Exception {
        when(page.isLocked()).thenReturn(Boolean.FALSE);
        fixture.lockUnlockPage("/content/test", "lock");

        when(page.isLocked()).thenReturn(Boolean.TRUE);
        fixture.lockUnlockPage("/content/test", "unlock");
    }

    @Test
    void testLoginException() throws Exception {
        when(resolverFactory.getAdministrativeResourceResolver(null)).thenThrow(LoginException.class);
        fixture.lockUnlockPage("/content/test", "lock");
    }

}