package com.jlr.core.internal.models.v1;

import static org.junit.jupiter.api.Assertions.assertEquals;
import java.util.List;
import org.apache.sling.api.resource.Resource;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import com.jlr.core.pojos.CTAPojo;
import io.wcm.testing.mock.aem.junit5.AemContext;
import io.wcm.testing.mock.aem.junit5.AemContextExtension;

@ExtendWith(AemContextExtension.class)
public class TableModelImplTest extends GlobalModelImplTest {

    /** The table model. */
    TableModelImpl tableModel;

    /** The resource. */
    private Resource resource;

    /**
     * Sets the up.
     *
     * @param context the new up
     * @throws Exception the exception
     */
    @BeforeEach
    void setUp(AemContext context) throws Exception {
        context.load().json("/content/jlr/table/table.json", "/content/jlr/table.html");
        resource = context.resourceResolver().getResource("/content/jlr/table.html");
        tableModel = resource.adaptTo(TableModelImpl.class);
    }

    /**
     * Test get links.
     */
    @Test
    void testGetLinks() {
        List<CTAPojo> ctaList = tableModel.getCtaList();
        assertEquals(1, ctaList.size());
        ctaList.forEach(item -> {
            assertEquals("VIEW FULL SPECIFICATON", item.getText());
            assertEquals("/content/jlr/au", item.getLink());
            assertEquals("_self", item.getTarget());
            assertEquals("primary", item.getLinkType());
        });

    }

    @Test
    public void testGetTableHtml() {
        final String expected =
                        "<tr> <th scope=' col '></th> <th scope=' col '>Bold Header<span>Sub-heading</span></th> <th scope=' col '>Bold Header<span>Sub-heading</span></th> <th scope=' col '>Bold Header<span>Sub-heading</span></th> <th scope=' col '>Bold Header<span>Sub-heading</span></th> <th scope=' col '>Bold Header<span>Sub-heading</span></th> <th scope=' col '>Bold Header<span>Sub-heading</span></th> <th scope=' col '>Bold Header<span>Sub-heading</span></th> </tr> <tr> <th scope=' row '>Bold Header<span>Sub-heading</span></th> <td>7 hours</td> <td>7 hours</td> <td>7 hours</td> <td>7 hours</td> <td>7 hours</td> <td>7 hours</td> <td>7 hours</td> </tr> <tr> <th scope=' row '>Bold Header<span>Sub-heading</span></th> <td>7 hours</td> <td>7 hours</td> <td>7 hours</td> <td>7 hours</td> <td>7 hours</td> <td>7 hours</td> <td>7 hours</td> </tr> <tr> <th scope=' row '>Bold Header<span>Sub-heading</span></th> <td>7 hours</td> <td>7 hours</td> <td>7 hours</td> <td>7 hours</td> <td>7 hours</td> <td>7 hours</td> <td>7 hours</td> </tr> <tr> <th scope='row'>Bold Header<span>Sub-heading</span></th> <td>7 hours</td> <td>7 hours</td> <td>7 hours</td> <td>7 hours</td> <td>7 hours</td> <td>7 hours</td> <td>7 hours</td> </tr> <tr> <th scope=' row '>Bold Header<span>Sub-heading</span></th> <td>7 hours</td> <td>7 hours</td> <td>7 hours</td> <td>7 hours</td> <td>7 hours</td> <td>7 hours</td> <td>7 hours</td> </tr> ";
        String actual = tableModel.getTableHtml();
        assertEquals(expected, actual);
    }

    @Test
    public void testGetCaption() {
        final String expected = "engine specifications table";
        String actual = tableModel.getCaption();
        assertEquals(expected, actual);
    }

    @Test
    public void testGetCtaPosition() {
        final String expected = "above";
        String actual = tableModel.getCtaPosition();
        assertEquals(expected, actual);
    }

}
