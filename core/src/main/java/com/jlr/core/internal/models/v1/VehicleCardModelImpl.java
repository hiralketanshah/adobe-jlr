package com.jlr.core.internal.models.v1;

import com.jlr.core.constants.ErrorUtilsConstants;
import com.jlr.core.models.VehicleCardModel;
import com.jlr.core.pojos.*;
import com.jlr.core.utils.CommonUtils;
import com.jlr.core.utils.CtaUtils;
import com.jlr.core.utils.ErrorUtils;
import com.jlr.core.utils.VehicleCardUtils;
import org.apache.commons.collections.CollectionUtils;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.Optional;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;
import org.json.JSONException;
import org.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.annotation.PostConstruct;
import javax.inject.Inject;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * The type Vehicle card model.
 */
@Model(adaptables = Resource.class, adapters = { VehicleCardModel.class }, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class VehicleCardModelImpl extends GlobalModelImpl implements VehicleCardModel {

    /** The logger. */
    private static Logger LOGGER = LoggerFactory.getLogger(VehicleCardModelImpl.class);


    /**
     * The Constant RESOURCE_TYPE.
     */
    public static final String RESOURCE_TYPE = "jlr/components/vehiclecard/v1/vehiclecard";

    /** The cta list. */
    @Inject
    @Optional
    private Resource ctaList;

    /** The features. */
    @Inject
    @Optional
    private Resource features;

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String disclaimer;

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String disclaimerLink;

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String disclaimerText;

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String imageLink;

    /** The resource resolver. */
    @Inject
    private ResourceResolver resourceResolver;

    /** The price. */
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String price;

    /**
     * The list of CTA.
     */
    List<CTAPojo> listOfCta = new ArrayList<>();

    private String vehicleCardJson;

    /**
     * Init.
     */
    @PostConstruct
    public void init(){
        vehicleCardJson = createJsonStructure().toString();
    }

    private JSONObject createJsonStructure() {
        JSONObject jsonResponseObject = new JSONObject();
        try {
            jsonResponseObject.put("title", CommonUtils.getOnlyTextFromHTML(getHeaderCopy()));
            jsonResponseObject.put("introduction", CommonUtils.getOnlyTextFromHTML(getCopy()));
            Map<String, VehicleCard> model = new HashMap<>();
            VehicleCard vehicleCard = mapVehicleCardDetails();
            model.put(CommonUtils.getOnlyTextFromHTML(getHeaderCopy()), vehicleCard);
            jsonResponseObject.put("tabs", model);
        } catch(JSONException e){
            LOGGER.error(ErrorUtils.createErrorMessage(ErrorUtilsConstants.AEM_JSON_EXCEPTION, ErrorUtilsConstants.TECHNICAL, ErrorUtilsConstants.AEM_SITE,
                    ErrorUtilsConstants.MODULE_SERVICE, this.getClass().getSimpleName(), e));
        }
        return jsonResponseObject;
    }

    private VehicleCard mapVehicleCardDetails() {
        VehicleCard vehicleCard = new VehicleCard();
        vehicleCard.setOrder(0);
        vehicleCard.setTabAltText(CommonUtils.getOnlyTextFromHTML(getHeaderCopy()));
        vehicleCard.setPrice(price);
        vehicleCard.setLeasePrice(null);
        vehicleCard.setLeaseTermAndDepositDue(null);
        vehicleCard.setBazaarVoiceRating(null);
        vehicleCard.setNoPriceMacro(Boolean.FALSE);
        List<VehicleLink> secondaryLinks = new ArrayList<>();
        List<VehicleLink> extraSecondaryLinks = new ArrayList<>();
        if (CollectionUtils.isNotEmpty(getCtaList())) {
            getCtaList().stream().forEach(ctaPojo -> {
                if ("primary".equalsIgnoreCase(ctaPojo.getLinkType())) {
                    vehicleCard.setPrimaryLink(VehicleCardUtils.setCtaToVehicleLink(ctaPojo));
                } else {
                    secondaryLinks.add(VehicleCardUtils.setCtaToVehicleLink(ctaPojo));
                }
            });
        }
        vehicleCard.setSecondaryLinks(secondaryLinks);
        vehicleCard.setExtraSecondaryLinks(extraSecondaryLinks);
        vehicleCard.setDisclaimerLink1(VehicleCardUtils.getEmptyVehicleLink());
        vehicleCard.setDisclaimerLink2(VehicleCardUtils.getEmptyVehicleLink());
        vehicleCard.setDisclaimer(CommonUtils.getOnlyTextFromHTML(disclaimer));
        vehicleCard.setImage(VehicleCardUtils.setImageToVehicleLink(getFileReference(), getImageAlt()));
        vehicleCard.setImageLink(VehicleCardUtils.getEmptyVehicleLink());
        vehicleCard.setFeatures(VehicleCardUtils.addFeaturesToVehicleCard(features));

        return vehicleCard;
    }

    /**
     * Gets cta list.
     *
     * @return the cta list
     */
    public List<CTAPojo> getCtaList() {
        if (null != ctaList && ctaList.hasChildren()) {
            listOfCta = CtaUtils.createCtaList(ctaList, super.getHeaderCopy(), resourceResolver);
        }
        return listOfCta;
    }

    /**
     * Gets features.
     *
     * @return the features
     */
    public Resource getFeatures() {
        return features;
    }

    /**
     * Gets vehicle card json.
     *
     * @return the vehicle card json
     */
    public String getVehicleCardJson() {
        return vehicleCardJson;
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
     * Gets disclaimer.
     *
     * @return the disclaimer
     */
    public String getDisclaimer() {
        return disclaimer;
    }

    /**
     * Gets disclaimer link.
     *
     * @return the disclaimer link
     */
    public String getDisclaimerLink() {
        return disclaimerLink;
    }

    /**
     * Gets disclaimer text.
     *
     * @return the disclaimer text
     */
    public String getDisclaimerText() {
        return disclaimerText;
    }

    /**
     * Gets image link.
     *
     * @return the image link
     */
    public String getImageLink() {
        return imageLink;
    }
}
