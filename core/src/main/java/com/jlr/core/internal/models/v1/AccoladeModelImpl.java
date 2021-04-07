package com.jlr.core.internal.models.v1;

import java.text.SimpleDateFormat;
import java.util.Calendar;

import org.apache.commons.lang.StringUtils;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.api.resource.ValueMap;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.Self;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

import com.day.cq.commons.jcr.JcrConstants;
import com.jlr.core.constants.CommonConstants;
import com.jlr.core.models.AccoladeModel;

@Model(adaptables = { Resource.class, SlingHttpServletRequest.class }, adapters = {
        AccoladeModel.class }, resourceType = AccoladeModelImpl.RESOURCE_TYPE)
public class AccoladeModelImpl extends GlobalModelImpl implements AccoladeModel {

    public static final String RESOURCE_TYPE = "jlr/components/accolade/v1/accolade";

    @Self
    private SlingHttpServletRequest request;

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private Calendar date;

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String backgroundImage;

    @Override
    public String getDate() {
        ResourceResolver resolver = request.getResourceResolver();
        String format = getDateFormat(resolver);
        String formattedDate = StringUtils.EMPTY;
        if (null != date) {
            SimpleDateFormat formatter = new SimpleDateFormat(format);
            formattedDate = formatter.format(date.getTime());
        }
        return formattedDate;
    }

    private String getDateFormat(ResourceResolver resolver) {
        String dateFormat = CommonConstants.PN_REVISED_DATE_FORMAT;
        Resource homePage = resolver.getResource(CommonConstants.PATH_HOME_PAGE);
        if (null != homePage) {
            Resource jcrResource = homePage.getChild(JcrConstants.JCR_CONTENT);
            if (null != jcrResource) {
                ValueMap properties = jcrResource.adaptTo(ValueMap.class);
                dateFormat = properties.get(CommonConstants.PN_DATE_FORMAT, String.class);
            }
        }
        return dateFormat;
    }

    @Override
    public String getBackgroundImage() {
        return backgroundImage;
    }
}
