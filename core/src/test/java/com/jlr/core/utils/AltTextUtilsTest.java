package com.jlr.core.utils;


import com.day.cq.dam.api.Asset;
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
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

/**
 * The Class ComponentPositionUtilsTest.
 *
 */
@ExtendWith(AemContextExtension.class)
public class AltTextUtilsTest {

    private final AemContext context = new AemContext();

    @InjectMocks
    private AltTextUtils altTextUtils;

    @Mock
    ResourceResolver resourceResolver;

    @BeforeEach
    public void setup() throws RepositoryException {
        MockitoAnnotations.initMocks(this);
        Resource image = context.load().json("/content/jlr/componentPositionUtils/componentPositionUtils.json", "/content/jlr/jcr:content/root/container");
        when(resourceResolver.getResource(anyString())).thenReturn(image);
        Asset asset= mock(Asset.class);
        context.registerAdapter(Resource.class, Asset.class, asset);
        when(asset.getMetadataValue("dam:altText")).thenReturn("damProperty");
    }

    @Test
    public void testProperties(){
        AltTextUtils.getAltTextFromDAM("/content/jlr/image",resourceResolver);
    }
}

