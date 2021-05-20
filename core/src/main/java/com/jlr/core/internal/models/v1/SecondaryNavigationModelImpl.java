package com.jlr.core.internal.models.v1;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Iterator;
import java.util.List;

import javax.inject.Inject;

import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.api.resource.ValueMap;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ScriptVariable;

import com.day.cq.wcm.api.Page;
import com.day.cq.wcm.api.PageFilter;
import com.day.cq.wcm.api.PageManager;
import com.jlr.core.constants.CommonConstants;
import com.jlr.core.models.SecondaryNavigationModel;
import com.jlr.core.pojos.SecondaryNavigation;
import com.jlr.core.utils.CommonUtils;

@Model(adaptables = {SlingHttpServletRequest.class, Resource.class}, adapters = {SecondaryNavigationModel.class})
public class SecondaryNavigationModelImpl implements SecondaryNavigationModel {

	@Inject
	private ResourceResolver resourceResolver;

	@ScriptVariable
	private Page currentPage; 

	@Override
	public List<SecondaryNavigation> getSecondaryNavParentList() {
		List<SecondaryNavigation> parentList = new ArrayList<>();
		String rootPath = CommonUtils.getSiteRootPath(currentPage);
		if(rootPath == null || !currentPage.getPath().startsWith(CommonConstants.JLR_CONTENT_PATH) || !getShowInSecNav(currentPage) || !getShowInSecNav(currentPage.getParent())) {
			return parentList;
		}
		Page parentPage = currentPage;
		while(parentPage!= null) {
			if(parentPage.getPath().equals(rootPath)) {
				break;
			}
			SecondaryNavigation parent = new SecondaryNavigation();
			parent.setTitle(getSecondaryNavTitle(parentPage));
			parent.setPath(getSecondaryNavLink(parentPage));
			parent.setSubNavList(getSecondaryNavItems(parent.getPath()));
			parentList.add(parent);
			if(getSecondaryNavHideParent(parentPage)) {
				parentPage = parentPage.getParent().getParent();
			} else {
				parentPage = parentPage.getParent();
			}
			parent.setPreviousLink(getSecondaryNavItem(parentPage));
		}
		Collections.sort(parentList);
		return parentList;
	}

	/**
	 * @param parentPath
	 */
	private List<SecondaryNavigation> getSecondaryNavItems(String parentPath) {
		PageManager pm = resourceResolver.adaptTo(PageManager.class);
		Page parentPage = pm.getPage(parentPath);
		Iterator<Page>childItr = parentPage.listChildren(new PageFilter());
		List<SecondaryNavigation> subNavList = new ArrayList<>();
		while(childItr.hasNext()) {
			Page childPage = childItr.next();
			if(!getShowInSecNav(childPage)) {
				continue;
			}
			subNavList.add(getSecondaryNavItem(childPage));
		}
		return subNavList;
	}

	private SecondaryNavigation getSecondaryNavItem(Page page) {
		SecondaryNavigation secNavItem = new SecondaryNavigation();
		if(hasChid(page)) {
			secNavItem.setHasChild(true);
		}
		secNavItem.setTitle(getSecondaryNavTitle(page));
		secNavItem.setPath(getSecondaryNavLink(page));
		return secNavItem;
	}
	private String getSecondaryNavTitle(Page page) {
		ValueMap propMap = page.getContentResource().adaptTo(ValueMap.class);
		return null != propMap.get(CommonConstants.PN_SECONDARY_NAVIGATION_TITLE) ? propMap.get(CommonConstants.PN_SECONDARY_NAVIGATION_TITLE).toString() : page.getTitle();
	}
	private boolean getShowInSecNav(Page page) {
		ValueMap propMap = page.getContentResource().adaptTo(ValueMap.class);
		return null != propMap.get(CommonConstants.PN_SHOW_IN_SECONDARY_NAVIGATION) && Boolean.parseBoolean(propMap.get(CommonConstants.PN_SHOW_IN_SECONDARY_NAVIGATION).toString());
	}
	private String getSecondaryNavLink(Page page) {
		ValueMap propMap = page.getContentResource().adaptTo(ValueMap.class);
		if(page.getTemplate().getName().equals(CommonConstants.TEMPLATE_REDIRECT)) {
			if(null!= propMap.get(CommonConstants.PN_SECONDARY_NAVIGATION_EXT_LINK)) {
				return propMap.get(CommonConstants.PN_SECONDARY_NAVIGATION_EXT_LINK).toString();
			} else if(propMap.get(CommonConstants.PN_REDIRECT_TARTGET)!= null) {
				return propMap.get(CommonConstants.PN_REDIRECT_TARTGET).toString();
			}
		}
		return  page.getPath();
	}

	private boolean getSecondaryNavHideParent(Page page) {
		ValueMap propMap = page.getContentResource().adaptTo(ValueMap.class);
		return null != propMap.get(CommonConstants.PN_SECONDARY_NAVIGATION_HIDE_PARENT) && Boolean.parseBoolean(propMap.get(CommonConstants.PN_SECONDARY_NAVIGATION_HIDE_PARENT).toString());
	}

	private boolean hasChid(Page page) {
		Iterator<Page> childItr = page.listChildren();
		while(childItr.hasNext()) {
			Page childPage = childItr.next();
			if(getShowInSecNav(childPage)) {
				return true;
			}
		}
		return false;
	}
}
