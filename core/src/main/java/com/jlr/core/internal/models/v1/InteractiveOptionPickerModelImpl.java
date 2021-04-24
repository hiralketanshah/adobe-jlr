package com.jlr.core.internal.models.v1;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import javax.annotation.PostConstruct;
import javax.inject.Inject;
import org.apache.commons.lang.StringUtils;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.api.resource.ValueMap;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.Optional;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import com.jlr.core.constants.CommonConstants;
import com.jlr.core.constants.ErrorUtilsConstants;
import com.jlr.core.models.InteractiveOptionPickerModel;
import com.jlr.core.pojos.InteractiveOptionPickerItemPojo;
import com.jlr.core.utils.CommonUtils;
import com.jlr.core.utils.CtaUtils;
import com.jlr.core.utils.ErrorUtils;
import com.jlr.core.utils.LinkUtils;

/**
 * The Class InteractiveOptionPickerModel.
 */
@Model(adaptables = Resource.class, adapters = {InteractiveOptionPickerModel.class}, resourceType = InteractiveOptionPickerModelImpl.RESOURCE_TYPE)
public class InteractiveOptionPickerModelImpl extends GlobalModelImpl implements InteractiveOptionPickerModel {

    /*
     * (non-Javadoc)
     * 
     * @see com.jlr.core.models.InteractiveOptionPickerModel#getOptionListAsJson()
     */
    @Override
    public String getOptionListAsJson() {
        return jsonRoot.toString();
    }

    private String JSON_PROPERTY_TABS = "tabs";
    private String JSON_PROPERTY_TABTITLE = "tabTitle";
    private String JSON_PROPERTY_TOGGLECARDS = "toggleCards";
    private String JSON_PROPERTY_TOGGLE_TITLE = "toggleTitle";
    private String JSON_PROPERTY_TOGGLE_IMAGEURL = "toggleImageUrl";
    private String JSON_PROPERTY_TOGGLE_TABLET_IMAGEURL = "tabletToggleImageUrl";
    private String JSON_PROPERTY_TOGGLE_MOBILE_IMAGEURL = "mobileToggleImageUrl";
    private String JSON_PROPERTY_TOGGLE_THUMBNAIL_URL = "toggleThumbnailImageUrl";
    private String JSON_PROPERTY_TOGGLE_IMAGE_ALT = "toggleImageAltText";
    private String JSON_PROPERTY_TOGGLE_THUMBNAIL_IMAGE_ALT = "toggleThumbnailImageAltText";
    private String JSON_PROPERTY_TOGGLE_CONFIG_DIRECT_LINK = "configDirectLink";
    private String JSON_PROPERTY_TOGGLE_CTA_TEXT = "ctaText";
    private String JSON_PROPERTY_TOGGLE_CTA_ICON = "ctaIcon";
    private String JSON_PROPERTY_TOGGLE_CTA_TARGET = "ctaTarget";
    private String JSON_PROPERTY_TOGGLE_CTA_ARIALABEL = "ctaAriaLabel";

    /** The logger. */
    private final Logger LOGGER = LoggerFactory.getLogger(this.getClass());

    /** The Constant RESOURCE_TYPE. */
    public static final String RESOURCE_TYPE = "jlr/components/optionpicker/v1/optionpicker";

    /** The list. */
    List<InteractiveOptionPickerItemPojo> optionItemlist = new ArrayList<>();

    JSONObject jsonRoot = new JSONObject();



    /** The resource resolver. */
    @Inject
    private ResourceResolver resourceResolver;

    /** The optionItem . */
    @Inject
    @Optional
    private Resource optionPickerList;

    @Inject
    private String globalHeaderCopy;

    @Optional
    @Inject
    private String globalSummary;

    @Optional
    @Inject
    private String globalCtaText;

    @Optional
    @Inject
    private String globalCtaLink;

    @Inject
    private String globalCtaIcon;

    @Optional
    @Inject
    private String globalCtaLinkType;

    @Optional
    @Inject
    private String globalCtaAriaLabel;


    /**
     * @return the globalCtaText
     */
    public String getGlobalCtaText() {
        return globalCtaText;
    }

    /**
     * @return the globalCtaLink
     */
    public String getGlobalCtaLink() {
        return globalCtaLink;
    }

    /**
     * @return the globalCtaIcon
     */
    public String getGlobalCtaIcon() {
        return globalCtaIcon;
    }

    /**
     * @return the globalCtaLinkType
     */
    public String getGlobalCtaLinkType() {
        return globalCtaLinkType;
    }

    /**
     * @return the globalCtaAriaLabel
     */
    public String getGlobalCtaAriaLabel() {

        return globalCtaAriaLabel;
    }

    /**
     * @return the globalCtaTarget
     */
    public String getGlobalCtaTarget() {
        return globalCtaTarget;
    }

    @Optional
    @Inject
    private String globalCtaTarget;

    /**
     * @return the globalHeaderCopy
     */
    public String getGlobalHeaderCopy() {
        return globalHeaderCopy;
    }

    /**
     * @return the globalSummary
     */
    public String getGlobalSummary() {
        return globalSummary;
    }

    @PostConstruct
    public void init() {

        generateIOPickerJSON();
    }

    /**
     * @return the choosen or fallback icon
     */
    private String generateGlobalCtaIcon() {
        return CtaUtils.getIcon(getGlobalCtaIcon(), getGlobalCtaLinkType());

    }

    /**
     * @return the CTA link with appended extension
     */
    private String generateGlobalCtaLink() {
        return LinkUtils.appendLinkExtension(getGlobalCtaLink(), resourceResolver);

    }

    /**
     * @return the CTA Aria Label with Header
     */
    private String generateGlobalCtaAriaLabel() {
        return CtaUtils.getAriaLabel(getGlobalHeaderCopy(), getGlobalCtaText());

    }

    /**
     * @return the JSON of Option Image Item
     */
    private void generateIOPickerJSON() {

        JSONArray jsonRootArray = new JSONArray();
        JSONObject jsonResponseObject = new JSONObject();
        try {
            jsonResponseObject.put(JSON_PROPERTY_TABTITLE, StringUtils.EMPTY);
            JSONArray togglecards = new JSONArray();
            for (final InteractiveOptionPickerItemPojo optionItem : getOptionImageList()) {
                JSONObject optionItemDetails = new JSONObject();
                optionItemDetails.put(JSON_PROPERTY_TOGGLE_TITLE,
                                StringUtils.isEmpty(optionItem.getOptionLabel()) ? StringUtils.EMPTY : optionItem.getOptionLabel());
                optionItemDetails.put(JSON_PROPERTY_TOGGLE_IMAGEURL,
                                StringUtils.isEmpty(optionItem.getOptionImage()) ? StringUtils.EMPTY : optionItem.getOptionImage());
                optionItemDetails.put(JSON_PROPERTY_TOGGLE_TABLET_IMAGEURL,
                                StringUtils.isEmpty(optionItem.getOptionImage()) ? StringUtils.EMPTY : optionItem.getOptionImage());
                optionItemDetails.put(JSON_PROPERTY_TOGGLE_MOBILE_IMAGEURL, StringUtils.isEmpty(optionItem.getOptionImage()) ? StringUtils.EMPTY
                                : CommonUtils.getSmallImagePath(optionItem.getOptionImage()));
                optionItemDetails.put(JSON_PROPERTY_TOGGLE_THUMBNAIL_URL, StringUtils.isEmpty(optionItem.getThumbnailImage()) ? StringUtils.EMPTY
                                : CommonUtils.getTinyImagePath(optionItem.getThumbnailImage()));
                optionItemDetails.put(JSON_PROPERTY_TOGGLE_IMAGE_ALT, StringUtils.isEmpty(optionItem.getImgAlt()) ? StringUtils.EMPTY : optionItem.getImgAlt());
                optionItemDetails.put(JSON_PROPERTY_TOGGLE_THUMBNAIL_IMAGE_ALT, StringUtils.isEmpty(optionItem.getOptionLabel()) ? StringUtils.EMPTY
                                : CommonUtils.getOnlyTextFromHTML(optionItem.getOptionLabel()));

                if (optionItem.getIsCtaOverriden().equalsIgnoreCase(CommonConstants.TRUE)) {
                    optionItemDetails.put(JSON_PROPERTY_TOGGLE_CONFIG_DIRECT_LINK,
                                    StringUtils.isEmpty(optionItem.getLink()) ? StringUtils.EMPTY : optionItem.getLink());
                    optionItemDetails.put(JSON_PROPERTY_TOGGLE_CTA_TEXT, StringUtils.isEmpty(optionItem.getText()) ? StringUtils.EMPTY : optionItem.getText());
                    optionItemDetails.put(JSON_PROPERTY_TOGGLE_CTA_ICON, StringUtils.isEmpty(optionItem.getIcon()) ? StringUtils.EMPTY : optionItem.getIcon());
                    optionItemDetails.put(JSON_PROPERTY_TOGGLE_CTA_TARGET,
                                    StringUtils.isEmpty(optionItem.getTarget()) ? StringUtils.EMPTY : optionItem.getTarget());
                    optionItemDetails.put(JSON_PROPERTY_TOGGLE_CTA_ARIALABEL,
                                    StringUtils.isEmpty(optionItem.getAriaLabel()) ? StringUtils.EMPTY : optionItem.getAriaLabel());
                } else {
                    optionItemDetails.put(JSON_PROPERTY_TOGGLE_CONFIG_DIRECT_LINK,
                                    StringUtils.isEmpty(getGlobalCtaLink()) ? StringUtils.EMPTY : generateGlobalCtaLink());
                    optionItemDetails.put(JSON_PROPERTY_TOGGLE_CTA_TEXT, StringUtils.isEmpty(getGlobalCtaText()) ? StringUtils.EMPTY : getGlobalCtaText());
                    optionItemDetails.put(JSON_PROPERTY_TOGGLE_CTA_ICON,
                                    StringUtils.isEmpty(generateGlobalCtaIcon()) ? StringUtils.EMPTY : generateGlobalCtaIcon());
                    optionItemDetails.put(JSON_PROPERTY_TOGGLE_CTA_TARGET,
                                    StringUtils.isEmpty(getGlobalCtaTarget()) ? StringUtils.EMPTY : getGlobalCtaTarget());
                    optionItemDetails.put(JSON_PROPERTY_TOGGLE_CTA_ARIALABEL, StringUtils.isEmpty(generateGlobalCtaAriaLabel()) ? StringUtils.EMPTY
                                    : CommonUtils.getOnlyTextFromHTML(generateGlobalCtaAriaLabel()));

                }

                if (null != optionItemDetails && optionItemDetails.length() > 0) {
                    togglecards.put(optionItemDetails);
                }
            }
            jsonResponseObject.put(JSON_PROPERTY_TOGGLECARDS, togglecards);
            jsonRootArray.put(jsonResponseObject);
            jsonRoot.put(JSON_PROPERTY_TABS, jsonRootArray);
        } catch (JSONException e) {
            LOGGER.error(ErrorUtils.createErrorMessage(ErrorUtilsConstants.AEM_JSON_EXCEPTION, ErrorUtilsConstants.TECHNICAL, ErrorUtilsConstants.AEM_SITE,
                            ErrorUtilsConstants.MODULE_SERVICE, this.getClass().getSimpleName(), e));
        }
        LOGGER.trace("JSON String: {}", jsonRoot.toString());
    }



    private List<InteractiveOptionPickerItemPojo> getOptionImageList() {
        optionItemlist = null;
        if (null != optionPickerList && optionPickerList.hasChildren()) {
            optionItemlist = assembleData(optionPickerList);
        }
        return optionItemlist;
    }

    protected List<InteractiveOptionPickerItemPojo> assembleData(Resource optionItem) {
        List<InteractiveOptionPickerItemPojo> list = new ArrayList<>();
        Iterator<Resource> childResources = optionItem.listChildren();
        while (childResources.hasNext()) {
            Resource child = childResources.next();
            ValueMap properties = child.adaptTo(ValueMap.class);
            if (null != properties) {
                String icon = properties.get(CommonConstants.PN_ICON, String.class);
                String linkType = properties.get(CommonConstants.PN_CTA_LINK_TYPE, String.class);
                list.add(new InteractiveOptionPickerItemPojo(properties.get(CommonConstants.PN_CTA_TEXT, String.class),
                                LinkUtils.appendLinkExtension(properties.get(CommonConstants.PN_CTA_LINK, String.class), resourceResolver),
                                properties.get(CommonConstants.PN_CTA_TARGET, String.class), linkType, CtaUtils.getIcon(icon, linkType),
                                CommonUtils.getOnlyTextFromHTML(properties.get(CommonConstants.PN_CTA_ARIALABEL, String.class)),
                                properties.get(CommonConstants.PN_OPTION_IMAGE, String.class),
                                CommonUtils.getOnlyTextFromHTML(properties.get(CommonConstants.PN_IMAGE_ALT, String.class)),
                                properties.get(CommonConstants.PN_IS_DECORATIVE, String.class),
                                properties.get(CommonConstants.PN_THUMBNAIL_IMAGE, String.class), properties.get(CommonConstants.PN_OPTION_LABEL, String.class),
                                properties.get(CommonConstants.PN_IS_CTA_OVERRIDEN, String.class)));
            }

        }
        return list;

    }
}
