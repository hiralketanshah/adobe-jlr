package com.jlr.wf.core.services;

/**
 * The interface Lock unlock service.
 */
public interface LockUnlockService {


    /**
     * Lock unlock page boolean.
     *
     * @param path            the path
     * @param lockUnlockState the lock unlock state
     * @return the boolean
     */
    boolean lockUnlockPage(String path, String lockUnlockState);
}