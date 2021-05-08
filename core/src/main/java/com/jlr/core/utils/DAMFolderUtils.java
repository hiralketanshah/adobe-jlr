package com.jlr.core.utils;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Iterator;
import java.util.List;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;

import com.day.cq.commons.jcr.JcrConstants;
import com.jlr.core.constants.CommonConstants;

public class DAMFolderUtils {

    private DAMFolderUtils() {}

	public static List<String> getImageList(String folderPath, ResourceResolver resourceResolver) {
        Resource folderRes = resourceResolver.getResource(folderPath);
        List<String> imageList = new ArrayList<>();
        if (null != folderRes) {
            Iterator<Resource> childResItr = folderRes.listChildren();
            while (childResItr.hasNext()) {
                Resource childRes = childResItr.next();
                String imageName = childRes.getPath();
                if (!imageName.equals(JcrConstants.JCR_CONTENT) && imageName.contains(CommonConstants.DOT)) {
                    imageList.add(imageName);
                }
            }
            Collections.sort(imageList);

        }
        return imageList;
	}
}
