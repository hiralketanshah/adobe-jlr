package com.jlr.core.internal.models.v1;

import com.jlr.core.models.PriceConfigModel;
import com.jlr.core.pojos.PriceConfigPojo;
import com.jlr.core.pojos.StatePojo;
import io.wcm.testing.mock.aem.junit5.AemContext;
import io.wcm.testing.mock.aem.junit5.AemContextExtension;
import org.apache.sling.api.resource.Resource;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

/**
 * The Class PriceConfigModelImplTest.
 *
 */
@ExtendWith(AemContextExtension.class)
public class PriceConfigModelImplTest extends GlobalModelImplTest {

    private PriceConfigModel priceConfigModel;

    /**
     * Sets the up.
     *
     * @param context the new up
     * @throws Exception the exception
     */
    @BeforeEach
    public void setUp(AemContext context) throws Exception {
        context.load().json("/content/jlr/priceconfig/priceconfig.json", "/content/jlr/priceconfig.html");
        Resource resource = context.resourceResolver().getResource("/content/jlr/priceconfig.html");
        priceConfigModel = resource.adaptTo(PriceConfigModelImpl.class);
    }

    @Test
    void testNameplates() {
        List<PriceConfigPojo> listNameplate = priceConfigModel.getNameplates();
        assertEquals(2, listNameplate.size());
    }
}
