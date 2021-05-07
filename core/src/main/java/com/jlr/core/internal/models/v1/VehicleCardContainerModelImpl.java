package com.jlr.core.internal.models.v1;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import javax.annotation.PostConstruct;
import org.apache.commons.collections.CollectionUtils;
import org.apache.commons.lang.StringUtils;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.SlingObject;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;
import org.json.JSONException;
import org.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import com.jlr.core.constants.ErrorUtilsConstants;
import com.jlr.core.constants.VehicleCardConstants;
import com.jlr.core.models.VehicleCardContainerModel;
import com.jlr.core.pojos.VehicleCard;
import com.jlr.core.pojos.VehicleLink;
import com.jlr.core.utils.CommonUtils;
import com.jlr.core.utils.ErrorUtils;
import com.jlr.core.utils.VehicleCardUtils;

/**
 * The type Vehicle card container model.
 */
@Model(adaptables = Resource.class, adapters = {VehicleCardContainerModel.class}, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class VehicleCardContainerModelImpl extends GlobalModelImpl implements VehicleCardContainerModel {


    /** The logger. */
    private static Logger LOGGER = LoggerFactory.getLogger(VehicleCardContainerModelImpl.class);

    /**
     * The Constant RESOURCE_TYPE.
     */
    public static final String RESOURCE_TYPE = "jlr/components/primarynavigation/v1/vehiclecardcontainer";



    @SlingObject
    private Resource resource;

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String uniqueID;

    private String vehicleCardJson;
    private String vehicleCardScript;
    private String vehicleImageReference;
    private String vehicleImageLink;


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
                    vehicleCardModelList.add(vehicleCardModel);
                }
            });
        }
        vehicleCardJson = createJsonStructure(vehicleCardModelList).toString();

    }

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

    private VehicleCard mapVehicleCardDetails(VehicleCardModelImpl vehicleCardModel, int order) {
        VehicleCard vehicleCard = new VehicleCard();
        vehicleCard.setOrder(order);
        vehicleCard.setTabAltText(CommonUtils.getOnlyTextFromHTML(getHeaderCopy()));
        vehicleCard.setPrice(vehicleCardModel.getPrice());
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
        vehicleCard.setDisclaimer(CommonUtils.getOnlyTextFromHTML(vehicleCardModel.getDisclaimer()));
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
}