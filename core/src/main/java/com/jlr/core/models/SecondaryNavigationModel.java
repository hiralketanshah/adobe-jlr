package com.jlr.core.models;

import java.util.List;

import org.osgi.annotation.versioning.ConsumerType;

import com.jlr.core.pojos.SecondaryNavigation;

/**
 * Secondary Navigation Model Interface
 * @author Adobe
 *
 */
@ConsumerType
public interface SecondaryNavigationModel {

	public List<SecondaryNavigation> getSecondaryNavParentList();
	public List<String> getSecondaryNavParentPathList();
	public boolean getDisplaySecNav();

}
