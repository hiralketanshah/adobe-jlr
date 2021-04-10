package com.jlr.core.models;

import java.util.ArrayList;
import java.util.List;

import javax.inject.Inject;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.Optional;
import com.jlr.core.internal.models.v1.GlobalModelImpl;
import com.jlr.core.pojos.CTAPojo;
import com.jlr.core.utils.CtaUtils;

@Model(adaptables = Resource.class, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class ContentCardListModel extends GlobalModelImpl{
	
	@Inject
    private ResourceResolver resourceResolver;
	
	@Inject
    private String assestType;
	
	@Inject
    private String price;
	
	@Inject
    @Optional
    private Resource ctaList;
	
	List<CTAPojo> list = new ArrayList<>();
	
    public List<CTAPojo> getCtaList() {
        if (null != ctaList && ctaList.hasChildren()) {
            list = CtaUtils.createCtaList(ctaList, super.getHeaderCopy(), resourceResolver);
        }
        return list;
    }

	public String getAssestType() {
		return assestType;
	}

	public String getPrice() {
		return price;
	}

}
