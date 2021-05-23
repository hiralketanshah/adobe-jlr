package com.jlr.core.models;

import org.osgi.annotation.versioning.ConsumerType;

@ConsumerType
public interface VehicleSpecsModel {
	public String getModelHeader();
	public String getEngineHeader();
	public String getSpecHeader();
}
