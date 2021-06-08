package com.jlr.core.internal.models.v1;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Iterator;
import java.util.List;
import javax.annotation.PostConstruct;
import javax.inject.Inject;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.api.resource.ValueMap;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ScriptVariable;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import com.day.cq.wcm.api.Page;
import com.day.cq.wcm.api.PageFilter;
import com.day.cq.wcm.api.PageManager;
import com.jlr.core.constants.CommonConstants;
import com.jlr.core.models.SecondaryNavigationModel;
import com.jlr.core.pojos.SecondaryNavigation;
import com.jlr.core.utils.CommonUtils;

/**
 * SecondaryNavigationModel Implementation class
 * 
 * @author Adobe
 *
 */
@Model(adaptables = {SlingHttpServletRequest.class, Resource.class}, adapters = {SecondaryNavigationModel.class})
public class SecondaryNavigationModelImpl implements SecondaryNavigationModel {

    @Inject
    private ResourceResolver resourceResolver;

    @ScriptVariable
    private Page currentPage;

    List<String> parentPathList = new ArrayList<>();
    List<SecondaryNavigation> parentList = new ArrayList<>();

    /** The logger. */
    private static Logger LOGGER = LoggerFactory.getLogger(SecondaryNavigationModelImpl.class);

    @PostConstruct
    public void init() {
        buildSecondaryNavigation();
    }

    private void buildSecondaryNavigation() {
        parentList = new ArrayList<>();
        parentPathList = new ArrayList<>();
        List<String> hideInNav = new ArrayList<>();
        String rootPath = CommonUtils.getSiteRootPath(currentPage);
        if (rootPath == null || !currentPage.getPath().startsWith(rootPath) || !getShowInSecNav(currentPage) || !getShowInSecNav(currentPage.getParent())) {
            return;
        }
        Page parentPage = currentPage;
        while (parentPage != null) {
            if (isHomePage(parentPage, rootPath)) {
                break;
            }
            SecondaryNavigation parent = new SecondaryNavigation();
            if (!hideInNav.contains(parentPage.getPath())) {
                parent.setTitle(getSecondaryNavTitle(parentPage));
                parent.setPath(parentPage.getPath());
                parent.setLink(getSecondaryNavLink(parentPage));
                parentPathList.add(parent.getPath());
                parent.setSubNavList(getSecondaryNavItems(parent.getPath()));
                parentList.add(parent);
                if (getSecondaryNavHideParent(parentPage)) {
                    hideInNav.add(parentPage.getParent().getPath());
                }
            }
            parentPage = parentPage.getParent();
            parent.setPreviousLink(getSecondaryNavItem(parentPage));

        }
        Collections.sort(parentList);
    }

    /**
     * Get List for Sub Navigation items for Secondary nav item
     * 
     * @param parentPath
     */
    private List<SecondaryNavigation> getSecondaryNavItems(String parentPath) {
        LOGGER.debug("getSecondaryNavItems page : {}", parentPath);
        PageManager pm = resourceResolver.adaptTo(PageManager.class);
        Page parentPage = pm.getPage(parentPath);
        Iterator<Page> childItr = parentPage.listChildren(new PageFilter());
        List<SecondaryNavigation> subNavList = new ArrayList<>();
        while (childItr.hasNext()) {
            Page childPage = childItr.next();
            if (!getShowInSecNav(childPage)) {
                continue;
            }
            subNavList.add(getSecondaryNavItem(childPage));
        }
        return subNavList;
    }

    /**
     * Get Secondary Navigation Item object
     * 
     * @param page
     * @return
     */
    private SecondaryNavigation getSecondaryNavItem(Page page) {
        LOGGER.debug("getSecondaryNavItem page : {}", page.getPath());
        LOGGER.debug("getSecondaryNavItem getContentResource : {}", page.getContentResource());
        SecondaryNavigation secNavItem = new SecondaryNavigation();
        if (hasChid(page)) {
            secNavItem.setHasChild(true);
        }
        secNavItem.setTitle(getSecondaryNavTitle(page));
        secNavItem.setLink(getSecondaryNavLink(page));
        secNavItem.setTarget(getSecondaryLinkTarget(page));
        secNavItem.setPath(page.getPath());

        return secNavItem;
    }

    /**
     * Get Secondary navigation title
     * 
     * @param page
     * @return
     */
    private String getSecondaryNavTitle(Page page) {
        LOGGER.debug("getSecondaryNavTitle page : {}", page.getPath());
        LOGGER.debug("getSecondaryNavTitle getContentResource : {}", page.getContentResource());
        ValueMap propMap = page.getContentResource().adaptTo(ValueMap.class);
        return null != propMap.get(CommonConstants.PN_SECONDARY_NAVIGATION_TITLE) ? propMap.get(CommonConstants.PN_SECONDARY_NAVIGATION_TITLE).toString()
                        : page.getTitle();
    }

    /**
     * Get Show in Secondary Navigation property
     * 
     * @param page
     * @return
     */
    private boolean getShowInSecNav(Page page) {
        LOGGER.debug("getShowInSecNav page : {}", page.getPath());
        LOGGER.debug("getShowInSecNav getContentResource : {}", page.getContentResource());
        ValueMap propMap = page.getContentResource().adaptTo(ValueMap.class);
        return null != propMap.get(CommonConstants.PN_SHOW_IN_SECONDARY_NAVIGATION)
                        && Boolean.parseBoolean(propMap.get(CommonConstants.PN_SHOW_IN_SECONDARY_NAVIGATION).toString());
    }

    /**
     * Get Secondary Navigation Link value
     * 
     * @param page
     * @return
     */
    private String getSecondaryNavLink(Page page) {
        LOGGER.debug("getSecondaryNavLink page : {}", page.getPath());
        LOGGER.debug("getSecondaryNavLink getContentResource : {}", page.getContentResource());
        ValueMap propMap = page.getContentResource().adaptTo(ValueMap.class);
        if (page.getTemplate().getName().equals(CommonConstants.TEMPLATE_REDIRECT)) {
            if (null != propMap.get(CommonConstants.PN_SECONDARY_NAVIGATION_EXT_LINK)) {
                return propMap.get(CommonConstants.PN_SECONDARY_NAVIGATION_EXT_LINK).toString();
            } else if (null != propMap.get(CommonConstants.PN_REDIRECT_TARTGET)) {
                return propMap.get(CommonConstants.PN_REDIRECT_TARTGET).toString();
            }
        }
        return page.getPath();
    }

    /**
     * Get Secondary link target
     * 
     * @param page
     * @return
     */
    private String getSecondaryLinkTarget(Page page) {
        LOGGER.debug("getSecondaryLinkTarget page : {}", page.getPath());
        LOGGER.debug("getSecondaryLinkTarget getContentResource : {}", page.getContentResource());
        ValueMap propMap = page.getContentResource().adaptTo(ValueMap.class);
        return null != propMap.get(CommonConstants.PN_CTA_TARGET) ? propMap.get(CommonConstants.PN_CTA_TARGET).toString() : null;
    }

    /**
     * Get hide parent flag from page
     * 
     * @param page
     * @return
     */
    private boolean getSecondaryNavHideParent(Page page) {
        LOGGER.debug("getSecondaryNavHideParent page : {}", page.getPath());
        LOGGER.debug("getSecondaryNavHideParent getContentResource : {}", page.getContentResource());
        ValueMap propMap = page.getContentResource().adaptTo(ValueMap.class);
        return null != propMap.get(CommonConstants.PN_SECONDARY_NAVIGATION_HIDE_PARENT)
                        && Boolean.parseBoolean(propMap.get(CommonConstants.PN_SECONDARY_NAVIGATION_HIDE_PARENT).toString());
    }

    /**
     * Check if page have sub pages
     */
    private boolean hasChid(Page page) {
        LOGGER.debug("hasChid page : {}", page.getPath());
        LOGGER.debug("hasChid getContentResource : {}", page.getContentResource());
        Iterator<Page> childItr = page.listChildren();
        while (childItr.hasNext()) {
            Page childPage = childItr.next();
            if (getShowInSecNav(childPage)) {
                return true;
            }
        }
        return false;
    }

    /*
     * Check if page is home page
     */
    private boolean isHomePage(Page page, String rootPath) {
        return page.getPath().equals(rootPath);
    }

    @Override
    public List<String> getSecondaryNavParentPathList() {
        return parentPathList;
    }

    /**
     * Get flag to display sec nav
     */
    @Override
    public boolean getDisplaySecNav() {
        return parentPathList.size() > 1;
    }

    /**
     * Get the List of Secondary navigation Items
     */
    @Override
    public List<SecondaryNavigation> getSecondaryNavParentList() {
        return parentList;
    }
}
