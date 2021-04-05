package com.jlr.core.pojos;

public class MarketSelector {
	
	private String countryName;
    private String countryCode;
    private String link;

    public MarketSelector(String countryName, String countryCode, String link) {
        this.countryName = countryName;
        this.countryCode = countryCode;
        this.link = link;
    }

	public String getCountryName() {
		return countryName;
	}

	public void setCountryName(String countryName) {
		this.countryName = countryName;
	}

	public String getCountryCode() {
		return countryCode;
	}

	public void setCountryCode(String countryCode) {
		this.countryCode = countryCode;
	}

	public String getLink() {
		return link;
	}

	public void setLink(String link) {
		this.link = link;
	}
    
    

}
