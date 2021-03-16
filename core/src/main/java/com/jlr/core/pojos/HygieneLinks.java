package com.jlr.core.pojos;

public class HygieneLinks {

    private String text;
    private String link;
    private String target;

    public HygieneLinks(String text, String link, String target) {
    	this.text = text;
        this.link = link;
        this.target = target;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public String getLink() {
        return link;
    }

    public void setLink(String link) {
        this.link = link;
    }

    public String getTarget() {
        return target;
    }

    public void setTarget(String target) {
        this.target = target;
    }

}
