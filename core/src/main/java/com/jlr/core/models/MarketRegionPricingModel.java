package com.jlr.core.models;

import java.util.ArrayList;
import java.util.List;

import org.osgi.annotation.versioning.ConsumerType;

import com.jlr.core.pojos.StatePojo;

// TODO: Auto-generated Javadoc
/**
 * The Interface MarketRegionPricingModel.
 *
 * @author Adobe
 */
@ConsumerType
public interface MarketRegionPricingModel {

    /**
     * Gets the state list.
     *
     * @return the state list
     */
    default List<StatePojo> getStateList() {
        return new ArrayList<>();
    }

}
