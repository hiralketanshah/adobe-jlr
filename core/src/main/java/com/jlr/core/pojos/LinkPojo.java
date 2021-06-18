package com.jlr.core.pojos;

import com.google.gson.annotations.Expose;

/**
 * The type Link pojo.
 */
public class LinkPojo {
    @Expose
    private String url;

    /**
     * Gets url.
     *
     * @return the url
     */
    public String getUrl() {
        return url;
    }

    /**
     * Sets url.
     *
     * @param url the url
     */
    public void setUrl(String url) {
        this.url = url;
    }
}
