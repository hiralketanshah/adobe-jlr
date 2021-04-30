package com.jlr.core.models;

import java.util.ArrayList;
import java.util.List;

import org.osgi.annotation.versioning.ConsumerType;

import com.jlr.core.internal.models.v1.SeatSliderItem;

/**
 * The Interface SeatSliderModel.
 */
@ConsumerType
public interface SeatSliderModel {

	default List<SeatSliderItem> getSeatSliderItems() {
		return new ArrayList<>();
	}

	default String getFolderPath() {
		return null;
	}
}
