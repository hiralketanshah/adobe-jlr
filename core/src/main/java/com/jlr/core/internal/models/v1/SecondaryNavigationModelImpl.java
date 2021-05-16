package com.jlr.core.internal.models.v1;

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import javax.annotation.PostConstruct;
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

	private Map<String,List<SecondaryNavigation>> secondaryNavMap = new HashMap<>();
	private Map<String,String> parentNavMap = new HashMap<>();

	@PostConstruct
	public void init() {
		List<String> parents = getSecondaryNavParentList();
		for(String parentPath : parents)  {
			secondaryNavMap.put(parentPath, getSecondaryNavItems(parentPath));
		}
	}

	@Override
	public List<SecondaryNavigation> getItems(String parent) {
		return secondaryNavMap.get(parent);
	}

	@Override
	public Map<String,String> getSecondaryNavParentMap() {
		return parentNavMap;
	}
	
	@Override
	public Map<String,List<SecondaryNavigation>> getSecondaryNavMap() {
		return secondaryNavMap;
	}

	@Override
	public List<String> getSecondaryNavParentList() {
		List<String> parentList = new ArrayList<>();
		String rootPath = CommonUtils.getSiteRootPath(currentPage);
		if(rootPath == null || !currentPage.getPath().startsWith(CommonConstants.JLR_CONTENT_PATH) || !getShowInSecNav(currentPage)) {
			return parentList;
		}
		Page parent = currentPage;
		while(parent!= null) {
			if(parent.getPath().equals(rootPath)) {
				break;
			}

			if(!getSecondaryNavHideParent(parent)) {
				parentList.add(getSecondaryNavLink(parent));
				parentNavMap.put(parent.getPath(), getSecondaryNavTitle(parent));			
			}

			parent = parent.getParent();
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
			if(getShowInSecNav(childPage)) {
				continue;
			}
			SecondaryNavigation secNavItem = new SecondaryNavigation();

			if(childPage.listChildren().hasNext()) {
				secNavItem.setHasChild(true);
			}
			secNavItem.setTitle(getSecondaryNavTitle(childPage));
			secNavItem.setPath(getSecondaryNavLink(childPage));
			subNavList.add(secNavItem);
		}
		return subNavList;
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
}
