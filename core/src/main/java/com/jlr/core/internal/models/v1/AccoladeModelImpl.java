package com.jlr.core.internal.models.v1;

import java.text.SimpleDateFormat;
import java.util.Calendar;

import org.apache.commons.lang.StringUtils;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

import com.jlr.core.models.AccoladeModel;

@Model(adaptables = Resource.class, adapters = { AccoladeModel.class }, resourceType = AccoladeModelImpl.RESOURCE_TYPE)
public class AccoladeModelImpl extends GlobalModelImpl implements AccoladeModel {

    public static final String RESOURCE_TYPE = "jlr/components/accolade/v1/accolade";

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private Calendar date;

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String backgroundImage;

    @Override
    public String getDate() {
        String formattedDate = StringUtils.EMPTY;
        if (null != date) {
            SimpleDateFormat formatter = new SimpleDateFormat("dd/MM/yyyy");
            formattedDate = formatter.format(date.getTime());
        }
        return formattedDate;
    }

    @Override
    public String getBackgroundImage() {
        return backgroundImage;
    }
}
