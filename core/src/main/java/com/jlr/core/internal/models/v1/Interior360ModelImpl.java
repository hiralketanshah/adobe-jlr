package com.jlr.core.internal.models.v1;

import java.util.ArrayList;
import java.util.List;
import javax.inject.Inject;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.Optional;
import org.apache.sling.models.annotations.injectorspecific.ChildResource;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;
import com.jlr.core.models.Interior360Model;
import com.jlr.core.pojos.CTAPojo;
import com.jlr.core.utils.CtaUtils;

/**
 * Implementation class for Interior360Model.
 *
 * @author Adobe
 */
@Model(adaptables = Resource.class, adapters = {Interior360Model.class}, resourceType = Interior360ModelImpl.RESOURCE_TYPE)
public class Interior360ModelImpl extends GlobalModelImpl implements Interior360Model {

    /** The Constant RESOURCE_TYPE. */
    public static final String RESOURCE_TYPE = "jlr/components/interior360/v1/interior360";

    /** The resource resolver. */
    @Inject
    private ResourceResolver resourceResolver;

    /** The folder path. */
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String folderPath;

    /** The cta list. */
    @Inject
    @Optional
    @ChildResource
    private Resource ctaList;


    /** The list. */
    List<CTAPojo> list = new ArrayList<>();

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
     * Return images folder path.
     *
     * @return the folder path
     */
    @Override
    public String getFolderPath() {
        return folderPath;
    }
}
