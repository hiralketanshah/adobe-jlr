package com.jlr.core.models;

import java.util.List;
import org.osgi.annotation.versioning.ConsumerType;
import com.jlr.core.pojos.FAQsPanel;


/**
 * Interface for FaqsPanel Model.
 *
 * @author Adobe
 */
@ConsumerType
public interface FaqsPanelModel {

    /**
     * Gets the faqs.
     *
     * @return the faqs
     */
    public List<FAQsPanel> getFaqs();
}
