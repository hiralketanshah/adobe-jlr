package com.jlr.core.providers;

import com.day.cq.wcm.api.Page;
import com.day.cq.wcm.api.PageInfoProvider;
import com.jlr.core.constants.ErrorUtilsConstants;
import com.jlr.core.utils.ErrorUtils;
import org.apache.commons.lang.StringUtils;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ValueMap;
import org.apache.sling.commons.json.JSONException;
import org.apache.sling.commons.json.JSONObject;
import org.osgi.service.component.annotations.Component;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.text.ParseException;
import java.text.SimpleDateFormat;

import static com.day.cq.commons.jcr.JcrConstants.JCR_CONTENT;
import static com.jlr.core.constants.CommonConstants.*;


@Component(
        service = PageInfoProvider.class,
        immediate = true,
        property = { "pageInfoProviderType=" + "sites.listView.info.provider."
                + ApprovalPageInfoProvider.CONTENT_TYPE_PROVIDER })
@SuppressWarnings("deprecation")
public class ApprovalPageInfoProvider implements PageInfoProvider {

        public static final String CONTENT_TYPE_PROVIDER = "approvalTypeProvider";

        private static final Logger LOGGER = LoggerFactory.getLogger(ApprovalPageInfoProvider.class);

        @Override
        public void updatePageInfo(SlingHttpServletRequest request, JSONObject info, Resource resource)
                throws JSONException {
            Page page = resource.adaptTo(Page.class);
            org.json.JSONObject approvalInfoObj = new org.json.JSONObject();
            if (null != page) {
                Resource childResource = resource.getChild(JCR_CONTENT);
                if (null != childResource) {
                    ValueMap valueMap = childResource.getValueMap();
                    if (valueMap.containsKey(APPROVAL_STATUS)) {
                        try {
                            approvalInfoObj.put(APPROVAL_STATUS, valueMap.get(APPROVAL_STATUS, String.class));
                            SimpleDateFormat parseFormat = new SimpleDateFormat(YYYY_MM_DD_T_HH_MM_SS);
                            SimpleDateFormat dateFormat = new SimpleDateFormat("MMM dd, yyyy");
                            String approvedDate = valueMap.get(APPROVED_DATE, String.class);
                            if(StringUtils.isNotEmpty(approvedDate)) {
                                String formatted = dateFormat.format(parseFormat.parse(approvedDate));
                                approvalInfoObj.put(APPROVED_DATE, formatted);
                            }
                        } catch (org.json.JSONException e) {
                            LOGGER.error(ErrorUtils.createErrorMessage(ErrorUtilsConstants.AEM_JSON_EXCEPTION, ErrorUtilsConstants.TECHNICAL, ErrorUtilsConstants.AEM_SITE,
                                    ErrorUtilsConstants.MODULE_SERVICE, "ApprovalPageInfoProvider", e));
                        } catch (ParseException e) {
                            LOGGER.error(ErrorUtils.createErrorMessage(ErrorUtilsConstants.AEM_PARSE_EXCEPTION, ErrorUtilsConstants.TECHNICAL, ErrorUtilsConstants.AEM_SITE,
                                    ErrorUtilsConstants.MODULE_SERVICE, "ApprovalPageInfoProvider", e));
                        }
                    }
                }
            }
            info.put(CONTENT_TYPE_PROVIDER, new JSONObject(approvalInfoObj.toString()));
        }

}