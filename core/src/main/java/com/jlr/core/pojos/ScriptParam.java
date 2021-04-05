package com.jlr.core.pojos;

public class ScriptParam {

	private String keyParam;
	
	private String valueParam;
	
	public ScriptParam(String keyParam, String valueParam) {
		this.keyParam = keyParam;
		this.valueParam = valueParam;
	}

	public String getKeyParam() {
		return keyParam;
	}

	public void setKeyParam(String keyParam) {
		this.keyParam = keyParam;
	}

	public String getValueParam() {
		return valueParam;
	}

	public void setValueParam(String valueParam) {
		this.valueParam = valueParam;
	}
}
