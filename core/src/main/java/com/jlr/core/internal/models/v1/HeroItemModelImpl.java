package com.jlr.core.internal.models.v1;

import java.util.ArrayList;
import java.util.List;

import javax.inject.Inject;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.Optional;

import com.jlr.core.models.HeroItemModel;
import com.jlr.core.pojos.CTAPojo;
import com.jlr.core.pojos.FooterPojo;
import com.jlr.core.utils.CommonUtils;
import com.jlr.core.utils.CtaUtils;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

/**
 * The Class HeroItemModelImpl.
 */
@Model(adaptables = Resource.class, adapters = { HeroItemModel.class }, resourceType = HeroItemModelImpl.RESOURCE_TYPE)
public class HeroItemModelImpl extends GlobalModelImpl implements HeroItemModel {

    /**
     * The Constant RESOURCE_TYPE.
     */
    public static final String RESOURCE_TYPE = "jlr/components/heroitem/v1/heroitem";

    /** The cta list. */
    @Inject
    @Optional
    private Resource ctaList;

    /** The footer list. */
    @Inject
    @Optional
    private Resource footerList;

    /** The resource resolver. */
    @Inject
    private ResourceResolver resourceResolver;

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String caveat;

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
}
