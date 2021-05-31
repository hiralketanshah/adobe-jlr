package com.jlr.core.models;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.apache.commons.lang.StringUtils;
import org.osgi.annotation.versioning.ConsumerType;

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

    default List<String> getDropdownLabels() {
        return new ArrayList<>();
    }

    default Set<String> getSecondDropdownLabels() {
        return new HashSet<>();
    }

    default Map<String, DerivativeCardModel> getListOfTabs() {
        return new HashMap<>();
    }

    default Map<String, Map<String, DerivativeCardModel>> getListOfDropdown() {
        return new HashMap<>();
    }
}
