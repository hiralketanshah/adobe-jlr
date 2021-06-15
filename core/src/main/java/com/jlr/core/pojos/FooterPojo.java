package com.jlr.core.pojos;

/**
 * The Class FooterPojo.
 *
 * @author Adobe
 */
public class FooterPojo {

    /** The header. */
    private String header;
    
    /** The copy. */
    private String copy;

    /**
     * Instantiates a new footer pojo.
     *
     * @param header the header
     * @param copy the copy
     */
    public FooterPojo(String header, String copy) {
        this.header = header;
        this.copy = copy;
    }

    /**
     * Gets the header.
     *
     * @return the header
     */
    public String getHeader() {
        return header;
    }

    /**
     * Sets the header.
     *
     * @param header the new header
     */
    public void setHeader(String header) {
        this.header = header;
    }

    /**
     * Gets the copy.
     *
     * @return the copy
     */
    public String getCopy() {
        return copy;
    }

    /**
     * Sets the copy.
     *
     * @param copy the new copy
     */
    public void setCopy(String copy) {
        this.copy = copy;
    }
}
