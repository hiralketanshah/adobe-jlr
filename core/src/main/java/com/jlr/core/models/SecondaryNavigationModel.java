package com.jlr.core.models;

import java.util.List;
import java.util.Map;

import org.osgi.annotation.versioning.ConsumerType;

import com.jlr.core.pojos.SecondaryNavigation;

@ConsumerType
public interface SecondaryNavigationModel {

	public Map<String,String> getSecondaryNavParentMap();
	public List<String> getSecondaryNavParentList();
	public Map<String,List<SecondaryNavigation>> getSecondaryNavMap();
	public List<SecondaryNavigation> getItems(String parent);

}
