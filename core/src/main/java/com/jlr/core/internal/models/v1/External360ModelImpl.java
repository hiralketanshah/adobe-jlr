package com.jlr.core.internal.models.v1;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Iterator;
import java.util.List;

import javax.inject.Inject;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.Optional;
import org.apache.sling.models.annotations.injectorspecific.ChildResource;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

import com.day.cq.commons.jcr.JcrConstants;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;
import com.jlr.core.constants.CommonConstants;
import com.jlr.core.models.External360Model;
import com.jlr.core.pojos.CTAPojo;
import com.jlr.core.utils.CtaUtils;

@Model(adaptables = Resource.class, adapters = {External360Model.class}, resourceType = External360ModelImpl.RESOURCE_TYPE)
public class External360ModelImpl extends GlobalModelImpl implements External360Model {
	
    public static final String RESOURCE_TYPE = "jlr/components/external360/v1/external360";

    @Inject
    private ResourceResolver resourceResolver;
    
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private boolean isSlider;
    
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String folderPath;
    
    private List<String> imageList = new ArrayList<>();

    /** The cta list. */
    @Inject
    @Optional
    @ChildResource
    private Resource ctaList;
    
    /**
     * Gets the cta list.
     *
     * @return the cta list
     */

    @Override
    public List<CTAPojo> getCtaList() {
    	List<CTAPojo> list = new ArrayList<>();
    	if (null != ctaList && ctaList.hasChildren()) {
    		list = CtaUtils.createCtaList(ctaList, super.getHeaderCopy(), resourceResolver);
    	}
    	return list;
    }
    
    public boolean getIsSlider() {
    	return isSlider;
    }

	@Override
	public String getImageList() {
		Resource folderRes = resourceResolver.getResource(folderPath);
		JsonObject list = new JsonObject();
        if (null != folderRes) {


            Iterator<Resource> childResItr = folderRes.listChildren();
            imageList = new ArrayList<>();
            while (childResItr.hasNext()) {
                Resource childRes = childResItr.next();
                String imageName = childRes.getPath();
                if (!imageName.equals(JcrConstants.JCR_CONTENT) && imageName.contains(CommonConstants.DOT)) {
                    imageList.add(imageName);
                }
            }
            Collections.sort(imageList);
        	JsonArray desktop = new JsonArray();
        	JsonArray mobile = new JsonArray();
            for (String string : imageList) {
            	desktop.add(string);
            	mobile.add(string);
			}
            list.add("desktop", desktop);
            list.add("mobile", mobile);
            list.addProperty("isfull360", true);
            list.addProperty("showSlider", false);

        }
        return list.toString();
	}

}
