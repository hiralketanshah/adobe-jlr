package com.jlr.core.pojos;

/**
 * The Class ScriptParam.
 *
 * @author Adobe
 */
public class ScriptParam {

	/** The key param. */
	private String keyParam;
	
	/** The value param. */
	private String valueParam;
	
	/**
	 * Instantiates a new script param.
	 *
	 * @param keyParam the key param
	 * @param valueParam the value param
	 */
	public ScriptParam(String keyParam, String valueParam) {
		this.keyParam = keyParam;
		this.valueParam = valueParam;
	}

	/**
	 * Gets the key param.
	 *
	 * @return the key param
	 */
	public String getKeyParam() {
		return keyParam;
	}

	/**
	 * Sets the key param.
	 *
	 * @param keyParam the new key param
	 */
	public void setKeyParam(String keyParam) {
		this.keyParam = keyParam;
	}

	/**
	 * Gets the value param.
	 *
	 * @return the value param
	 */
	public String getValueParam() {
		return valueParam;
	}

	/**
	 * Sets the value param.
	 *
	 * @param valueParam the new value param
	 */
	public void setValueParam(String valueParam) {
		this.valueParam = valueParam;
	}
}
