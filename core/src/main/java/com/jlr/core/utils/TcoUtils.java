package com.jlr.core.utils;

import static com.jlr.core.constants.PricingConstants.JLR_LOCALE_DE;
import static com.jlr.core.constants.PricingConstants.PN_YYY;
import java.text.DecimalFormat;
import org.apache.commons.lang.StringUtils;
import com.jlr.core.constants.CommonConstants;
import com.jlr.core.pojos.PricingPojo;

public class TcoUtils {

    public static final String BASE_PATH = "/var/jlr/pricing/";

    public static String currencyFormat(String pattern, Double value) {
        if (StringUtils.isBlank(pattern)) {
            return StringUtils.EMPTY;
        }
        DecimalFormat currencyFormatter = new DecimalFormat(pattern);
        String currencyString = StringUtils.EMPTY;
        if (value.intValue() != 0) {
            currencyString = currencyFormatter.format(value);
        }
        return currencyString;
    }

    public static boolean hasComplexMacro(String namePlateDetails) {
        return (namePlateDetails.contains(CommonConstants.FORWARD_SLASH) || namePlateDetails.contains(CommonConstants.UNDERSCORE));
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
        pathBuilder.append(pricingPojo.getEnvironment()).append(CommonConstants.FORWARD_SLASH).append(pricingPojo.getRegion())
                        .append(CommonConstants.FORWARD_SLASH).append(getPlaceHolder(pricingPojo.getRegion(), pricingPojo.getStateCode()))
                        .append(CommonConstants.FORWARD_SLASH).append(macroModelYear).append(CommonConstants.FORWARD_SLASH).append(pricingPojo.getNamePlate());
        if (StringUtils.isNotEmpty(pricingPojo.getProduct())) {
            return pathBuilder.append(CommonConstants.FORWARD_SLASH).append(pricingPojo.getProduct()).toString();
        } else {
            return pathBuilder.toString();
        }
    }

}
