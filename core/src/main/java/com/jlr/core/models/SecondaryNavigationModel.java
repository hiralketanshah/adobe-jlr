package com.jlr.core.models;

import java.util.List;

import org.osgi.annotation.versioning.ConsumerType;

import com.jlr.core.pojos.SecondaryNavigation;

@ConsumerType
public interface SecondaryNavigationModel {

	public List<SecondaryNavigation> getSecondaryNavParentList();

}
