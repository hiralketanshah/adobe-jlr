package com.jlr.core.models;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import javax.inject.Inject;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ValueMap;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.Optional;

@Model(adaptables = Resource.class)
public class ArticleModel {

    @Inject
    @Optional
    private String title;

    @Inject
    @Optional
    private String subtitle;

    @Inject
    @Optional
    private String copy;

    @Inject
    @Optional
    private String fileReference;

    @Inject
    @Optional
    private Resource ctaList;

    @Inject
    @Optional
    private String imageAlt;

    @Inject
    @Optional
    private String imageLink;

    List<String> ctaArrayList = new ArrayList<>();

    public List<String> getCtaArrayList() {
        Iterator<Resource> childResources = ctaList.listChildren();
        while (childResources.hasNext()) {
            Resource child = childResources.next();
            ValueMap properties = child.adaptTo(ValueMap.class);
            ctaArrayList.add(properties.get("text", String.class));
        }
        return ctaArrayList;
    }

    public String getTitle() {
        return title;
    }

    public String getSubtitle() {
        return subtitle;
    }

    public String getCopy() {
        return copy;
    }

    public String getFileReference() {
        return fileReference;
    }

    public String getImageAlt() {
        return imageAlt;
    }

    public String getImageLink() {
        return imageLink;
    }
}
