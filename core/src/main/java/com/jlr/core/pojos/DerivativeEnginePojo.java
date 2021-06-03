package com.jlr.core.pojos;

import java.util.Map;

/**
 * The Class DerivativeEnginePojo.
 *
 * @author Adobe
 */
public class DerivativeEnginePojo {

    private String count;

    private Map<String, String> engineData;

    public DerivativeEnginePojo(String count, Map<String, String> engineData) {
        super();
        this.count = count;
        this.engineData = engineData;
    }

    public String getCount() {
        return count;
    }

    public Map<String, String> getEngineData() {
        return engineData;
    }

}
