package com.jlr.core.internal.models.v1;

import java.util.ArrayList;
import java.util.List;
import javax.inject.Inject;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;
import com.jlr.core.models.CPlayerModel;
import com.jlr.core.pojos.CTAPojo;
import com.jlr.core.utils.CtaUtils;

/**
 * The Class CPlayerModelImpl.
 *
 * @author Adobe
 */
@Model(adaptables = Resource.class, adapters = {CPlayerModel.class}, resourceType = CPlayerModelImpl.RESOURCE_TYPE)
public class CPlayerModelImpl extends GlobalModelImpl implements CPlayerModel {


    /** The Constant RESOURCE_TYPE. */
    public static final String RESOURCE_TYPE = "jlr/components/c-player/v1/c-player";

    /** The list. */
    List<CTAPojo> list = new ArrayList<>();

    /** The resource resolver. */
    @Inject
    private ResourceResolver resourceResolver;

    /** The cta list. */
    @Inject
    private Resource ctaList;


    /**
     * @return the nameplateId
     */
    @Override
    public String getNameplateId() {
        return nameplateId;
    }


    /**
     * @return the modelyear
     */
    @Override
    public String getModelyear() {
        return modelyear;
    }

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String nameplateId;

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String modelyear;


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


}
