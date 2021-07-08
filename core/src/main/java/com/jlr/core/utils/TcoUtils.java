package com.jlr.core.utils;

import com.jlr.core.constants.CommonConstants;
import com.jlr.core.constants.ErrorUtilsConstants;
import com.jlr.core.pojos.PricingPojo;
import org.apache.commons.lang.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.text.DecimalFormat;

import static com.jlr.core.constants.PricingConstants.JLR_LOCALE_DE;
import static com.jlr.core.constants.PricingConstants.PN_YYY;

public class TcoUtils {

    public static final String BASE_PATH = "/var/jlr/pricing/";

    private static final Logger LOGGER = LoggerFactory.getLogger(TcoUtils.class);

    public static String currencyFormat(String pattern, Double value) {
        if (StringUtils.isBlank(pattern)) {
            return StringUtils.EMPTY;
        }

        String currencyString = StringUtils.EMPTY;
        DecimalFormat currencyFormatter = null;
        String newPattern = pattern;
        if (pattern.contains(".")) {
            newPattern = pattern.replace(".", ",");
        }
        try {
            currencyFormatter = new DecimalFormat(newPattern);
        } catch (IllegalArgumentException e) {
            LOGGER.error("Invalid currency pattern {} detected!", newPattern);
            LOGGER.error(ErrorUtils.createErrorMessage(ErrorUtilsConstants.AEM_GENERIC_EXCEPTION,
                    ErrorUtilsConstants.TECHNICAL, ErrorUtilsConstants.AEM_SITE, ErrorUtilsConstants.MODULE_SERVICE,
                    "TcoUtils", e));
            return StringUtils.EMPTY;
        }
        if (value.intValue() != 0) {
            currencyString = currencyFormatter.format(value);
        }
        if (pattern.contains(".")) {
            currencyString = currencyString.replace(",", ".");
        }
        return currencyString;
    }

    public static boolean hasComplexMacro(String namePlateDetails) {
        return (namePlateDetails.contains(CommonConstants.FORWARD_SLASH)
                || namePlateDetails.contains(CommonConstants.UNDERSCORE));
    }

    private static String getPlaceHolder(String region, String stateCode) {
        String placeHolder = null;
        if (region.equalsIgnoreCase(JLR_LOCALE_DE)) {
            placeHolder = PN_YYY;
        } else {
            placeHolder = stateCode;
        }
        return placeHolder;
    }

    public static String getNamePlatePath(PricingPojo pricingPojo, String macroModelYear, String basePath) {
        StringBuilder pathBuilder = new StringBuilder(basePath);
        if (StringUtils.isEmpty(macroModelYear)) {
            macroModelYear = pricingPojo.getModelYear();
        }
        pathBuilder.append(pricingPojo.getEnvironment()).append(CommonConstants.FORWARD_SLASH)
                .append(pricingPojo.getRegion()).append(CommonConstants.FORWARD_SLASH)
                .append(getPlaceHolder(pricingPojo.getRegion(), pricingPojo.getStateCode()))
                .append(CommonConstants.FORWARD_SLASH).append(macroModelYear).append(CommonConstants.FORWARD_SLASH)
                .append(pricingPojo.getNamePlate());
        if (StringUtils.isNotEmpty(pricingPojo.getProduct())) {
            return pathBuilder.append(CommonConstants.FORWARD_SLASH).append(pricingPojo.getProduct()).toString();
        } else {
            return pathBuilder.toString();
        }
    }

    public static boolean isStaticPrice(String priceMacro) {
        if (priceMacro.contains("{{") && priceMacro.contains("}}")) {
            return false;
        }
        return true;
    }

}
