package com.jlr.core.internal.models.v1;

import java.util.ArrayList;
import java.util.List;
import javax.inject.Inject;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;
import com.jlr.core.models.VehicleCardModel;
import com.jlr.core.pojos.CTAPojo;
import com.jlr.core.utils.CtaUtils;

/**
 * The type Vehicle card model.
 */
@Model(adaptables = Resource.class, adapters = {VehicleCardModel.class}, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class VehicleCardModelImpl extends GlobalModelImpl implements VehicleCardModel {

    /**
     * The Constant RESOURCE_TYPE.
     */
    public static final String RESOURCE_TYPE = "jlr/components/vehiclecard/v1/vehiclecard";

    /** The cta list. */
    @Inject
    private Resource ctaList;

    /** The features. */
    @Inject
    private Resource features;

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String disclaimer;

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String disclaimerLink;

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String disclaimerText;

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String imageLink;

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String tabName;

    /** The resource resolver. */
    @Inject
    private ResourceResolver resourceResolver;

    /** The price. */
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String price;

    /**
     * The list of CTA.
     */
    List<CTAPojo> listOfCta = new ArrayList<>();

    /**
     * Gets cta list.
     *
     * @return the cta list
     */
    public List<CTAPojo> getCtaList() {
        if (null != ctaList && ctaList.hasChildren()) {
            listOfCta = CtaUtils.createCtaList(ctaList, super.getHeaderCopy(), resourceResolver);
        }
        return listOfCta;
    }

    /**
     * Gets features.
     *
     * @return the features
     */
    public Resource getFeatures() {
        return features;
    }

    /**
     * Gets price.
     *
     * @return the price
     */
    @Override
    public String getPrice() {
        return price;
    }

    /**
     * Gets disclaimer.
     *
     * @return the disclaimer
     */
    public String getDisclaimer() {
        return disclaimer;
    }

    /**
     * Gets disclaimer link.
     *
     * @return the disclaimer link
     */
    public String getDisclaimerLink() {
        return disclaimerLink;
    }

    /**
     * Gets disclaimer text.
     *
     * @return the disclaimer text
     */
    public String getDisclaimerText() {
        return disclaimerText;
    }

    /**
     * Gets image link.
     *
     * @return the image link
     */
    @Override
    public String getImageLink() {
        return imageLink;
    }

    /**
     * Gets tab name.
     *
     * @return the tab name
     */
    public String getTabName() {
        return tabName;
    }
}
