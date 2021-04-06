<%@include file="/libs/foundation/global.jsp"%>
<%@page session="false"
        import="com.adobe.granite.ui.components.Config,
          com.adobe.granite.ui.components.rendercondition.RenderCondition,
          com.adobe.granite.ui.components.rendercondition.SimpleRenderCondition,
          org.apache.sling.api.resource.Resource,
          com.jlr.core.utils.CommonUtils,
          org.apache.sling.api.resource.ValueMap,
          com.adobe.granite.ui.components.ComponentHelper,
          com.adobe.granite.xss.XSSAPI,
          com.day.cq.i18n.I18n"%>
<%--###
Template
======
.. granite:servercomponent:: /apps/jlr/granite/rendercondition/template
   :rendercondition:
   A condition that renders page properties based on page template path
   It has the following content structure:
   .. gnd:gnd::
      [granite:RenderConditionsTemplate]
      /**
       * The template path to match
       */
      - templatePath (String)
###--%>
<sling:defineObjects/> 
<%
final ComponentHelper cmp = new ComponentHelper(pageContext);
Config cfg = cmp.getConfig();
String path = cfg.get("templatePath", "");
boolean show = CommonUtils.isTemplate(slingRequest, request, path);
request.setAttribute(RenderCondition.class.getName(), new SimpleRenderCondition(show));
%>