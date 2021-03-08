package com.jlr.core.models;

import java.util.ArrayList;
import java.util.List;

import com.jlr.core.pojos.CTAPojo;

public interface HeroTitleBannerModel {
	
	default List<CTAPojo> getHeroCta() {
        return new ArrayList<>();
    }

}
