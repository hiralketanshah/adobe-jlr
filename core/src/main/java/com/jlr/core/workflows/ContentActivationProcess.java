package com.jlr.core.workflows;

import com.adobe.granite.workflow.WorkflowException;
import com.adobe.granite.workflow.WorkflowSession;
import com.adobe.granite.workflow.exec.WorkItem;
import com.adobe.granite.workflow.exec.WorkflowData;
import com.adobe.granite.workflow.exec.WorkflowProcess;
import com.adobe.granite.workflow.metadata.MetaDataMap;
import com.adobe.granite.workflow.model.WorkflowModel;
import com.day.cq.replication.ReplicationActionType;
import com.day.cq.replication.ReplicationException;
import com.day.cq.replication.Replicator;
import com.day.cq.wcm.api.Page;
import com.jlr.core.constants.ErrorUtilsConstants;
import com.jlr.core.utils.CommonUtils;
import com.jlr.core.utils.ErrorUtils;
import org.apache.sling.api.resource.*;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.Reference;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.jcr.Session;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import static com.jlr.core.constants.CommonConstants.JLR_WORKFLOW_SUBSERVICE;

/**
 * The component that activates the selected content now or a later date.
 */
@Component(property = {"process.label = Content Activation Process",
        "process.description = Process step to approve the selected content."})
public class ContentActivationProcess implements WorkflowProcess {

    /**
     * The constant LOGGER.
     */
    private static final Logger LOGGER =
            LoggerFactory.getLogger(ContentActivationProcess.class);

    @Reference
    private Replicator replicator;
    @Reference
    private ResourceResolverFactory resolverFactory;

    @Override
    public void execute(final WorkItem workItem, final WorkflowSession workflowSession,
                        final MetaDataMap metaDataMap) throws WorkflowException {
        LOGGER.debug("Content Activation Process Started");

        try (ResourceResolver resourceResolver = CommonUtils.getServiceResolver(resolverFactory, JLR_WORKFLOW_SUBSERVICE)){

            String contentPath = workItem.getContentPath();
            Resource resource = resourceResolver.getResource(contentPath);
            if(resource.hasChildren()) {
                Page page = resource.adaptTo(Page.class);
                ValueMap valueMap = resource.getChild("jcr:content").getValueMap();
                String activateNowLater = valueMap.get("activateNowLater", String.class);
                if("activateNow".equalsIgnoreCase(activateNowLater)){
                    replicator.replicate(resourceResolver.adaptTo(Session.class), ReplicationActionType.ACTIVATE, contentPath);
                } else if("activateLater".equalsIgnoreCase(activateNowLater)){
                    String activationDate = valueMap.get("activationDate", String.class);
                    SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm");
                    Date date = dateFormat.parse(activationDate);
                    try {
                        final String model = "/var/workflow/models/scheduled_activation";
                        final WorkflowModel workflowModel = workflowSession.getModel(model);
                        final WorkflowData workflowData = workflowSession.newWorkflowData("JCR_PATH", contentPath);
                        workflowModel.setTitle("content activation scheduled on "+ dateFormat.format(date));
                        workflowData.getMetaDataMap().put("absoluteTime", date.getTime());
                        workflowSession.startWorkflow(workflowModel, workflowData);
                        LOGGER.info("Workflow: {} started", model);
                    } catch (WorkflowException e) {
                        LOGGER.error(e.getMessage(), e);
                    }
                }
            }

        } catch (LoginException e) {
            LOGGER.error(ErrorUtils.createErrorMessage(ErrorUtilsConstants.AEM_LOGIN_EXCEPTION, ErrorUtilsConstants.TECHNICAL, ErrorUtilsConstants.AEM_SITE,
                    ErrorUtilsConstants.MODULE_WORKFLOW, "ContentActivationProcess", e));
        } catch (ReplicationException e) {
            LOGGER.error(ErrorUtils.createErrorMessage(ErrorUtilsConstants.AEM_REPLICATION_EXCEPTION, ErrorUtilsConstants.TECHNICAL, ErrorUtilsConstants.AEM_SITE,
                    ErrorUtilsConstants.MODULE_WORKFLOW, "ContentActivationProcess", e));
        } catch (ParseException e) {
            LOGGER.error(ErrorUtils.createErrorMessage(ErrorUtilsConstants.AEM_PARSE_EXCEPTION, ErrorUtilsConstants.TECHNICAL, ErrorUtilsConstants.AEM_SITE,
                    ErrorUtilsConstants.MODULE_WORKFLOW, "ContentActivationProcess", e));
        }

    }

}