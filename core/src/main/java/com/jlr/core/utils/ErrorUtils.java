package com.jlr.core.utils;

import org.apache.commons.lang3.StringUtils;

/**
 * The Class ErrorUtils to streamline error message captured across the application
 */
/**
 * @author Adobe
 * @desc ErrorUtils
 * @date 03/03/2020
 */
public final class ErrorUtils {

    /** The Constant START_BRACKET. */
    public static final String START_BRACKET = "[";

    /** The Constant END_BRACKET. */
    public static final String END_BRACKET = "]";

    /**
     * Instantiates a new private constructor
     */
    private ErrorUtils() {

    }

    /**
     * Creates the error message with specific error format for consistent reporting
     *
     * @param code the code
     * @param type the type
     * @param site the site
     * @param moduleName the module name
     * @param className the class name
     * @param exception the exception
     * @return the string
     */
    public static String createErrorMessage(String code, String type, String site, String moduleName, String className, Exception exception) {
        StringBuilder errorMessage = new StringBuilder();
        errorMessage.append(START_BRACKET).append(code).append(END_BRACKET).append(START_BRACKET).append(type).append(END_BRACKET).append(START_BRACKET)
                        .append(site).append(END_BRACKET).append(START_BRACKET).append(moduleName).append(END_BRACKET).append(START_BRACKET)
                        .append(exception.getMessage()).append(END_BRACKET).append(START_BRACKET).append(getErrorDetails(exception, className))
                        .append(END_BRACKET);
        return errorMessage.toString();
    }

    /**
     * This method extracts the error details from the exception
     *
     * @param exception the exception
     * @param className the class name
     * @return the error details
     */
    private static Object getErrorDetails(Exception exception, String className) {
        StringBuilder createErrorMessage = new StringBuilder();

        for (StackTraceElement stacktraceElement : exception.getStackTrace()) {
            if (StringUtils.endsWith(stacktraceElement.getClassName(), "." + className)) {
                createErrorMessage.append(exception.getCause()).append(" - ").append(stacktraceElement.getFileName()).append(" - ").append("Line no: ")
                                .append(stacktraceElement.getLineNumber()).append(" - ").append(" Exception : ").append(exception);
                break;
            }
        }
        return createErrorMessage.toString();
    }

}
