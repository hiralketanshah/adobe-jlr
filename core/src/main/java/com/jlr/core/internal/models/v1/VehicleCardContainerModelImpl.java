package com.jlr.core.internal.models.v1;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.atomic.AtomicReference;
import javax.annotation.PostConstruct;
import javax.inject.Inject;
import org.apache.commons.collections.CollectionUtils;
import org.apache.commons.lang.StringUtils;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.OSGiService;
import org.apache.sling.models.annotations.injectorspecific.RequestAttribute;
import org.apache.sling.models.annotations.injectorspecific.SlingObject;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;
import org.json.JSONException;
import org.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import com.day.cq.commons.inherit.InheritanceValueMap;
import com.day.cq.wcm.api.Page;
import com.jlr.core.constants.CommonConstants;
import com.jlr.core.constants.ErrorUtilsConstants;
import com.jlr.core.constants.VehicleCardConstants;
import com.jlr.core.models.VehicleCardContainerModel;
import com.jlr.core.pojos.VehicleCard;
import com.jlr.core.pojos.VehicleLink;
import com.jlr.core.services.TcoService;
import com.jlr.core.utils.CommonUtils;
import com.jlr.core.utils.ErrorUtils;
import com.jlr.core.utils.VehicleCardUtils;

/**
 * The type Vehicle card container model.
 *
 * @author Adobe
 */
@Model(adaptables = {Resource.class, SlingHttpServletRequest.class}, adapters = {VehicleCardContainerModel.class},
                defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class VehicleCardContainerModelImpl extends GlobalModelImpl implements VehicleCardContainerModel {


    /** The logger. */
    private static Logger LOGGER = LoggerFactory.getLogger(VehicleCardContainerModelImpl.class);

    /**
     * The Key.
     */
    @RequestAttribute(injectionStrategy = InjectionStrategy.OPTIONAL)
    String key;

    /**
     * The Constant RESOURCE_TYPE.
     */
    public static final String RESOURCE_TYPE = "jlr/components/primarynavigation/v1/vehiclecardcontainer";

    /** The resource. */
    @SlingObject
    private Resource resource;

    @Inject
    private ResourceResolver resourceResolver;

    @Inject
    private SlingHttpServletRequest request;

    @Inject
    private Page currentPage;

    @Inject
    private InheritanceValueMap pageProperties;

    @OSGiService
    private TcoService tcoService;

    /** The unique ID. */
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String uniqueID;

    /** The vehicle card json. */
    private String vehicleCardJson;

    /** The vehicle card script. */
    private String vehicleCardScript;

    /** The vehicle image reference. */
    private String vehicleImageReference;

    /** The vehicle image link. */
    private String vehicleImageLink;
    private String vehiclePrice;
    private String vehiclePriceConfigValue;


    /**
     * Init.
     */
    @PostConstruct
    public void init() {

        List<VehicleCardModelImpl> vehicleCardModelList = new ArrayList<>();

        if (resource.hasChildren()) {
            Iterable<Resource> childResources = resource.getChild(VehicleCardConstants.VEHICLECARDS).getChildren();
            childResources.iterator().forEachRemaining(childResource -> {
                if (childResource.isResourceType(VehicleCardConstants.JLR_VEHICLECARD_RESOURCETYPE)) {
                    VehicleCardModelImpl vehicleCardModel = childResource.adaptTo(VehicleCardModelImpl.class);
                    if (StringUtils.isEmpty(vehicleImageReference)) {
                        vehicleImageReference = vehicleCardModel.getFileReference();
                    }
                    if (StringUtils.isEmpty(vehicleImageLink)) {
                        vehicleImageLink = vehicleCardModel.getImageLink();
                    }
                    if (StringUtils.isEmpty(vehiclePrice)) {
                        vehiclePrice = getVehicleModelPrice(vehicleCardModel.getPrice());
                    }
                    vehicleCardModelList.add(vehicleCardModel);
                }
            });
        }
        vehicleCardJson = createJsonStructure(vehicleCardModelList).toString();

    }

    private String getVehicleModelPrice(String priceMacro) {
        AtomicReference<String> modelPrice = new AtomicReference<>();
        Map<String, String> modelPriceMap = tcoService.getModelPrice(resourceResolver, request, currentPage, pageProperties, priceMacro, key);
        modelPriceMap.entrySet().iterator().forEachRemaining(entry -> {
            vehiclePriceConfigValue = entry.getKey();
            modelPrice.set(entry.getValue());
        });
        return modelPrice.get();
    }

    /**
     * Creates the json structure.
     *
     * @param vehicleCardModelList the vehicle card model list
     * @return the JSON object
     */
    private JSONObject createJsonStructure(List<VehicleCardModelImpl> vehicleCardModelList) {
        JSONObject jsonResponseObject = new JSONObject();
        try {

            jsonResponseObject.put(VehicleCardConstants.TITLE, CommonUtils.getOnlyTextFromHTML(getHeaderCopy()));
            jsonResponseObject.put(VehicleCardConstants.INTRODUCTION, CommonUtils.getOnlyTextFromHTML(getCopy()));
            jsonResponseObject.put(VehicleCardConstants.INITIAL_TAB, JSONObject.stringToValue("0"));
            Map<String, VehicleCard> model = new HashMap<>();
            for (int i = 0, vehicleCardModelListSize = vehicleCardModelList.size(); i < vehicleCardModelListSize; i++) {
                VehicleCardModelImpl vehicleCardModel = vehicleCardModelList.get(i);
                VehicleCard vehicleCard = mapVehicleCardDetails(vehicleCardModel, i);
                model.put(CommonUtils.getOnlyTextFromHTML(vehicleCardModel.getTabName()), vehicleCard);
            }
            jsonResponseObject.put(VehicleCardConstants.TABS, model);
        } catch (JSONException e) {
            LOGGER.error(ErrorUtils.createErrorMessage(ErrorUtilsConstants.AEM_JSON_EXCEPTION, ErrorUtilsConstants.TECHNICAL, ErrorUtilsConstants.AEM_SITE,
                            ErrorUtilsConstants.MODULE_SERVICE, this.getClass().getSimpleName(), e));
        }
        return jsonResponseObject;
    }

    /**
     * Map vehicle card details.
     *
     * @param vehicleCardModel the vehicle card model
     * @param order the order
     * @return the vehicle card
     */
    private VehicleCard mapVehicleCardDetails(VehicleCardModelImpl vehicleCardModel, int order) {
        VehicleCard vehicleCard = new VehicleCard();
        vehicleCard.setOrder(order);
        vehicleCard.setTabAltText(CommonUtils.getOnlyTextFromHTML(getHeaderCopy()));
        vehicleCard.setPrice(getVehicleModelPrice(vehicleCardModel.getPrice()));
        vehicleCard.setLeasePrice(null);
        vehicleCard.setLeaseTermAndDepositDue(null);
        vehicleCard.setBazaarVoiceRating(null);
        vehicleCard.setNoPriceMacro(Boolean.FALSE);
        List<VehicleLink> secondaryLinks = new ArrayList<>();
        List<VehicleLink> extraSecondaryLinks = new ArrayList<>();
        if (CollectionUtils.isNotEmpty(vehicleCardModel.getCtaList())) {
            vehicleCardModel.getCtaList().stream().forEach(ctaPojo -> {
                if (VehicleCardConstants.PRIMARY.equalsIgnoreCase(ctaPojo.getLinkType())) {
                    vehicleCard.setPrimaryLink(VehicleCardUtils.setCtaToVehicleLink(ctaPojo));
                } else if (VehicleCardConstants.SECONDARY.equalsIgnoreCase(ctaPojo.getLinkType())) {
                	ctaPojo.setIcon("Chevron_Right");
                    secondaryLinks.add(VehicleCardUtils.setCtaToVehicleLink(ctaPojo));
                } else {
                    extraSecondaryLinks.add(VehicleCardUtils.setCtaToVehicleLink(ctaPojo));
                }
            });
        }
        vehicleCard.setSecondaryLinks(secondaryLinks);
        vehicleCard.setExtraSecondaryLinks(extraSecondaryLinks);
        vehicleCard.setDisclaimerLink1(VehicleCardUtils.getEmptyVehicleLink());
        vehicleCard.setDisclaimerLink2(VehicleCardUtils.getEmptyVehicleLink());
        vehicleCard.setDisclaimer(vehicleCardModel.getDisclaimer());
        vehicleCard.setImage(VehicleCardUtils.setImageToVehicleLink(vehicleCardModel.getFileReference(), vehicleCardModel.getImageAlt()));
        vehicleCard.setImageLink(VehicleCardUtils.getEmptyVehicleLink());
        vehicleCard.setFeatures(VehicleCardUtils.addFeaturesToVehicleCard(vehicleCardModel.getFeatures()));

        return vehicleCard;
    }

    /**
     * Gets vehicle card json.
     *
     * @return the vehicle card json
     */
    @Override
    public String getVehicleCardJson() {
        return vehicleCardJson;
    }

    /**
     * Gets unique id.
     *
     * @return the unique id
     */
    @Override
    public String getUniqueID() {
        return uniqueID;
    }

    /**
     * Gets vehicle card script.
     *
     * @return the vehicle card script
     */
    @Override
    public String getVehicleCardScript() {
        return "<script id=\"dxnav-" + uniqueID + "\" type=\"application/json\">" + vehicleCardJson + "</script>";
    }


    /**
     * Gets vehicle image reference.
     *
     * @return the vehicle image reference
     */
    @Override
    public String getVehicleImageReference() {
        return vehicleImageReference;
    }

    /**
     * Gets vehicle image link.
     *
     * @return the vehicle image link
     */
    @Override
    public String getVehicleImageLink() {
        return vehicleImageLink;
    }

    /**
     * Gets vehicle price.
     *
     * @return the vehicle price
     */
    @Override
    public String getVehiclePrice() {
        return vehiclePrice;
    }

    /**
     * Gets vehicle price config value.
     *
     * @return the vehicle price config value
     */
    public String getVehiclePriceConfigValue() {
        return vehiclePriceConfigValue;
    }
}

