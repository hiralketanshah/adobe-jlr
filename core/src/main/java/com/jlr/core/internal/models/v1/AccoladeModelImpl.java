package com.jlr.core.internal.models.v1;

import java.text.SimpleDateFormat;
import java.util.Calendar;

import org.apache.commons.lang.StringUtils;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.Self;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

import com.jlr.core.models.AccoladeModel;
import com.jlr.core.utils.CommonUtils;

/**
 * The Class AccoladeModelImpl.
 */
@Model(adaptables = { Resource.class, SlingHttpServletRequest.class }, adapters = {
        AccoladeModel.class }, resourceType = AccoladeModelImpl.RESOURCE_TYPE)
public class AccoladeModelImpl extends GlobalModelImpl implements AccoladeModel {

    /** The Constant RESOURCE_TYPE. */
    public static final String RESOURCE_TYPE = "jlr/components/accolade/v1/accolade";

    /** The request. */
    @Self
    private SlingHttpServletRequest request;

    /** The date. */
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private Calendar date;

    /** The background image. */
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String backgroundImage;

    /**
     * Gets the date.
     *
     * @return the date
     */
    @Override
    public String getDate() {
        ResourceResolver resolver = request.getResourceResolver();
        String format = CommonUtils.getDateFormat(resolver);
        String formattedDate = StringUtils.EMPTY;
        if (null != date) {
            SimpleDateFormat formatter = new SimpleDateFormat(format);
            formattedDate = formatter.format(date.getTime());
        }
        return formattedDate;
    }

    /**
     * Gets the background image.
     *
     * @return the background image
     */
    @Override
    public String getBackgroundImage() {
        return backgroundImage;
    }
}
