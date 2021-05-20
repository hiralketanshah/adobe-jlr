package com.jlr.core.models;

import java.util.ArrayList;
import java.util.List;

import org.osgi.annotation.versioning.ConsumerType;

import com.jlr.core.pojos.PriceConfigPojo;

/**
 * The Interface PriceConfigModel.
 *
 * @author Adobe
 */
@ConsumerType
public interface PriceConfigModel {

    default List<PriceConfigPojo> getNameplates() {
        return new ArrayList<>();
    }
}
