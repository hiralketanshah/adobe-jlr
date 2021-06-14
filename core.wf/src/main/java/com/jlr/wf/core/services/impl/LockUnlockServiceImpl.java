package com.jlr.wf.core.services.impl;

import com.day.cq.wcm.api.Page;
import com.day.cq.wcm.api.WCMException;
import com.jlr.wf.core.services.LockUnlockService;
import org.apache.commons.lang.StringUtils;
import org.apache.sling.api.resource.LoginException;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.api.resource.ResourceResolverFactory;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.Reference;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * The type Lock unlock service.
 */
@Component(service = LockUnlockService.class, immediate = true)
@SuppressWarnings("deprecation")
public class LockUnlockServiceImpl implements LockUnlockService {

    private static final Logger LOGGER = LoggerFactory.getLogger(LockUnlockService.class);

    @Reference
    private ResourceResolverFactory resolverFactory;

    /**
     * Lock unlock page.
     *
     * @param path            the page path
     * @param lockUnlockState the lock unlock state
     */
    @Override
    public void lockUnlockPage(String path, String lockUnlockState) {
        if(StringUtils.isNotEmpty(path)) {
            try{
                ResourceResolver resourceResolver = resolverFactory.getAdministrativeResourceResolver(null);
                Resource resource = resourceResolver.resolve(path);
                Page actionPage = resource.adaptTo(Page.class);
                if("lock".equals(lockUnlockState) && !actionPage.isLocked()) {
                    actionPage.lock();
                } else if("unlock".equals(lockUnlockState) && actionPage.isLocked() && actionPage.canUnlock()) {
                    actionPage.unlock();
                }
            } catch (WCMException e) {
                LOGGER.error("Unable to lock/unlock page {}", e);
            } catch (LoginException e) {
                LOGGER.error("Unable to get admin resolver {}", e);
            }
        }
    }
}
