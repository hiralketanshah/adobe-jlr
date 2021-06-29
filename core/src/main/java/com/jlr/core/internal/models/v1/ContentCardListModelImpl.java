package com.jlr.core.internal.models.v1;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import javax.inject.Inject;

import org.apache.commons.lang.StringUtils;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.api.resource.ValueMap;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.jlr.core.constants.CommonConstants;
import com.jlr.core.models.ContentCardListModel;
import com.jlr.core.pojos.CTAPojo;
import com.jlr.core.utils.CtaUtils;
import com.jlr.core.utils.LinkUtils;

/**
 * The Class ContentCardListModel.
 *
 * @author Adobe
 */
@Model(adaptables = Resource.class, adapters = {
        ContentCardListModel.class }, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class ContentCardListModelImpl extends GlobalModelImpl implements ContentCardListModel {

    /** The resource resolver. */
    @Inject
    private ResourceResolver resourceResolver;

    /** The resource. */
    @Inject
    private Resource resource;

    /** The assest type. */
    @Inject
    private String assestType;

    /** The poster image. */
    @Inject
    private String posterImage;

    /** The price. */
    @Inject
    private String price;

    /** The cta list. */
    @Inject
    private Resource ctaList;

    /** The logger. */
    private final Logger logger = LoggerFactory.getLogger(this.getClass());

    /** The list. */
    List<CTAPojo> list = new ArrayList<>();

    /** The price config value. */
    String priceConfigValue;

    /**
     * Gets the cta list.
     *
     * @return the cta list
     */
    @Override
    public List<CTAPojo> getCtaList() {
        if (null != ctaList && ctaList.hasChildren()) {
            list = CtaUtils.createCtaList(ctaList, super.getHeaderCopy(), resourceResolver);
        }
        return list;
    }

    /**
     * Gets the assest type.
     *
     * @return the assest type
     */
    @Override
    public String getAssestType() {
        return assestType;
    }

    /**
     * Gets the poster image.
     *
     * @return the poster image
     */
    @Override
    public String getPosterImage() {
        return posterImage;
    }

    /**
     * Gets the first cta link.
     *
     * @return the first cta link
     */
    @Override
    public String getFirstCtaLink() {
        if (resource.hasChildren()) {
            Resource contentCta = resource.listChildren().next();
            Iterator<Resource> contentCtaRes = contentCta.listChildren();
            Resource contentCtaLink = contentCtaRes.next();
            ValueMap properties = contentCtaLink.adaptTo(ValueMap.class);
            String firstCtaLink = properties.get(CommonConstants.PN_CTA_LINK, String.class);
            return LinkUtils.appendLinkExtension(firstCtaLink, resourceResolver);
        }
        return StringUtils.EMPTY;
    }

}
