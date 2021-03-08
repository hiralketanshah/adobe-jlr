package com.jlr.core.internal.models.v1;

import java.text.SimpleDateFormat;
import java.util.Calendar;

import javax.inject.Inject;

import org.apache.commons.lang.StringUtils;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

import com.jlr.core.models.AccoladeModel;
import com.jlr.core.models.GlobalModel;
import com.jlr.core.utils.LinkUtils;

@Model(adaptables = Resource.class, adapters = { GlobalModel.class,
        AccoladeModel.class }, resourceType = AccoladeModelImpl.RESOURCE_TYPE)
public class AccoladeModelImpl implements GlobalModel, AccoladeModel {

    public static final String RESOURCE_TYPE = "jlr/components/accolade/v1/accolade";

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String id;

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String headerCopy;

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String copy;

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private Calendar date;

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String backgroundImage;

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String logoImage;

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String text;

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String link;

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String target;

    @Inject
    private ResourceResolver resourceResolver;

    @Override
    public String getId() {
        return id;
    }

    @Override
    public String getHeaderCopy() {
        return headerCopy;
    }

    @Override
    public String getCopy() {
        return copy;
    }

    @Override
    public String getDate() {
        String formattedDate = StringUtils.EMPTY;
        if (date != null) {
            SimpleDateFormat formatter = new SimpleDateFormat("dd/MM/yyyy");
            formattedDate = formatter.format(date.getTime());
        }
        return formattedDate;
    }

    @Override
    public String getBackgroundImage() {
        return backgroundImage;
    }

    @Override
    public String getLogoImage() {
        return logoImage;
    }

    @Override
    public String getText() {
        return text;
    }

    @Override
    public String getLink() {
        return LinkUtils.appendLinkExtension(link, resourceResolver);
    }

    @Override
    public String getTarget() {
        return target;
    }
}
