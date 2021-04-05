package com.jlr.core.constants;


/**
 * The Class Constants.
 */
public class ErrorUtilsConstants {

    /**
     * Instantiates a new constants.
     */
    private ErrorUtilsConstants() {
        throw new IllegalStateException("ErrorUtils  Constants class");
    }

    /** Technical Exception */
    public static final String AEM_GENERIC_EXCEPTION = "000 - AEM_GENERIC_EXCEPTION";
    public static final String AEM_REPOSITORY_EXCEPTION = "001 - AEM_REPOSITORY_EXCEPTION";
    public static final String AEM_LOGIN_EXCEPTION = "002 - AEM_LOGIN_EXCEPTION";
    public static final String AEM_PERSISTENCE_EXCEPTION = "003 - AEM_PERSISTENCE_EXCEPTION";
    public static final String AEM_JSON_EXCEPTION = "004 - AEM_JSON_EXCEPTION";
    public static final String AEM_PARSE_EXCEPTION = "005 - AEM_PARSE_EXCEPTION";
    public static final String AEM_IO_EXCEPTION = "006 - AEM_IO_EXCEPTION";
    public static final String AEM_EMAIL_EXCEPTION = "007 - AEM_EMAIL_EXCEPTION";
    public static final String AEM_EMAIL_ADDRESS_EXCEPTION = "008 - AEM_EMAIL_ADDRESS_EXCEPTION";
    public static final String AEM_EMAIL_MESSAGING_EXCEPTION = "008 - AEM_EMAIL_MESSAGING_EXCEPTION";


    /** Type */
    public static final String TECHNICAL = "Technical";
    public static final String FUNCTIONAL = "Functional";
    public static final String BUSINESS = "Business";

    /** Site */
    public static final String AEM_SITE = "AEM SITES";

    /** Module */
    public static final String MODULE_WORKFLOW = "WORKFLOW";
    public static final String MODULE_SERVLET = "SERVLET";
    public static final String MODULE_SERVICE = "SERVICE";
    public static final String MODULE_MODEL = "MODEL";
    public static final String MODULE_LISTENER = "LISTENER";
    public static final String MODULE_AUTH_HANDLER = "AUTH_HANDLER";

}
