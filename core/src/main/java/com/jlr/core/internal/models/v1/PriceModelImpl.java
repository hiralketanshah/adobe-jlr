
package com.jlr.core.internal.models.v1;

import static com.jlr.core.constants.CommonConstants.JLR_LOCALE_PRICING;

import java.util.Arrays;
import java.util.List;
import java.util.StringJoiner;

import javax.inject.Inject;
import javax.servlet.http.Cookie;

import org.apache.commons.lang3.StringUtils;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.Model;

import com.jlr.core.models.PriceModel;

/**
 * The Class AccoladeModelImpl.
 *
 * @author Adobe
 */
@Model(adaptables = { Resource.class, SlingHttpServletRequest.class }, adapters = {
        PriceModel.class }, resourceType = PriceModelImpl.RESOURCE_TYPE)
public class PriceModelImpl implements PriceModel {

    /** The Constant RESOURCE_TYPE. */
    public static final String RESOURCE_TYPE = "jlr/components/pricing/v1/pricecomponent";

    @Inject
    private SlingHttpServletRequest request;

    @Override
    public String getPrice() {
        Resource res = request.getResource();
        String path = res.getPath();
        int index = path.lastIndexOf('/');
        path = path.substring(0, index);
        String price = StringUtils.EMPTY;
        List<String> selectors = Arrays.asList(request.getRequestPathInfo().getSelectors());
        if (!selectors.isEmpty()) {
            StringJoiner joiner = new StringJoiner(".");
            selectors.forEach(item -> joiner.add(item));
            price = joiner.toString();
        }
        return price;
    }

    @Override
    public String getCookie() {
        String cookie = StringUtils.EMPTY;
        Cookie stateCode = request.getCookie(JLR_LOCALE_PRICING);
        if (null != stateCode) {
            cookie = stateCode.getValue();
        }
        return cookie;
    }
}
