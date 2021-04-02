package com.jlr.core.pojos;

public class CTAPojo {

    private String text;
    private String link;
    private String target;
    private String linkType;
    private String icon;
    private String ariaLabel;
    private String copy;

    public CTAPojo(String text, String link, String target, String linkType, String icon, String ariaLabel) {
        this.text = text;
        this.link = link;
        this.target = target;
        this.linkType = linkType;
        this.icon = icon;
        this.ariaLabel = ariaLabel;
    }
    
    public CTAPojo(String text, String link, String target, String linkType, String icon, String ariaLabel, String copy) {
        this.text = text;
        this.link = link;
        this.target = target;
        this.linkType = linkType;
        this.icon = icon;
        this.ariaLabel = ariaLabel;
        this.copy = copy;
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

    public String getLinkType() {
        return linkType;
    }

    public void setLinkType(String linkType) {
        this.linkType = linkType;
    }

    public String getIcon() {
        return icon;
    }

    public void setIcon(String icon) {
        this.icon = icon;
    }

    public String getAriaLabel() {
        return ariaLabel;
    }

    public void setAriaLabel(String ariaLabel) {
        this.ariaLabel = ariaLabel;
    }
    
    public String getCopy() {
        return copy;
    }

    public void setCopy(String copy) {
        this.copy = copy;
    }
}
