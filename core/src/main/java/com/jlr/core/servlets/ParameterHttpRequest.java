package com.jlr.core.servlets;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletRequestWrapper;
import java.util.Enumeration;
import java.util.HashMap;
import java.util.Map;

public class ParameterHttpRequest extends HttpServletRequestWrapper {

    /** A map containing additional request params this wrapper adds to the wrapped request */
    private final Map<String, String[]> params = new HashMap<>();

    /**
     * Constructs a request object wrapping the given request.
     * @throws java.lang.IllegalArgumentException if the request is null
     */
    ParameterHttpRequest(final HttpServletRequest request) {
        super(request);
    }

    @Override
    public String getParameter(final String name) {
        // if we added one with the given name, return that one
        if ( params.get( name ) != null ) {
            String[] values = params.get( name );
            return values[0];
        } else {
            // otherwise return what's in the original request
            return super.getParameter(name);
        }
    }

    public ParameterHttpRequest addParameter(String name, String value) {
        if (value != null)
            params.put(name, new String[]{value});

        return this;
    }

    /**
     * *** OVERRIDE THE METHODS BELOW TO REFLECT PARAMETERS ADDED BY THIS WRAPPER ****
     */

    @Override
    public Map<String, String[]> getParameterMap() {
        return params;
    }

    @Override
    public String[] getParameterValues(final String name) {
        return params.get(name);
    }
}
