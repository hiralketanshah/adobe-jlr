<%@page session="false"%>
<%@include file="/libs/foundation/global.jsp" %>
<c:choose>
    <c:when test="${fn:startsWith(pageContext.request.requestURI, '/content/landrover') || fn:startsWith(pageContext.request.requestURI, '/content/dam/landrover')}">
       <%@include file="/apps/acs-commons/components/utilities/errorpagehandler/404.jsp" %>
    </c:when>
</c:choose>