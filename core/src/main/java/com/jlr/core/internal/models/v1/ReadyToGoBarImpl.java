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
 */
@Model(adaptables = Resource.class, adapters = {ReadyToGoBarModel.class}, resourceType = ReadyToGoBarImpl.RESOURCE_TYPE)
public class ReadyToGoBarImpl extends GlobalModelImpl implements ReadyToGoBarModel {

    /** The Constant RESOURCE_TYPE. */
    public static final String RESOURCE_TYPE = "jlr/components/readytogobar/v1/readytogobar";

    /** The rtgb. */
    @Inject
    @Optional
    private Resource rtgb;
    
    @Inject
    @Optional
    private Resource faboverride;

    /** The resource resolver. */
    @Inject
    private ResourceResolver resourceResolver;

    /** The enable FAB. */
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String enableFAB;
	
	@ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String hideDesktop;
	
	@ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String hideTablet;
	
	@ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String hideMobile;
	
	@ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String listType;

    /** The list. */
    List<CTAPojo> list = new ArrayList<>();
    
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
    public String getEnableFAB() {
        return enableFAB;
    }
    
    public String getHideDesktop() {
		return hideDesktop;
	}

	public String getHideTablet() {
		return hideTablet;
	}

	public String getHideMobile() {
		return hideMobile;
	}

	public String getListType() {
		return listType;
	}

}

