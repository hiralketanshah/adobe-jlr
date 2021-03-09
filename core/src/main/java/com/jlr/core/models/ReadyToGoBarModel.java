package com.jlr.core.models;

import java.util.ArrayList;
import java.util.List;

import com.jlr.core.pojos.ReadyToGoBar;

/**
 * The Interface ReadyToGoBarModel.
 */
public interface ReadyToGoBarModel {
	
	/**
	 * Gets the rtgb.
	 *
	 * @return the rtgb
	 */
	default List<ReadyToGoBar> getRtgb() {
		return new ArrayList<>();
	 }

}
