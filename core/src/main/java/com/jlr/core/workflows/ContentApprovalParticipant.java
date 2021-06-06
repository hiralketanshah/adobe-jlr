package com.jlr.core.workflows;

import com.adobe.granite.workflow.WorkflowException;
import com.adobe.granite.workflow.WorkflowSession;
import com.adobe.granite.workflow.exec.ParticipantStepChooser;
import com.adobe.granite.workflow.exec.WorkItem;
import com.adobe.granite.workflow.exec.WorkflowData;
import com.adobe.granite.workflow.metadata.MetaDataMap;
import org.osgi.service.component.annotations.Component;

@Component(service = ParticipantStepChooser.class, property = { "chooser.label=" + "Content Approval Participant" })
public class ContentApprovalParticipant implements ParticipantStepChooser {

    private static final String TYPE_JCR_PATH = "JCR_PATH";

    public String getParticipant(WorkItem workItem, WorkflowSession workflowSession, MetaDataMap args) throws
            WorkflowException {
        WorkflowData workflowData = workItem.getWorkflowData();
        if (workflowData.getPayloadType().equals(TYPE_JCR_PATH)) {
            String path = workflowData.getPayload().toString();
            if (path.contains("aus/") || path.contains("en_au") || path.contains("australia/")) {
                return "au-content-approvals";
            } else if (path.contains("deu/") || path.contains("de_de") || path.contains("germany/")){
                return "de-content-approvals";
            } else {
                return "admin";
            }
        }
        return "administrators";
    }
}