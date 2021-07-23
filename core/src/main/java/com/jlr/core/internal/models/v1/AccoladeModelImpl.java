
package com.jlr.core.internal.models.v1;

import javax.inject.Inject;

import org.apache.commons.lang.StringUtils;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;
import com.jlr.core.models.AccoladeModel;
import com.jlr.core.utils.AltTextUtils;

/**
 * The Class AccoladeModelImpl.
 *
 * @author Adobe
 */
@Model(adaptables = Resource.class, adapters = {AccoladeModel.class}, resourceType = AccoladeModelImpl.RESOURCE_TYPE)
public class AccoladeModelImpl extends GlobalModelImpl implements AccoladeModel {

    /** The Constant RESOURCE_TYPE. */
    public static final String RESOURCE_TYPE = "jlr/components/accolade/v1/accolade";

    /** The background image. */
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String backgroundImage;
    
    @Inject
    private ResourceResolver resourceResolver;


    /** The color. */
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String color;

    /**
     * Gets the color.
     *
     * @return the color
     */

    public String getColor() { return color; }

    /**
     * Gets the background image.
     *
     * @return the background image
     */
    @Override
    public String getBackgroundImage() {
        return backgroundImage;
    }
    
    @Override
    public String getAltTextFromDAM() {
        String damAltText = "";
        if (resourceResolver != null) {
            damAltText = AltTextUtils.getAltTextFromDAM(logoImage, resourceResolver);
        }
        return damAltText;

    }
    
    @Override
    public String getImageAlt() {
        String altDAMText = "";
        String damAltText = getAltTextFromDAM();
        if (isDecorative) {
            return null;
        } else {
            if (imageAlt != null && altTextFromDAM == Boolean.TRUE) {
                altDAMText = imageAlt;
            } else if (imageAlt != null && altTextFromDAM == Boolean.FALSE) {
                altDAMText = imageAlt;
            } else if (imageAlt == null && altTextFromDAM == Boolean.FALSE) {
                altDAMText = StringUtils.EMPTY;
            } else if (imageAlt == null && altTextFromDAM != null && altTextFromDAM == Boolean.TRUE) {
                altDAMText = damAltText;
            }
        }
        return altDAMText;
    }
}
