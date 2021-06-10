package com.jlr.core.utils;

import com.day.cq.wcm.api.Page;
import com.day.cq.wcm.api.WCMException;
import com.jlr.core.constants.ErrorUtilsConstants;
import org.apache.sling.api.resource.LoginException;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.api.resource.ResourceResolverFactory;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.jcr.Session;

public class LockUnlockUtil {

    private static final Logger LOGGER = LoggerFactory.getLogger(LockUnlockUtil.class);

    public static void lockUnlockPage(Page page, String lockUnlockState, ResourceResolverFactory resolverFactory) {
        if(page!= null) {
            try{
                ResourceResolver resourceResolver = resolverFactory.getAdministrativeResourceResolver(null);
                Session session = resourceResolver.adaptTo(Session.class);
                Resource resource = resourceResolver.resolve(page.getPath());
                Page actionPage = resource.adaptTo(Page.class);
                if("lock".equals(lockUnlockState) && !actionPage.isLocked()) {
                    actionPage.lock();
                } else if("unlock".equals(lockUnlockState) && actionPage.isLocked() && actionPage.canUnlock()){
                    actionPage.unlock();
                }
            } catch (WCMException e) {
                LOGGER.error(ErrorUtils.createErrorMessage(ErrorUtilsConstants.AEM_WCM_EXCEPTION, ErrorUtilsConstants.TECHNICAL, ErrorUtilsConstants.AEM_SITE,
                        ErrorUtilsConstants.MODULE_WORKFLOW, "WorkflowUtils", e));
            } catch (LoginException e) {
                LOGGER.error(ErrorUtils.createErrorMessage(ErrorUtilsConstants.AEM_LOGIN_EXCEPTION, ErrorUtilsConstants.TECHNICAL, ErrorUtilsConstants.AEM_SITE,
                        ErrorUtilsConstants.MODULE_WORKFLOW, "WorkflowUtils", e));
            }
        }
    }
}
