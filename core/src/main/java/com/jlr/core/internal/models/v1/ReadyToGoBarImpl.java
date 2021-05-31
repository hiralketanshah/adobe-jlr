package com.jlr.core.internal.models.v1;

import java.util.ArrayList;
import java.util.List;
import javax.inject.Inject;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.Optional;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;
import com.jlr.core.models.ReadyToGoBarModel;
import com.jlr.core.pojos.CTAPojo;
import com.jlr.core.utils.CtaUtils;

/**
 * The Class ReadyToGoBarImpl.
 *
 * @author Adobe
 */
@Model(adaptables = Resource.class, adapters = {ReadyToGoBarModel.class}, resourceType = ReadyToGoBarImpl.RESOURCE_TYPE)
public class ReadyToGoBarImpl extends GlobalModelImpl implements ReadyToGoBarModel {

    /** The Constant RESOURCE_TYPE. */
    public static final String RESOURCE_TYPE = "jlr/components/readytogobar/v1/readytogobar";

    /** The rtgb. */
    @Inject
    @Optional
    private Resource rtgb;

    /** The faboverride. */
    @Inject
    @Optional
    private Resource faboverride;

    /** The resource resolver. */
    @Inject
    private ResourceResolver resourceResolver;

    /** The enable FAB. */
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String enableFAB;

    /** The hide desktop. */
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String hideDesktop;

    /** The hide tablet. */
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String hideTablet;

    /** The hide mobile. */
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String hideMobile;

    /** The list type. */
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String listType;

    /** The list. */
    List<CTAPojo> list = new ArrayList<>();

    /** The fab list. */
    List<CTAPojo> fabList = new ArrayList<>();

    /**
     * Gets the rtgb.
     *
     * @return the rtgb
     */
    @Override
    public List<CTAPojo> getRtgb() {
        if (null != rtgb && rtgb.hasChildren()) {
            list = CtaUtils.createCtaList(rtgb, super.getHeaderCopy(), resourceResolver);
        }
        return list;
    }

    /**
     * Gets the faboverride.
     *
     * @return the faboverride
     */
    @Override
    public List<CTAPojo> getFaboverride() {
        if (null != faboverride && faboverride.hasChildren()) {
            list = CtaUtils.createCtaList(faboverride, super.getHeaderCopy(), resourceResolver);
        }
        return list;
    }

    /**
     * Gets the enable FAB.
     *
     * @return the enable FAB
     */
    @Override
    public String getEnableFAB() {
        return enableFAB;
    }

    /**
     * Gets the hide desktop.
     *
     * @return the hide desktop
     */
    @Override
    public String getHideDesktop() {
        return hideDesktop;
    }

    /**
     * Gets the hide tablet.
     *
     * @return the hide tablet
     */
    @Override
    public String getHideTablet() {
        return hideTablet;
    }

    /**
     * Gets the hide mobile.
     *
     * @return the hide mobile
     */
    @Override
    public String getHideMobile() {
        return hideMobile;
    }

    /**
     * Gets the list type.
     *
     * @return the list type
     */
    @Override
    public String getListType() {
        return listType;
    }

}

