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
import com.jlr.core.models.CookieNotificationModel;
import com.jlr.core.pojos.CTAPojo;
import com.jlr.core.utils.CtaUtils;


/**
 * The Class CooKieNotificationModelImpl.
 *
 * @author Adobe
 */
@Model(adaptables = Resource.class, adapters = {CookieNotificationModel.class}, resourceType = CookieNotificationModelImpl.RESOURCE_TYPE)
public class CookieNotificationModelImpl extends GlobalModelImpl implements CookieNotificationModel {

    /** The Constant RESOURCE_TYPE. */
    public static final String RESOURCE_TYPE = "jlr/components/cookienotification/v1/cookienotification";

    @Inject
    private ResourceResolver resourceResolver;

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String header;

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String summary;

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private Integer expiry;

    /** The cta list. */
    @Inject
    @Optional
    private Resource ctaList;

    /** The list. */
    List<CTAPojo> list = new ArrayList<>();

    /**
     * Gets Header.
     *
     * @return the Header
     */
    @Override
    public String getHeader() {
        return header.toUpperCase();
    }

    /**
     * Gets Summary.
     *
     * @return the Summary
     */
    @Override
    public String getSummary() {
        return summary;
    }

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
     * Gets the Expiry.
     *
     * @return the Expiry
     */
    @Override
    public Integer getExpiry() {
        return expiry;
    }
}
