package com.jlr.core.internal.models.v1;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import javax.annotation.PostConstruct;
import javax.inject.Inject;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.Optional;
import org.apache.sling.models.annotations.injectorspecific.ChildResource;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;
import com.day.cq.commons.jcr.JcrConstants;
import com.jlr.core.constants.CommonConstants;
import com.jlr.core.models.DualFrameSliderModel;
import com.jlr.core.pojos.CTAPojo;
import com.jlr.core.utils.CtaUtils;

/**
 * Model Implementation class for DualFrameSlider.
 *
 * @author Adobe
 */
@Model(adaptables = Resource.class, adapters = {DualFrameSliderModel.class}, resourceType = DualFrameSliderImpl.RESOURCE_TYPE)
public class DualFrameSliderImpl extends GlobalModelImpl implements DualFrameSliderModel {

    /** The Constant RESOURCE_TYPE. */
    public static final String RESOURCE_TYPE = "jlr/components/dualframeslider/v1/dualframeslider";

    /** The resource resolver. */
    @Inject
    private ResourceResolver resourceResolver;

    /** The folder path. */
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String folderPath;

    /** The frame path. */
    private StringBuilder framePath = new StringBuilder();

    /** The type. */
    private String type;

    private String trailingNumber;

    /** The image name trailing counter digits. */
    private int numberOfDigit;

    /** The image count. */
    private int imageCount = 0;


    /** The image list. */
    private List<String> imageList = new ArrayList<>();

    /** The cta list. */
    @Inject
    @Optional
    @ChildResource
    private Resource ctaList;


    /** The list. */
    List<CTAPojo> list = new ArrayList<>();

    /**
     * Inits the.
     */
    @PostConstruct
    public void init() {
        Resource folderRes = resourceResolver.getResource(folderPath);
        if (null != folderRes) {
            Iterator<Resource> childResItr = folderRes.listChildren();
            imageList = new ArrayList<>();
            while (childResItr.hasNext()) {
                Resource childRes = childResItr.next();
                String imageName = childRes.getName();
                if (!imageName.equals(JcrConstants.JCR_CONTENT) && imageName.contains(CommonConstants.DOT)) {
                    imageList.add(imageName);
                    if (null == type) {
                        type = imageName.substring(imageName.lastIndexOf(CommonConstants.DOT) + 1);
                    }
                     if(null == trailingNumber && imageName.matches("\\w+_+\\d+.+[a-z A-Z 0-9]") ) {
                         trailingNumber = imageName.substring(imageName.lastIndexOf(CommonConstants.UNDERSCORE) + 1, imageName.lastIndexOf(CommonConstants.DOT));
                         numberOfDigit = trailingNumber.toCharArray().length;
                     }
                     buildFramePath(imageName);
                }
            }
            imageCount = imageList.size();
        }
    }

    /**
     * Build the Frame path using folder path and Image name * @param imageName.
     *
     * @param imageName the image name
     */
    private void buildFramePath(String imageName) {
        if (null == framePath || framePath.length() == 0) {
            String imageNameSubStr = imageName.substring(0, imageName.lastIndexOf(CommonConstants.UNDERSCORE) + 1);
            if (null != imageNameSubStr) {
                framePath = new StringBuilder();
                framePath.append(folderPath + CommonConstants.FORWARD_SLASH + imageNameSubStr);
            }
        }
    }

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

    /*
     * (non-Javadoc)
     * 
     * @see com.jlr.core.models.DualFrameSliderModel#getImageList()
     */
    @Override
    public List<String> getImageList() {
        return new ArrayList<>(imageList);
    }

    /*
     * (non-Javadoc)
     * 
     * @see com.jlr.core.models.DualFrameSliderModel#getFramePath()
     */
    @Override
    public String getFramePath() {
        return framePath.toString();
    }

    /*
     * (non-Javadoc)
     * 
     * @see com.jlr.core.models.DualFrameSliderModel#getImageType()
     */
    @Override
    public String getImageType() {
        return type;
    }

    /*
     * (non-Javadoc)
     * 
     * @see com.jlr.core.models.DualFrameSliderModel#getImageCount()
     */
    @Override
    public int getImageCount() {
        return imageCount;
    }

    @Override
    public Integer getNumberOfDigit() {
        return numberOfDigit;
    }
}
