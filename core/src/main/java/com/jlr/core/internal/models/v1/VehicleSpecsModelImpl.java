package com.jlr.core.internal.models.v1;

import java.util.ArrayList;
import java.util.List;

import javax.inject.Inject;

import com.day.cq.wcm.api.Page;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.api.resource.ValueMap;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.Optional;
import org.apache.sling.models.annotations.Via;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

import com.jlr.core.models.VehicleSpecsModel;
import com.jlr.core.pojos.CTAPojo;
import com.jlr.core.utils.CtaUtils;

/**
 * The Class VehicleSpecsModelImpl.
 *
 * @author Adobe
 */
@Model(adaptables = {Resource.class, SlingHttpServletRequest.class}, adapters = {VehicleSpecsModel.class}, resourceType = VehicleSpecsModelImpl.RESOURCE_TYPE)
public class VehicleSpecsModelImpl extends GlobalModelImpl implements VehicleSpecsModel {


	/** The Constant RESOURCE_TYPE. */
	public static final String RESOURCE_TYPE = "jlr/components/vehiclespecs/v1/vehiclespecs";

	/** The current page. */
	@Inject
	private Page currentPage;


	/** The resource resolver. */
	@Inject
	private ResourceResolver resourceResolver;

	@ValueMapValue(injectionStrategy=InjectionStrategy.OPTIONAL)
	@Via("resource")
	private String bodyStyleHeader;

	@ValueMapValue(injectionStrategy=InjectionStrategy.OPTIONAL)
	@Via("resource")
	private String modelHeader;

		@ValueMapValue(injectionStrategy=InjectionStrategy.OPTIONAL)
	@Via("resource")
	private String engineHeader;

	@ValueMapValue(injectionStrategy=InjectionStrategy.OPTIONAL)
	@Via("resource")
	private String specHeader;

	@ValueMapValue(injectionStrategy=InjectionStrategy.OPTIONAL)
	@Via("resource")
	private boolean enablePrice;

	/** The cta list. */
	@Inject
	@Optional
	@Via("resource")
	private Resource ctaList;

	/** The list. */
	List<CTAPojo> list = new ArrayList<>();

	@Override
	public String getBodyStyleHeader() {
		return bodyStyleHeader;
	}

	public String getModelHeader() {
		return modelHeader;
	}

	public String getEngineHeader() {
		return engineHeader;
	}

	public String getSpecHeader() {
		return specHeader;
	}

	public boolean isEnablePrice() {
		return enablePrice;
	}

	/**
	 * Gets the cta list.
	 * @return the cta list
	 */
	public List<CTAPojo> getCtaList() {
		if (null != ctaList && ctaList.hasChildren()) {
			list = CtaUtils.createCtaList(ctaList, super.getHeaderCopy(), resourceResolver);
		}
		return list;
	}

	/**
	 * Gets the Nameplate details from site-wide setting.
	 */
	public String getNameplateDetails() {
		String jcrContentPath= currentPage.getPath();
		ValueMap properties = resourceResolver.getResource(jcrContentPath+"/jcr:content/nameplateDetails/item0").getValueMap();
		return properties.get("nameplate",String.class)+"_"+properties.get("modelYear",String.class);
	}
}
