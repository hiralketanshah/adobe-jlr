package com.jlr.core.models;

import java.util.ArrayList;
import java.util.List;

import org.osgi.annotation.versioning.ConsumerType;

import com.jlr.core.pojos.StatePojo;

@ConsumerType
public interface ShowStateModalModel {

    default List<StatePojo> getStateList() {
        return new ArrayList<>();
    }

}
