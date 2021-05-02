package com.jlr.core.utils;

import java.util.Iterator;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;

import com.day.cq.commons.jcr.JcrConstants;
import com.google.gson.JsonArray;
import com.jlr.core.constants.CommonConstants;

public class DAMFolderUtils {

    private DAMFolderUtils() {}

	public static String getImageList(String folderPath, ResourceResolver resourceResolver) {
        Resource folderRes = resourceResolver.getResource(folderPath);
        JsonArray imageArr = new JsonArray();

        if (null != folderRes) {
            Iterator<Resource> childResItr = folderRes.listChildren();
            while (childResItr.hasNext()) {
            	
                Resource childRes = childResItr.next();
                String imageName = childRes.getPath();
                if (!imageName.equals(JcrConstants.JCR_CONTENT) && imageName.contains(CommonConstants.DOT)) {
                	imageArr.add(imageName);
                }
            }
        }
        return imageArr.toString();
	}
}
