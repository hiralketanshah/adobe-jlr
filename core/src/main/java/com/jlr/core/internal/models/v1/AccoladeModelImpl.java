
package com.jlr.core.internal.models.v1;

import com.day.cq.wcm.api.Page;
import com.jlr.core.utils.ComponentPositionUtils;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.Via;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;
import com.jlr.core.models.AccoladeModel;

import javax.inject.Inject;
import javax.jcr.Node;
import javax.jcr.RepositoryException;


/**
 * The Class AccoladeModelImpl.
 *
 * @author Adobe
 */
@Model(adaptables = {Resource.class, SlingHttpServletRequest.class}, adapters = {AccoladeModel.class}, resourceType = AccoladeModelImpl.RESOURCE_TYPE)
public class AccoladeModelImpl extends GlobalModelImpl implements AccoladeModel {

    /** The Constant RESOURCE_TYPE. */
    public static final String RESOURCE_TYPE = "jlr/components/accolade/v1/accolade";

    /** The resource resolver. */
    @Inject
    private ResourceResolver resourceResolver;

    /** The current page. */
    @Inject
    private Page currentPage;

    @Inject
    private Node currentNode;

    /** The background image. */
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    @Via("resource")
    private String backgroundImage;

    /**
     * Gets the background image.
     *
     * @return the background image
     */
    @Override
    public String getBackgroundImage() {
        return backgroundImage;
    }

    @Override
    public boolean getFirstPosition() throws RepositoryException {
        String pagecontainerPath = currentPage.getPath().concat("/jcr:content/root/container");
        return ComponentPositionUtils.getComponentPosition(pagecontainerPath, currentNode, resourceResolver);
    }
}
