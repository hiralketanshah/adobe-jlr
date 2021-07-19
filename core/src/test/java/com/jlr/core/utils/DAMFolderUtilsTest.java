package com.jlr.core.utils;


import io.wcm.testing.mock.aem.junit5.AemContext;
import io.wcm.testing.mock.aem.junit5.AemContextExtension;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import javax.jcr.Node;
import javax.jcr.RepositoryException;

import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.when;

/**
 * The Class DAMFolderUtilsTest.
 *
 */
@ExtendWith(AemContextExtension.class)
public class DAMFolderUtilsTest {
    private final AemContext context = new AemContext();

    @InjectMocks
    private DAMFolderUtils damFolderUtils;

    @Mock
    ResourceResolver resourceResolver;

    @BeforeEach
    public void setup() throws RepositoryException {
        MockitoAnnotations.initMocks(this);
        Resource folderRes = context.load().json("/content/jlr/DAMFolderUtils/DAMFolderUtils.json", "/content/jlr/dam/images");
        when(resourceResolver.getResource(anyString())).thenReturn(folderRes);
    }

    @Test
    public void testImageList(){
        DAMFolderUtils.getImageList("/content/jlr/dam/images", resourceResolver);
    }
}
