package com.jlr.core.internal.services;

import org.osgi.service.component.annotations.Activate;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.ConfigurationPolicy;
import org.osgi.service.metatype.annotations.Designate;

import com.jlr.core.config.DictionaryConfig;
import com.jlr.core.services.Dictionary;

/**
 * Service Implementation class for Dictionary service
 * @author Adobe
 *
 */
@Component(service = Dictionary.class,configurationPolicy=ConfigurationPolicy.REQUIRE)
@Designate(ocd = DictionaryConfig.class)
public class DictionaryImpl implements Dictionary {

	private DictionaryConfig config;

	@Activate
	public void activate(DictionaryConfig config) {
		if(null !=config) {
			this.config = config;
		}
	}

	/**
	 * Return the path for default dictionary node
	 */
	@Override
	public String getPath() {
		return config.getPath();
	}

}
