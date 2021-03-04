package com.jlr.core.internal.models.v1;

import javax.inject.Inject;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

import com.jlr.core.models.AccoladeModel;
import com.jlr.core.utils.LinkUtils;

@Model(adaptables = Resource.class, adapters = { AccoladeModel.class }, resourceType = AccoladeModelImpl.RESOURCE_TYPE)
public class AccoladeModelImpl implements AccoladeModel {

    public static final String RESOURCE_TYPE = "jlr/components/accolade/v1/accolade";

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String id;

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String headerCopy;

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String bodyCopy;

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String backgroundImage;

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String backgroundImageAlt;

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String logo;

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String logoAlt;

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
    public String getBodyCopy() {
        return bodyCopy;
    }

    @Override
    public String getBackgroundImage() {
        return backgroundImage;
    }

    @Override
    public String getBackgroundImageAlt() {
        return backgroundImageAlt;
    }

    @Override
    public String getLogo() {
        return logo;
    }

    @Override
    public String getLogoAlt() {
        return logoAlt;
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
