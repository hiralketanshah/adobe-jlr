package com.jlr.core.internal.models.v1;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import javax.annotation.PostConstruct;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ValueMap;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.Optional;
import org.apache.sling.models.annotations.injectorspecific.ChildResource;

import com.jlr.core.constants.CommonConstants;
import com.jlr.core.models.FaqsPanelModel;
import com.jlr.core.pojos.FAQsPanel;

/**
 * FaqsPanelModelImpl for FAQs question answers panel
 * @author Adobe
 *
 */
@Model(adaptables = Resource.class, adapters = { FaqsPanelModel.class }, resourceType = FaqsPanelModelImpl.RESOURCE_TYPE)
public class FaqsPanelModelImpl implements FaqsPanelModel{

    /** The Constant RESOURCE_TYPE. */
    public static final String RESOURCE_TYPE = "jlr/components/faqs/v1/faqspanel";
	
    @Optional
	@ChildResource
	private Resource faqsList;

	List<FAQsPanel> faqs = new ArrayList<>();
	
	@PostConstruct
	public void init() {
		
		if(null != faqsList) {
			Iterator<Resource> childResItr = faqsList.listChildren();
			while (childResItr.hasNext()) {
				Resource childRes = childResItr.next();
				ValueMap faqsPropMap = childRes.adaptTo(ValueMap.class);
				if(null != faqsPropMap) {
					String question = faqsPropMap.get(CommonConstants.PN_TITLE, String.class);
					String answer = faqsPropMap.get(CommonConstants.PN_DESCRIPTION, String.class);
					String answerCaveat = faqsPropMap.get(CommonConstants.PN_FAQ_ANSWER_CAVEAT, String.class);
					FAQsPanel faq = new FAQsPanel(question, answer, answerCaveat);		
					faqs.add(faq);
				}
			}
		}
	}

	@Override
	public List<FAQsPanel> getFaqs() {
		return faqs;
	}
	
}
