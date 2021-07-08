package com.jlr.core.internal.models.v1;

import java.util.ArrayList;
import java.util.List;
import javax.inject.Inject;
import javax.jcr.Node;
import javax.jcr.RepositoryException;

import com.day.cq.wcm.api.Page;
import com.jlr.core.utils.ComponentPositionUtils;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.Via;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;
import com.jlr.core.models.SnippetModel;
import com.jlr.core.pojos.CTAPojo;
import com.jlr.core.utils.CtaUtils;

/**
 * The Class SnippetModelImpl.
 *
 * @author Adobe
 */
@Model(adaptables = {Resource.class, SlingHttpServletRequest.class}, adapters = {SnippetModel.class}, resourceType = SnippetModelImpl.RESOURCE_TYPE,
                defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class SnippetModelImpl extends GlobalModelImpl implements SnippetModel {


    /** The Constant RESOURCE_TYPE. */
    public static final String RESOURCE_TYPE = "jlr/components/snippet/v1/snippet";

    /** The current page. */
    @Inject
    private Page currentPage;

    @Inject
    private Node currentNode;

    /** The list. */
    List<CTAPojo> list = new ArrayList<>();

    /** The resource resolver. */
    @Inject
    private ResourceResolver resourceResolver;

    /** The cta list. */
    @Inject
    @Via("resource")
    private Resource ctaList;

    /** The enable pricing. */
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    @Via("resource")
    private String enablePricing;

    /** The market region link. */
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    @Via("resource")
    private String marketRegionPath;

    /**
     * Gets the cta list.
     *
     * @return the cta list
     */
    @Override
    public List<CTAPojo> getCtaList() {
        if (null != ctaList && ctaList.hasChildren()) {
            list = CtaUtils.createCtaList(ctaList, super.getHeaderCopy(), resourceResolver);
        }
        return list;
    }

    /**
     * Gets the enable pricing.
     *
     * @return the enable pricing
     */
    @Override
    public String getEnablePricing() {
        return enablePricing;
    }

    /**
     * Gets the market region link.
     *
     * @return the market region link
     */
    @Override
    public String getMarketRegionPath() {
        return marketRegionPath;
    }

    @Override
    public boolean getFirstPosition() throws RepositoryException {
        String pagecontainerPath= currentPage.getPath().concat("/jcr:content/root/container");
        return ComponentPositionUtils.getComponentPosition(pagecontainerPath,currentNode, resourceResolver);

       /* String val=null;
        Resource pageContainer = resourceResolver.getResource(currentPage.getPath().concat("/jcr:content/root/container"));
        if (null != pageContainer) {
            Node node = pageContainer.adaptTo(Node.class);
            NodeIterator iterator= node.getNodes();
            while(iterator.hasNext()){
                Node componentNode=iterator.nextNode();
                if (componentNode.getName().contains("container") && iterator.getPosition()==1){
                    Resource childContainer = resourceResolver.getResource((currentPage.getPath().concat("/jcr:content/root/container/").concat(componentNode.getName()).concat("/parsys")));
                    if (null != childContainer) {
                        Node childNode = childContainer.adaptTo(Node.class);
                        NodeIterator childIterator = childNode.getNodes();
                        while (childIterator.hasNext()) {
                            Node childComponentNode = childIterator.nextNode();
                            if (childComponentNode.getPath().equals(currentNode.getPath()))
                                val = String.valueOf(childIterator.getPosition());
                        }
                    }
                }
                else if (componentNode.getName().contains("carousel") && iterator.getPosition()==1){
                    Resource childContainer = resourceResolver.getResource((currentPage.getPath().concat("/jcr:content/root/container/").concat(componentNode.getName())));
                    if (null != childContainer) {
                        Node childNode = childContainer.adaptTo(Node.class);
                        NodeIterator childIterator = childNode.getNodes();
                        while (childIterator.hasNext()) {
                            Node childComponentNode = childIterator.nextNode();
                            if (childComponentNode.getPath().equals(currentNode.getPath()))
                                val = String.valueOf(childIterator.getPosition());
                        }
                    }
                }
                else if(componentNode.getPath().equals(currentNode.getPath())) {
                    val = String.valueOf(iterator.getPosition());
                }
                else continue;
            }
        }
        return val;*/
    }
}
