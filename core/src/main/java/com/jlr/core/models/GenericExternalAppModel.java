package com.jlr.core.models;

import java.util.ArrayList;
import java.util.List;
import org.apache.commons.lang.StringUtils;


/**
 * The Interface GenericExternalAppModel.
 *
 * @author Adobe
 */
public interface GenericExternalAppModel {

    /**
     * Gets the container id.
     *
     * @return the container id
     */
    default String getContainerId() {
        return StringUtils.EMPTY;
    }

    /**
     * Gets the script URL.
     *
     * @return the script URL
     */
    default String getScriptURL() {
        return StringUtils.EMPTY;
    }

    /**
     * Gets the script param.
     *
     * @return the script param
     */
    public String getScriptParam();

    /**
     * Gets the consent category.
     *
     * @return the consent category
     */
    public String[] getConsentCategory();

    /**
     * Gets the unconsented header.
     *
     * @return the unconsented header
     */
    default String getUnconsentedHeader() {
        return StringUtils.EMPTY;
    }

    /**
     * Gets the supress caveat.
     *
     * @return the supress caveat
     */
    default String getSupressCaveat() {
        return StringUtils.EMPTY;
    }

    /**
     * Gets the unconsented message.
     *
     * @return the unconsented message
     */
    default String getUnconsentedMessage() {
        return StringUtils.EMPTY;
    }

    /**
     * Gets the cta text.
     *
     * @return the cta text
     */
    default String getCtaText() {
        return StringUtils.EMPTY;
    }

    /**
     * Gets the consent category data.
     *
     * @return the consent category data
     */
    default List<String> getConsentCategoryData() {
        return new ArrayList<>();
    }
}
