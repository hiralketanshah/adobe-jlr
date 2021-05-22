package com.jlr.core.pojos;

import java.util.ArrayList;
import java.util.List;

/**
 * Secondary Navigation POJO class
 * @author Adobe
 *
 */
public class SecondaryNavigation implements Comparable<SecondaryNavigation> {

	private String title;
	private String path;
	private String link;
	private String target;
	private boolean hasChild;
	private SecondaryNavigation previousLink;
	List<SecondaryNavigation> subNavList = new ArrayList<>();

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
	public SecondaryNavigation getPreviousLink() {
		return previousLink;
	}
	public void setPreviousLink(SecondaryNavigation previousLink) {
		this.previousLink = previousLink;
	}
	public List<SecondaryNavigation> getSubNavList() {
		return subNavList;
	}
	public void setSubNavList(List<SecondaryNavigation> subNavList) {
		this.subNavList = subNavList;
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
	@Override
	public int compareTo(SecondaryNavigation o) {
		return this.getPath().compareTo(o.getPath());
	}
	@Override
	public boolean equals(Object o) {
		if (o instanceof SecondaryNavigation) {
			SecondaryNavigation obj = (SecondaryNavigation)o;
			return this.getPath().equals(obj.getPath());			
		}
		return false;
	}
	@Override
	public int hashCode() {
		return this.getPath().hashCode();			
	}
}
