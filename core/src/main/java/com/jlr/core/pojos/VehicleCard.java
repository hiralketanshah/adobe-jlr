package com.jlr.core.pojos;

import java.util.ArrayList;
import java.util.List;

/**
 * The type Vehicle card.
 */
public class VehicleCard {

    private Integer order;
    private String tabAltText;
    private String price;
    private String leasePrice;
    private String bazaarVoiceRating;
    private VehicleLink primaryLink;
    private Image image;
    private VehicleLink imageLink;
    private List<Feature> features = null;
    private VehicleLink disclaimerLink2;
    private String disclaimer;
    private String leaseTermAndDepositDue;
    private List<VehicleLink> secondaryLinks = null;
    private VehicleLink disclaimerLink1;
    private Boolean noPriceMacro;
    private List<VehicleLink> extraSecondaryLinks = null;

    /**
     * Gets order.
     *
     * @return the order
     */
    public Integer getOrder() {
        return order;
    }

    /**
     * Sets order.
     *
     * @param order the order
     */
    public void setOrder(Integer order) {
        this.order = order;
    }

    /**
     * Gets tab alt text.
     *
     * @return the tab alt text
     */
    public String getTabAltText() {
        return tabAltText;
    }

    /**
     * Sets tab alt text.
     *
     * @param tabAltText the tab alt text
     */
    public void setTabAltText(String tabAltText) {
        this.tabAltText = tabAltText;
    }

    /**
     * Gets price.
     *
     * @return the price
     */
    public String getPrice() {
        return price;
    }

    /**
     * Sets price.
     *
     * @param price the price
     */
    public void setPrice(String price) {
        this.price = price;
    }

    /**
     * Gets lease price.
     *
     * @return the lease price
     */
    public String getLeasePrice() {
        return leasePrice;
    }

    /**
     * Sets lease price.
     *
     * @param leasePrice the lease price
     */
    public void setLeasePrice(String leasePrice) {
        this.leasePrice = leasePrice;
    }

    /**
     * Gets bazaar voice rating.
     *
     * @return the bazaar voice rating
     */
    public String getBazaarVoiceRating() {
        return bazaarVoiceRating;
    }

    /**
     * Sets bazaar voice rating.
     *
     * @param bazaarVoiceRating the bazaar voice rating
     */
    public void setBazaarVoiceRating(String bazaarVoiceRating) {
        this.bazaarVoiceRating = bazaarVoiceRating;
    }

    /**
     * Gets primary link.
     *
     * @return the primary link
     */
    public VehicleLink getPrimaryLink() {
        return primaryLink;
    }

    /**
     * Sets primary link.
     *
     * @param primaryLink the primary link
     */
    public void setPrimaryLink(VehicleLink primaryLink) {
        this.primaryLink = primaryLink;
    }

    /**
     * Gets image.
     *
     * @return the image
     */
    public Image getImage() {
        return image;
    }

    /**
     * Sets image.
     *
     * @param image the image
     */
    public void setImage(Image image) {
        this.image = image;
    }

    /**
     * Gets image link.
     *
     * @return the image link
     */
    public VehicleLink getImageLink() {
        return imageLink;
    }

    /**
     * Sets image link.
     *
     * @param imageLink the image link
     */
    public void setImageLink(VehicleLink imageLink) {
        this.imageLink = imageLink;
    }

    /**
     * Gets features.
     *
     * @return the features
     */
    public List<Feature> getFeatures() {
        return new ArrayList<>(features);
    }

    /**
     * Sets features.
     *
     * @param features the features
     */
    public void setFeatures(List<Feature> features) {
        this.features = new ArrayList<>(features);
    }

    /**
     * Gets disclaimer link 2.
     *
     * @return the disclaimer link 2
     */
    public VehicleLink getDisclaimerLink2() {
        return disclaimerLink2;
    }

    /**
     * Sets disclaimer link 2.
     *
     * @param disclaimerLink2 the disclaimer link 2
     */
    public void setDisclaimerLink2(VehicleLink disclaimerLink2) {
        this.disclaimerLink2 = disclaimerLink2;
    }

    /**
     * Gets disclaimer.
     *
     * @return the disclaimer
     */
    public String getDisclaimer() {
        return disclaimer;
    }

    /**
     * Sets disclaimer.
     *
     * @param disclaimer the disclaimer
     */
    public void setDisclaimer(String disclaimer) {
        this.disclaimer = disclaimer;
    }

    /**
     * Gets lease term and deposit due.
     *
     * @return the lease term and deposit due
     */
    public String getLeaseTermAndDepositDue() {
        return leaseTermAndDepositDue;
    }

    /**
     * Sets lease term and deposit due.
     *
     * @param leaseTermAndDepositDue the lease term and deposit due
     */
    public void setLeaseTermAndDepositDue(String leaseTermAndDepositDue) {
        this.leaseTermAndDepositDue = leaseTermAndDepositDue;
    }

    /**
     * Gets secondary links.
     *
     * @return the secondary links
     */
    public List<VehicleLink> getSecondaryLinks() {
        return new ArrayList<>(secondaryLinks);
    }

    /**
     * Sets secondary links.
     *
     * @param secondaryLinks the secondary links
     */
    public void setSecondaryLinks(List<VehicleLink> secondaryLinks) {
        this.secondaryLinks = new ArrayList<>(secondaryLinks);
    }

    /**
     * Gets disclaimer link 1.
     *
     * @return the disclaimer link 1
     */
    public VehicleLink getDisclaimerLink1() {
        return disclaimerLink1;
    }

    /**
     * Sets disclaimer link 1.
     *
     * @param disclaimerLink1 the disclaimer link 1
     */
    public void setDisclaimerLink1(VehicleLink disclaimerLink1) {
        this.disclaimerLink1 = disclaimerLink1;
    }

    /**
     * Gets no price macro.
     *
     * @return the no price macro
     */
    public Boolean getNoPriceMacro() {
        return noPriceMacro;
    }

    /**
     * Sets no price macro.
     *
     * @param noPriceMacro the no price macro
     */
    public void setNoPriceMacro(Boolean noPriceMacro) {
        this.noPriceMacro = noPriceMacro;
    }

    /**
     * Gets extra secondary links.
     *
     * @return the extra secondary links
     */
    public List<VehicleLink> getExtraSecondaryLinks() {
        return new ArrayList<>(extraSecondaryLinks);
    }

    /**
     * Sets extra secondary links.
     *
     * @param extraSecondaryLinks the extra secondary links
     */
    public void setExtraSecondaryLinks(List<VehicleLink> extraSecondaryLinks) {
        this.extraSecondaryLinks = new ArrayList<>(extraSecondaryLinks);
    }
}