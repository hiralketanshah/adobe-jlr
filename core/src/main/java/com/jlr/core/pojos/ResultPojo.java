package com.jlr.core.pojos;

import java.util.Comparator;

/**
 * The type Result pojo.
 */
public class ResultPojo implements Comparator<ResultPojo> {

    private String title;
    private String summary;
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
     * @param o1 the o 1
     * @param o2 the o 2
     * @return the int
     */
    @Override
    public int compare(ResultPojo o1, ResultPojo o2) {
        if(o1.getPriority() > o2.getPriority()) {
            return 1;
        } else if(o1.getPriority() < o2.getPriority()){
            return -1;
        }
        return 0;
    }
}
