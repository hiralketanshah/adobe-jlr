package com.jlr.core.servlets;

import java.io.IOException;

import javax.servlet.Servlet;

import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.SlingHttpServletResponse;
import org.apache.sling.api.servlets.HttpConstants;
import org.apache.sling.api.servlets.SlingSafeMethodsServlet;
import org.osgi.framework.Constants;
import org.osgi.service.component.annotations.Activate;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.Modified;
import org.osgi.service.component.annotations.Reference;
import org.osgi.service.metatype.annotations.AttributeDefinition;
import org.osgi.service.metatype.annotations.AttributeType;
import org.osgi.service.metatype.annotations.Designate;
import org.osgi.service.metatype.annotations.ObjectClassDefinition;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.jlr.core.services.FetchPrice;

@Component(service = Servlet.class, property = { Constants.SERVICE_DESCRIPTION + "= JLR Fetch Prices",
        "sling.servlet.methods=" + HttpConstants.METHOD_GET, "sling.servlet.extensions=json",
        "sling.servlet.paths=/bin/fetchPrice" })
@Designate(ocd = FetchPriceServlet.Configuration.class)
public class FetchPriceServlet extends SlingSafeMethodsServlet {

    /** LOGGER */
    private static final Logger LOGGER = LoggerFactory.getLogger(FetchPriceServlet.class);
    private static final String REP_AUTHORIZABLE_ID = "rep:authorizableId";

    /** Variables to read the config values **/
    private String userBasePath;

    @Reference
    private FetchPrice fetchPrice;

    @Activate
    @Modified
    public void activate(FetchPriceServlet.Configuration config) {
        LOGGER.debug("Entered into the servlet");
        userBasePath = config.userBasePath();

    }

    @Override
    protected void doGet(SlingHttpServletRequest request, SlingHttpServletResponse response) {
        try {

            String resp = fetchPrice.getPrices();

            response.getWriter().print(resp);
        } catch (IOException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }

    }

    @ObjectClassDefinition(name = "JLR Fetch Prices")
    public @interface Configuration {

        @AttributeDefinition(name = "Users base path", description = "Provide user base path for User Lookup", type = AttributeType.STRING)
        public String userBasePath() default "/home/users";

    }
}
