package com.jlr.core.pojos;

import com.google.gson.annotations.Expose;

/**
 * The type Result pojo.
 */
public class ResultPojo implements Comparable<ResultPojo> {

    @Expose
    private String title;
    @Expose
    private String summary;
    @Expose
    private LinkPojo link;
    private int priority = 100;

    /**
     * Gets title.
     *
     * @return the title
     */
    public String getTitle() {
        return title;
    }

    /**
     * Sets title.
     *
     * @param title the title
     */
    public void setTitle(String title) {
        this.title = title;
    }

    /**
     * Gets summary.
     *
     * @return the summary
     */
    public String getSummary() {
        return summary;
    }

    /**
     * Sets summary.
     *
     * @param summary the summary
     */
    public void setSummary(String summary) {
        this.summary = summary;
    }

    /**
     * Gets link.
     *
     * @return the link
     */
    public LinkPojo getLink() {
        return link;
    }

    /**
     * Sets link.
     *
     * @param link the link
     */
    public void setLink(LinkPojo link) {
        this.link = link;
    }

    /**
     * Gets priority.
     *
     * @return the priority
     */
    public int getPriority() {
        return priority;
    }

    /**
     * Sets priority.
     *
     * @param priority the priority
     */
    public void setPriority(int priority) {
        this.priority = priority;
    }

    /**
     * Compare int.
     *
     * @param resultPojo the result pojo
     * @return the int
     */
    @Override
    public int compareTo(ResultPojo resultPojo) {
        if(this.getPriority() > resultPojo.getPriority()) {
            return 1;
        } else if(this.getPriority() < resultPojo.getPriority()){
            return -1;
        }
        return 0;
    }
}
