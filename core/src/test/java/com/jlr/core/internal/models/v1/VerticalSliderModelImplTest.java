package com.jlr.core.internal.models.v1;

import static org.junit.jupiter.api.Assertions.assertEquals;
import java.util.List;
import org.apache.sling.api.resource.Resource;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.extension.ExtendWith;
import com.jlr.core.models.VerticalSliderModel;
import io.wcm.testing.mock.aem.junit5.AemContext;
import io.wcm.testing.mock.aem.junit5.AemContextExtension;

@ExtendWith(AemContextExtension.class)
class VerticalSliderModelImplTest extends GlobalModelImplTest {

    private VerticalSliderModel model;

    @BeforeEach
    void setUp(AemContext context) throws Exception {
        context.load().json("/content/jlr/verticalslider/verticalslider.json", "/content/jlr/verticalslider.html");
        Resource resource = context.resourceResolver().getResource("/content/jlr/verticalslider.html");
        model = resource.adaptTo(VerticalSliderModelImpl.class);
    }


    public void testGetDelay() {
        final Long expected = 5L;
        Long actual = model.getDelay();
        assertEquals(expected, actual);
    }


    public void testGetAutopauseDisabled() {
        final Boolean expected = true;
        Boolean actual = model.getAutopauseDisabled();
        assertEquals(expected, actual);
    }


    public void testGetPipicon() {
        final String expected = "true";
        String actual = model.getPipIcon();
        assertEquals(expected, actual);
    }

    void testVerticleSliderItemList() {
        List<VerticalSliderItem> list = model.getVerticalSliderItems();
        assertEquals(1, list.size());
        list.forEach(vsItem -> {
            assertEquals("<p>hello</p>", vsItem.getHeaderCopy());
            assertEquals("<p>Hello copy2</p>", vsItem.getCopy());
            assertEquals("/content/dam/wknd/en/activities/skiing/skitouring.jpg", vsItem.getFileReference());
            vsItem.getCtaList().forEach(item -> {
                assertEquals("Click here", item.getText());
                assertEquals("/content/landrover/global/row/language-masters/aus/en", item.getLink());
                assertEquals("_blank", item.getTarget());
                assertEquals("primary", item.getLinkType());
                assertEquals("icon-download", item.getIcon());
            });
        });


    }

}
