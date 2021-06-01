package com.jlr.core.models;

import com.jlr.core.pojos.CTAPojo;
import org.osgi.annotation.versioning.ConsumerType;

import java.util.ArrayList;
import java.util.List;

@ConsumerType
public interface VehicleSpecsModel {
	public String getBodyStyleHeader();
	public String getModelHeader();
	public String getEngineHeader();
	public String getSpecHeader();
	default List<CTAPojo> getCtaList() {
		return new ArrayList<>();
	}
}
