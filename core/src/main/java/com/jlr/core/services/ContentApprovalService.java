package com.jlr.core.services;

import com.day.cq.wcm.api.Page;
import org.apache.sling.api.resource.ResourceResolver;

/**
 * The interface Content approval service.
 */
public interface ContentApprovalService {
    /**
     * Process metadata.
     *
     * @param approvalStatus           the approval status
     * @param activateNowLater         the activate now later
     * @param scheduledReplicationDate the scheduled replication date
     * @param embargoLiftDate          the embargo lift date
     * @param page                     the page
     * @param resourceResolver         the resource resolver
     */
    void processMetadata(String approvalStatus, String activateNowLater, String scheduledReplicationDate, String embargoLiftDate, Page page, ResourceResolver resourceResolver);
}
