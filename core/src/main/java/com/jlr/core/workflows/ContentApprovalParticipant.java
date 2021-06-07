package com.jlr.core.workflows;

import com.adobe.granite.workflow.WorkflowException;
import com.adobe.granite.workflow.WorkflowSession;
import com.adobe.granite.workflow.exec.ParticipantStepChooser;
import com.adobe.granite.workflow.exec.WorkItem;
import com.adobe.granite.workflow.exec.WorkflowData;
import com.adobe.granite.workflow.metadata.MetaDataMap;
import com.jlr.core.constants.WorkflowConstants;
import org.osgi.service.component.annotations.Component;

import static com.jlr.core.constants.WorkflowConstants.TYPE_JCR_PATH;

@Component(service = ParticipantStepChooser.class, property = { "chooser.label=" + "Content Approval Participant" })
public class ContentApprovalParticipant implements ParticipantStepChooser {

    public String getParticipant(WorkItem workItem, WorkflowSession workflowSession, MetaDataMap args) throws
            WorkflowException {
        WorkflowData workflowData = workItem.getWorkflowData();
        if (workflowData.getPayloadType().equals(TYPE_JCR_PATH)) {
            String path = workflowData.getPayload().toString();
            if (path.contains(WorkflowConstants.AUS) || path.contains(WorkflowConstants.EN_AU) || path.contains(WorkflowConstants.AUSTRALIA)) {
                return WorkflowConstants.AU_CONTENT_APPROVALS;
            } else if (path.contains(WorkflowConstants.DEU) || path.contains(WorkflowConstants.DE_DE) || path.contains(WorkflowConstants.GERMANY)){
                return WorkflowConstants.DE_CONTENT_APPROVALS;
            } else {
                return WorkflowConstants.ADMIN;
            }
        }
        return WorkflowConstants.ADMINISTRATORS;
    }
}