package com.jlr.core.pojos;

public class SecondaryNavigation {

	private String title;
	private String path;
	private boolean hasChild;

	public SecondaryNavigation() {

	}
	public SecondaryNavigation(String title, String path, boolean hasChild) {
		super();
		this.title = title;
		this.path = path;
		this.hasChild = hasChild;
	}

	public String getTitle() {
		return title;
	}
	public String getPath() {
		return path;
	}
	public boolean getHasChild() {
		return hasChild;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public void setPath(String path) {
		this.path = path;
	}
	public void setHasChild(boolean hasChild) {
		this.hasChild = hasChild;
	}

}
