package com.jlr.core.models;

import java.util.ArrayList;
import java.util.List;
import org.osgi.annotation.versioning.ConsumerType;
import com.jlr.core.pojos.CTAPojo;

/**
 * The Interface ArticleModel.
 */
@ConsumerType
public interface VerticalSliderModel {

    /**
     * Name of the resource property that indicates the delay (in milliseconds) when automatically transitioning between slides.
     *
     * @since com.adobe.cq.wcm.core.components.models 12.5.0
     */
    String PN_DELAY = "delay";

    /**
     * Name of the resource property that indicates whether automatic pause on hovering the carousel is disabled, or not.
     *
     * @since com.adobe.cq.wcm.core.components.models 12.6.0
     */
    String PN_AUTOPAUSE_DISABLED = "autopauseDisabled";

    /**
     * Returns the delay (in milliseconds) when automatically transitioning between slides.
     *
     * @return the delay (in milliseconds) when automatically transitioning between slides
     * @since com.adobe.cq.wcm.core.components.models 12.5.0
     */
    default Long getDelay() {
        return null;
    }

    /**
     * Indicates whether automatic pause on hovering the carousel is disabled, or not.
     *
     * @return {@code true} if automatic pause on hovering the carousel should be disabled; {@code false} otherwise
     * @since com.adobe.cq.wcm.core.components.models 12.6.0
     */
    default boolean getAutopauseDisabled() {
        return false;
    }

    default String getPipicon() {
        return null;
    }

    default List<CTAPojo> getCtaList() {
        return new ArrayList<>();
    }
}
