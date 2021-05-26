package com.jlr.core.pojos;

/**
 * The Class DerivativeTab.
 *
 * @author Adobe
 */
public class DerivativeTab {

    private String tabHeading;

    private String metaTitle;

    private String metaDescription;

    private String link;

    private String urlPath;

    public DerivativeTab(String tabHeading, String metaTitle, String metaDescription, String link, String urlPath) {
        this.tabHeading = tabHeading;
        this.metaTitle = metaTitle;
        this.metaDescription = metaDescription;
        this.link = link;
        this.urlPath = urlPath;
    }

    public String getTabHeading() {
        return tabHeading;
    }

    public String getMetaTitle() {
        return metaTitle;
    }

    public String getMetaDescription() {
        return metaDescription;
    }

    public String getLink() {
        return link;
    }

    public String getUrlPath() {
        return urlPath;
    }

}
