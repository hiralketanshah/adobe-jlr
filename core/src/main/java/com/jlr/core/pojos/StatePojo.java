package com.jlr.core.pojos;

public class StatePojo {

    private String stateName;
    private String stateValue;

    public StatePojo(String stateName, String stateValue) {
        this.stateName = stateName;
        this.stateValue = stateValue;
    }

    public String getStateName() {
        return stateName;
    }

    public void setStateName(String stateName) {
        this.stateName = stateName;
    }

    public String getStateValue() {
        return stateValue;
    }

    public void setStateValue(String stateValue) {
        this.stateValue = stateValue;
    }

}
