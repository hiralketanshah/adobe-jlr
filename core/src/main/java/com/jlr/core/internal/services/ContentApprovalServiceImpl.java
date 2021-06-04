package com.jlr.core.internal.services;

import com.day.cq.dam.api.Asset;
import com.day.cq.wcm.api.Page;
import com.jlr.core.services.ContentApprovalService;
import org.apache.commons.collections.MapUtils;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.api.resource.ValueMap;
import org.osgi.service.component.annotations.Component;

import java.util.Date;
import java.util.Map;

import static com.jlr.core.utils.WorkflowUtils.getAssetMapOfPage;

@Component(immediate = true, service = ContentApprovalServiceImpl.class)
public class ContentApprovalServiceImpl implements ContentApprovalService {

    @Override
    public void processMetadata(String approvalStatus, String activateNowLater, String scheduledReplicationDate, String embargoLiftDate, Page page, ResourceResolver resourceResolver) {
        if(page.listChildren() != null) {
            while(page.listChildren().hasNext()) {
                Page child = page.listChildren().next();
                if(child != null) {
                    processMetadata(approvalStatus, activateNowLater, scheduledReplicationDate, embargoLiftDate, child, resourceResolver);
                }
            }
        }
        addMetadataToPage(approvalStatus, activateNowLater, scheduledReplicationDate, embargoLiftDate, page);
        fetchAssetsOfPage(approvalStatus, activateNowLater, scheduledReplicationDate, embargoLiftDate, page, resourceResolver);
    }

    private void fetchAssetsOfPage(String approvalStatus, String activateNowLater, String scheduledReplicationDate, String embargoLiftDate, Page page, ResourceResolver resourceResolver) {
        Map<String, Asset> assetMap = getAssetMapOfPage(page, resourceResolver);
        if(MapUtils.isNotEmpty(assetMap)) {
            assetMap.entrySet().stream().forEach(entry -> {
                Asset asset = entry.getValue();
                Map<String, Object> properties = asset.getMetadata();
                addProperties(approvalStatus, activateNowLater, scheduledReplicationDate, embargoLiftDate, page, properties);
            });
        }
    }

    private void addMetadataToPage(String approvalStatus, String activateNowLater, String scheduledReplicationDate, String embargoLiftDate, Page page) {
        ValueMap properties = page.getProperties();
        addProperties(approvalStatus, activateNowLater, scheduledReplicationDate, embargoLiftDate, page, properties);
    }

    private void addProperties(String approvalStatus, String activateNowLater, String scheduledReplicationDate, String embargoLiftDate, Page page, Map<String, Object> properties) {
        properties.put("approvalStatus", approvalStatus);
        properties.put("activateNowLater", activateNowLater);
        properties.put("scheduledReplicationDate", scheduledReplicationDate);
        properties.put("embargoLiftDate", embargoLiftDate);
        properties.put("approvedDate", new Date());
        properties.put("approvedBy", page.getLastModifiedBy());
    }
}
