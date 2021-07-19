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
import javax.jcr.NodeIterator;
import javax.jcr.RepositoryException;

import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.*;

/**
 * The Class ComponentPositionUtilsTest.
 *
 */
@ExtendWith(AemContextExtension.class)
public class ComponentPositionUtilsTest {

    private final AemContext context = new AemContext();

    @InjectMocks
    private ComponentPositionUtils componentPositionUtils;

    @Mock
    Node node;

    @Mock
    ResourceResolver resourceResolver;

    @Mock
    Node currentNode;

    @BeforeEach
    public void setup() throws RepositoryException {
        MockitoAnnotations.initMocks(this);
        Resource pageContainer = context.load().json("/content/jlr/componentPositionUtils/componentPositionUtils.json", "/content/jlr/jcr:content/root/container");
        when(resourceResolver.getResource(anyString())).thenReturn(pageContainer);
        context.registerAdapter(Resource.class, Node.class, node);
    }

    @Test
    public void testRun1() throws RepositoryException {
        NodeIterator iterator = mock(NodeIterator.class);
        when(node.getNodes()).thenReturn(iterator);
        when(iterator.hasNext()).thenReturn(true);
        Node componentNode=mock(Node.class);
        when(iterator.nextNode()).thenReturn(componentNode);
        when(componentNode.getName()).thenReturn("snippet");
        when(componentNode.getPath()).thenReturn("/content/jlr/page/snippet");
        when(currentNode.getPath()).thenReturn("/content/jlr/page/snippet");
        componentPositionUtils.getComponentPosition("/content/jlr/jcr:content/root/container", currentNode, resourceResolver);
    }

    @Test
    public void testRun2() throws RepositoryException {
        NodeIterator iterator = mock(NodeIterator.class);
        when(node.getNodes()).thenReturn(iterator);
        when(iterator.hasNext()).thenReturn(true,false);
        Node componentNode=mock(Node.class);
        when(iterator.nextNode()).thenReturn(componentNode);
        when(componentNode.getName()).thenReturn("container");
        when(componentNode.getPath()).thenReturn("/content/jlr/page/container");
        when(currentNode.getPath()).thenReturn("/content/jlr/page/container");
        componentPositionUtils.getComponentPosition("/content/jlr/jcr:content/root/container", currentNode, resourceResolver);
    }

    @Test
    public void testRun3() throws RepositoryException {
        NodeIterator iterator = mock(NodeIterator.class);
        when(node.getNodes()).thenReturn(iterator);
        when(iterator.hasNext()).thenReturn(true,false);
        Node componentNode=mock(Node.class);
        when(iterator.nextNode()).thenReturn(componentNode);
        when(componentNode.getName()).thenReturn("carousel");
        when(componentNode.getPath()).thenReturn("/content/jlr/page/carousel");
        when(currentNode.getPath()).thenReturn("/content/jlr/page/container");
        componentPositionUtils.getComponentPosition("/content/jlr/jcr:content/root/container", currentNode, resourceResolver);
    }
}
