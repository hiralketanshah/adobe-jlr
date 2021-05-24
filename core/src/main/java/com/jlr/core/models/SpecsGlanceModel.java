package com.jlr.core.models;

import java.util.List;

import com.jlr.core.internal.models.v1.SpecsGlanceItem;

public interface SpecsGlanceModel {

	 public List<SpecsGlanceItem> getDataItems();
	 public int getCount();
}
