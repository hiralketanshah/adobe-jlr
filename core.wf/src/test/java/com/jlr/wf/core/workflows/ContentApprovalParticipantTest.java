package com.jlr.wf.core.workflows;

import com.adobe.granite.workflow.exec.WorkItem;
import com.adobe.granite.workflow.exec.WorkflowData;
import io.wcm.testing.mock.aem.junit5.AemContext;
import io.wcm.testing.mock.aem.junit5.AemContextExtension;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import static junit.framework.Assert.assertEquals;
import static org.mockito.Mockito.when;

@ExtendWith({AemContextExtension.class, MockitoExtension.class})
class ContentApprovalParticipantTest {


    private static final String DE_CONTENT_PATH = "/content/landrover/global/europe/published-sites/de_de/offers.html";
    private static final String AU_CONTENT_PATH = "/content/dam/landrover/australia/en/317226.jpg";
    private static final String GLOBAL_CONTENT_PATH = "/content/landrover/global/global-master/en/index.html";
    private static final String AU_CONTENT_APPROVERS = "au-content-approvers";
    private static final String DE_CONTENT_APPROVERS = "de-content-approvers";
    private static final String GLOBAL_APPROVERS = "global-approvers";

    private final AemContext context = new AemContext();

    @InjectMocks
    private ContentApprovalParticipant fixture = new ContentApprovalParticipant();
    @Mock
    private WorkItem workItem;
    @Mock
    private WorkflowData workflowData;

    @BeforeEach
    void setUp() {
        when(workItem.getWorkflowData()).thenReturn(workflowData);
        when(workflowData.getPayloadType()).thenReturn("JCR_PATH");
    }

    @Test
    void testParticipant() throws Exception {
        when(workflowData.getPayload()).thenReturn(DE_CONTENT_PATH);
        assertEquals(DE_CONTENT_APPROVERS, fixture.getParticipant(workItem, null, null));
        when(workflowData.getPayload()).thenReturn(AU_CONTENT_PATH);
        assertEquals(AU_CONTENT_APPROVERS, fixture.getParticipant(workItem, null, null));
        when(workflowData.getPayload()).thenReturn(GLOBAL_CONTENT_PATH);
        assertEquals(GLOBAL_APPROVERS, fixture.getParticipant(workItem, null, null));
        when(workflowData.getPayloadType()).thenReturn("test");
        assertEquals("administrators", fixture.getParticipant(workItem, null, null));
    }

}