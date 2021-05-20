package com.jlr.core.pojos;

public class PriceConfigPojo {

    private String nameplateId;
    private String modelYear;

    public PriceConfigPojo(String nameplateId, String modelYear) {
        super();
        this.nameplateId = nameplateId;
        this.modelYear = modelYear;
    }

    public String getNameplateId() {
        return nameplateId;
    }

    public String getModelYear() {
        return modelYear;
    }
}
