package com.jlr.core.pojos;

/**
 * The Class StatePojo.
 *
 * @author Adobe
 */
public class StatePojo {

    /** The state name. */
    private String stateName;
    
    /** The state value. */
    private String stateValue;

    /**
     * Instantiates a new state pojo.
     *
     * @param stateName the state name
     * @param stateValue the state value
     */
    public StatePojo(String stateName, String stateValue) {
        this.stateName = stateName;
        this.stateValue = stateValue;
    }

    /**
     * Gets the state name.
     *
     * @return the state name
     */
    public String getStateName() {
        return stateName;
    }

    /**
     * Sets the state name.
     *
     * @param stateName the new state name
     */
    public void setStateName(String stateName) {
        this.stateName = stateName;
    }

    /**
     * Gets the state value.
     *
     * @return the state value
     */
    public String getStateValue() {
        return stateValue;
    }

    /**
     * Sets the state value.
     *
     * @param stateValue the new state value
     */
    public void setStateValue(String stateValue) {
        this.stateValue = stateValue;
    }

}
