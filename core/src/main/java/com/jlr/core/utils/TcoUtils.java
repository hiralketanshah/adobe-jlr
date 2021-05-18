package com.jlr.core.utils;

import com.jlr.core.constants.CommonConstants;
import com.jlr.core.pojos.PricingPojo;
import org.apache.commons.lang.StringUtils;

import java.text.DecimalFormat;

public class TcoUtils {

    public static final String BASE_PATH = "/var/jlr/pricing/";

    public static String currencyFormat(String pattern, Double value) {
        DecimalFormat currencyFormatter = new DecimalFormat(pattern);
        String currencyString = currencyFormatter.format(value);
        return currencyString;
    }

    public static boolean hasComplexMacro(String namePlateDetails) {
        return (namePlateDetails.contains("/") || namePlateDetails.contains("_"));
    }

    private static String getPlaceHolder(String region) {
        String placeHolder = null;
        if (region.equalsIgnoreCase("de")) {
            placeHolder = CommonConstants.YYY;
        } else {
            placeHolder = CommonConstants.STATE;
        }
        return placeHolder;
    }

    public static String getNamePlatePath(PricingPojo pricingPojo, String macroModelYear,
                                          String basePath) {
        StringBuilder pathBuilder = new StringBuilder(basePath);
        if (StringUtils.isEmpty(macroModelYear)) {
            macroModelYear = pricingPojo.getModelYear();
        }
        pathBuilder.append(pricingPojo.getEnvironment()).append(CommonConstants.FORWARD_SLASH)
                .append(pricingPojo.getRegion()).append(CommonConstants.FORWARD_SLASH)
                .append(getPlaceHolder(pricingPojo.getRegion()))
                .append(CommonConstants.FORWARD_SLASH).append(macroModelYear)
                .append(CommonConstants.FORWARD_SLASH).append(pricingPojo.getNamePlate());
        if (StringUtils.isNotEmpty(pricingPojo.getProduct())) {
            return pathBuilder.append(CommonConstants.FORWARD_SLASH)
                    .append(pricingPojo.getProduct()).toString();
        } else {
            return pathBuilder.toString();
        }
    }

}
