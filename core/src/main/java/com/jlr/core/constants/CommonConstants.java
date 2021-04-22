package com.jlr.core.constants;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

/**
 * The Class CommonConstants.
 */
public class CommonConstants {

    /** The common constants. */
    public static final String DOUBLE_BACKSLASHES = "\\";
    public static final String FORWARD_SLASH = "/";
    public static final String EXTENSION_DOT_HTML = ".html";
    public static final String COLON = ":";
    public static final String DEFAULT_PRIMARY_ICON = "icon-arrow-right";
    public static final String DEFAULT_SECONDARY_ICON = "icon-arrow-right";
    public static final String DEFAULT_LOCALE = "en";
    public static final String BLANK_SPACE = " ";
    public static final String DOT = ".";
    public static final String UNDERSCORE = "_";
    public static final String COMMA = ",";

    /** The PATH Constants. */
    public static final String PATH_CONTENT = "/content";
    public static final String JLR_CONTENT_PATH = "/content/landrover/";
    public static final String JLR_DAM_PATH = "/content/dam/landrover/";
    public static final String JLR_XF_PATH = "/content/experience-fragments/landrover/";

    /** The PROTOCOL Constant. */
    public static final String PREFIX_HTTPS = "https://";

    /** The Property Name Constants. */
    public static final String PN_CTA_TEXT = "text";
    public static final String PN_CTA_LINK = "link";
    public static final String PN_CTA_TARGET = "target";
    public static final String PN_CTA_ARIALABEL = "ariaLabel";
    public static final String PN_DESCRIPTION = "copy";
    public static final String PN_TITLE = "headerCopy";
    public static final String PN_FILE_REFERENCE = "fileReference";
    public static final String PN_IMAGE_ALT = "imageAlt";
    public static final String PN_CTA_LINK_TYPE = "linkType";
    public static final String PN_IMAGE_LINK = "imageLink";
    public static final String PN_LOGO_PATH = "logoPath";
    public static final String PN_SOCIAL_ICONS = "socialicon";
    public static final String YOUTUBE_EMBED_URL = "https://youtube.com/embed/";
    public static final String PN_PRIMARY_LOGO = "iconPrimary";
    public static final String PN_AEM_DATE_FORMAT = "yyyy-MM-dd'T'HH:mm:ss";
    public static final String PN_REVISED_DATE_FORMAT = "dd-MM-yyyy";
    public static final String PN_ICON = "icon";
    public static final String PN_CONFIG_KEY = "key";
    public static final String PN_CONFIG_VALUE = "value";
    public static final String PN_FAQ_ANSWER_CAVEAT = "answerCaveat";
    public static final String PN_NAMEPLATE_CODE = "namePlateCode";
    public static final String PN_MODELYEAR = "modelYear";
    public static final String PN_DATE_FORMAT = "dateFormat";
    public static final String PN_IMAGE_FOLDER_PATH = "folderPath";

    public static final String PN_PATHS_TO_EXCLUDE = "pathsToExclude";
    public static final String PN_INCLUDE_CHILD_PAGES = "includeChildPages";
    public static final String PN_PRIORITY_PATHS = "priorityPaths";
    public static final String PN_PRIORITY = "priority";

    /** The NODE Name Constants. */
    public static final String NN_CHILD_NODE = "configList";

    /** The Data Layer Constants. */
    public static final String DL_APPLICATION = "Application";
    public static final String DL_MARKET = "Market";
    public static final String DL_LANGUAGE = "Language";
    public static final String DL_NAMEPLATE_CODE = "NameplateCode";
    public static final String DL_MODELYEAR = "ModelYear";

    public static final String WF_PROCESS_SUBSERVICE = "worflow-process";

    public static final String DL_APPLICATION_DEFAULT_VALUE = "website";

    public static final List<String> HOMEPAGE_LIST = new ArrayList<>(Arrays.asList("/content/landrover/global/global-master/en",
                    "/content/landrover/global/published-sites/en_ix", "/content/landrover/global/europe/region-master/en",
                    "/content/landrover/global/europe/language-masters/deu/en", "/content/landrover/global/europe/language-masters/deu/de",
                    "/content/landrover/global/europe/published-sites/de_de", "/content/landrover/global/row/region-master/en",
                    "/content/landrover/global/row/language-masters/aus/en", "/content/landrover/global/row/published-sites/en_au"));


}
