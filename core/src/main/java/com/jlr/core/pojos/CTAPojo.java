package com.jlr.core.pojos;

public class CTAPojo {

    private String text;
    private String link;
    private String target;
	private String linkType;
	private String logoPrimary;

    public CTAPojo(String text, String link, String target, String linkType, String logoPrimary) {
    	this.text = text;
        this.link = link;
        this.target = target;
    	this.linkType = linkType;
    	this.logoPrimary = logoPrimary;
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

	public String getLogoPrimary() {
		return logoPrimary;
	}

	public void setLogoPrimary(String logoPrimary) {
		this.logoPrimary = logoPrimary;
	}
}
