package com.jlr.core.models;

import java.util.ArrayList;
import java.util.List;

import org.apache.commons.lang.StringUtils;
import org.osgi.annotation.versioning.ConsumerType;

import com.jlr.core.pojos.DerivativeTab;

/**
 * The Interface DerivativeContainerModel.
 *
 * @author Adobe
 */
@ConsumerType
public interface DerivativeContainerModel {

    default String getSpecsAtaGlanceHeading() {
        return StringUtils.EMPTY;
    }

    default String getEnablePricing() {
        return StringUtils.EMPTY;
    }

    default String getLayout() {
        return StringUtils.EMPTY;
    }

    default String getFirstDropdownHeading() {
        return StringUtils.EMPTY;
    }

    default String getSecondDropdownHeading() {
        return StringUtils.EMPTY;
    }

    default List<String> getTabHeadings() {
        return new ArrayList<>();
    }

    default List<DerivativeTab> getListOfTabs() {
        return new ArrayList<>();
    }
}
