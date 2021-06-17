package com.jlr.wf.core.services;

import com.day.cq.wcm.api.Page;

/**
 * The interface Lock unlock service.
 */
public interface LockUnlockService {

    /**
     * Lock unlock page.
     *
     * @param path            the page path
     * @param lockUnlockState the lock unlock state
     */
    void lockUnlockPage(String path, String lockUnlockState);
}