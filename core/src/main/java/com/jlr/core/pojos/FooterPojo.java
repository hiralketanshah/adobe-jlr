package com.jlr.core.pojos;

public class FooterPojo {

    private String header;
    private String copy;

    public FooterPojo(String header, String copy) {
        this.header = header;
        this.copy = copy;
    }

    public String getHeader() {
        return header;
    }

    public void setHeader(String header) {
        this.header = header;
    }

    public String getCopy() {
        return copy;
    }

    public void setCopy(String copy) {
        this.copy = copy;
    }
}
