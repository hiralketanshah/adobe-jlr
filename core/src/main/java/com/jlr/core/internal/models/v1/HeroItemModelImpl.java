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
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.Optional;
import org.apache.sling.models.annotations.Via;
import org.apache.sling.models.annotations.injectorspecific.ChildResource;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

import com.jlr.core.models.HeroItemModel;
import com.jlr.core.pojos.CTAPojo;
import com.jlr.core.pojos.FooterPojo;
import com.jlr.core.utils.CommonUtils;
import com.jlr.core.utils.CtaUtils;

/**
 * The Class HeroItemModelImpl.
 *
 * @author Adobe
 */
@Model(adaptables = { Resource.class, SlingHttpServletRequest.class }, adapters = {
        HeroItemModel.class }, resourceType = HeroItemModelImpl.RESOURCE_TYPE)
public class HeroItemModelImpl extends GlobalModelImpl implements HeroItemModel {

    /**
     * The Constant RESOURCE_TYPE.
     */
    public static final String RESOURCE_TYPE = "jlr/components/heroitem/v1/heroitem";

    /**
     * The current page.
     */
    @Inject
    private Page currentPage;

    @Inject
    private Node currentNode;

    /**
     * The cta list.
     */
    @ChildResource
    @Optional
    @Via("resource")
    private Resource ctaList;

    /**
     * The footer list.
     */
    @ChildResource
    @Optional
    @Via("resource")
    private Resource footerList;

    /**
     * The resource resolver.
     */
    @Inject
    private ResourceResolver resourceResolver;

    /**
     * The caveat.
     */
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String caveat;

    /**
     * The price.
     */
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String price;

    /**
     * The list of CTA.
     */
    List<CTAPojo> listOfCta = new ArrayList<>();

    /**
     * The list of footer links.
     */
    List<FooterPojo> listOffooterLinks = new ArrayList<>();

    /**
     * Gets the cta list.
     *
     * @return the cta list
     */
    @Override
    public List<CTAPojo> getCtaList() {
        if (null != ctaList && ctaList.hasChildren()) {
            listOfCta = CtaUtils.createCtaList(ctaList, super.getHeaderCopy(), resourceResolver);
        }
        return listOfCta;
    }

    /**
     * Gets the footer list.
     *
     * @return the footer list
     */
    @Override
    public List<FooterPojo> getFooterList() {
        if (null != footerList && footerList.hasChildren()) {
            listOffooterLinks = CommonUtils.createFooterList(footerList);
        }
        return listOffooterLinks;
    }

    /**
     * Gets caveat.
     *
     * @return the caveat
     */
    @Override
    public String getCaveat() {
        return caveat;
    }

    @Override
    public boolean getFirstPosition() throws RepositoryException {
        String pageContainerPath = currentPage.getPath().concat("/jcr:content/root/container");
        return ComponentPositionUtils.getComponentPosition(pageContainerPath, currentNode, resourceResolver);

    }
}
