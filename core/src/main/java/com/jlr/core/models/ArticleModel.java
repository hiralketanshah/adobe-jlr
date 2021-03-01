package com.jlr.core.models;

import java.util.List;

import org.osgi.annotation.versioning.ConsumerType;

import com.jlr.core.pojos.CTAPojo;

@ConsumerType
public interface ArticleModel {

    default List<CTAPojo> getCtaList() {
        throw new UnsupportedOperationException();
    }

    default String getTitle() {
        throw new UnsupportedOperationException();
    }

    default String getSubtitle() {
        throw new UnsupportedOperationException();
    }

    default String getCopy() {
        throw new UnsupportedOperationException();
    }

    default String getFileReference() {
        throw new UnsupportedOperationException();
    }

    default String getImageAlt() {
        throw new UnsupportedOperationException();
    }

    default String getImageLink() {
        throw new UnsupportedOperationException();
    }

}
