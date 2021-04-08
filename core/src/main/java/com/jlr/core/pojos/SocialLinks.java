package com.jlr.core.pojos;

public class SocialLinks {

    private String text;
    private String link;
    private String target;
	private String socialicon;
	private String ariaLabel;

    public SocialLinks(String text, String link, String target, String socialicon, String ariaLabel) {
    	this.text = text;
        this.link = link;
        this.target = target;
    	this.socialicon = socialicon;
    	this.ariaLabel = ariaLabel;
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

	public String getSocialicon() {
		return socialicon;
	}

	public void setSocialicon(String socialicon) {
		this.socialicon = socialicon;
	}

	public String getAriaLabel() {
		return ariaLabel;
	}

	public void setAriaLabel(String ariaLabel) {
		this.ariaLabel = ariaLabel;
	}
}
