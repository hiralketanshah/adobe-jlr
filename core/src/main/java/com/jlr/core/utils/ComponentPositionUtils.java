package com.jlr.core.utils;

import com.jlr.core.constants.CommonConstants;
import com.jlr.core.internal.models.v1.SecondaryNavigationModelImpl;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.jcr.Node;
import javax.jcr.NodeIterator;
import javax.jcr.RepositoryException;

public class ComponentPositionUtils {
    public static boolean getComponentPosition(String pageContainerPath, Node currentNode, ResourceResolver resourceResolver) throws RepositoryException {

        /** The logger. */
        Logger LOGGER = LoggerFactory.getLogger(ComponentPositionUtils.class);

        boolean val=false;
        Resource pageContainer = resourceResolver.getResource(pageContainerPath);
        if (null != pageContainer) {
            Node node = pageContainer.adaptTo(Node.class);
            NodeIterator iterator= node.getNodes();
            if(iterator.hasNext()){
                Node componentNode=iterator.nextNode();
                if (componentNode.getName().contains(CommonConstants.JLR_CONTAINER)&& !componentNode.getName().contains(CommonConstants.JLR_DERIVATIVECONTAINER)){
                    String newPageContainerPath=pageContainerPath.concat(CommonConstants.FORWARD_SLASH).concat(componentNode.getName()).concat(CommonConstants.JLR_PARSYS);
                    val=getComponentPosition(newPageContainerPath,currentNode,resourceResolver);
                }
                else if (componentNode.getName().contains(CommonConstants.JLR_CAROUSEL)){
                    String newPageContainerPath=pageContainerPath.concat(CommonConstants.FORWARD_SLASH).concat(componentNode.getName());
                    val=getComponentPosition(newPageContainerPath,currentNode,resourceResolver);
                }
                else if(componentNode.getPath().equals(currentNode.getPath())) {
                    val = true;
                }
                else val=false;
            }
        } else {
            LOGGER.error("No component Node found at : {}", pageContainer.getPath());
        }
        return val;
    }
}
