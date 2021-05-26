package com.jlr.core.internal.models.v1;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.LinkedHashMap;
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

import com.jlr.core.models.DerivativeCardModel;
import com.jlr.core.pojos.CTAPojo;
import com.jlr.core.utils.CtaUtils;

/**
 * The Class DerivativeCardModelImpl.
 *
 * @author Adobe
 */
@Model(adaptables = Resource.class, adapters = {
        DerivativeCardModel.class }, resourceType = DerivativeCardModelImpl.RESOURCE_TYPE)
public class DerivativeCardModelImpl extends GlobalModelImpl implements DerivativeCardModel {

    /** The Constant RESOURCE_TYPE. */
    public static final String RESOURCE_TYPE = "jlr/components/article/v1/article";

    /** The resource resolver. */
    @Inject
    private ResourceResolver resourceResolver;

    /** The caveat. */
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String caveat;

    /** The cta list. */
    @Inject
    @Optional
    private Resource ctaList;

    /** The leftColumn. */
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String leftColumn;

    /** The override. */
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String rightColumn;

    /** The override. */
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String override;

    /** The specsAtaGlanceHeading. */
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String specsAtaGlanceHeading;

    /** The engine list. */
    @Inject
    @Optional
    private Resource engineList;

    List<CTAPojo> list = new ArrayList<>();
    List<String> engineNames = new ArrayList<>();
    Map<String, Map<String, String>> engineDataList = new LinkedHashMap<>();

    @PostConstruct
    public void init() {
        if (null != engineList) {
            Iterator<Resource> engineListResources = engineList.listChildren();
            while (engineListResources.hasNext()) {
                Resource engine = engineListResources.next();
                ValueMap properties = engine.adaptTo(ValueMap.class);
                if (null != properties) {
                    String engineName = properties.get("name", String.class);
                    engineNames.add(engineName);
                    Map<String, String> dataMap = getDataMap(engine);
                    engineDataList.put(engineName, dataMap);
                }

            }
        }

    }

    private Map<String, String> getDataMap(Resource engine) {
        Map<String, String> mapOfData = new LinkedHashMap<>();

        Resource dataListResource = engine.getChild("dataList");
        if (null != dataListResource) {
            Iterator<Resource> data = dataListResource.listChildren();
            while (data.hasNext()) {
                Resource dataResource = data.next();
                ValueMap properties = dataResource.adaptTo(ValueMap.class);
                mapOfData.put(properties.get("heading", String.class), properties.get("data", String.class));
            }
        }

        return mapOfData;

    }

    @Override
    public List<String> getEngineNames() {
        return engineNames;
    }

    @Override
    public Map<String, Map<String, String>> getEngineDataList() {
        return engineDataList;
    }

    @Override
    public String getCaveat() {
        return caveat;
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

    @Override
    public String getLeftColumn() {
        return leftColumn;
    }

    @Override
    public String getRightColumn() {
        return rightColumn;
    }

    @Override
    public String getOverride() {
        return override;
    }

    @Override
    public String getSpecsAtaGlanceHeading() {
        return specsAtaGlanceHeading;
    }
}
