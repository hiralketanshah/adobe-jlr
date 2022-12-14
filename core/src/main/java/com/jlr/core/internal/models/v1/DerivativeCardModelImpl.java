package com.jlr.core.internal.models.v1;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import javax.annotation.PostConstruct;
import javax.inject.Inject;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.api.resource.ValueMap;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.Optional;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

import com.jlr.core.constants.DerivativeConstants;
import com.jlr.core.models.DerivativeCardModel;
import com.jlr.core.pojos.CTAPojo;
import com.jlr.core.pojos.DerivativeEnginePojo;
import com.jlr.core.utils.CtaUtils;
import com.jlr.core.utils.DerivativeUtils;

/**
 * The Class DerivativeCardModelImpl.
 *
 * @author Adobe
 */
@Model(adaptables = Resource.class, adapters = { DerivativeCardModel.class })
public class DerivativeCardModelImpl extends GlobalModelImpl implements DerivativeCardModel {

    /** The Constant RESOURCE_TYPE. */
    public static final String RESOURCE_TYPE = "jlr/components/derivative/v1/derivativecard";

    /** The resource resolver. */
    @Inject
    private ResourceResolver resourceResolver;

    /** The caveat. */
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String caveat;

    /** The leftColumn. */
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String leftColumn;

    /** The override. */
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String rightColumn;

    /** The override. */
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private boolean override;

    /** The specsAtaGlanceHeading. */
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String specsAtaGlanceHeading;

    /** The price. */
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String price;

    /** The featureLabel. */
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String featureLabel;

    /** The cta list. */
    @Inject
    @Optional
    private Resource ctaList;

    /** The engine list. */
    @Inject
    @Optional
    private Resource engineList;

    private List<CTAPojo> list = new ArrayList<>();
    private List<String> engineNames = new ArrayList<>();
    private List<DerivativeEnginePojo> engineDataList = new ArrayList<>();
    private String priceConfigValue;

    @PostConstruct
    public void init() {

        if (null != engineList) {
            Iterator<Resource> engineListResources = engineList.listChildren();
            while (engineListResources.hasNext()) {
                Resource engine = engineListResources.next();
                ValueMap properties = engine.adaptTo(ValueMap.class);
                if (null != properties) {
                    String engineName = properties.get(DerivativeConstants.PN_ENGINE_NAME, String.class);
                    engineNames.add(engineName);
                    Map<String, String> dataMap = DerivativeUtils.getDataMap(engine);
                    engineDataList.add(new DerivativeEnginePojo(String.valueOf(dataMap.size()), dataMap));
                }

            }
        }

    }

    @Override
    public List<String> getEngineNames() {
        return new ArrayList<>(engineNames);
    }

    @Override
    public List<DerivativeEnginePojo> getEngineDataList() {
        return new ArrayList<>(engineDataList);
    }

    @Override
    public String getCaveat() {
        return caveat;
    }

    @Override
    public boolean getOverride() {
        return override;
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
        return new ArrayList<>(list);
    }

    @Override
    public String getLeftColumn() {
        return leftColumn;
    }

    @Override
    public String getRightColumn() {
        return rightColumn;
    }

    @Override
    public String getSpecsAtaGlanceHeading() {
        return specsAtaGlanceHeading;
    }

    @Override
    public String getFeatureLabel() {
        return featureLabel;
    }
}
