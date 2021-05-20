package com.jlr.core.models;

import java.util.ArrayList;
import java.util.List;
import org.apache.commons.lang.StringUtils;
import com.jlr.core.pojos.CTAPojo;

/**
 * The Interface CPlayerModel.
 *
 * @author Adobe
 */
public interface CPlayerModel {

    /**
     * Gets the cta list.
     *
     * @return the cta list
     */
    default List<CTAPojo> getCtaList() {
        return new ArrayList<>();
    }

    /**
     * Gets the nameplate Id.
     *
     * @return the nameplate Id
     */
    default String getNameplateId() {
        return StringUtils.EMPTY;
    }

    /**
     * Gets the model year.
     *
     * @return the model year
     */
    default String getModelyear() {
        return StringUtils.EMPTY;
    }

}

