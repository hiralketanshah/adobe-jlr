package com.jlr.core.internal.models.v1;

import java.util.ArrayList;
import java.util.List;

import javax.inject.Inject;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.Optional;
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
@Model(adaptables = Resource.class, adapters = {VehicleSpecsModel.class}, resourceType = VehicleSpecsModelImpl.RESOURCE_TYPE)
public class VehicleSpecsModelImpl extends GlobalModelImpl implements VehicleSpecsModel {


	/** The Constant RESOURCE_TYPE. */
	public static final String RESOURCE_TYPE = "jlr/components/vehiclespecs/v1/vehiclespecs";

	/** The resource resolver. */
	@Inject
	private ResourceResolver resourceResolver;

	@ValueMapValue(injectionStrategy=InjectionStrategy.OPTIONAL)
	private String bodyStyleHeader;

	@ValueMapValue(injectionStrategy=InjectionStrategy.OPTIONAL)
	private String modelHeader;

	@ValueMapValue(injectionStrategy=InjectionStrategy.OPTIONAL)
	private String engineHeader;

	@ValueMapValue(injectionStrategy=InjectionStrategy.OPTIONAL)
	private String specHeader;

	/** The cta list. */
	@Inject
	@Optional
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
}
