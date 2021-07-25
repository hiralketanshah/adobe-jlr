package com.jlr.core.internal.models.v1;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import javax.annotation.PostConstruct;
import javax.inject.Inject;
import org.apache.commons.collections4.CollectionUtils;
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
 *
 * @author Adobe
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

    /** The json property tabs. */
    private final String JSON_PROPERTY_TABS = "tabs";

    /** The json property tabtitle. */
    private final String JSON_PROPERTY_TABTITLE = "tabTitle";

    /** The json property togglecards. */
    private final String JSON_PROPERTY_TOGGLECARDS = "toggleCards";

    /** The json property toggle title. */
    private final String JSON_PROPERTY_TOGGLE_TITLE = "toggleTitle";

    /** The json property toggle imageurl. */
    private final String JSON_PROPERTY_TOGGLE_IMAGEURL = "toggleImageUrl";

    /** The json property toggle tablet imageurl. */
    private final String JSON_PROPERTY_TOGGLE_TABLET_IMAGEURL = "tabletToggleImageUrl";

    /** The json property toggle mobile imageurl. */
    private final String JSON_PROPERTY_TOGGLE_MOBILE_IMAGEURL = "mobileToggleImageUrl";

    /** The json property toggle thumbnail url. */
    private final String JSON_PROPERTY_TOGGLE_THUMBNAIL_URL = "toggleThumbnailImageUrl";

    /** The json property toggle image alt. */
    private final String JSON_PROPERTY_TOGGLE_IMAGE_ALT = "toggleImageAltText";

    /** The json property toggle thumbnail image alt. */
    private final String JSON_PROPERTY_TOGGLE_THUMBNAIL_IMAGE_ALT = "toggleThumbnailImageAltText";

    /** The json property toggle config direct link. */
    private final String JSON_PROPERTY_TOGGLE_CONFIG_DIRECT_LINK = "configDirectLink";

    /** The json property toggle cta text. */
    private final String JSON_PROPERTY_TOGGLE_CTA_TEXT = "ctaText";

    /** The json property toggle cta icon. */
    private final String JSON_PROPERTY_TOGGLE_CTA_ICON = "ctaIcon";

    /** The json property toggle cta target. */
    private final String JSON_PROPERTY_TOGGLE_CTA_TARGET = "ctaTarget";

    /** The json property toggle cta arialabel. */
    private final String JSON_PROPERTY_TOGGLE_CTA_ARIALABEL = "ctaAriaLabel";

    /** The logger. */
    private final Logger LOGGER = LoggerFactory.getLogger(this.getClass());

    /** The Constant RESOURCE_TYPE. */
    public static final String RESOURCE_TYPE = "jlr/components/optionpicker/v1/optionpicker";

    /** The list. */
    List<InteractiveOptionPickerItemPojo> optionItemlist = new ArrayList<>();

    /** The json root. */
    JSONObject jsonRoot = new JSONObject();



    /** The resource resolver. */
    @Inject
    private ResourceResolver resourceResolver;

    /** The optionItem . */
    @Inject
    @Optional
    private Resource optionPickerList;

    /** The global header copy. */
    @Optional
    @Inject
    private String globalHeaderCopy;

    /** The global summary. */
    @Optional
    @Inject
    private String globalSummary;

    /** The global cta text. */
    @Optional
    @Inject
    private String globalCtaText;

    /** The global cta link. */
    @Optional
    @Inject
    private String globalCtaLink;

    /** The global cta icon. */
    @Optional
    @Inject
    private String globalCtaIcon;

    /** The global cta link type. */
    @Optional
    @Inject
    private String globalCtaLinkType;

    /** The global cta aria label. */
    @Optional
    @Inject
    private String globalCtaAriaLabel;


    /**
     * Gets the global cta text.
     *
     * @return the globalCtaText
     */
    public String getGlobalCtaText() {
        return globalCtaText;
    }

    /**
     * Gets the global cta link.
     *
     * @return the globalCtaLink
     */
    public String getGlobalCtaLink() {
        return globalCtaLink;
    }

    /**
     * Gets the global cta icon.
     *
     * @return the globalCtaIcon
     */
    public String getGlobalCtaIcon() {
        return globalCtaIcon;
    }

    /**
     * Gets the global cta link type.
     *
     * @return the globalCtaLinkType
     */
    public String getGlobalCtaLinkType() {
        return globalCtaLinkType;
    }

    /**
     * Gets the global cta aria label.
     *
     * @return the globalCtaAriaLabel
     */
    public String getGlobalCtaAriaLabel() {

        return globalCtaAriaLabel;
    }

    /**
     * Gets the global cta target.
     *
     * @return the globalCtaTarget
     */
    public String getGlobalCtaTarget() {
        return globalCtaTarget;
    }

    /** The global cta target. */
    @Optional
    @Inject
    private String globalCtaTarget;

    /**
     * Gets the global header copy.
     *
     * @return the globalHeaderCopy
     */
    public String getGlobalHeaderCopy() {
        return globalHeaderCopy;
    }

    /**
     * Gets the global summary.
     *
     * @return the globalSummary
     */
    public String getGlobalSummary() {
        return globalSummary;
    }

    /**
     * Inits the.
     */
    @PostConstruct
    public void init() {

        generateIOPickerJSON();
    }

    /**
     * Generate global cta icon.
     *
     * @return the choosen or fallback icon
     */
    private String generateGlobalCtaIcon() {
        return CtaUtils.getIcon(getGlobalCtaIcon(), getGlobalCtaLinkType());

    }

    /**
     * Generate global cta link.
     *
     * @return the CTA link with appended extension
     */
    private String generateGlobalCtaLink() {
        return LinkUtils.appendLinkExtension(getGlobalCtaLink(), resourceResolver);

    }

    /**
     * Generate global cta aria label.
     *
     * @return the CTA Aria Label with Header
     */
    private String generateGlobalCtaAriaLabel() {
        return CtaUtils.getAriaLabel(getGlobalHeaderCopy(), getGlobalCtaText());

    }

    /**
     * Generate IO picker JSON.
     *
     * @return the JSON of Option Image Item
     */
    private void generateIOPickerJSON() {

        JSONArray jsonRootArray = new JSONArray();
        JSONObject jsonResponseObject = new JSONObject();
        try {
            jsonResponseObject.put(JSON_PROPERTY_TABTITLE, StringUtils.EMPTY);
            JSONArray togglecards = new JSONArray();
            List<InteractiveOptionPickerItemPojo> imageList = getOptionImageList();

            if (!CollectionUtils.isEmpty(imageList)) {

                for (final InteractiveOptionPickerItemPojo optionItem : imageList) {
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
                    optionItemDetails.put(JSON_PROPERTY_TOGGLE_IMAGE_ALT,
                                    StringUtils.isEmpty(optionItem.getImgAlt()) ? StringUtils.EMPTY : optionItem.getImgAlt());
                    optionItemDetails.put(JSON_PROPERTY_TOGGLE_THUMBNAIL_IMAGE_ALT, StringUtils.isEmpty(optionItem.getOptionLabel()) ? StringUtils.EMPTY
                                    : CommonUtils.getOnlyTextFromHTML(optionItem.getOptionLabel()));

                    if (optionItem.getIsCtaOverriden().equalsIgnoreCase(CommonConstants.TRUE)) {
                        String ctaAriaLabelText = optionItem.getAriaLabel();

                        if (StringUtils.isEmpty(ctaAriaLabelText)) {
                            ctaAriaLabelText = CtaUtils.getAriaLabel(getGlobalHeaderCopy(), optionItem.getText());
                        }

                        optionItemDetails.put(JSON_PROPERTY_TOGGLE_CONFIG_DIRECT_LINK,
                                        StringUtils.isEmpty(optionItem.getLink()) ? StringUtils.EMPTY : optionItem.getLink());
                        optionItemDetails.put(JSON_PROPERTY_TOGGLE_CTA_TEXT,
                                        StringUtils.isEmpty(optionItem.getText()) ? StringUtils.EMPTY : optionItem.getText());
                        optionItemDetails.put(JSON_PROPERTY_TOGGLE_CTA_ICON,
                                        StringUtils.isEmpty(optionItem.getIcon()) ? StringUtils.EMPTY : optionItem.getIcon());
                        optionItemDetails.put(JSON_PROPERTY_TOGGLE_CTA_TARGET,
                                        StringUtils.isEmpty(optionItem.getTarget()) ? StringUtils.EMPTY : optionItem.getTarget());
                        optionItemDetails.put(JSON_PROPERTY_TOGGLE_CTA_ARIALABEL, StringUtils.isEmpty(ctaAriaLabelText) ? StringUtils.EMPTY : ctaAriaLabelText);
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

            }
        } catch (JSONException e) {
            LOGGER.error(ErrorUtils.createErrorMessage(ErrorUtilsConstants.AEM_JSON_EXCEPTION, ErrorUtilsConstants.TECHNICAL, ErrorUtilsConstants.AEM_SITE,
                            ErrorUtilsConstants.MODULE_SERVICE, this.getClass().getSimpleName(), e));
        }
    }



    /**
     * Gets the option image list.
     *
     * @return the option image list
     */
    private List<InteractiveOptionPickerItemPojo> getOptionImageList() {
        optionItemlist = null;
        if (null != optionPickerList && optionPickerList.hasChildren()) {
            optionItemlist = assembleData(optionPickerList);
        }
        return optionItemlist;
    }

    /**
     * Assemble data.
     *
     * @param optionItem the option item
     * @return the list
     */
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
