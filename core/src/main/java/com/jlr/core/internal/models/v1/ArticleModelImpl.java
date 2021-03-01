package com.jlr.core.internal.models.v1;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import javax.inject.Inject;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.api.resource.ValueMap;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.Optional;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.jlr.core.models.ArticleModel;
import com.jlr.core.pojos.CTAPojo;
import com.jlr.core.utils.LinkUtils;

@Model(adaptables = Resource.class, adapters = { ArticleModel.class }, resourceType = ArticleModelImpl.RESOURCE_TYPE)
public class ArticleModelImpl implements ArticleModel {

    public static final String RESOURCE_TYPE = "/apps/jlr/components/article/v1/article";

    private static final Logger logger = LoggerFactory.getLogger(ArticleModelImpl.class);

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String title;

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String subtitle;

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String copy;

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String fileReference;

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String imageAlt;

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String imageLink;

    @Inject
    @Optional
    private Resource ctaList;

    @Inject
    private ResourceResolver resourceResolver;

    List<CTAPojo> list = new ArrayList<>();

    @Override
    public List<CTAPojo> getCtaList() {
        Iterator<Resource> childResources = ctaList.listChildren();
        while (childResources.hasNext()) {
            Resource child = childResources.next();
            ValueMap properties = child.adaptTo(ValueMap.class);
            list.add(new CTAPojo(properties.get("text", String.class),
                    LinkUtils.getLinkURL(properties.get("link", String.class), resourceResolver),
                    properties.get("target", String.class)));
        }
        return list;
    }

    @Override
    public String getTitle() {
        return title;
    }

    @Override
    public String getSubtitle() {
        return subtitle;
    }

    @Override
    public String getCopy() {
        return copy;
    }

    @Override
    public String getFileReference() {
        return fileReference;
    }

    @Override
    public String getImageAlt() {
        return imageAlt;
    }

    @Override
    public String getImageLink() {
        return imageLink;
    }

}
